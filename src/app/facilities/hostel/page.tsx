'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Utensils, 
  Moon, 
  Sun, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function HostelPage() {
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
            <span>Hostel &amp; Residential Wing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Residential &amp; Hostel Facilities
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed">
            A secure, disciplined, and nurturing second home where students build lifelong friendships, character, and focused study habits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                Home Away From Home
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 leading-tight">
                Designed for Optimal Study Focus &amp; Physical Wellbeing
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Achievers Academy operates dedicated residential hostel wings (with separate premises for boys and girls) primarily at our Chandwad campus and residential centers.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Students follow a balanced, productive daily regimen that eliminates digital distractions and provides dedicated night study reading halls under the guidance of resident faculty mentors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <Utensils className="w-5 h-5 text-gold-600 mb-2" />
                  <h4 className="font-bold text-navy-950 text-sm">Hygienic Mess</h4>
                  <p className="text-xs text-slate-500 mt-1">4 fresh, balanced, nutritious meals daily planned by nutritionists.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-navy-950 text-sm">24x7 Security</h4>
                  <p className="text-xs text-slate-500 mt-1">Full CCTV coverage, biometric entry, and resident wardens.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                >
                  Inquire for Hostel Seat
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/images/static_Chandwad.jpeg"
                  alt="Hostel Campus"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Structured Daily Regimen Schedule */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1 text-gold-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Disciplined Timetable</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-navy-950">
                A Day in the Life of an Achievers Hosteller
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-gold-600 text-sm block">05:30 AM – 07:00 AM</span>
                <h5 className="font-bold text-navy-950 text-sm">Wake Up &amp; Fitness</h5>
                <p className="text-slate-500">Morning alarm, personal hygiene, yoga, meditation, and light physical fitness.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-gold-600 text-sm block">07:15 AM – 08:00 AM</span>
                <h5 className="font-bold text-navy-950 text-sm">Nutritious Breakfast</h5>
                <p className="text-slate-500">Fresh wholesome breakfast and milk prepared under clean hygienic standards.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-gold-600 text-sm block">08:30 AM – 02:00 PM</span>
                <h5 className="font-bold text-navy-950 text-sm">Classes &amp; Lab Work</h5>
                <p className="text-slate-500">Structured academic classes, theory lectures, physics/chemistry lab demonstrations.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-gold-600 text-sm block">06:00 PM – 10:30 PM</span>
                <h5 className="font-bold text-navy-950 text-sm">Supervised Night Study</h5>
                <p className="text-slate-500">Self-study in the reading hall with teachers available for on-the-spot doubt clearing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCampus="Achievers IIT & Medical (Chandwad)"
      />
    </div>
  );
}

