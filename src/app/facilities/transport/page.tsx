'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bus, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Clock,
  Radio
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function TransportPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Facilities</span>
            <span>/</span>
            <span>Transportation Fleet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            School Bus &amp; Transportation Facilities
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed">
            Punctual, comfortable, and GPS-tracked bus service connecting Manmad, Chandwad, Niphad, and surrounding rural towns.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-navy-700 font-bold">
                Student Commute Safety
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 leading-tight">
                Safety First: Every Route Monitored with Live GPS &amp; CCTV
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Understanding the vast rural distances in Nashik district, Achievers Academy operates an extensive dedicated bus fleet. We ensure that distance never stops a dedicated child from accessing quality education.
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-time GPS vehicle tracking accessible for parents</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dual CCTV cameras and speed governors installed on all buses</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Experienced, police-verified drivers and trained female attendants</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Well-maintained emergency first aid boxes and fire extinguishers</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Inquire for Bus Route &amp; Timings
                </button>
              </div>
            </div>

            {/* Routes Box */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold font-serif text-navy-950">Key Transport Coverage Areas</h3>
                
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-900 block mb-1">Manmad Sector:</span>
                    <span>Umrane, Chandreshwar, Panewadi, Shrinath Dream City, Dahiwal, and Manmad City.</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-900 block mb-1">Chandwad Sector:</span>
                    <span>Vadbare, Dugaon, Kundewadi, Rahud Ghat, Deola Road, and Chandwad Town.</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-900 block mb-1">Niphad &amp; Pimpalgaon Sector:</span>
                    <span>Pimpalgaon Baswant, Lasalgaon, Kundewadi, Sukene, Niphad Station, and rural villages.</span>
                  </div>
                </div>
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

