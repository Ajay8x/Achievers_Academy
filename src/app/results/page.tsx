'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Star, CheckCircle2, ArrowRight, Trophy, GraduationCap, Medal } from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function ResultsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4 text-gold-400" />
            <span>Proven Track Record of Success</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Academic Results &amp; Achievements
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Celebrating the triumph, relentless dedication, and historic achievements of our students across Maharashtra State Board, CBSE, JEE, NEET, and MHT-CET.
          </p>
        </div>
      </section>

      {/* Main Results Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Featured 100% Success Banner */}
          <div id="board" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white border border-gold-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl scroll-mt-24">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                From Vision to Victory
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                100% Passing Success in Maharashtra HSC Board (11th &amp; 12th)
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Year after year, Achievers Academy delivers outstanding academic performances in Class 12 Science. Our students regularly achieve district honours and secure admissions into prestigious universities.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Join Our Winning Batch
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white/10 p-2 flex items-center justify-center">
              <img
                src="/images/static_result_HSC.jpeg"
                alt="HSC Science Board Results"
                className="w-full h-72 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Grid of Results & Entrance Toppers */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">National Exam Highlights</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 mt-1">
                Competitive Entrance Hall of Fame
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CET */}
              <div id="cet" className="p-6 rounded-3xl bg-white border border-slate-200 text-center group hover:shadow-lg transition shadow-sm scroll-mt-24">
                <div className="h-72 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2 flex items-center justify-center mb-4">
                  <img
                    src="/images/static_result_student7.jpg"
                    alt="MHT CET Achievers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                  MHT-CET Champions
                </span>
                <h4 className="text-xl font-bold font-serif text-navy-950 mt-3">98.5+ Percentile</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  State rankers securing coveted Computer Engineering, AI, and Pharmacy branches at premier engineering institutes.
                </p>
              </div>

              {/* NEET */}
              <div id="neet" className="p-6 rounded-3xl bg-white border-2 border-gold-400/50 text-center group hover:shadow-lg transition shadow-sm scroll-mt-24">
                <div className="h-72 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2 flex items-center justify-center mb-4">
                  <img
                    src="/images/static_result_student5.jpg"
                    alt="NEET Achievers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                  NEET Medical UG
                </span>
                <h4 className="text-xl font-bold font-serif text-navy-950 mt-3">Top MBBS Selections</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Students secured admissions to Government Medical Colleges across Maharashtra with scores exceeding 600+ marks in NEET UG.
                </p>
              </div>

              {/* JEE */}
              <div id="jee" className="p-6 rounded-3xl bg-white border border-slate-200 text-center group hover:shadow-lg transition shadow-sm scroll-mt-24">
                <div className="h-72 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2 flex items-center justify-center mb-4">
                  <img
                    src="/images/static_result_student1.jpg"
                    alt="JEE Achievers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-100 text-navy-900 px-3 py-1 rounded-full">
                  JEE Main &amp; Advanced
                </span>
                <h4 className="text-xl font-bold font-serif text-navy-950 mt-3">99+ Percentile Club</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Multiple students qualified for top Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), and IIITs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

