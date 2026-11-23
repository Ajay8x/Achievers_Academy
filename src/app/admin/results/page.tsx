'use client';

import React, { useEffect, useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { useToast } from '@/context/ToastContext';
import { 
  Award, 
  Plus, 
  Trash2, 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  X, 
  Building2, 
  Calendar,
  Sparkles,
  Trophy,
  GraduationCap
} from 'lucide-react';

interface ResultItem {
  id: string;
  exam: string;
  studentName: string;
  score: string;
  rankOrPercentile?: string;
  stream: string;
  campus: string;
  year: string;
  image?: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  campus: string;
  quote: string;
  scoreOrYear?: string;
  rating: number;
  featured: boolean;
}

export default function AdminResultsPage() {
  const { showSuccess, showError } = useToast();
  const [activeTab, setActiveTab] = useState<'results' | 'testimonials'>('results');
  const [results, setResults] = useState<ResultItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Modals state
  const [showAddResult, setShowAddResult] = useState(false);
  const [showAddTestimonial, setShowAddTestimonial] = useState(false);

  // Result Form
  const [exam, setExam] = useState('JEE Main & Advanced');
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [rankOrPercentile, setRankOrPercentile] = useState('');
  const [stream, setStream] = useState('Engineering');
  const [campus, setCampus] = useState('Achievers IIT & Medical (Chandwad)');
  const [year, setYear] = useState('2024-25');

  // Testimonial Form
  const [testName, setTestName] = useState('');
  const [testRole, setTestRole] = useState('Parent of CBSE Student');
  const [testCampus, setTestCampus] = useState('Achievers World School (Manmad)');
  const [testQuote, setTestQuote] = useState('');
  const [testBatch, setTestBatch] = useState('Batch 2024-25');
  const [testRating, setTestRating] = useState(5);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/results');
      if (res.ok) {
        const data = await res.json();
        setResults(data.results || []);
        setTestimonials(data.testimonials || []);
      }
    } catch (e: any) {
      console.error(e);
      showError('Failed to load results and testimonials.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddResult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !score.trim()) {
      showError('Please enter Student/Group Name and Score.', 'Validation Error');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'result',
          exam,
          studentName: studentName.trim(),
          score: score.trim(),
          rankOrPercentile: rankOrPercentile.trim(),
          stream,
          campus,
          year
        })
      });

      if (res.ok) {
        setShowAddResult(false);
        setStudentName('');
        setScore('');
        setRankOrPercentile('');
        fetchData();
        showSuccess('New academic result added to Hall of Fame!', 'Result Added');
      } else {
        showError('Failed to save academic result.');
      }
    } catch (e: any) {
      showError(e.message || 'Error saving result.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteResult = async (id: string, name: string) => {
    if (!confirm(`Delete result highlight for "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/results?id=${id}&type=result`, { method: 'DELETE' });
      if (res.ok) {
        setResults(prev => prev.filter(r => r.id !== id));
        showSuccess('Academic result removed.', 'Deleted');
      } else {
        showError('Failed to delete result.');
      }
    } catch (e: any) {
      showError(e.message || 'Error deleting result.');
    }
  };

  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !testQuote.trim()) {
      showError('Please enter Name and Quote.', 'Validation Error');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'testimonial',
          name: testName.trim(),
          role: testRole,
          campus: testCampus,
          quote: testQuote.trim(),
          scoreOrYear: testBatch,
          rating: Number(testRating)
        })
      });

      if (res.ok) {
        setShowAddTestimonial(false);
        setTestName('');
        setTestQuote('');
        fetchData();
        showSuccess('New testimonial published successfully!', 'Testimonial Published');
      } else {
        showError('Failed to save testimonial.');
      }
    } catch (e: any) {
      showError(e.message || 'Error saving testimonial.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTestimonial = async (id: string, name: string) => {
    if (!confirm(`Delete testimonial from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/results?id=${id}&type=testimonial`, { method: 'DELETE' });
      if (res.ok) {
        setTestimonials(prev => prev.filter(t => t.id !== id));
        showSuccess('Testimonial removed.', 'Deleted');
      } else {
        showError('Failed to delete testimonial.');
      }
    } catch (e: any) {
      showError(e.message || 'Error deleting testimonial.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                <Trophy className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold font-serif text-slate-900">
                Results, Toppers &amp; Testimonials
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manage academic exam highlights (Board 10th/12th, JEE, NEET, MHT-CET) and student/parent testimonials.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === 'results' ? (
              <button
                onClick={() => setShowAddResult(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Result / Topper</span>
              </button>
            ) : (
              <button
                onClick={() => setShowAddTestimonial(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Testimonial</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 border-b border-slate-200 mb-6">
          <button
            onClick={() => setActiveTab('results')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition ${
              activeTab === 'results'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Academic Results &amp; Toppers ({results.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition ${
              activeTab === 'testimonials'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Parent &amp; Student Testimonials ({testimonials.length})</span>
          </button>
        </div>

        {/* Tab 1: Results Cards */}
        {activeTab === 'results' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:border-blue-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {res.exam}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{res.year}</span>
                  </div>

                  <h3 className="text-base font-bold font-serif text-slate-900 mt-2">{res.studentName}</h3>
                  <div className="text-2xl font-bold font-serif text-blue-600 mt-1">{res.score}</div>
                  {res.rankOrPercentile && (
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">{res.rankOrPercentile}</div>
                  )}

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{res.campus}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Stream: {res.stream}</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => handleDeleteResult(res.id, res.studentName)}
                    className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Testimonials Cards */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:border-emerald-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(test.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">{test.scoreOrYear}</span>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{test.quote}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900">{test.name}</h4>
                    <p className="text-[11px] text-slate-500">{test.role}</p>
                    <p className="text-[10px] text-blue-600 mt-0.5">{test.campus}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => handleDeleteTestimonial(test.id, test.name)}
                    className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Result Modal */}
        {showAddResult && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-bold font-serif text-slate-900 text-lg">Add Academic Result / Topper</h3>
                <button
                  onClick={() => setShowAddResult(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddResult} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Exam Category</label>
                  <select
                    value={exam}
                    onChange={(e) => setExam(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-medium"
                  >
                    <option value="JEE Main & Advanced">JEE Main &amp; Advanced</option>
                    <option value="NEET Medical Entrance">NEET Medical Entrance</option>
                    <option value="MHT-CET Engineering & Pharmacy">MHT-CET Engineering &amp; Pharmacy</option>
                    <option value="CBSE Class 10 Board">CBSE Class 10 Board</option>
                    <option value="CBSE Class 12 Science">CBSE Class 12 Science</option>
                    <option value="State Board HSC Science">State Board HSC Science</option>
                    <option value="State Board SSC Class 10">State Board SSC Class 10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student / Group Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Atharva Kulkarni"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Score / Percentage *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 99.4% or 99.6 Percentile"
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rank / Distinction</label>
                    <input
                      type="text"
                      placeholder="e.g. AIR 1240 or District Topper"
                      value={rankOrPercentile}
                      onChange={(e) => setRankOrPercentile(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Campus</label>
                  <select
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-medium"
                  >
                    <option value="Achievers IIT & Medical (Chandwad)">Achievers IIT &amp; Medical (Chandwad)</option>
                    <option value="Achievers World School (Manmad)">Achievers World School (Manmad)</option>
                    <option value="Wisdom International School (Niphad)">Wisdom International School (Niphad)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Stream</label>
                    <select
                      value={stream}
                      onChange={(e) => setStream(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Medical">Medical</option>
                      <option value="Schooling">Schooling</option>
                      <option value="Pharmacy">Pharmacy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Academic Year</label>
                    <input
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddResult(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Add Result'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add Testimonial Modal */}
        {showAddTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-bold font-serif text-slate-900 text-lg">Add Testimonial</h3>
                <button
                  onClick={() => setShowAddTestimonial(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddTestimonial} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Kulkarni"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Role / Relation</label>
                    <input
                      type="text"
                      placeholder="e.g. Parent of IIT Qualifier"
                      value={testRole}
                      onChange={(e) => setTestRole(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Batch / Score</label>
                    <input
                      type="text"
                      placeholder="e.g. Batch 2024"
                      value={testBatch}
                      onChange={(e) => setTestBatch(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Campus</label>
                  <select
                    value={testCampus}
                    onChange={(e) => setTestCampus(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-white font-medium"
                  >
                    <option value="Achievers World School (Manmad)">Achievers World School (Manmad)</option>
                    <option value="Achievers IIT & Medical (Chandwad)">Achievers IIT &amp; Medical (Chandwad)</option>
                    <option value="Wisdom International School (Niphad)">Wisdom International School (Niphad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Testimonial Quote *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter what student or parent shared about Achievers Academy..."
                    value={testQuote}
                    onChange={(e) => setTestQuote(e.target.value)}
                    className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddTestimonial(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
                  >
                    {saving ? 'Publishing...' : 'Publish Testimonial'}
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
