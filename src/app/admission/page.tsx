'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  School, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  Building2, 
  BookOpen, 
  Send, 
  AlertCircle, 
  FileText, 
  Calendar,
  MessageCircle
} from 'lucide-react';

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    campus: 'Achievers World School (Manmad)',
    program: 'Class 11 Science (JEE/NEET)',
    batch: 'Morning Batch',
    gender: 'Male',
    hostelRequired: false,
    transportRequired: false,
    relationship: 'Father',
    preferredMedium: 'English',
    source: 'Google',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <School className="w-4 h-4 text-gold-400" />
            <span>Admissions Open for Academic Year 2025-2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Admission Process &amp; Online Registration
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Take the definitive step towards academic excellence. Apply online for Nursery to 12th Standard and JEE/NEET competitive entrance coaching across our three campuses.
          </p>
        </div>
      </section>

      {/* 4-Step Process Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
              <span className="w-8 h-8 rounded-full bg-gold-400 text-navy-950 font-extrabold flex items-center justify-center mx-auto mb-2 text-xs">
                01
              </span>
              <h4 className="font-bold text-navy-950 text-sm">Submit Online Enquiry</h4>
              <p className="text-xs text-slate-500 mt-1">Fill out the online admission form with student details.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
              <span className="w-8 h-8 rounded-full bg-navy-100 text-navy-900 font-extrabold flex items-center justify-center mx-auto mb-2 text-xs">
                02
              </span>
              <h4 className="font-bold text-navy-950 text-sm">Counseling &amp; Visit</h4>
              <p className="text-xs text-slate-500 mt-1">Personal counseling call and scheduled tour of the campus.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
              <span className="w-8 h-8 rounded-full bg-navy-100 text-navy-900 font-extrabold flex items-center justify-center mx-auto mb-2 text-xs">
                03
              </span>
              <h4 className="font-bold text-navy-950 text-sm">Document Verification</h4>
              <p className="text-xs text-slate-500 mt-1">Verification of previous marksheets, LC, and ID proofs.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center mx-auto mb-2 text-xs">
                04
              </span>
              <h4 className="font-bold text-navy-950 text-sm">Enrolment Confirmed</h4>
              <p className="text-xs text-slate-500 mt-1">Welcome kit, uniform, books, and class timetable allotment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Guidelines Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="mb-6">
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">Online Application</span>
                  <h3 className="text-2xl font-bold font-serif text-navy-950">Admission Enquiry Form</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide accurate information. Our admission desk will connect with you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold font-serif text-navy-950">Enquiry Successfully Submitted!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for choosing Achievers Academy. Our senior admissions counselor will call you within 24 hours to schedule your campus visit and share the fee structure.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-xs font-bold"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Student Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aarav Patil"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sanjay Patil"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Mobile Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Select Campus *
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
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Class / Program *
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                        >
                          <option value="Nursery, Jr. KG, Sr. KG">Nursery, Jr. KG, Sr. KG</option>
                          <option value="Primary (Class 1 to 5)">Primary (Class 1 to 5)</option>
                          <option value="Secondary (Class 6 to 10)">Secondary (Class 6 to 10)</option>
                          <option value="Class 11 Science (State Board)">Class 11 Science (State Board)</option>
                          <option value="Class 12 Science (State Board)">Class 12 Science (State Board)</option>
                          <option value="JEE Main & Advanced Integrated">JEE Main & Advanced Integrated</option>
                          <option value="NEET Medical UG Integrated">NEET Medical UG Integrated</option>
                          <option value="MHT-CET Engineering/Pharmacy">MHT-CET Engineering/Pharmacy</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Gender *
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Preferred Medium
                        </label>
                        <select
                          value={formData.preferredMedium}
                          onChange={(e) => setFormData({ ...formData, preferredMedium: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                        >
                          <option value="English">English</option>
                          <option value="Semi-English">Semi-English</option>
                          <option value="Marathi">Marathi</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Relationship
                        </label>
                        <select
                          value={formData.relationship}
                          onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none bg-white"
                        >
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Guardian">Guardian</option>
                        </select>
                      </div>
                    </div>

                    {/* Facilities Checkboxes */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap gap-8">
                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.hostelRequired}
                          onChange={(e) => setFormData({ ...formData, hostelRequired: e.target.checked })}
                          className="w-4 h-4 text-navy-600 rounded border-slate-300 focus:ring-navy-500"
                        />
                        <span>Hostel Facility Required</span>
                      </label>

                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.transportRequired}
                          onChange={(e) => setFormData({ ...formData, transportRequired: e.target.checked })}
                          className="w-4 h-4 text-navy-600 rounded border-slate-300 focus:ring-navy-500"
                        />
                        <span>School Bus / Transport Required</span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Any Questions or Specific Requirements? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Inquiring about scholarship eligibility, hostel room occupancy..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold rounded-xl text-sm transition shadow-md disabled:opacity-50"
                      >
                        {loading ? 'Submitting Application...' : 'Submit Admission Enquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Documents & Helpdesk Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-serif font-bold text-base">
                  <FileText className="w-5 h-5 text-gold-600" />
                  <h4>Documents Required for Admission</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Birth Certificate (Nursery to Class 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Original School Leaving Certificate (T.C.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Previous Academic Year Marksheet / Report Card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Aadhaar Card copy of student and parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>4 Recent Passport Size Color Photographs</span>
                  </li>
                </ul>
              </div>

              {/* Direct Admission Helpline */}
              <div className="p-6 rounded-3xl bg-navy-950 text-white space-y-4">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">Helpline</span>
                <h4 className="text-lg font-bold font-serif">Need Help With Applying?</h4>
                <p className="text-xs text-slate-300">
                  Speak directly with our senior counseling staff:
                </p>
                <div className="text-sm font-bold text-white space-y-1">
                  <p>+91 8459360161</p>
                  <p>+91 8999542174</p>
                  <p>+91 8385853131</p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20need%20help%20with%20admission."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

