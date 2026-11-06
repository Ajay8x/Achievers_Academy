'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  Sparkles,
  Award,
  Atom
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function ProgramsIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('Class 11 Science (JEE/NEET)');

  const handleApply = (prog: string) => {
    setSelectedProgram(prog);
    setModalOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
            Curriculum &amp; Learning Pathways
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Academic Programs at Achievers Academy
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            From early childhood foundational discovery to senior secondary science and competitive national entrance coaching, explore our tailored learning streams.
          </p>
        </div>
      </section>

      {/* Main Grid of 4 Core Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Pathway 1 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow">
              <img src="/images/static_Toddler_Room_19_-_Photo.jpg" alt="Toddler" className="w-full h-64 object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-gold-700 bg-gold-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Early Childhood Wing
              </span>
              <h2 className="text-2xl font-bold font-serif text-navy-950">
                Nursery, Junior KG &amp; Senior KG
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our pre-primary curriculum nurtures curiosity, emotional intelligence, foundational phonics, number sense, and social development in an interactive, stress-free environment.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/programs/pre-primary"
                  className="px-5 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Explore Pre-Primary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => handleApply('Pre-Primary (Nursery, Jr/Sr KG)')}
                  className="px-5 py-2.5 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition"
                >
                  Apply Online
                </button>
              </div>
            </div>
          </div>

          {/* Pathway 2 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow">
              <img src="/images/static_Gallery_Classroom_Jr._KG_img1.jpg" alt="Classrooms" className="w-full h-64 object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-navy-800 bg-navy-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Comprehensive Schooling
              </span>
              <h2 className="text-2xl font-bold font-serif text-navy-950">
                Primary &amp; Secondary (Class 1 to 10)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Covering both CBSE and Maharashtra State Board curriculums, with an emphasis on conceptual clarity in Mathematics, Science, and Social Sciences alongside computer literacy and arts.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/programs/primary-secondary"
                  className="px-5 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Explore Schooling</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => handleApply('Secondary School (Class 6 to 10 - CBSE/State)')}
                  className="px-5 py-2.5 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition"
                >
                  Apply Online
                </button>
              </div>
            </div>
          </div>

          {/* Pathway 3 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow">
              <img src="/images/static_physics__lab_36_-_Photo.jpg" alt="Physics Lab" className="w-full h-64 object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Junior College Science
              </span>
              <h2 className="text-2xl font-bold font-serif text-navy-950">
                Higher Secondary (Class 11 &amp; 12 Science)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                State Board affiliated Junior College curriculum for Physics, Chemistry, Mathematics, and Biology (PCMB) with high-grade practical lab work and 100% board passing results.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/programs/higher-secondary"
                  className="px-5 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Explore Higher Secondary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => handleApply('Class 11 Science (State Board)')}
                  className="px-5 py-2.5 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition"
                >
                  Apply Online
                </button>
              </div>
            </div>
          </div>

          {/* Pathway 4 */}
          <div className="p-8 rounded-3xl bg-navy-950 text-white border border-gold-500/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow">
              <img src="/images/static_Chandwad.jpeg" alt="Competitive Prep" className="w-full h-64 object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-navy-950 bg-gold-400 px-3 py-1 rounded-full uppercase tracking-wider">
                  Specialized Coaching
                </span>
                <span className="text-xs text-gold-300 font-semibold">Chandwad Campus</span>
              </div>
              <h2 className="text-2xl font-bold font-serif text-white">
                JEE Main &amp; Adv, NEET Medical UG &amp; MHT-CET
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our national entrance division features dedicated faculty with decades of Kota and Pune coaching experience. Includes Daily Practice Problem sets (DPPs), NTA-pattern mock tests, doubt solving sessions, and residential hostel facilities.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/programs/competitive-exams"
                  className="px-5 py-2.5 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Explore Competitive Coaching</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => handleApply('JEE Main & Advanced Integrated')}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs transition"
                >
                  Apply Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProgram={selectedProgram}
      />
    </div>
  );
}

