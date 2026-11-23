'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { 
  Bot, 
  Plus, 
  Trash2, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  X, 
  Sparkles, 
  Filter, 
  Edit3, 
  Languages, 
  Send, 
  RefreshCw, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
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
  const [langView, setLangView] = useState<'both' | 'en' | 'hi'>('both');

  // Add Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newCategory, setNewCategory] = useState<'Admissions' | 'Campuses' | 'Courses' | 'Hostel' | 'Transport' | 'Results' | 'General'>('Admissions');
  const [newKeywords, setNewKeywords] = useState('');
  const [newAnswerEn, setNewAnswerEn] = useState('');
  const [newAnswerHi, setNewAnswerHi] = useState('');
  const [saving, setSaving] = useState(false);

  // Edit Modal State
  const [editingItem, setEditingItem] = useState<ChatbotKBItem | null>(null);
  const [editCategory, setEditCategory] = useState<'Admissions' | 'Campuses' | 'Courses' | 'Hostel' | 'Transport' | 'Results' | 'General'>('Admissions');
  const [editQuestion, setEditQuestion] = useState('');
  const [editKeywords, setEditKeywords] = useState('');
  const [editAnswerEn, setEditAnswerEn] = useState('');
  const [editAnswerHi, setEditAnswerHi] = useState('');
  const [updating, setUpdating] = useState(false);

  // Live Simulation State
  const [simQuery, setSimQuery] = useState('');
  const [simLang, setSimLang] = useState<'en' | 'hi'>('hi');
  const [simLoading, setSimLoading] = useState(false);
  const [simResult, setSimResult] = useState<{ reply?: string; whatsappUrl?: string; actions?: string[] } | null>(null);

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
        showSuccess('New bilingual knowledge base item added successfully!', 'FAQ Item Added');
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

  const startEdit = (item: ChatbotKBItem) => {
    setEditingItem(item);
    setEditCategory(item.category);
    setEditQuestion(item.question);
    setEditKeywords(item.keywords.join(', '));
    setEditAnswerEn(item.answerEn);
    setEditAnswerHi(item.answerHi);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (!editQuestion.trim()) {
      showError('Please enter the question.', 'Question Required');
      return;
    }
    if (!editAnswerEn.trim()) {
      showError('Please enter the English answer.', 'Answer Required');
      return;
    }

    setUpdating(true);

    try {
      const res = await fetch('/api/admin/kb', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: editingItem.id,
          category: editCategory,
          question: editQuestion.trim(),
          keywords: editKeywords.split(',').map(s => s.trim()).filter(Boolean),
          answerEn: editAnswerEn.trim(),
          answerHi: editAnswerHi.trim() || editAnswerEn.trim()
        })
      });

      if (res.ok) {
        setEditingItem(null);
        fetchKB();
        showSuccess('Knowledge base entry updated successfully with English & Hindi responses!', 'Updated');
      } else {
        showError('Failed to update knowledge base item.', 'Update Error');
      }
    } catch (e: any) {
      console.error(e);
      showError(e.message || 'Error updating entry.', 'Update Error');
    } finally {
      setUpdating(false);
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

  const handleSimulate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!simQuery.trim()) return;

    setSimLoading(true);
    setSimResult(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: simQuery.trim(), preferredLang: simLang })
      });
      const data = await res.json();
      setSimResult({
        reply: data.reply,
        whatsappUrl: data.whatsappUrl,
        actions: data.suggestedActions
      });
    } catch (e: any) {
      setSimResult({ reply: 'Error testing simulation.' });
    } finally {
      setSimLoading(false);
    }
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answerEn.toLowerCase().includes(q) ||
        item.answerHi.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <Bot className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold font-serif text-slate-900">
                AI Chatbot Knowledge Base (Bilingual Management)
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manage verified institutional questions and responses in both <strong>English</strong> and <strong>हिन्दी (Hindi)</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add FAQ Entry</span>
            </button>
          </div>
        </div>

        {/* Live Bilingual Testing Console (Simulator) */}
        <div className="bg-gradient-to-r from-navy-950 via-[#0C1F4D] to-navy-950 text-white p-5 rounded-3xl shadow-lg border border-blue-500/30">
          <div className="flex items-center justify-between gap-4 mb-3 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <h3 className="font-bold text-sm font-serif">Live Chatbot Simulator (Test Hindi &amp; English Answers)</h3>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-300">Test Language:</span>
              <div className="inline-flex rounded-lg bg-white/10 p-0.5 border border-white/20">
                <button
                  type="button"
                  onClick={() => setSimLang('en')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition ${
                    simLang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setSimLang('hi')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition ${
                    simLang === 'hi' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  हिन्दी (Hindi)
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSimulate} className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder={simLang === 'hi' ? "परीक्षण प्रश्न लिखें (जैसे: हॉस्टल में क्या सुविधाएं हैं? या चांदवड़ कैंपस कहाँ है?)" : "Enter test question (e.g., Where is Chandwad campus? or Hostel facilities)"}
              value={simQuery}
              onChange={(e) => setSimQuery(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={simLoading || !simQuery.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0"
            >
              {simLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              <span>Test Response</span>
            </button>
          </form>

          {/* Quick sample test triggers */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-300">
            <span className="font-semibold text-slate-400">Sample Questions:</span>
            {simLang === 'hi' ? (
              <>
                <button type="button" onClick={() => setSimQuery('हॉस्टल की सुविधा क्या है?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">हॉस्टल की सुविधा</button>
                <button type="button" onClick={() => setSimQuery('कैंपस कहाँ स्थित हैं?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">कैंपस स्थान</button>
                <button type="button" onClick={() => setSimQuery('JEE और NEET की तैयारी कैसे होती है?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">JEE/NEET कोचिंग</button>
                <button type="button" onClick={() => setSimQuery('एडमिशन कैसे लें?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">एडमिशन प्रक्रिया</button>
              </>
            ) : (
              <>
                <button type="button" onClick={() => setSimQuery('Are hostel facilities available?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">Hostel Facilities</button>
                <button type="button" onClick={() => setSimQuery('Where are your campuses located?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">Campus Locations</button>
                <button type="button" onClick={() => setSimQuery('What is the admission procedure?')} className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[10px]">Admission Process</button>
              </>
            )}
          </div>

          {/* Simulation Output Card */}
          {simResult && (
            <div className="mt-3 p-3.5 rounded-2xl bg-white/10 border border-white/20 text-xs space-y-2 animate-fade-in">
              <div className="flex items-center justify-between text-[11px] font-bold text-blue-300">
                <span>Bot Reply Simulation:</span>
                <span className="px-2 py-0.5 bg-white/10 rounded uppercase text-[10px]">{simLang === 'hi' ? 'Hindi Mode' : 'English Mode'}</span>
              </div>
              <p className="whitespace-pre-line text-slate-100 leading-relaxed font-sans">{simResult.reply}</p>
              {simResult.actions && simResult.actions.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1 border-t border-white/10">
                  <span className="text-[10px] text-slate-400">Actions:</span>
                  {simResult.actions.map((act, i) => (
                    <span key={i} className="px-2 py-0.5 bg-blue-500/20 rounded text-[10px] text-blue-200">{act}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search knowledge base by question, keyword or Hindi text..."
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

            {/* Language View Selector */}
            <div className="inline-flex rounded-xl bg-slate-100 p-0.5 border border-slate-200">
              <button
                type="button"
                onClick={() => setLangView('both')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  langView === 'both' ? 'bg-white text-navy-950 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Both (EN + HI)
              </button>
              <button
                type="button"
                onClick={() => setLangView('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  langView === 'en' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English View
              </button>
              <button
                type="button"
                onClick={() => setLangView('hi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  langView === 'hi' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिन्दी View
              </button>
            </div>
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

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => startEdit(item)}
                    className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    title="Edit FAQ & Hindi Answer"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.question)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                    title="Delete Entry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
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

              {/* Answers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                {(langView === 'both' || langView === 'en') && (
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-blue-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          <span>English Response:</span>
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded">EN</span>
                      </div>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed font-sans">{item.answerEn}</p>
                    </div>
                  </div>
                )}

                {(langView === 'both' || langView === 'hi') && (
                  <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          <span>हिन्दी उत्तर (Hindi Response):</span>
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">HI</span>
                      </div>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed font-sans">{item.answerHi}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold font-serif text-slate-900 text-lg">Edit Bilingual FAQ Item</h3>
                </div>
                <button
                  onClick={() => setEditingItem(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value as any)}
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
                    value={editQuestion}
                    onChange={(e) => setEditQuestion(e.target.value)}
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
                    value={editKeywords}
                    onChange={(e) => setEditKeywords(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-blue-900 uppercase">
                      English Response *
                    </label>
                    <span className="text-[10px] text-blue-700 font-bold bg-blue-100 px-1.5 py-0.2 rounded">English</span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    value={editAnswerEn}
                    onChange={(e) => setEditAnswerEn(e.target.value)}
                    className="w-full p-3 text-xs border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-blue-50/20"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-emerald-900 uppercase">
                      हिन्दी उत्तर (Hindi Response) *
                    </label>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded">हिन्दी</span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    value={editAnswerHi}
                    onChange={(e) => setEditAnswerHi(e.target.value)}
                    className="w-full p-3 text-xs border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-emerald-50/20"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={updating}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
                  >
                    {updating ? 'Saving Changes...' : 'Save Updates'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-bold font-serif text-slate-900 text-lg">Add New Bilingual FAQ</h3>
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
                    placeholder="e.g. hostel, routine, timetable, schedule, night study, हॉस्टल, समय"
                    value={newKeywords}
                    onChange={(e) => setNewKeywords(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-blue-900 uppercase">
                      English Response *
                    </label>
                    <span className="text-[10px] text-blue-700 font-bold bg-blue-100 px-1.5 py-0.2 rounded">English</span>
                  </div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter the verified response that the assistant will provide in English..."
                    value={newAnswerEn}
                    onChange={(e) => setNewAnswerEn(e.target.value)}
                    className="w-full p-3 text-xs border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-blue-50/20"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-emerald-900 uppercase">
                      हिन्दी उत्तर (Hindi Response) *
                    </label>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded">हिन्दी</span>
                  </div>
                  <textarea
                    rows={3}
                    required
                    placeholder="वर्चुअल एडमिशन असिस्टेंट द्वारा दिया जाने वाला प्रमाणित हिंदी उत्तर..."
                    value={newAnswerHi}
                    onChange={(e) => setNewAnswerHi(e.target.value)}
                    className="w-full p-3 text-xs border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-emerald-50/20"
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
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
                  >
                    {saving ? 'Adding FAQ...' : 'Add Bilingual FAQ'}
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
