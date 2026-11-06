'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Bus, 
  Award,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Star
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function ChandwadCampusPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/campuses" className="hover:underline">Campuses</Link>
            <span>/</span>
            <span>Branch 02 • Chandwad</span>
          </div>
          <div className="inline-block bg-gold-500 text-navy-950 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Competitive Entrance &amp; Residential Center
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Achievers IIT &amp; Medical – Chandwad
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad, Dist. Nashik</span>
          </p>
        </div>
      </section>

      {/* Campus Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/images/static_Chandwad.jpeg"
                  alt="Achievers IIT & Medical Chandwad Campus"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">Flagship Coaching Hub</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 mt-1">
                  Cracking JEE, NEET &amp; MHT-CET with Integrated Science Schooling
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Achievers IIT &amp; Medical in Chandwad is the high-performance competitive center of the Achievers Group. Here, Class 11 and 12 Science education is integrated directly with rigorous entrance coaching, eliminating the fatigue of running between multiple private tutors.
                </p>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
                  The campus includes fully equipped Physics, Chemistry, and Biology laboratories, round-the-clock faculty mentorship, daily practice problem solving (DPP), and computer-based mock testing according to exact NTA and State CET patterns.
                </p>
              </div>

              {/* Programs Offered */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold font-serif text-navy-950">Academic Programs at Chandwad</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Class 11 Science (PCMB)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Class 12 Science (Board Preparation)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>JEE Main &amp; Advanced 2-Year Integrated</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NEET Medical UG Integrated Batch</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>MHT-CET Fast-Track &amp; Full Year</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>10th to 11th Science Foundation Batch</span>
                  </div>
                </div>
              </div>

              {/* Residential Hostel Highlights */}
              <div className="p-6 rounded-3xl bg-navy-900 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-gold-400" />
                  <h3 className="text-xl font-bold font-serif">On-Campus Residential Facilities</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Chandwad campus features separate, secure boys and girls residential hostel blocks. With structured morning yoga, hygienic mess facilities, supervised night study reading rooms until midnight, students enjoy the optimum academic discipline required for national entrance examinations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/facilities/hostel"
                    className="text-xs font-bold text-gold-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Complete Hostel Routine &amp; Guidelines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Info & Direct Contact */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-navy-950 text-white space-y-6 shadow-xl sticky top-28 border border-gold-500/30">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Admissions 2025-26</span>
                  <h3 className="text-xl font-bold font-serif mt-1">Enroll at Chandwad</h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <a href="tel:8459360161" className="hover:text-white block">+91 8459360161</a>
                      <a href="tel:8999542174" className="hover:text-white block">+91 8999542174</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="break-all">achieversgroupofinstitutes@gmail.com</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                  >
                    Apply for Chandwad Batch
                  </button>

                  <a
                    href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20want%20to%20inquire%20about%20JEE/NEET%20at%20Chandwad%20campus."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Counselor</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Achievers+IIT+Medical+Chandwad"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs transition flex items-center justify-center gap-2 border border-white/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCampus="Achievers IIT & Medical (Chandwad)"
        defaultProgram="Class 11 Science (JEE/NEET)"
      />
    </div>
  );
}

