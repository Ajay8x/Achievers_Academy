'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Users, 
  BookOpen, 
  Atom, 
  Stethoscope, 
  Microscope,
  Home,
  Bus,
  Clock,
  Sparkles,
  Trophy
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function CompetitiveExamsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('11th JEE (Main & Advanced)');
  const [activeTab, setActiveTab] = useState<'all' | '11th' | '12th'>('all');

  const handleApply = (progName: string) => {
    setSelectedProgram(progName);
    setModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-3">
            <Link href="/programs" className="hover:underline">Programs</Link>
            <span>/</span>
            <span>Competitive Test Prep</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 text-blue-200 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Chandwad Residential Coaching Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Class 11th &amp; 12th Competitive Coaching
          </h1>
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Kota &amp; Hyderabad methodology integrated with Maharashtra State Board &amp; CBSE. Specialized wings for CET, JEE (Main &amp; Adv), and NEET Medical with residential hostels.
          </p>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              All Programs (11th &amp; 12th)
            </button>
            <button
              onClick={() => setActiveTab('11th')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === '11th'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>Class 11th Programs</span>
              <span className="px-1.5 py-0.2 bg-white/20 rounded text-[10px]">3</span>
            </button>
            <button
              onClick={() => setActiveTab('12th')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === '12th'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <span>Class 12th Programs</span>
              <span className="px-1.5 py-0.2 bg-white/20 rounded text-[10px]">3</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* =========================================================================
            SECTION 1: CLASS 11TH PROGRAMS
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === '11th') && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  2-Year Comprehensive Foundation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 flex items-center gap-2.5">
                  <span className="w-2.5 h-8 bg-blue-600 rounded-full inline-block"></span>
                  <span>Class 11th Integrated Wings</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Build rock-solid fundamentals from day one. Synchronized with State Board &amp; CBSE for zero academic clash.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* 11th CET */}
              <div 
                id="11th-cet" 
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Microscope className="w-3.5 h-3.5 text-blue-600" />
                      <span>Class 11th</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">2-Year Batch</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-950 group-hover:text-blue-600 transition">
                    11th CET Program
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Maharashtra State Board + MHT-CET (PCM/PCB)
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Designed for aspirants aiming for Maharashtra&apos;s premier engineering and pharmacy colleges (COEP, VJTI, ICT). Emphasizes textbook mastery, state board syllabus alignment, and objective shortcut techniques.
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Maharashtra State Board coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Weekly CET chapter-wise MCQ tests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Speed-math &amp; shortcut numerical tricks</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-blue-600" /> Hostel Available</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Bus className="w-3.5 h-3.5 text-blue-600" /> Transport Fleet</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleApply('11th CET Integrated')}
                    className="btn-shimmer w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for 11th CET</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 11th JEE */}
              <div 
                id="11th-jee" 
                className="scroll-mt-28 bg-white rounded-3xl border-2 border-purple-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-purple-500 transition-all flex flex-col justify-between group relative"
              >
                <div className="absolute -top-3 right-6 bg-purple-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                  Flagship Engineering
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Atom className="w-3.5 h-3.5 text-purple-600" />
                      <span>Class 11th</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">2-Year Batch</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-950 group-hover:text-purple-600 transition">
                    11th JEE Program
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    JEE (Main &amp; Advanced) Two-Year Integrated
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Rigorous preparation for IIT-JEE under Kota &amp; Hyderabad experienced mentors. Focuses on advanced mechanics, physical chemistry concepts, coordinate geometry, and algebraic depth.
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Daily Practice Problems (DPP) with solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bi-weekly Computer-Based Tests (CBT)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dedicated 2-hour daily doubt resolution halls</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-purple-600" /> Boys &amp; Girls Hostel</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-purple-600" /> Night Study</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleApply('11th JEE (Main & Advanced)')}
                    className="btn-shimmer w-full py-2.5 bg-navy-950 hover:bg-purple-900 text-white font-bold rounded-xl text-xs transition shadow-md shadow-navy-950/30 flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for 11th JEE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 11th NEET */}
              <div 
                id="11th-neet" 
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-rose-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Stethoscope className="w-3.5 h-3.5 text-rose-500" />
                      <span>Class 11th</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">2-Year Batch</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-950 group-hover:text-rose-600 transition">
                    11th NEET Program
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    NEET Medical (UG) Pre-Medical Comprehensive
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Engineered for future doctors targeting Government Medical Colleges (MBBS). In-depth line-by-line NCERT Biology mastery, conceptual physics drills, and chemistry reaction mechanisms.
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% NCERT Biology line-by-line decoding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>720-marks OMR pattern testing &amp; analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Physics conceptual numerical workshops</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-rose-600" /> Chandwad Hostel</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-rose-600" /> High Selection Rate</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleApply('11th NEET Medical Integrated')}
                    className="btn-shimmer w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition shadow-md shadow-rose-600/30 flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for 11th NEET</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 2: CLASS 12TH PROGRAMS
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === '12th') && (
          <section className="space-y-8 animate-fade-in pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  1-Year Target &amp; Rank Booster
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 flex items-center gap-2.5">
                  <span className="w-2.5 h-8 bg-blue-600 rounded-full inline-block"></span>
                  <span>Class 12th Target Wings</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Fast-track syllabus completion, 15-year past paper mastery, intensive mock test series, and board exam synchronization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* 12th CET */}
              <div 
                id="12th-cet" 
                className="scroll-mt-28 bg-white rounded-3xl border-2 border-blue-500/80 p-6 sm:p-7 shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all flex flex-col justify-between group relative"
              >
                <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                  High Demand Batch
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Microscope className="w-3.5 h-3.5 text-blue-600" />
                      <span>Class 12th</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Target 2025–26</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-950 group-hover:text-blue-600 transition">
                    12th CET Program
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    MHT-CET Rank Booster &amp; HSC Board Domination
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Targeted for Class 12 students aiming for high percentiles in MHT-CET. Combines Class 12 HSC board preparation with time-attack CET drills for top government engineering &amp; pharmacy admissions.
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>15-Year Solved CET Question Bank analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Timed 90-minute online exam simulations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Special focus on high-weightage Physics &amp; Maths</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-blue-600" /> Hostel Available</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5 text-blue-600" /> 98.5+ %ile Proven</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleApply('12th CET Target Batch')}
                    className="btn-shimmer w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for 12th CET</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 12th JEE */}
              <div 
                id="12th-jee" 
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Atom className="w-3.5 h-3.5 text-purple-600" />
                      <span>Class 12th</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Target 2025–26</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-950 group-hover:text-purple-600 transition">
                    12th JEE Program
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    JEE Main &amp; Advanced 1-Year Rank Accelerator
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Intensive problem-solving sessions on 12th syllabus and full revision of 11th topics. Rigorous mock test series mirroring NTA CBT exam pattern with detailed question analysis.
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Full syllabus All-India CBT Test Series</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Electrodynamics &amp; Organic Synthesis drills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Error analysis &amp; personalized score enhancement</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-purple-600" /> Residential Campus</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-purple-600" /> 99+ %ile Mentors</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleApply('12th JEE Target Batch')}
                    className="btn-shimmer w-full py-2.5 bg-navy-950 hover:bg-purple-900 text-white font-bold rounded-xl text-xs transition shadow-md shadow-navy-950/30 flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for 12th JEE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 12th NEET */}
              <div 
                id="12th-neet" 
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-rose-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wide">
                      <Stethoscope className="w-3.5 h-3.5 text-rose-500" />
                      <span>Class 12th</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Target 2025–26</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-950 group-hover:text-rose-600 transition">
                    12th NEET Program
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    NEET Medical (UG) 1-Year Target &amp; Test Series
                  </p>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Laser-focused on securing government MBBS medical seats. Covers complete 12th NCERT biology with rapid revision of 11th botany and zoology, alongside numerical speed solving.
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100+ Full-length 720 Marks OMR Mock Tests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Genetics, Ecology &amp; Physiology rapid drills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Negative marking control &amp; time management</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-rose-600" /> Chandwad Hostels</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-rose-600" /> 600+ Marks Track</span>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleApply('12th NEET Target Batch')}
                    className="btn-shimmer w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition shadow-md shadow-rose-600/30 flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for 12th NEET</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </section>
        )}

      </div>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProgram={selectedProgram}
        defaultCampus="Achievers IIT & Medical (Chandwad)"
      />
    </div>
  );
}
