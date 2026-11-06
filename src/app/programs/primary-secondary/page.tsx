'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2, ArrowRight, Laptop, Award, ShieldCheck } from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function PrimarySecondaryPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/programs" className="hover:underline">Programs</Link>
            <span>/</span>
            <span>Primary &amp; Secondary Education</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Primary &amp; Secondary (Class 1 to 10)
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed">
            CBSE &amp; Maharashtra State Board curricula balancing academic excellence, analytical thinking, and co-curricular creativity.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-navy-700 font-bold">
                Comprehensive Schooling (Ages 6 to 16)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 leading-tight">
                Cultivating Intellectual Rigour &amp; Practical Problem Solving
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our Primary and Secondary educational programs across Manmad and Niphad campuses are structured to build strong foundations in STEM (Science, Technology, Engineering, Math), linguistic fluency (English, Marathi, Hindi), Social Sciences, and Computer Programming.
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CBSE and State Board syllabus alignment with smart classrooms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Regular science laboratory experiments and computer training</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Early Foundation coaching for NTSE, Olympiads, and Homi Bhabha exams</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Structured sports, arts, music, and debate programs</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Apply for Class 1 to 10
                </button>
                <Link
                  href="/campuses"
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition"
                >
                  View Campuses
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/images/static_Gallery_Computar_Lab_comp_lab_31_-_Photo.jpg"
                  alt="Computer Lab"
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
        defaultProgram="Secondary School (Class 6 to 10 - CBSE/State)"
      />
    </div>
  );
}

