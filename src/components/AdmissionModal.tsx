'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, School, Phone, User, Mail, Send } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCampus?: string;
  defaultProgram?: string;
}

export default function AdmissionModal({
  isOpen,
  onClose,
  defaultCampus = 'Achievers World School (Manmad)',
  defaultProgram = 'Class 11 Science (JEE/NEET)'
}: AdmissionModalProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    campus: defaultCampus,
    program: defaultProgram,
    batch: 'Morning Batch',
    hostelRequired: false,
    transportRequired: false,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/20 rounded-xl border border-gold-400/30">
              <School className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Admissions Open 2025-2026</span>
              <h3 className="text-xl md:text-2xl font-bold font-serif">Apply for Admission</h3>
            </div>
          </div>
          <p className="text-sm text-slate-300 mt-2">
            Begin your child&apos;s journey towards academic excellence with Achievers Group of Institutes.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {success ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-serif">Enquiry Submitted Successfully!</h4>
              <p className="text-slate-600 max-w-md mx-auto">
                Thank you for inquiring with Achievers Academy. Our senior admissions counselor will call you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Patil"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjay Patil"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Contact Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      placeholder="e.g. parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Preferred Campus *
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                  >
                    <option value="Achievers World School (Manmad)">Achievers World School (Manmad)</option>
                    <option value="Achievers IIT & Medical (Chandwad)">Achievers IIT & Medical (Chandwad)</option>
                    <option value="Wisdom International School (Niphad)">Wisdom International School (Niphad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Grade / Program *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                  >
                    <option value="Pre-Primary (Nursery, Jr/Sr KG)">Pre-Primary (Nursery, Jr/Sr KG)</option>
                    <option value="Primary School (Class 1 to 5)">Primary School (Class 1 to 5)</option>
                    <option value="Secondary School (Class 6 to 10 - CBSE/State)">Secondary School (Class 6 to 10 - CBSE/State)</option>
                    <option value="Class 11 Science (State Board)">Class 11 Science (State Board)</option>
                    <option value="Class 12 Science (State Board)">Class 12 Science (State Board)</option>
                    <option value="JEE Main & Advanced Integrated">JEE Main & Advanced Integrated</option>
                    <option value="NEET Medical UG Integrated">NEET Medical UG Integrated</option>
                    <option value="MHT-CET Engineering/Pharmacy">MHT-CET Engineering/Pharmacy</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes for Hostel and Transport */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Additional Facilities Required:</span>
                <div className="flex flex-wrap gap-6 pt-1">
                  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hostelRequired}
                      onChange={(e) => setFormData({ ...formData, hostelRequired: e.target.checked })}
                      className="w-4 h-4 text-navy-600 rounded border-slate-300 focus:ring-navy-500"
                    />
                    <span>Hostel / Residential Facility</span>
                  </label>

                  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.transportRequired}
                      onChange={(e) => setFormData({ ...formData, transportRequired: e.target.checked })}
                      className="w-4 h-4 text-navy-600 rounded border-slate-300 focus:ring-navy-500"
                    />
                    <span>School Bus / Transport Facility</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Specific Questions or Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any specific requirements or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-lg shadow-md transition disabled:opacity-50"
                >
                  {loading ? (
                    'Submitting...'
                  ) : (
                    <>
                      <span>Submit Admission Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

