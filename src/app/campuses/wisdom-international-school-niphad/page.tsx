'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Bus, 
  MessageCircle,
  ExternalLink,
  Award
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function NiphadCampusPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gold-400 mb-3">
            <Link href="/campuses" className="hover:underline">Campuses</Link>
            <span>/</span>
            <span>Branch 03 • Niphad</span>
          </div>
          <div className="inline-block bg-emerald-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            CBSE Affiliated Comprehensive Schooling
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Wisdom International School – Niphad
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Niphad-Sambhajinagar Road, Niphad, Dist. Nashik, Maharashtra</span>
          </p>
        </div>
      </section>

      {/* Campus Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/images/static_Niphad.jpeg"
                  alt="Wisdom International School Niphad Campus"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Holistic Campus Environment</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 mt-1">
                  Excellence in Comprehensive CBSE Schooling &amp; Character Building
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Wisdom International School in Niphad is an expansive, tranquil campus surrounded by green nature. It combines high academic rigour with athletic training, performing arts, and moral education.
                </p>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
                  The campus is equipped with an indoor auditorium for cultural expressions, broad athletic fields, specialized biology, chemistry and computer labs, and a well-curated library.
                </p>
              </div>

              {/* Programs Offered */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold font-serif text-navy-950">Grades &amp; Curriculum at Niphad</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Nursery, Jr. KG &amp; Sr. KG</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Primary School (Class 1 to 5)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Middle School (Class 6 to 8)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Secondary School (Class 9 &amp; 10)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Holistic Co-curricular &amp; Sports Clubs</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Daily GPS Bus Transport from Pimpalgaon &amp; Rural Niphad</span>
                  </div>
                </div>
              </div>

              {/* Campus Infrastructure Highlights */}
              <div>
                <h3 className="text-xl font-bold font-serif text-navy-950 mb-4">Infrastructure Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <img src="/images/static_Gallery_auditorium_Auditorium-1_41_-_Photo.jpg" alt="Auditorium" className="h-32 w-full object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm text-navy-950">Grand Auditorium</h4>
                    <p className="text-xs text-slate-500 mt-1">For performing arts, debates, and annual conferences.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <img src="/images/static_Gallery_Biology_Lab_Day_view_6_-_Photo.jpg" alt="Biology Lab" className="h-32 w-full object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm text-navy-950">Biology &amp; Life Sciences</h4>
                    <p className="text-xs text-slate-500 mt-1">Equipped with microscopes, anatomical models, and specimens.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <img src="/images/static_Gallery_activities_activity14.jpg" alt="Outdoor Sports" className="h-32 w-full object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm text-navy-950">Sports &amp; Athletics</h4>
                    <p className="text-xs text-slate-500 mt-1">Cricket, volleyball, football pitches, and track athletics.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Info & Direct Contact */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-navy-950 text-white space-y-6 shadow-xl sticky top-28">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Admissions 2025-26</span>
                  <h3 className="text-xl font-bold font-serif mt-1">Enroll at Niphad</h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Niphad-Sambhajinagar Road, Niphad</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <a href="tel:8459360161" className="hover:text-white block">+91 8459360161</a>
                      <a href="tel:8999542174" className="hover:text-white block">+91 8999542174</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="break-all">achieversgroupofinstitutes@gmail.com</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold rounded-xl text-xs transition shadow"
                  >
                    Apply to Wisdom International
                  </button>

                  <a
                    href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20want%20to%20inquire%20about%20Wisdom%20International%20School%20Niphad."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Wisdom+International+School+Niphad"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs transition flex items-center justify-center gap-2 border border-white/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCampus="Wisdom International School (Niphad)"
      />
    </div>
  );
}

