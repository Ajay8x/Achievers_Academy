'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight, Heart, Smile, Palette, Music } from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function PrePrimaryPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/programs" className="hover:underline">Programs</Link>
            <span>/</span>
            <span>Pre-Primary (Nursery, Jr. &amp; Sr. KG)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Nursery, Junior KG &amp; Senior KG
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed">
            Where learning begins with joy, laughter, sensory discovery, and tender care.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                Foundational Stage (Ages 3 to 6)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 leading-tight">
                Activity-Based Learning in Safe, Loving Classrooms
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At Achievers Academy, early childhood education is designed around the child&apos;s innate wonder. Our toddler rooms in Manmad and Niphad provide child-safe play equipment, sensory learning toys, phonetic storytelling, and musical sessions.
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Montessori-inspired sensory learning kits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Phonics-based English, Hindi &amp; Marathi listening skills</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gross and fine motor skill coordination through outdoor play</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Caring female attendants and child-friendly washrooms</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Apply for Nursery / KG
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition"
                >
                  Schedule Campus Visit
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/images/static_Toddler_Room_19_-_Photo.jpg"
                  alt="Toddler Room"
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
        defaultProgram="Pre-Primary (Nursery, Jr/Sr KG)"
      />
    </div>
  );
}

