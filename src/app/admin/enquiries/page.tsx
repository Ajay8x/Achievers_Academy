'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { 
  Users, 
  Search, 
  FileSpreadsheet, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Edit3, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Building2,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface AdmissionEnquiry {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  campus: string;
  program: string;
  batch?: string;
  hostelRequired: boolean;
  transportRequired: boolean;
  message?: string;
  relationship?: string;
  preferredMedium?: string;
  source?: string;
  status: 'New' | 'Contacted' | 'In Review' | 'Admitted' | 'Closed';
  notes?: string;
  createdAt: string;
}

export default function AdminEnquiriesPage() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [campusFilter, setCampusFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState<AdmissionEnquiry | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [editingStatus, setEditingStatus] = useState<AdmissionEnquiry['status']>('New');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchEnquiries();
  }, [campusFilter, statusFilter, search]);

  const fetchEnquiries = async () => {
    try {
      const q = new URLSearchParams();
      if (campusFilter !== 'all') q.set('campus', campusFilter);
      if (statusFilter !== 'all') q.set('status', statusFilter);
      if (search.trim()) q.set('search', search.trim());

      const res = await fetch(`/api/admission?${q.toString()}`);
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.enquiries) {
        setEnquiries(data.enquiries);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry) return;
    setUpdating(true);

    try {
      const res = await fetch(`/api/admin/enquiries/${selectedEnquiry.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: editingStatus,
          notes: editingNotes
        })
      });

      if (res.ok) {
        setEnquiries(prev =>
          prev.map(item =>
            item.id === selectedEnquiry.id
              ? { ...item, status: editingStatus, notes: editingNotes }
              : item
          )
        );
        setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this enquiry record?')) return;

    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEnquiries(prev => prev.filter(e => e.id !== id));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const openEditModal = (item: AdmissionEnquiry) => {
    setSelectedEnquiry(item);
    setEditingNotes(item.notes || '');
    setEditingStatus(item.status);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold font-serif text-navy-950">
              Admission Enquiries Management
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              View, filter, update counselor notes, and export student admissions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/api/admission?format=csv"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search student, parent, phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>

            {/* Campus filter */}
            <select
              value={campusFilter}
              onChange={(e) => setCampusFilter(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
            >
              <option value="all">All Campuses</option>
              <option value="Manmad">Achievers World School (Manmad)</option>
              <option value="Chandwad">Achievers IIT & Medical (Chandwad)</option>
              <option value="Niphad">Wisdom International School (Niphad)</option>
            </select>

            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
            >
              <option value="all">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Review">In Review</option>
              <option value="Admitted">Admitted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-navy-950">{enquiries.length}</span> enquiries
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-700 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3">Student Name</th>
                  <th className="px-5 py-3">Parent / Contact</th>
                  <th className="px-5 py-3">Campus &amp; Program</th>
                  <th className="px-5 py-3">Hostel / Bus</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Notes</th>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enquiries.map((e) => (
                  <tr key={e.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-bold text-navy-950">
                      <div>{e.studentName}</div>
                      <span className="text-[10px] text-slate-400 font-normal">ID: {e.id}</span>
                    </td>

                    <td className="px-5 py-3.5">
                      <div className="font-medium text-slate-800">{e.parentName}</div>
                      <a href={`tel:${e.phone}`} className="text-navy-700 hover:underline font-mono text-[11px] block">
                        {e.phone}
                      </a>
                    </td>

                    <td className="px-5 py-3.5 max-w-[200px]">
                      <div className="font-semibold text-slate-800 truncate">{e.campus}</div>
                      <div className="text-slate-500 truncate">{e.program}</div>
                    </td>

                    <td className="px-5 py-3.5">
                      <div className="space-y-0.5 text-[10px]">
                        <span className={e.hostelRequired ? 'text-amber-700 font-bold block' : 'text-slate-400 block'}>
                          Hostel: {e.hostelRequired ? 'Yes' : 'No'}
                        </span>
                        <span className={e.transportRequired ? 'text-navy-700 font-bold block' : 'text-slate-400 block'}>
                          Transport: {e.transportRequired ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        e.status === 'New'
                          ? 'bg-rose-100 text-rose-800'
                          : e.status === 'Contacted'
                          ? 'bg-amber-100 text-amber-800'
                          : e.status === 'Admitted'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                        {e.status}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 max-w-[180px]">
                      <p className="line-clamp-2 text-[11px] text-slate-500 italic">
                        {e.notes || 'No counselor notes yet.'}
                      </p>
                    </td>

                    <td className="px-5 py-3.5 text-slate-400 text-[11px]">
                      {new Date(e.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(e)}
                          className="p-1.5 bg-slate-100 hover:bg-navy-50 text-navy-800 rounded-lg transition"
                          title="Edit Notes & Status"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(e.id)}
                          className="p-1.5 bg-slate-100 hover:bg-rose-50 text-rose-600 rounded-lg transition"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
            <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-navy-950 text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg font-serif">Update Enquiry Status</h3>
                  <p className="text-xs text-slate-300">
                    {selectedEnquiry.studentName} • {selectedEnquiry.campus}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdate} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Enquiry Status
                  </label>
                  <select
                    value={editingStatus}
                    onChange={(e) => setEditingStatus(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Review">In Review</option>
                    <option value="Admitted">Admitted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Counselor Notes &amp; Follow-up Details
                  </label>
                  <textarea
                    rows={4}
                    value={editingNotes}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    placeholder="Enter discussion notes, scheduled visit date, or scholarship decision..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEnquiry(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={updating}
                    className="px-5 py-2 bg-navy-900 hover:bg-navy-950 text-white text-xs font-bold rounded-xl transition"
                  >
                    {updating ? 'Saving...' : 'Save Updates'}
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

