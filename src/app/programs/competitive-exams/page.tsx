'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Star, Users, BookOpen } from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function CompetitiveExamsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/programs" className="hover:underline">Programs</Link>
            <span>/</span>
            <span>Competitive Test Prep</span>
          </div>
          <div className="inline-block bg-gold-500 text-navy-950 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Chandwad Flagship Coaching
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            JEE Main &amp; Adv, NEET Medical UG &amp; MHT-CET
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed">
            Uncompromising preparation for India&apos;s toughest engineering and medical entrance exams, right here in Nashik district.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* JEE */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-gold-500 transition shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-navy-900 bg-navy-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Engineering Division
                </span>
                <h3 className="text-2xl font-bold font-serif text-navy-950 mt-4">
                  JEE (Main &amp; Advanced)
                </h3>
                <p className="text-xs text-slate-500 mt-1">2-Year Integrated Intensive Batch</p>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Deep focus on advanced problem solving in Physics, Organic/Inorganic Chemistry, and Advanced Mathematics. Frequent computer-based testing simulating actual JEE interface.
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Daily Practice Problem (DPP) Sheets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>All-India Mock Test Series</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold rounded-xl text-xs transition shadow"
                >
                  Apply for JEE Batch
                </button>
              </div>
            </div>

            {/* NEET */}
            <div className="p-8 rounded-3xl bg-slate-50 border-2 border-gold-400/50 hover:border-gold-500 transition shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Medical Division
                </span>
                <h3 className="text-2xl font-bold font-serif text-navy-950 mt-4">
                  NEET Medical (UG)
                </h3>
                <p className="text-xs text-emerald-700 font-semibold mt-1">MBBS &amp; BDS Admission Track</p>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Intensive line-by-line NCERT Biology mastery, along with concept-heavy Physics problem drills and Chemistry reaction mechanisms.
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% NCERT Biology line-by-line drills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Full-length 720 marks OMR mock tests</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Apply for NEET Batch
                </button>
              </div>
            </div>

            {/* MHT-CET */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-gold-500 transition shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Maharashtra State Level
                </span>
                <h3 className="text-2xl font-bold font-serif text-navy-950 mt-4">
                  MHT-CET (PCM / PCB)
                </h3>
                <p className="text-xs text-slate-500 mt-1">COEP, VJTI &amp; Pharmacy Admissions</p>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  High-speed calculation shortcuts, textbook concept alignment, and question bank practice tailored for Maharashtra state engineering and pharmacy seats.
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Previous 15 years CET question analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Timer-based speed tests &amp; shortcuts</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold rounded-xl text-xs transition shadow"
                >
                  Apply for MHT-CET
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProgram="JEE Main & Advanced Integrated"
        defaultCampus="Achievers IIT & Medical (Chandwad)"
      />
    </div>
  );
}

