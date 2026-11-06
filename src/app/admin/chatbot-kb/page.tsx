'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { Bot, Plus, Trash2, Search, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

interface ChatbotKBItem {
  id: string;
  category: 'Admissions' | 'Campuses' | 'Courses' | 'Hostel' | 'Transport' | 'Results' | 'General';
  question: string;
  keywords: string[];
  answerEn: string;
  answerHi: string;
}

export default function AdminKBPage() {
  const router = useRouter();
  const [items, setItems] = useState<ChatbotKBItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newCategory, setNewCategory] = useState<'Admissions' | 'Campuses' | 'Courses' | 'Hostel' | 'Transport' | 'Results' | 'General'>('Admissions');
  const [newKeywords, setNewKeywords] = useState('');
  const [newAnswerEn, setNewAnswerEn] = useState('');
  const [newAnswerHi, setNewAnswerHi] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchKB();
  }, []);

  const fetchKB = async () => {
    try {
      const res = await fetch('/api/admin/kb');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.items) {
        setItems(data.items);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch('/api/admin/kb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newCategory,
          question: newQuestion,
          keywords: newKeywords.split(',').map(s => s.trim()).filter(Boolean),
          answerEn: newAnswerEn,
          answerHi: newAnswerHi
        })
      });

      if (res.ok) {
        setShowAddModal(false);
        setNewQuestion('');
        setNewKeywords('');
        setNewAnswerEn('');
        setNewAnswerHi('');
        fetchKB();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ item?')) return;

    try {
      const res = await fetch(`/api/admin/kb?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setItems(prev => prev.filter(i => i.id !== id));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold font-serif text-navy-950">
              AI Chatbot Knowledge Base
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage the verified answers that train our virtual admission counselor in English and Hindi.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 hover:bg-navy-950 text-white rounded-xl text-xs font-bold transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New FAQ Item</span>
          </button>
        </div>

        {/* KB Items List */}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-100 text-gold-900 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm text-navy-950">{item.question}</h4>
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition"
                  title="Delete Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1 text-[10px]">
                <span className="font-bold text-slate-400">Trigger Keywords:</span>
                {item.keywords.map((kw, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                    {kw}
                  </span>
                ))}
              </div>

              {/* Answers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-navy-900 block mb-1">English Answer:</span>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{item.answerEn}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-navy-900 block mb-1">Hindi Answer:</span>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{item.answerHi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
              <div className="bg-navy-950 text-white p-6">
                <h3 className="font-bold text-lg font-serif">Add New FAQ to Knowledge Base</h3>
                <p className="text-xs text-slate-300">Teach the AI Admission Assistant how to respond.</p>
              </div>

              <form onSubmit={handleAdd} className="p-6 space-y-4 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl bg-white"
                    >
                      <option value="Admissions">Admissions</option>
                      <option value="Campuses">Campuses</option>
                      <option value="Courses">Courses</option>
                      <option value="Hostel">Hostel</option>
                      <option value="Transport">Transport</option>
                      <option value="Results">Results</option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Trigger Keywords (comma separated)</label>
                    <input
                      type="text"
                      placeholder="e.g. library, books, reading hall"
                      value={newKeywords}
                      onChange={(e) => setNewKeywords(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Question / Intent</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. What are the library timings and facilities?"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">English Answer</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter English response..."
                    value={newAnswerEn}
                    onChange={(e) => setNewAnswerEn(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hindi Answer</label>
                  <textarea
                    rows={3}
                    placeholder="Enter Hindi/Hinglish response..."
                    value={newAnswerHi}
                    onChange={(e) => setNewAnswerHi(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-navy-900 text-white text-xs font-bold rounded-xl"
                  >
                    {saving ? 'Saving...' : 'Add to Knowledge Base'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

