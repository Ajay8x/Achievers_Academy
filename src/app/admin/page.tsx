'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { 
  Users, 
  UserCheck, 
  Clock, 
  Building2, 
  ArrowRight, 
  FileSpreadsheet, 
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

interface Enquiry {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  campus: string;
  program: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/admission');
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

  const total = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'New').length;
  const contactedCount = enquiries.filter(e => e.status === 'Contacted').length;
  const admittedCount = enquiries.filter(e => e.status === 'Admitted').length;

  const manmadCount = enquiries.filter(e => e.campus.toLowerCase().includes('manmad')).length;
  const chandwadCount = enquiries.filter(e => e.campus.toLowerCase().includes('chandwad')).length;
  const niphadCount = enquiries.filter(e => e.campus.toLowerCase().includes('niphad')).length;

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold font-serif text-navy-950">
              Admin Overview Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Welcome back. Here is the latest admission inquiry status across all three campuses.
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

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Enquiries</span>
              <h3 className="text-3xl font-bold font-serif text-navy-950 mt-1">{total}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">New Action Required</span>
              <h3 className="text-3xl font-bold font-serif text-rose-600 mt-1">{newCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contacted / In Review</span>
              <h3 className="text-3xl font-bold font-serif text-amber-600 mt-1">{contactedCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Admitted Confirmed</span>
              <h3 className="text-3xl font-bold font-serif text-emerald-600 mt-1">{admittedCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Campus Distribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-navy-800 uppercase tracking-wider bg-navy-50 px-2 py-0.5 rounded">
              Manmad Campus
            </span>
            <h4 className="text-base font-bold font-serif text-navy-950 mt-2">Achievers World School</h4>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-bold text-navy-900">{manmadCount}</span>
              <span className="text-xs text-slate-500">Total Enquiries</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-gold-900 uppercase tracking-wider bg-gold-50 px-2 py-0.5 rounded">
              Chandwad Campus
            </span>
            <h4 className="text-base font-bold font-serif text-navy-950 mt-2">Achievers IIT &amp; Medical</h4>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-bold text-gold-600">{chandwadCount}</span>
              <span className="text-xs text-slate-500">Total Enquiries</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">
              Niphad Campus
            </span>
            <h4 className="text-base font-bold font-serif text-navy-950 mt-2">Wisdom International School</h4>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-bold text-emerald-600">{niphadCount}</span>
              <span className="text-xs text-slate-500">Total Enquiries</span>
            </div>
          </div>
        </div>

        {/* Recent Enquiries Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold font-serif text-navy-950">Recent Admission Inquiries</h3>
              <p className="text-xs text-slate-500 mt-0.5">Latest submissions from prospective students and parents.</p>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
            >
              <span>Manage All Enquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-700 uppercase font-bold text-[10px] border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">Student Name</th>
                  <th className="px-6 py-3">Parent Name</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Campus</th>
                  <th className="px-6 py-3">Program</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enquiries.slice(0, 5).map((e) => (
                  <tr key={e.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-navy-950">{e.studentName}</td>
                    <td className="px-6 py-4">{e.parentName}</td>
                    <td className="px-6 py-4 font-mono">{e.phone}</td>
                    <td className="px-6 py-4 max-w-[150px] truncate">{e.campus}</td>
                    <td className="px-6 py-4 max-w-[150px] truncate">{e.program}</td>
                    <td className="px-6 py-4">
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
                    <td className="px-6 py-4 text-slate-400">
                      {new Date(e.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

