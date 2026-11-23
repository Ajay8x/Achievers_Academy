'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { useToast } from '@/context/ToastContext';
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
  MessageCircle,
  Eye,
  Bus,
  Home,
  AlertCircle,
  Filter,
  RefreshCw,
  UserCheck
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
  updatedAt: string;
}

export default function AdminEnquiriesPage() {
  const router = useRouter();
  const { showError, showSuccess } = useToast();
  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [campusFilter, setCampusFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [facilityFilter, setFacilityFilter] = useState('all'); // 'all' | 'hostel' | 'transport'

  // Modals state
  const [editingEnquiry, setEditingEnquiry] = useState<AdmissionEnquiry | null>(null);
  const [viewingEnquiry, setViewingEnquiry] = useState<AdmissionEnquiry | null>(null);
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
    } catch (e: any) {
      console.error(e);
      showError(e.message || 'Failed to fetch enquiries.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEnquiry) return;
    setUpdating(true);

    try {
      const res = await fetch(`/api/admin/enquiries/${editingEnquiry.id}`, {
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
            item.id === editingEnquiry.id
              ? { ...item, status: editingStatus, notes: editingNotes, updatedAt: new Date().toISOString() }
              : item
          )
        );
        setEditingEnquiry(null);
        showSuccess('Enquiry status and counselor notes updated successfully.', 'Record Updated');
      } else {
        showError('Failed to update enquiry status.', 'Update Error');
      }
    } catch (err: any) {
      console.error(err);
      showError(err.message || 'Error updating enquiry record.', 'Update Error');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id: string, studentName: string) => {
    if (!confirm(`Are you sure you want to permanently delete the inquiry for ${studentName}?`)) return;

    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEnquiries(prev => prev.filter(e => e.id !== id));
        if (viewingEnquiry?.id === id) setViewingEnquiry(null);
        if (editingEnquiry?.id === id) setEditingEnquiry(null);
        showSuccess(`Inquiry record for ${studentName} deleted.`, 'Deleted');
      } else {
        showError('Failed to delete enquiry record.', 'Delete Error');
      }
    } catch (e: any) {
      console.error(e);
      showError(e.message || 'Error deleting enquiry record.', 'Delete Error');
    }
  };

  const openEditModal = (item: AdmissionEnquiry) => {
    setEditingEnquiry(item);
    setEditingNotes(item.notes || '');
    setEditingStatus(item.status);
  };

  // Facility filter logic on displayed list
  const displayedEnquiries = enquiries.filter(enq => {
    if (facilityFilter === 'hostel') return enq.hostelRequired;
    if (facilityFilter === 'transport') return enq.transportRequired;
    return true;
  });

  // Calculate status counts
  const totalCount = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'New').length;
  const contactedCount = enquiries.filter(e => e.status === 'Contacted').length;
  const inReviewCount = enquiries.filter(e => e.status === 'In Review').length;
  const admittedCount = enquiries.filter(e => e.status === 'Admitted').length;
  const closedCount = enquiries.filter(e => e.status === 'Closed').length;

  const statusBadges: Record<string, string> = {
    New: 'bg-amber-100 text-amber-800 border-amber-300',
    Contacted: 'bg-blue-100 text-blue-800 border-blue-300',
    'In Review': 'bg-purple-100 text-purple-800 border-purple-300',
    Admitted: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    Closed: 'bg-slate-100 text-slate-700 border-slate-300'
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <Users className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold font-serif text-slate-900">
                Admission Enquiries Management
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              View, contact parents on WhatsApp/Call, update counseling status, and export to Excel/CSV.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => fetchEnquiries()}
              className="p-2.5 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-bold transition shadow-sm hover:bg-slate-50"
              title="Refresh list"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <a
              href="/api/admission?format=csv"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-950/20"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        {/* Quick Status Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'all', label: 'All Inquiries', count: totalCount },
            { id: 'New', label: 'New (Urgent)', count: newCount, color: 'text-amber-600' },
            { id: 'Contacted', label: 'Contacted', count: contactedCount, color: 'text-blue-600' },
            { id: 'In Review', label: 'In Review', count: inReviewCount, color: 'text-purple-600' },
            { id: 'Admitted', label: 'Admitted', count: admittedCount, color: 'text-emerald-600' },
            { id: 'Closed', label: 'Closed', count: closedCount, color: 'text-slate-500' },
          ].map((tab) => {
            const active = statusFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition border ${
                  active
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] ${
                    active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600 font-extrabold'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Advanced Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[300px]">
            {/* Search */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search student, parent, phone or course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Campus filter */}
            <select
              value={campusFilter}
              onChange={(e) => setCampusFilter(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-700"
            >
              <option value="all">All Campuses</option>
              <option value="Manmad">Achievers World School (Manmad)</option>
              <option value="Chandwad">Achievers IIT &amp; Medical (Chandwad)</option>
              <option value="Niphad">Wisdom International School (Niphad)</option>
            </select>

            {/* Special Facilities filter */}
            <select
              value={facilityFilter}
              onChange={(e) => setFacilityFilter(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-700"
            >
              <option value="all">All Requirements</option>
              <option value="hostel">Hostel Required</option>
              <option value="transport">Bus Transport Required</option>
            </select>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-slate-900">{displayedEnquiries.length}</span> records
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Student &amp; Parent</th>
                  <th className="py-3.5 px-4">Contact &amp; Quick Connect</th>
                  <th className="py-3.5 px-4">Campus &amp; Program</th>
                  <th className="py-3.5 px-4">Requirements</th>
                  <th className="py-3.5 px-4">Status &amp; Counselor Notes</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      <Users className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                      <p className="font-semibold text-slate-600">No admission enquiries found matching the criteria.</p>
                      <p className="text-[11px] text-slate-400 mt-1">Try resetting the search or filter options.</p>
                    </td>
                  </tr>
                ) : (
                  displayedEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 text-sm">{enq.studentName}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <span>{enq.relationship || 'Guardian'}:</span>
                          <span className="font-medium text-slate-700">{enq.parentName}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-mono text-slate-800 font-semibold">{enq.phone}</div>
                        <div className="flex items-center gap-2 mt-1.5">
                          {/* WhatsApp Parent Button */}
                          <a
                            href={`https://wa.me/91${enq.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                              `Hello ${enq.parentName}, this is from Achievers Academy regarding admission for ${enq.studentName} (${enq.program} at ${enq.campus}). We would love to assist you.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-md text-[10px] font-bold transition"
                            title="Chat with parent on WhatsApp"
                          >
                            <MessageCircle className="w-3 h-3 text-emerald-600" />
                            WhatsApp
                          </a>

                          {/* Direct Phone Call */}
                          <a
                            href={`tel:${enq.phone}`}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-md text-[10px] font-bold transition"
                            title="Call parent"
                          >
                            <Phone className="w-3 h-3 text-blue-600" />
                            Call
                          </a>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-900">{enq.program}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Building2 className="w-3 h-3 text-slate-400" />
                          <span>{enq.campus}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex flex-col gap-1 text-[11px]">
                          {enq.hostelRequired && (
                            <span className="inline-flex items-center gap-1 text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 font-semibold w-max">
                              <Home className="w-3 h-3" /> Hostel
                            </span>
                          )}
                          {enq.transportRequired && (
                            <span className="inline-flex items-center gap-1 text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-semibold w-max">
                              <Bus className="w-3 h-3" /> Bus Route
                            </span>
                          )}
                          {!enq.hostelRequired && !enq.transportRequired && (
                            <span className="text-slate-400">Day Scholar</span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadges[enq.status] || 'bg-slate-100 text-slate-700'}`}>
                          {enq.status}
                        </span>
                        {enq.notes && (
                          <p className="text-[11px] text-slate-500 mt-1 max-w-[200px] truncate" title={enq.notes}>
                            📝 {enq.notes}
                          </p>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-slate-400 text-[11px] whitespace-nowrap">
                        {new Date(enq.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setViewingEnquiry(enq)}
                            className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition"
                            title="View Full Profile"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => openEditModal(enq)}
                            className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition"
                            title="Edit Status & Notes"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleDelete(enq.id, enq.studentName)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition"
                            title="Delete Enquiry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* View Profile Modal */}
        {viewingEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    Enquiry Details
                  </span>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mt-1">
                    {viewingEnquiry.studentName}
                  </h3>
                </div>
                <button
                  onClick={() => setViewingEnquiry(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-3.5 text-xs text-slate-700">
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Parent / Guardian</span>
                    <span className="font-semibold text-slate-900">{viewingEnquiry.parentName} ({viewingEnquiry.relationship || 'Guardian'})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Contact Number</span>
                    <span className="font-mono font-bold text-slate-900">{viewingEnquiry.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Campus Selected</span>
                    <span className="font-medium text-slate-900">{viewingEnquiry.campus}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Course / Grade</span>
                    <span className="font-medium text-slate-900">{viewingEnquiry.program}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span>Hostel: <strong className={viewingEnquiry.hostelRequired ? 'text-indigo-600' : 'text-slate-500'}>{viewingEnquiry.hostelRequired ? 'Required' : 'No'}</strong></span>
                  <span>Transport: <strong className={viewingEnquiry.transportRequired ? 'text-teal-600' : 'text-slate-500'}>{viewingEnquiry.transportRequired ? 'Required' : 'No'}</strong></span>
                  <span>Medium: <strong className="text-slate-700">{viewingEnquiry.preferredMedium || 'English'}</strong></span>
                </div>

                {viewingEnquiry.message && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">Message from Parent</span>
                    <p className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-800 italic">
                      "{viewingEnquiry.message}"
                    </p>
                  </div>
                )}

                {viewingEnquiry.notes && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">Counselor Action Notes</span>
                    <p className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-blue-900 font-medium">
                      {viewingEnquiry.notes}
                    </p>
                  </div>
                )}

                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 flex justify-between">
                  <span>ID: {viewingEnquiry.id}</span>
                  <span>Source: {viewingEnquiry.source || 'Website Form'}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/91${viewingEnquiry.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                    `Hello ${viewingEnquiry.parentName}, this is from Achievers Academy admissions regarding ${viewingEnquiry.studentName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Parent</span>
                </a>

                <button
                  onClick={() => {
                    const target = viewingEnquiry;
                    setViewingEnquiry(null);
                    openEditModal(target);
                  }}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition"
                >
                  Edit Status / Notes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Status & Notes Modal */}
        {editingEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <h3 className="font-bold font-serif text-slate-900 text-lg">Update Counselor Action</h3>
                  <p className="text-xs text-slate-500">{editingEnquiry.studentName} ({editingEnquiry.phone})</p>
                </div>
                <button
                  onClick={() => setEditingEnquiry(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Enquiry Lifecycle Status
                  </label>
                  <select
                    value={editingStatus}
                    onChange={(e) => setEditingStatus(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-semibold"
                  >
                    <option value="New">New (Pending Call)</option>
                    <option value="Contacted">Contacted (Counselor Spoke)</option>
                    <option value="In Review">In Review (Campus Visit Scheduled)</option>
                    <option value="Admitted">Admitted (Fees Paid / Enrolled)</option>
                    <option value="Closed">Closed (Not Interested / Ineligible)</option>
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
                    placeholder="e.g. Spoke to father. Discussed hostel fees and scheduled campus visit for this Saturday."
                    className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingEnquiry(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={updating}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition disabled:opacity-50"
                  >
                    {updating ? 'Saving Changes...' : 'Save Updates'}
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
