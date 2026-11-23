'use client';

import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  School, 
  ExternalLink, 
  CheckCircle2, 
  Edit3, 
  Users, 
  Home, 
  Bus, 
  Award,
  Sparkles,
  X
} from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';

interface CampusData {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  location: string;
  address: string;
  head: string;
  phone: string;
  email: string;
  affiliations: string[];
  intakeCapacity: string;
  facilities: string[];
  grades: string;
  status: 'Active' | 'Admissions Open';
}

const INITIAL_CAMPUSES: CampusData[] = [
  {
    id: 'camp-1',
    name: 'Achievers World School – Manmad',
    shortName: 'Manmad Campus',
    slug: 'achievers-world-school-manmad',
    location: 'Manmad, Nashik',
    address: 'Shrinath Dream City, Umrane Road, Manmad, Maharashtra 423104',
    head: 'Principal / Head of School',
    phone: '+91 8459360161',
    email: 'aws.manmad@achieversacademy.com',
    affiliations: ['CBSE Affiliated', 'Maharashtra State Board SSC', 'Maharashtra State Board HSC'],
    intakeCapacity: '1,200+ Students',
    facilities: ['Smart Classrooms', 'Computer Science Lab', 'Physics & Chemistry Labs', 'Sports Ground', 'Library', 'GPS Bus Fleet'],
    grades: 'Nursery to 10th & 11th-12th Science',
    status: 'Admissions Open'
  },
  {
    id: 'camp-2',
    name: 'Achievers IIT & Medical – Chandwad',
    shortName: 'Chandwad Campus',
    slug: 'achievers-iit-medical-chandwad',
    location: 'Chandwad, Nashik',
    address: 'Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad, Maharashtra 423101',
    head: 'Academic Director (Competitive Wing)',
    phone: '+91 8999542174',
    email: 'iit.chandwad@achieversacademy.com',
    affiliations: ['Higher Secondary Science', 'MSBTE / PCI Approved Programs', 'National Entrance Wing'],
    intakeCapacity: '800+ Students',
    facilities: ['Air-Conditioned Coaching Halls', 'Boys Residential Hostel', 'Girls Residential Hostel', 'Hygienic Mess', 'Night Study Library', 'Doubt Resolution Labs'],
    grades: '11th & 12th Science + JEE, NEET, MHT-CET',
    status: 'Admissions Open'
  },
  {
    id: 'camp-3',
    name: 'Wisdom International School – Niphad',
    shortName: 'Niphad Campus',
    slug: 'wisdom-international-school-niphad',
    location: 'Niphad, Nashik',
    address: 'Niphad-Sambhajinagar Road, Niphad, Maharashtra 422303',
    head: 'Headmistress / Academic Coordinator',
    phone: '+91 8385853131',
    email: 'wisdom.niphad@achieversacademy.com',
    affiliations: ['CBSE Curriculum Framework', 'Foundational & Middle School Wing'],
    intakeCapacity: '950+ Students',
    facilities: ['Kindergarten Activity Center', 'Robotics & STEM Corner', 'Spacious Playground', 'School Bus Fleet', 'Indoor Games Arena'],
    grades: 'Pre-Primary (Nursery) to 8th Standard',
    status: 'Admissions Open'
  }
];

export default function AdminCampusesPage() {
  const { showSuccess, showError } = useToast();
  const [campuses, setCampuses] = useState<CampusData[]>(INITIAL_CAMPUSES);
  const [editingCampus, setEditingCampus] = useState<CampusData | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCampus) return;

    setCampuses(prev => prev.map(c => c.id === editingCampus.id ? editingCampus : c));
    setEditingCampus(null);
    showSuccess(`Campus details for ${editingCampus.name} updated successfully!`, 'Campus Updated');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <Building2 className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold font-serif text-slate-900">
                Campus Hubs &amp; Facilities Directory
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manage physical infrastructure, affiliations, campus heads, and contact helplines for all three locations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              3 Verified Campuses Active
            </span>
          </div>
        </div>

        {/* 3 Campuses Detailed Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {campuses.map((campus) => (
            <div
              key={campus.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-blue-400 transition"
            >
              {/* Card Top Banner */}
              <div className="bg-gradient-to-r from-[#070E1E] to-[#122854] text-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-400/30">
                    {campus.shortName}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    {campus.status}
                  </span>
                </div>
                <h3 className="text-base font-bold font-serif text-white">{campus.name}</h3>
                <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>{campus.location}</span>
                </p>
              </div>

              {/* Card Body Details */}
              <div className="p-5 space-y-4 flex-1 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Campus Address</span>
                  <p className="text-slate-800 font-medium mt-0.5">{campus.address}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Helpline</span>
                    <span className="font-mono font-bold text-slate-900">{campus.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Intake Capacity</span>
                    <span className="font-semibold text-slate-900">{campus.intakeCapacity}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">Academic Affiliations</span>
                  <div className="flex flex-wrap gap-1">
                    {campus.affiliations.map((aff, i) => (
                      <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-800 rounded text-[10px] font-semibold border border-blue-100">
                        {aff}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">Infrastructure Highlights</span>
                  <div className="flex flex-wrap gap-1">
                    {campus.facilities.map((fac, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px]">
                        ✓ {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setEditingCampus(campus)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-blue-600 border border-slate-200 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>

                <Link
                  href={`/campuses/${campus.slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  <span>Public Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingCampus && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <h3 className="font-bold font-serif text-slate-900 text-lg">Edit Campus Information</h3>
                  <p className="text-xs text-slate-500">{editingCampus.name}</p>
                </div>
                <button
                  onClick={() => setEditingCampus(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Campus Physical Address
                  </label>
                  <textarea
                    rows={2}
                    value={editingCampus.address}
                    onChange={(e) => setEditingCampus({ ...editingCampus, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Direct Helpline Phone
                    </label>
                    <input
                      type="text"
                      value={editingCampus.phone}
                      onChange={(e) => setEditingCampus({ ...editingCampus, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none font-mono"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Intake Capacity
                    </label>
                    <input
                      type="text"
                      value={editingCampus.intakeCapacity}
                      onChange={(e) => setEditingCampus({ ...editingCampus, intakeCapacity: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Campus Email Address
                  </label>
                  <input
                    type="email"
                    value={editingCampus.email}
                    onChange={(e) => setEditingCampus({ ...editingCampus, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Admission Status
                  </label>
                  <select
                    value={editingCampus.status}
                    onChange={(e) => setEditingCampus({ ...editingCampus, status: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-semibold"
                  >
                    <option value="Admissions Open">Admissions Open (2025-26)</option>
                    <option value="Active">Active Session in Progress</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingCampus(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    Save Campus Updates
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
