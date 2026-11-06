'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Atom, CheckCircle2, ArrowRight, Award, Building2 } from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function HigherSecondaryPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/programs" className="hover:underline">Programs</Link>
            <span>/</span>
            <span>Higher Secondary (11th &amp; 12th Science)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Higher Secondary (Class 11 &amp; 12 Science)
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed">
            Junior college science stream with dedicated practical laboratories, expert subject faculties, and 100% board examination success record.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
                Junior College Science Stream
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 leading-tight">
                Solidifying Foundations in Physics, Chemistry, Math &amp; Biology
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our Higher Secondary Science program prepares students thoroughly for the Maharashtra State Board HSC examination while creating seamless conceptual bridges to professional competitive tests.
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>State-of-the-art Physics, Chemistry, and Biology laboratories</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rigorous regular unit tests, term exams, and prelim mock papers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated doubt clearance desks available daily</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Options for integrated residential hostel at Chandwad campus</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Apply for Class 11 Science
                </button>
                <Link
                  href="/results"
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition"
                >
                  View Board Results
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/images/static_physics__lab_36_-_Photo.jpg"
                  alt="Physics Lab"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProgram="Class 11 Science (State Board)"
      />
    </div>
  );
}

