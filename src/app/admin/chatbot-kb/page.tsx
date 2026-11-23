'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { Bot, Plus, Trash2, Search, CheckCircle2, AlertCircle, BookOpen, X, Sparkles, Filter } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

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
  const { showError, showSuccess } = useToast();
  const [items, setItems] = useState<ChatbotKBItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      showError('Failed to load knowledge base items.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newQuestion.trim()) {
      showError('Please enter a question for the knowledge base.', 'Question Required');
      return;
    }
    if (!newAnswerEn.trim()) {
      showError('Please enter the English answer.', 'Answer Required');
      return;
    }

    setSaving(true);

    try {
      const res = await fetch('/api/admin/kb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newCategory,
          question: newQuestion.trim(),
          keywords: newKeywords.split(',').map(s => s.trim()).filter(Boolean),
          answerEn: newAnswerEn.trim(),
          answerHi: newAnswerHi.trim() || newAnswerEn.trim()
        })
      });

      if (res.ok) {
        setShowAddModal(false);
        setNewQuestion('');
        setNewKeywords('');
        setNewAnswerEn('');
        setNewAnswerHi('');
        fetchKB();
        showSuccess('New knowledge base item added successfully!', 'FAQ Item Added');
      } else {
        showError('Failed to add knowledge base item.', 'Save Error');
      }
    } catch (e: any) {
      console.error(e);
      showError(e.message || 'Error saving knowledge base entry.', 'Save Error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, question: string) => {
    if (!confirm(`Are you sure you want to delete this FAQ: "${question}"?`)) return;

    try {
      const res = await fetch(`/api/admin/kb?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setItems(prev => prev.filter(i => i.id !== id));
        showSuccess('Knowledge base entry deleted successfully.', 'Item Removed');
      } else {
        showError('Failed to delete item.', 'Delete Error');
      }
    } catch (e: any) {
      console.error(e);
      showError(e.message || 'Error removing knowledge base item.', 'Delete Error');
    }
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answerEn.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <Bot className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold font-serif text-slate-900">
                AI Chatbot Knowledge Base
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Configure verified answers in English and Hindi that train our AI virtual admission counselor.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add FAQ Entry</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search knowledge base by question, keyword or topic..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-700 font-medium"
            >
              <option value="all">All Categories</option>
              <option value="Admissions">Admissions</option>
              <option value="Campuses">Campuses</option>
              <option value="Courses">Courses &amp; Coaching</option>
              <option value="Hostel">Hostel &amp; Residential</option>
              <option value="Transport">Bus Transportation</option>
              <option value="General">General / Helplines</option>
            </select>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> verified entries
          </div>
        </div>

        {/* KB Items List */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3.5 hover:border-blue-400 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-0.5 rounded-full border border-blue-100">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base font-serif text-slate-900">{item.question}</h4>
                </div>

                <button
                  onClick={() => handleDelete(item.id, item.question)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                  title="Delete Entry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="font-bold text-slate-400">Trigger Keywords:</span>
                {item.keywords.map((kw, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-mono text-[10px] border border-slate-200">
                    {kw}
                  </span>
                ))}
              </div>

              {/* Answers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-800 block mb-1">English Response:</span>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{item.answerEn}</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-800 block mb-1">Hindi / Hinglish Response:</span>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{item.answerHi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-bold font-serif text-slate-900 text-lg">Add Knowledge Base Item</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAdd} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-medium"
                  >
                    <option value="Admissions">Admissions</option>
                    <option value="Campuses">Campuses</option>
                    <option value="Courses">Courses &amp; Coaching</option>
                    <option value="Hostel">Hostel Facilities</option>
                    <option value="Transport">Bus Transportation</option>
                    <option value="General">General / Helpline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Frequently Asked Question *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. What are the boarding rules and daily schedule in the hostel?"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Trigger Keywords (Comma separated) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. hostel, routine, timetable, schedule, night study"
                    value={newKeywords}
                    onChange={(e) => setNewKeywords(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Verified English Answer *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter the verified answer that the AI chatbot should state in English..."
                    value={newAnswerEn}
                    onChange={(e) => setNewAnswerEn(e.target.value)}
                    className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Verified Hindi / Hinglish Answer
                  </label>
                  <textarea
                    rows={3}
                    placeholder="वर्चुअल एडमिशन असिस्टेंट द्वारा दिया जाने वाला हिंदी उत्तर..."
                    value={newAnswerHi}
                    onChange={(e) => setNewAnswerHi(e.target.value)}
                    className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
                  >
                    {saving ? 'Adding...' : 'Add FAQ'}
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
