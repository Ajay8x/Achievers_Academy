'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  School
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    campus: 'Achievers World School (Manmad)',
    program: 'General Enquiry',
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
        body: JSON.stringify({
          ...formData,
          source: 'Contact Page Form'
        })
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Error sending message. Please try again.');
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
            <span>Connect with Achievers Group</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Contact &amp; Campus Locations
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Have questions about admissions, academic curriculum, hostels, or school bus routes? Reach out to our central admission desk or visit any of our three campuses.
          </p>
        </div>
      </section>

      {/* 3 Campuses Quick Cards */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Manmad */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-navy-800 bg-navy-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Branch 01 • Manmad
              </span>
              <h3 className="text-lg font-bold font-serif text-navy-950">Achievers World School</h3>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span>Shrinath Dream City, Umrane Road, Manmad, Dist. Nashik</span>
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <a href="tel:8459360161" className="font-bold text-navy-900 hover:text-gold-600">
                  +91 8459360161
                </a>
                <a
                  href="https://maps.google.com/?q=Achievers+World+School+Manmad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-navy-900 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Google Map</span>
                </a>
              </div>
            </div>

            {/* Chandwad */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-gold-900 bg-gold-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Branch 02 • Chandwad
              </span>
              <h3 className="text-lg font-bold font-serif text-navy-950">Achievers IIT &amp; Medical</h3>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span>Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad</span>
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <a href="tel:8999542174" className="font-bold text-navy-900 hover:text-gold-600">
                  +91 8999542174
                </a>
                <a
                  href="https://maps.google.com/?q=Achievers+IIT+Medical+Chandwad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-navy-900 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Google Map</span>
                </a>
              </div>
            </div>

            {/* Niphad */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Branch 03 • Niphad
              </span>
              <h3 className="text-lg font-bold font-serif text-navy-950">Wisdom International School</h3>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span>Niphad-Sambhajinagar Road, Niphad, Dist. Nashik</span>
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <a href="tel:8385853131" className="font-bold text-navy-900 hover:text-gold-600">
                  +91 8385853131
                </a>
                <a
                  href="https://maps.google.com/?q=Wisdom+International+School+Niphad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-navy-900 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Google Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-2xl font-bold font-serif text-navy-950 mb-1">Send Us a Message</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details below and our counseling coordinator will respond promptly.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold font-serif text-navy-950">Message Sent!</h4>
                    <p className="text-sm text-slate-600">
                      Thank you for contacting Achievers Academy. We will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2 bg-navy-900 text-white rounded-xl text-xs font-bold"
                    >
                      Send Another Message
                    </button>
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
                          Student Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Student Name"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Parent Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Parent / Guardian Name"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Campus of Interest
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
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Message / Query *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold rounded-xl text-xs transition shadow disabled:opacity-50"
                    >
                      {loading ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Connect & Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-navy-950 text-white space-y-5">
                <h4 className="text-xl font-bold font-serif text-white">Central Admission Desk</h4>
                
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Helpline Numbers:</span>
                      <a href="tel:8459360161" className="hover:text-gold-400 block">+91 8459360161</a>
                      <a href="tel:8999542174" className="hover:text-gold-400 block">+91 8999542174</a>
                      <a href="tel:8385853131" className="hover:text-gold-400 block">+91 8385853131</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Email Address:</span>
                      <a href="mailto:achieversgroupofinstitutes@gmail.com" className="hover:text-gold-400 break-all">
                        achieversgroupofinstitutes@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Office Working Hours:</span>
                      <p>Monday to Saturday: 08:30 AM – 05:30 PM</p>
                      <p>Sunday: 09:00 AM – 01:00 PM (Admission Desk Open)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20have%20an%20admission%20inquiry."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
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

