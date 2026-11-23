'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Award, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Trophy, 
  GraduationCap, 
  Medal, 
  Sparkles,
  Target,
  ClipboardList
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function ResultsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'cet' | 'neet' | 'jee' | 'board'>('all');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-600/30 border border-blue-400/40 text-blue-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4 text-gold-400" />
            <span>Proven Track Record of Academic Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Examination Results &amp; Hall of Fame
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Celebrating the triumph, relentless dedication, and historic achievements of our students across MHT-CET, NEET Medical, JEE (Main &amp; Adv), and Maharashtra State Board (11th &amp; 12th).
          </p>

          {/* Category Switcher Tabs matching the Navigation Dropdown */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              All Results
            </button>
            <a
              href="#cet"
              onClick={() => setActiveCategory('cet')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeCategory === 'cet'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>🎯 CET Results</span>
            </a>
            <a
              href="#neet"
              onClick={() => setActiveCategory('neet')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeCategory === 'neet'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>🎯 NEET Results</span>
            </a>
            <a
              href="#jee"
              onClick={() => setActiveCategory('jee')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeCategory === 'jee'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>🎯 JEE Results</span>
            </a>
            <a
              href="#board"
              onClick={() => setActiveCategory('board')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeCategory === 'board'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>📋 11th–12th Results</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Results Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* =========================================================================
            1. CET RESULTS SECTION
           ========================================================================= */}
        <section id="cet" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl shadow-inner">
                🎯
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                  State Entrance Division
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                  MHT-CET Results (PCM &amp; PCB)
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
                98.5+ %ile Toppers
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold">
                COEP &amp; VJTI Selections
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-3 flex items-center justify-center">
              <img
                src="/images/static_result_student7.jpg"
                alt="MHT CET Achievers"
                className="w-full max-h-80 object-contain rounded-xl"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-navy-950">
                Dominating Maharashtra Engineering &amp; Pharmacy Admissions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our specialized CET rank-booster programs equip students with lightning-fast calculation shortcuts, 15-year past question patterns, and rigorous chapter-wise mock drills. Achievers Academy students regularly secure top ranks in Nashik district.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-xl font-bold text-blue-600 block">99.12 %ile</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Highest CET PCM</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-xl font-bold text-blue-600 block">98.84 %ile</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Highest CET PCB</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center col-span-2 sm:col-span-1">
                  <span className="text-xl font-bold text-emerald-600 block">100+</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Engineering Seats</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-shimmer px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-md shadow-blue-600/30 inline-flex items-center gap-2"
                >
                  <span>Inquire for CET Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. NEET RESULTS SECTION
           ========================================================================= */}
        <section id="neet" className="scroll-mt-28 bg-white rounded-3xl border-2 border-rose-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-2xl shadow-inner">
                🎯
              </div>
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">
                  National Medical Division
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                  NEET Medical (UG) Results
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-rose-100 text-rose-900 rounded-full text-xs font-bold">
                600+ Marks Achievers
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold">
                Govt MBBS Selections
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-3 flex items-center justify-center">
              <img
                src="/images/static_result_student5.jpg"
                alt="NEET Achievers"
                className="w-full max-h-80 object-contain rounded-xl"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-navy-950">
                Pioneering Rural Medical Entrances to Government Medical Colleges
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                With comprehensive NCERT line-by-line Biology dissection, diagrammatic retention techniques, and full-length 720 marks OMR mock exams, our medical aspirants secure admissions into top GMCs (Government Medical Colleges) across Maharashtra and India.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-xl font-bold text-rose-600 block">645 / 720</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Top NEET Score</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-xl font-bold text-rose-600 block">350 / 360</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Top Biology Score</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center col-span-2 sm:col-span-1">
                  <span className="text-xl font-bold text-emerald-600 block">MBBS &amp; BDS</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Confirmed Seats</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-shimmer px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition shadow-md shadow-rose-600/30 inline-flex items-center gap-2"
                >
                  <span>Inquire for NEET Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. JEE RESULTS SECTION
           ========================================================================= */}
        <section id="jee" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-2xl shadow-inner">
                🎯
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">
                  National Engineering Division
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                  JEE Main &amp; Advanced Results
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-xs font-bold">
                99+ %ile Club
              </span>
              <span className="px-3 py-1 bg-navy-100 text-navy-900 rounded-full text-xs font-bold">
                IIT &amp; NIT Qualifiers
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-3 flex items-center justify-center">
              <img
                src="/images/static_result_student1.jpg"
                alt="JEE Achievers"
                className="w-full max-h-80 object-contain rounded-xl"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-navy-950">
                Crack India&apos;s Toughest Engineering Entrances
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Through our integrated residential program at Chandwad, students receive daily 8 hours of focused coaching, structured Daily Practice Problems (DPP), and national-level Computer Based Testing (CBT) simulating the official NTA JEE interface.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-xl font-bold text-purple-600 block">99.45 %ile</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Highest JEE Main</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-xl font-bold text-purple-600 block">All-India Rank</span>
                  <span className="text-[11px] text-slate-500 font-semibold">JEE Advanced</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center col-span-2 sm:col-span-1">
                  <span className="text-xl font-bold text-emerald-600 block">IIT / NIT</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Selections</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-shimmer px-6 py-2.5 bg-navy-950 hover:bg-purple-900 text-white font-bold rounded-xl text-xs transition shadow-md shadow-navy-950/30 inline-flex items-center gap-2"
                >
                  <span>Inquire for JEE Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. 11TH-12TH BOARD RESULTS SECTION
           ========================================================================= */}
        <section id="board" className="scroll-mt-28 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shadow-inner">
                📋
              </div>
              <div>
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block">
                  Higher Secondary Science Wing
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  11th–12th State Board &amp; CBSE Results
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 bg-gold-400 text-navy-950 rounded-full text-xs font-bold">
                100% Passing Record
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-white/10 border border-white/20 p-3 flex items-center justify-center">
              <img
                src="/images/static_result_HSC.jpeg"
                alt="HSC Science Board Results"
                className="w-full max-h-80 object-contain rounded-xl"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Unbroken Tradition of 100% Distinction &amp; First Class Results
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Year after year, Achievers Academy delivers stellar academic performances in Maharashtra HSC Board (Class 12th Science). Our integrated model eliminates travel stress, synchronizing board examinations with competitive coaching for maximum student efficiency.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-xl font-bold text-gold-400 block">100%</span>
                  <span className="text-[11px] text-slate-300 font-semibold">Passing Rate</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-xl font-bold text-gold-400 block">94.8 %</span>
                  <span className="text-[11px] text-slate-300 font-semibold">District Topper</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="text-xl font-bold text-emerald-400 block">Distinction</span>
                  <span className="text-[11px] text-slate-300 font-semibold">Major Share</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-shimmer px-6 py-2.5 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow-md inline-flex items-center gap-2"
                >
                  <span>Apply for 11th &amp; 12th Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCampus="Achievers IIT & Medical (Chandwad)"
      />
    </div>
  );
}
