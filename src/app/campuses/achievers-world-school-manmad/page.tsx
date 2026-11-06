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
  Calendar,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function ManmadCampusPage() {
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
            <span>Branch 01 • Manmad</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Achievers World School – Manmad
          </h1>
          <p className="text-slate-300 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Shrinath Dream City, Umrane Road, Manmad, Dist. Nashik, Maharashtra</span>
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
                  src="/images/static_achivers.jpg"
                  alt="Achievers World School Manmad Campus"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">Campus Overview</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 mt-1">
                  Nurturing Foundational Curiosity &amp; Academic Excellence
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Achievers World School at Manmad is an institutional milestone designed to provide children in Manmad and surrounding areas with modern, tech-enabled schooling without having to relocate to distant metros.
                </p>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
                  With a carefully designed curriculum combining CBSE standards and regional linguistic richness, students are guided through structured academics, digital learning tools, science labs, and extracurricular sports.
                </p>
              </div>

              {/* Grades & Classes Offered */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold font-serif text-navy-950">Grades Offered at Manmad</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Nursery, Jr. KG &amp; Sr. KG (Toddler Wing)</span>
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
                </div>
              </div>

              {/* Facilities on Campus */}
              <div>
                <h3 className="text-xl font-bold font-serif text-navy-950 mb-4">Key Campus Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <img src="/images/static_Gallery_Computar_Lab_comp_lab_31_-_Photo.jpg" alt="Computer Lab" className="h-32 w-full object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm text-navy-950">Computer Lab</h4>
                    <p className="text-xs text-slate-500 mt-1">High-speed terminals for coding and digital literacy.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <img src="/images/static_Toddler_Room_19_-_Photo.jpg" alt="Toddler Room" className="h-32 w-full object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm text-navy-950">Toddler Play Arena</h4>
                    <p className="text-xs text-slate-500 mt-1">Safe sensory activity tools and creative learning kits.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <img src="/images/static_Gallery_Chemistry_Lab_Day_view_1_-_Photo.jpg" alt="Science Lab" className="h-32 w-full object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm text-navy-950">Science Lab</h4>
                    <p className="text-xs text-slate-500 mt-1">Experimental setups for physics, chemistry, and biology.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Info & Direct Contact */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-navy-950 text-white space-y-6 shadow-xl sticky top-28">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Admissions 2025-26</span>
                  <h3 className="text-xl font-bold font-serif mt-1">Enroll at Manmad</h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Shrinath Dream City, Umrane Road, Manmad</span>
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
                    Apply for Admission
                  </button>

                  <a
                    href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20want%20to%20inquire%20about%20Achievers%20World%20School%20Manmad."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Achievers+World+School+Manmad"
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
        defaultCampus="Achievers World School (Manmad)"
      />
    </div>
  );
}

