'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  Building2, 
  Bus, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Calendar,
  Compass,
  Lightbulb
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCampusModal, setActiveCampusModal] = useState('Achievers World School (Manmad)');

  const openAdmission = (campusName: string) => {
    setActiveCampusModal(campusName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-navy-950 text-white overflow-hidden py-16 md:py-24">
        {/* Background Image Overlay with Deep Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/static_achivers.jpg"
            alt="Achievers Academy Campus"
            className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Admissions Open for Academic Year 2025-26</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight sm:leading-none text-white">
                Nurturing Rural Education, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  Empowering Future Leaders
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Welcome to Achievers Group of Institutes. We bridge the rural-urban educational divide with premier CBSE and State Board schooling, state-of-the-art residential hostels, and proven JEE, NEET &amp; MHT-CET competitive entrance preparation across 3 world-class campuses in Nashik district.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openAdmission('Achievers World School (Manmad)')}
                  className="px-6 py-3.5 text-sm sm:text-base font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Apply for Admission
                </button>

                <Link
                  href="/campuses"
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-sm transition flex items-center gap-2"
                >
                  <span>Explore 3 Campuses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Institutional Highlights */}
              <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-serif">18,000+</span>
                  <span className="text-xs text-slate-400">Success Stories</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-gold-400 font-serif">100%</span>
                  <span className="text-xs text-slate-400">Board Exam Success</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-serif">200+</span>
                  <span className="text-xs text-slate-400">Expert Educators</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-gold-400 font-serif">15+</span>
                  <span className="text-xs text-slate-400">Years of Excellence</span>
                </div>
              </div>
            </div>

            {/* Hero Right Featured Card */}
            <div className="lg:col-span-5">
              <div className="bg-navy-900/80 backdrop-blur-md border border-navy-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gold-500/20 rounded-2xl border border-gold-400/30 text-gold-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">Excellence in Action</span>
                    <h3 className="text-xl font-bold font-serif text-white">Three Distinct Campuses</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Manmad */}
                  <Link 
                    href="/campuses/achievers-world-school-manmad"
                    className="p-3.5 rounded-2xl bg-navy-950/60 border border-navy-800 hover:border-gold-500/40 transition block group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white group-hover:text-gold-400 transition">
                        Achievers World School
                      </span>
                      <span className="text-[10px] bg-navy-800 text-gold-300 font-bold px-2 py-0.5 rounded-full">
                        Manmad
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Nursery to Secondary • CBSE curriculum &amp; modern activity centers
                    </p>
                  </Link>

                  {/* Chandwad */}
                  <Link 
                    href="/campuses/achievers-iit-medical-chandwad"
                    className="p-3.5 rounded-2xl bg-navy-950/60 border border-navy-800 hover:border-gold-500/40 transition block group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white group-hover:text-gold-400 transition">
                        Achievers IIT &amp; Medical
                      </span>
                      <span className="text-[10px] bg-gold-500/20 text-gold-300 font-bold px-2 py-0.5 rounded-full">
                        Chandwad
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      11th &amp; 12th Science • Specialized JEE, NEET &amp; CET entrance coaching
                    </p>
                  </Link>

                  {/* Niphad */}
                  <Link 
                    href="/campuses/wisdom-international-school-niphad"
                    className="p-3.5 rounded-2xl bg-navy-950/60 border border-navy-800 hover:border-gold-500/40 transition block group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white group-hover:text-gold-400 transition">
                        Wisdom International School
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                        Niphad
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Comprehensive schooling • Sprawling campus &amp; residential wing
                    </p>
                  </Link>
                </div>

                <div className="mt-6 pt-5 border-t border-navy-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Hostel &amp; GPS Transport</span>
                  </div>
                  <button
                    onClick={() => openAdmission('Achievers World School (Manmad)')}
                    className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>Instant Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CAMPUSES SPOTLIGHT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-50 text-navy-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-4 h-4 text-navy-600" />
              <span>Multi-Campus Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950">
              Explore Our Premier Campuses
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Three world-class campuses, one united mission — delivering high standards of education, moral discipline, and competitive triumph to students of rural and suburban Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Campus 1: Manmad */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden bg-navy-100">
                <img
                  src="/images/static_achivers.jpg"
                  alt="Achievers World School Manmad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-bold px-3 py-1 rounded-full">
                  Campus 01 • Manmad
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 font-serif group-hover:text-gold-600 transition">
                    Achievers World School
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-navy-600 shrink-0" />
                    <span>Shrinath Dream City, Umrane Road, Manmad</span>
                  </p>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Designed for foundational early childhood learning, Primary &amp; Secondary education with smart classrooms, science labs, and computer labs.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Nursery to Class 10 (CBSE Pattern)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Smart Interactive Classrooms &amp; Labs</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/campuses/achievers-world-school-manmad"
                    className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                  >
                    <span>View Campus Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openAdmission('Achievers World School (Manmad)')}
                    className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-lg shadow-2xs"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Campus 2: Chandwad */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group ring-2 ring-gold-400/50">
              <div className="relative h-56 overflow-hidden bg-navy-100">
                <img
                  src="/images/static_Chandwad.jpeg"
                  alt="Achievers IIT & Medical Chandwad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-bold px-3 py-1 rounded-full">
                  Campus 02 • Chandwad
                </div>
                <div className="absolute top-4 right-4 bg-gold-500 text-navy-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                  JEE &amp; NEET HUB
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 font-serif group-hover:text-gold-600 transition">
                    Achievers IIT &amp; Medical
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-navy-600 shrink-0" />
                    <span>Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road</span>
                  </p>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    The specialized hub for 11th &amp; 12th Science, integrated with high-intensity coaching for JEE Main, JEE Advanced, NEET Medical UG, and MHT-CET.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Integrated 11th &amp; 12th Science Stream</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Dedicated Residential Boys &amp; Girls Hostels</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/campuses/achievers-iit-medical-chandwad"
                    className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                  >
                    <span>View Campus Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openAdmission('Achievers IIT & Medical (Chandwad)')}
                    className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-lg shadow-2xs"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Campus 3: Niphad */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden bg-navy-100">
                <img
                  src="/images/static_Niphad.jpeg"
                  alt="Wisdom International School Niphad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-bold px-3 py-1 rounded-full">
                  Campus 03 • Niphad
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 font-serif group-hover:text-gold-600 transition">
                    Wisdom International School
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-navy-600 shrink-0" />
                    <span>Niphad-Sambhajinagar Road, Niphad</span>
                  </p>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    Sprawling educational campus offering comprehensive schooling, athletic grounds, cultural arts auditorium, and boarding facilities.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>CBSE Affiliated Comprehensive Schooling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Extensive Sports &amp; Cultural Infrastructure</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/campuses/wisdom-international-school-niphad"
                    className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                  >
                    <span>View Campus Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openAdmission('Wisdom International School (Niphad)')}
                    className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-lg shadow-2xs"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT OVERVIEW SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-100 text-gold-900 rounded-full text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-gold-700" />
                <span>Our Vision &amp; Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 leading-tight">
                Empowering Minds, Shaping Futures Through Two Decades of Educational Excellence
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Achievers Group of Institutes was established with a singular vision: to deliver world-class academic standards to students in rural and suburban regions, bridging the gap between humble beginnings and national aspirations.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                We blend traditional moral discipline with progressive pedagogy, high-tech science laboratories, digital learning platforms, and comprehensive hostel care. Our students consistently excel in CBSE board examinations, Maharashtra State Board, and prestigious competitive entrances like JEE and NEET.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-3">
                    <Lightbulb className="w-5 h-5 text-gold-600" />
                  </div>
                  <h4 className="font-bold text-navy-950 text-sm">Value-Driven Mentorship</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Instilling integrity, self-discipline, and leadership qualities alongside academics.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-navy-700" />
                  </div>
                  <h4 className="font-bold text-navy-950 text-sm">National Entrance Record</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Proven track record of qualifying top students for premier engineering &amp; medical colleges.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-950 rounded-xl shadow transition"
                >
                  <span>Read Full About Us &amp; Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/static_physics__lab_36_-_Photo.jpg"
                    alt="Physics Lab"
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/static_Gallery_Computar_Lab_comp_lab_31_-_Photo.jpg"
                    alt="Computer Lab"
                    className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/static_Toddler_Room_19_-_Photo.jpg"
                    alt="Toddler Learning"
                    className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/static_Gallery_auditorium_Auditorium-1_41_-_Photo.jpg"
                    alt="Auditorium"
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC PROGRAMS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
              Comprehensive Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 mt-1">
              Explore Our Academic Programs
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              From early childhood foundation to national entrance coaching, our integrated academic pathways guide students at every phase of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Program 1 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-navy-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-800 flex items-center justify-center font-bold text-lg mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-navy-950 font-serif">Nursery to Senior KG</h3>
                <p className="text-xs text-gold-600 font-semibold mt-0.5">Foundational Learning</p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Activity-based child-centric early education focused on motor skills, language fluency, phonics, and curiosity development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/programs/pre-primary"
                  className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                >
                  <span>View Pre-Primary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-navy-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-lg mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-navy-950 font-serif">Primary &amp; Secondary</h3>
                <p className="text-xs text-navy-600 font-semibold mt-0.5">Class 1 to 10 (CBSE &amp; State)</p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Rigorous academic grounding in Mathematics, Science, Social Sciences, Computer literacy, and regional &amp; international languages.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/programs/primary-secondary"
                  className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                >
                  <span>View Primary &amp; Secondary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Program 3 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-navy-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-lg mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-navy-950 font-serif">Higher Secondary</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">Class 11 &amp; 12 Science</p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Physics, Chemistry, Mathematics &amp; Biology (PCMB) with high-standard laboratory sessions and targeted Maharashtra State Board curriculum.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/programs/higher-secondary"
                  className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                >
                  <span>View Higher Secondary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Program 4 */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 text-white border border-navy-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-full blur-xl"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-400 text-navy-950 flex items-center justify-center font-bold text-lg mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-white font-serif">JEE, NEET &amp; MHT-CET</h3>
                <p className="text-xs text-gold-400 font-semibold mt-0.5">National Entrance Test Prep</p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Structured test series, daily problem sheets (DPPs), individual doubt mentoring, and dedicated study hours at our Chandwad campus.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-800">
                <Link
                  href="/programs/competitive-exams"
                  className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                >
                  <span>View Competitive Prep</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL & TRANSPORTATION FACILITIES SHOWCASE */}
      <section className="py-20 bg-navy-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hostel */}
            <div className="p-8 rounded-3xl bg-navy-900/80 border border-navy-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gold-500/20 text-gold-400 border border-gold-400/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">Residential Wing</span>
                  <h3 className="text-2xl font-bold font-serif text-white">Dedicated Hostel Facilities</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Our hostel provides a disciplined, peaceful, and supportive home away from home. We maintain separate wings for boys and girls with 24/7 CCTV vigilance and resident wardens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Nutritious &amp; Hygienic Meals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Night Study Reading Hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Daily Morning Yoga &amp; Fitness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Medical Support</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/facilities/hostel"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300"
                >
                  <span>Explore Hostel Routine &amp; Amenities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Transport */}
            <div className="p-8 rounded-3xl bg-navy-900/80 border border-navy-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gold-500/20 text-gold-400 border border-gold-400/30">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">Fleet Connectivity</span>
                  <h3 className="text-2xl font-bold font-serif text-white">Safe GPS-Tracked Transportation</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Safe, comfortable, and punctual transportation across Manmad, Chandwad, Niphad, and surrounding rural villages. Every bus in our fleet is verified for student safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Live GPS Tracking On Every Bus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>CCTV Cameras &amp; Speed Governors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Female Bus Attendants for Juniors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Extensive Rural Network Coverage</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/facilities/transport"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300"
                >
                  <span>View Transport Routes &amp; Safety</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC ACHIEVEMENTS & RESULTS SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
              Proven Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 mt-1">
              From Vision to Victory: 100% Exam Success
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Year after year, Achievers Academy students produce district-topping performances in Maharashtra HSC Board and score top percentiles in JEE, NEET, and MHT-CET.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Result Card 1 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-4 text-center group hover:shadow-lg transition">
              <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-navy-100 flex items-center justify-center">
                <img
                  src="/images/static_result_HSC.jpeg"
                  alt="HSC Results"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-100 text-gold-900 px-2.5 py-0.5 rounded-full">
                HSC Board Toppers
              </span>
              <h4 className="font-bold text-navy-950 mt-2 text-base font-serif">100% Pass Result</h4>
              <p className="text-xs text-slate-500 mt-1">Science Stream (PCM &amp; PCB)</p>
            </div>

            {/* Result Card 2 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-4 text-center group hover:shadow-lg transition">
              <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-navy-100 flex items-center justify-center">
                <img
                  src="/images/static_result_student1.jpg"
                  alt="JEE Aspirants"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-100 text-navy-900 px-2.5 py-0.5 rounded-full">
                JEE Main &amp; Advanced
              </span>
              <h4 className="font-bold text-navy-950 mt-2 text-base font-serif">99+ Percentile Club</h4>
              <p className="text-xs text-slate-500 mt-1">Qualified for Premier IITs &amp; NITs</p>
            </div>

            {/* Result Card 3 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-4 text-center group hover:shadow-lg transition">
              <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-navy-100 flex items-center justify-center">
                <img
                  src="/images/static_result_student5.jpg"
                  alt="NEET Qualifiers"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                NEET Medical UG
              </span>
              <h4 className="font-bold text-navy-950 mt-2 text-base font-serif">Top MBBS Selections</h4>
              <p className="text-xs text-slate-500 mt-1">Government Medical College Seats</p>
            </div>

            {/* Result Card 4 */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-4 text-center group hover:shadow-lg transition">
              <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-navy-100 flex items-center justify-center">
                <img
                  src="/images/static_result_student7.jpg"
                  alt="CET Rankers"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                MHT-CET Champions
              </span>
              <h4 className="font-bold text-navy-950 mt-2 text-base font-serif">98.5+ Percentile</h4>
              <p className="text-xs text-slate-500 mt-1">Top Engineering &amp; Pharmacy colleges</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-xl shadow transition"
            >
              <span>Explore Detailed Results &amp; Scorecards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STUDENT & PARENT TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-navy-700 font-bold">
              Voices of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 mt-1">
              What Our Students &amp; Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;The guidance and structured preparation at Achievers helped me crack JEE with confidence. The faculty support, regular tests, and doubt-solving sessions made a huge difference in my performance.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="font-bold text-navy-950 text-sm block">Rohan More</span>
                <span className="text-xs text-gold-600 font-medium">JEE Main (99.12 Percentile) • Chandwad Campus</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;Achievers provided the perfect environment for NEET preparation. The NCERT-oriented test series, hostel night-reading room, and disciplined daily routine kept me focused throughout.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="font-bold text-navy-950 text-sm block">Pooja Kulkarni</span>
                <span className="text-xs text-emerald-700 font-medium">NEET Qualifier (635/720) • Medical Batch</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;We are very grateful for the caring atmosphere and state-of-the-art infrastructure at Wisdom International. The teachers give individual attention to each child, and the GPS bus gives us complete peace of mind.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="font-bold text-navy-950 text-sm block">Sunita &amp; Nitin Ahire</span>
                <span className="text-xs text-navy-700 font-medium">Parents of Ananya (Class 7) • Niphad Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS & RECOGNITION BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            Institutional Recognition
          </span>
          <h3 className="text-2xl font-bold font-serif text-navy-950 mb-10">
            Affiliations &amp; Accreditations
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/images_accreditations_6.jpg" alt="CBSE" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-sm">CBSE Affiliation</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Central Board of Secondary Education</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/images_accreditations_5.jpg" alt="Maharashtra State Board" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-sm">Maharashtra HSC &amp; SSC</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">State Board of Secondary &amp; Higher Secondary</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/static_msbte.jfif" alt="MSBTE" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-sm">MSBTE Approved</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Maharashtra State Board of Technical Education</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/static_pci.jfif" alt="PCI" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-sm">PCI Recognized</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Pharmacy Council of India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION ENQUIRY CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Join Achievers Academy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
                Admissions Open for Academic Year 2025-2026
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Take the first step toward high academic achievement and holistic development. Book a counseling appointment, campus tour, or fill out the online admission enquiry form.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:8459360161"
                  className="inline-flex items-center gap-2 text-sm text-gold-400 font-semibold hover:underline"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Admission Desk: +91 8459360161</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => openAdmission('Achievers World School (Manmad)')}
                className="w-full py-4 text-center text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-xl shadow-lg transition"
              >
                Apply Online Now
              </button>

              <a
                href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20want%20to%20know%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCampus={activeCampusModal}
      />
    </div>
  );
}
