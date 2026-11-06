'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Phone, 
  Bus, 
  ShieldCheck,
  Award
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function CampusesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('Achievers World School (Manmad)');

  const handleApply = (campus: string) => {
    setSelectedCampus(campus);
    setModalOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
            Campuses Across Nashik District
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Our Campuses &amp; Learning Hubs
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Discover our three institutional centers in Manmad, Chandwad, and Niphad, each equipped with dedicated modern facilities and inspiring academic atmospheres.
          </p>
        </div>
      </section>

      {/* Campuses Detailed Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Campus 1: Manmad */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/static_achivers.jpg"
                alt="Achievers World School Manmad"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-800 bg-navy-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Branch 01 • Manmad
                </span>
                <span className="text-xs font-semibold text-slate-500">CBSE Curriculum</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                Achievers World School
              </h2>

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Shrinath Dream City, Umrane Road, Manmad, Dist. Nashik</span>
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Achievers World School in Manmad provides early childhood foundational education through secondary schooling. Equipped with state-of-the-art computer labs, science labs, a vibrant toddler room, and activity areas that inspire children to discover their full potential.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Nursery, Jr. &amp; Sr. KG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Primary (1st to 5th)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Secondary (6th to 10th)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>GPS Transport Available</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/campuses/achievers-world-school-manmad"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-950 rounded-xl transition flex items-center gap-1.5"
                >
                  <span>Explore Manmad Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleApply('Achievers World School (Manmad)')}
                  className="px-5 py-2.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-xl transition"
                >
                  Apply to Manmad
                </button>
              </div>
            </div>
          </div>

          {/* Campus 2: Chandwad */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-slate-50 border-2 border-gold-400/40 shadow-sm">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md order-last lg:order-first">
              <img
                src="/images/static_Chandwad.jpeg"
                alt="Achievers IIT & Medical Chandwad"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gold-900 bg-gold-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Branch 02 • Chandwad
                </span>
                <span className="text-xs font-bold text-navy-900 bg-gold-400 px-2 py-0.5 rounded">
                  Competitive Entrance Hub
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                Achievers IIT &amp; Medical
              </h2>

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad</span>
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                The flagship residential coaching center for Higher Secondary Science (11th &amp; 12th) along with specialized preparation for JEE (Main &amp; Advanced), NEET Medical UG, and MHT-CET. Features separate on-campus boys &amp; girls hostels with 24/7 night library reading rooms.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>11th &amp; 12th Science Stream</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>JEE Main &amp; Advanced Batch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>NEET Medical UG Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Boys &amp; Girls Residential Hostel</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/campuses/achievers-iit-medical-chandwad"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-950 rounded-xl transition flex items-center gap-1.5"
                >
                  <span>Explore Chandwad Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleApply('Achievers IIT & Medical (Chandwad)')}
                  className="px-5 py-2.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-xl transition"
                >
                  Apply to Chandwad
                </button>
              </div>
            </div>
          </div>

          {/* Campus 3: Niphad */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/static_Niphad.jpeg"
                alt="Wisdom International School Niphad"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Branch 03 • Niphad
                </span>
                <span className="text-xs font-semibold text-slate-500">CBSE Affiliated</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                Wisdom International School
              </h2>

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Niphad-Sambhajinagar Road, Niphad, Dist. Nashik</span>
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                A scenic, expansive educational campus dedicated to progressive schooling from Nursery to Class 10. Equipped with athletic tracks, an arts auditorium, modern science laboratories, and high-safety transportation.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Comprehensive Schooling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sports Ground &amp; Athletics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Arts &amp; Culture Auditorium</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>GPS Bus Routes to Pimpalgaon</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/campuses/wisdom-international-school-niphad"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-950 rounded-xl transition flex items-center gap-1.5"
                >
                  <span>Explore Niphad Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleApply('Wisdom International School (Niphad)')}
                  className="px-5 py-2.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-xl transition"
                >
                  Apply to Niphad
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
        defaultCampus={selectedCampus}
      />
    </div>
  );
}

