'use client';

import React, { useState, useEffect } from 'react';
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
  Lightbulb,
  Trophy,
  Clock,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Quote,
  Check
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCampusModal, setActiveCampusModal] = useState('Achievers World School (Manmad)');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rohan More',
      badge: 'JEE Advanced Qualifier • 99.12 %ile',
      campus: 'Achievers IIT & Medical – Chandwad',
      quote: 'The rigorous coaching and structured doubt sessions at Achievers gave me the edge I needed to qualify for top engineering institutes. The Kota faculty and late-night reading room in the hostel made a tremendous impact on my discipline.',
      score: '99.12 %ile',
      photo: '/images/static_result_student1.jpg'
    },
    {
      id: 2,
      name: 'Pooja Kulkarni',
      badge: 'NEET UG Qualifier • GMC Admission',
      campus: 'Achievers IIT & Medical – Chandwad',
      quote: 'Achievers provided the perfect environment for NEET preparation. With dedicated NCERT-based mock tests, separate air-cooled hostel rooms, and regular counseling, I secured a seat in a Government Medical College without having to leave Nashik.',
      score: '635 / 720',
      photo: '/images/static_result_student5.jpg'
    },
    {
      id: 3,
      name: 'Sahil Deshmukh',
      badge: 'MHT-CET Topper • 98.8 %ile',
      campus: 'Higher Secondary Science Stream',
      quote: 'Synchronizing board exam preparation with competitive entrance coaching saved me hours of daily travel. The teachers are always approachable, and the integrated syllabus model is second to none.',
      score: '98.8 %ile',
      photo: '/images/static_result_student7.jpg'
    }
  ];

  // Auto-change testimonial every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openAdmission = (campusName: string) => {
    setActiveCampusModal(campusName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-white text-slate-800">
      
      {/* =========================================================================
          1. HERO BANNER: Full-Width Sun-Kissed Campus Architecture
         ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <div className="relative h-[480px] sm:h-[560px] md:h-[640px] lg:h-[720px] w-full">
          <img
            src="/images/static_achivers.jpg"
            alt="Achievers Group of Institutes Campus"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
          {/* Subtle sun flare & gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent"></div>

          {/* Floating Admission Highlights on Hero */}
          <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-navy-950/85 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 text-white max-w-2xl shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Admissions Open for Academic Year 2025-26</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold font-serif leading-tight text-white">
                  Achievers Group of Institutes
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl leading-relaxed">
                  Transforming rural education into global leadership across 3 world-class campuses: Manmad, Chandwad, and Niphad.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => openAdmission('Achievers World School (Manmad)')}
                    className="px-5 py-2.5 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-navy-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition transform hover:-translate-y-0.5"
                  >
                    Apply for Admission 2025-26
                  </button>
                  <Link
                    href="/campuses"
                    className="px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold rounded-xl text-xs sm:text-sm transition flex items-center gap-1.5"
                  >
                    <span>Explore Campuses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          2. ABOUT US: "Nurturing Rural Education"
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-amber-800 bg-amber-100 rounded-full">
                About Us
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-navy-950 leading-tight">
                Nurturing <span className="italic text-amber-600 font-serif">Rural Education</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Achievers Group of Institutes was established with a visionary mission: to eliminate the educational divide between metropolitan cities and rural India. By bringing modern CBSE curricula, Kota-standard competitive exam faculty, high-tech science laboratories, and disciplined residential hostels to Nashik district, we empower rural and suburban students to excel at the highest national levels.
              </p>

              {/* 3 Stat Boxes in a Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-center sm:text-left transition hover:shadow-sm">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-navy-950 font-serif">
                    18,000+
                  </span>
                  <span className="text-xs text-slate-600 font-medium mt-1 block">
                    Alumni &amp; Students
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-center sm:text-left transition hover:shadow-sm">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-600 font-serif">
                    200+
                  </span>
                  <span className="text-xs text-slate-600 font-medium mt-1 block">
                    Expert Faculty
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-center sm:text-left transition hover:shadow-sm">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-navy-950 font-serif">
                    15+
                  </span>
                  <span className="text-xs text-slate-600 font-medium mt-1 block">
                    Years Legacy
                  </span>
                </div>
              </div>

              {/* Read More Button */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-sm"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>
            </div>

            {/* Right Side: Neoclassical Portico Campus Entrance Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
                <img
                  src="/images/static_achivers.jpg"
                  alt="Achievers Academy Grand Campus Architecture"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                    Grand Campus Infrastructure
                  </span>
                  <h4 className="text-lg font-bold font-serif text-white mt-0.5">
                    World-Class Learning Environment
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Equipped with modern smart classes, sports grounds, and dedicated labs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. "What You Want to Explore Our Institutes": 3 Campus Cards
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950">
              What You Want to <span className="italic text-amber-600 font-serif">Explore Our Institutes</span>
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Choose the institute you are interested in and discover the world-class educational experience we offer across Nashik district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Campus Card 1: Manmad */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/static_achivers.jpg"
                    alt="Achievers World School Manmad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-sm uppercase tracking-wider">
                      CBSE Pattern
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold drop-shadow-md">
                    Manmad Campus
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-navy-950 group-hover:text-amber-600 transition">
                    Achievers World School – Manmad
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Shrinath Dream City, Umrane Road</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Nursery to Class 10. Features engaging toddler sensory arenas, digital smart boards, computer coding lab, and safe GPS transport.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/campuses/achievers-world-school-manmad"
                  className="w-full py-2.5 px-4 bg-navy-950 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Campus Card 2: Chandwad */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/static_Chandwad.jpeg"
                    alt="Achievers IIT & Medical Chandwad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-navy-950 text-gold-400 shadow-sm uppercase tracking-wider">
                      IIT-JEE / NEET
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold drop-shadow-md">
                    Chandwad Campus
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-navy-950 group-hover:text-amber-600 transition">
                    Achievers IIT &amp; Medical – Chandwad
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Opp. Indian Oil Petrol Pump, Manmad Road</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Specialized 11th &amp; 12th Science with Kota-trained faculty for JEE, NEET, and CET. Features on-campus boys &amp; girls hostels with 24x7 study halls.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/campuses/achievers-iit-medical-chandwad"
                  className="w-full py-2.5 px-4 bg-navy-950 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Campus Card 3: Niphad */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/static_Niphad.jpeg"
                    alt="Wisdom International School Niphad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-700 text-white shadow-sm uppercase tracking-wider">
                      CBSE Board
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold drop-shadow-md">
                    Niphad Campus
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-navy-950 group-hover:text-amber-600 transition">
                    Wisdom International School – Niphad
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Niphad-Sambhajinagar Road</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    A grand green campus with athletics track, cultural auditorium, physics &amp; chemistry labs, and comprehensive bus connectivity across Pimpalgaon.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/campuses/wisdom-international-school-niphad"
                  className="w-full py-2.5 px-4 bg-navy-950 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          4. "Explore Our Residential Facilities": Deep Navy Section
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0B1E3D] text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Explore Our <span className="italic text-amber-400 font-serif">Residential Facilities</span>
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Providing students with safe, comfortable, and disciplined infrastructure for uninterrupted learning and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Bus Facility Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-900/80 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mb-6">
                  <Bus className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold font-serif text-white">
                  Bus Facility
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Safe, reliable, and GPS-tracked transportation network covering all major rural and urban routes across Nashik district.
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>GPS-Enabled Live Vehicle Tracking for Parents</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Experienced, Licensed &amp; Police-Verified Drivers</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Female Attendants for Pre-Primary &amp; Junior Students</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Extensive Coverage: Manmad, Chandwad, Niphad &amp; Villages</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Strict On-Time Arrival &amp; Route Safety Audits</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/facilities/transport"
                  className="inline-block px-7 py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold rounded-xl text-xs sm:text-sm transition shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>

            {/* Hostel Facility Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-900/80 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold font-serif text-white">
                  Hostel Facility
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Home away from home with disciplined atmosphere, hygienic food, 24x7 security, and supervised evening study hours.
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Separate Secure Hostels for Boys &amp; Girls</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Nutritious &amp; Pure Vegetarian Mess (4 Fresh Meals Daily)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24x7 Resident Wardens, CCTV Surveillance &amp; Guards</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Supervised Night Study &amp; Dedicated Reading Rooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>RO Purified Drinking Water &amp; 24x7 Power Backup</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/facilities/hostel"
                  className="inline-block px-7 py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold rounded-xl text-xs sm:text-sm transition shadow-lg"
                >
                  Explore More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          5. "Explore Our Learning Ecosystem": 3 Programs + 4 Quick Cards
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950">
              Explore Our <span className="italic text-amber-600 font-serif">Learning Ecosystem</span>
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Comprehensive education tailored for every stage of your child&apos;s academic journey.
            </p>
          </div>

          {/* 3 Program Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Stage 1: Primary */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-white">
                  <img
                    src="/images/static_Gallery_Classroom_Jr._KG_img1.jpg"
                    alt="Primary Education Classroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white uppercase tracking-wider">
                      Foundation
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-navy-950">
                  Primary
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Nurturing curiosity, foundational literacy, numeracy, and social confidence in an active and joyful environment.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Foundational Learning &amp; Phonetics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Activity-Based Sensory Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Holistic Care &amp; Individual Guidance</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/programs/pre-primary"
                  className="text-xs font-bold text-amber-600 hover:text-navy-950 flex items-center gap-1 transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Stage 2: Primary to Secondary */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-white">
                  <img
                    src="/images/static_achivers.jpg"
                    alt="Primary to Secondary Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-navy-900 text-gold-300 uppercase tracking-wider">
                      CBSE / State
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-navy-950">
                  Primary to Secondary
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Academic rigour, STEM education, conceptual learning, and leadership skills for middle and high school students.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>CBSE &amp; State Board Curricula</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Modern Science &amp; Computer Coding Labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Sports, Cultural Arts &amp; Personality Growth</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/programs/primary-secondary"
                  className="text-xs font-bold text-amber-600 hover:text-navy-950 flex items-center gap-1 transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Stage 3: Higher Secondary */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-white">
                  <img
                    src="/images/static_Gallery_Chemistry_Lab_Day_view_1_-_Photo.jpg"
                    alt="Higher Secondary Science Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-700 text-white uppercase tracking-wider">
                      Competitive
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-navy-950">
                  Higher Secondary
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Rigorous 11th &amp; 12th Science curriculum integrated with Kota faculty coaching for JEE, NEET, and MHT-CET.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Science Stream (PCM &amp; PCB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Integrated Board + Entrance Exam Coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Weekly All-India Tests &amp; Doubt Resolution</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/programs/higher-secondary"
                  className="text-xs font-bold text-amber-600 hover:text-navy-950 flex items-center gap-1 transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* 4 Quick Visual Cards: Campus, Accreditations, Results, Admission */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Quick Card 1: Campus Infrastructure */}
            <Link
              href="/campuses"
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition aspect-square sm:aspect-auto sm:h-48 flex items-end p-4 bg-slate-100"
            >
              <img
                src="/images/static_Gallery_infra_1.jpg"
                alt="Campus Infrastructure"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Tour</span>
                <span className="font-bold text-sm sm:text-base font-serif">Campus Infrastructure</span>
              </div>
            </Link>

            {/* Quick Card 2: Accreditations */}
            <Link
              href="/accreditations"
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition aspect-square sm:aspect-auto sm:h-48 flex items-end p-4 bg-slate-100"
            >
              <img
                src="/images/static_Accreditations.jpg"
                alt="Accreditations & Certificates"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Official</span>
                <span className="font-bold text-sm sm:text-base font-serif">Accreditations</span>
              </div>
            </Link>

            {/* Quick Card 3: Results */}
            <Link
              href="/results"
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition aspect-square sm:aspect-auto sm:h-48 flex items-center justify-center p-4 bg-amber-50"
            >
              <img
                src="/images/static_result.jpg"
                alt="Results"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </Link>

            {/* Quick Card 4: Admission Open */}
            <button
              onClick={() => openAdmission('Achievers World School (Manmad)')}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition aspect-square sm:aspect-auto sm:h-48 flex items-center justify-center p-4 bg-white"
            >
              <img
                src="/images/static_admission.png"
                alt="Admission Open"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </button>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. "Accreditations & Recognition": 4 Official Board Logos
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 mb-3">
            Accreditations &amp; Recognition
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-12">
            Affiliated and recognized by India&apos;s apex educational councils and state boards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center hover:shadow-md transition">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/images_accreditations_6.jpg" alt="CBSE Board" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-xs sm:text-sm">CBSE Affiliation</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Central Board of Secondary Education</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center hover:shadow-md transition">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/images_accreditations_5.jpg" alt="Maharashtra State Board" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-xs sm:text-sm">Maharashtra HSC &amp; SSC</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">State Board of Secondary Education</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center hover:shadow-md transition">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/static_msbte.jfif" alt="MSBTE Approved" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-xs sm:text-sm">MSBTE Approved</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Technical Education Board</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center hover:shadow-md transition">
              <div className="h-16 w-16 flex items-center justify-center mb-3">
                <img src="/images/static_pci.jfif" alt="PCI Recognized" className="max-h-full object-contain" />
              </div>
              <h4 className="font-bold text-navy-950 text-xs sm:text-sm">PCI Recognized</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Pharmacy Council of India</p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          7. "From Vision to Victory: 100% Exam Success!" + 4 TOPPER CARDS
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Victory Banner */}
          <div className="relative rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 p-8 sm:p-12 mb-14 text-navy-950 overflow-hidden shadow-lg">
            <div className="absolute right-4 -bottom-6 text-navy-950/10 pointer-events-none">
              <Trophy className="w-56 h-56" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-navy-950/80 block mb-1">
                  Academic Milestones
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-navy-950">
                  From Vision to Victory: 100% Exam Success!
                </h2>
                <div className="flex flex-wrap items-center gap-6 mt-4 text-navy-950 font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black font-serif">100%</span>
                    <span className="text-xs font-semibold leading-tight">HSC Board<br />Pass Result</span>
                  </div>
                  <div className="h-8 w-px bg-navy-950/20"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black font-serif">250+</span>
                    <span className="text-xs font-semibold leading-tight">Selections in<br />IIT, NIT &amp; GMC</span>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/results"
                  className="px-6 py-3 bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition inline-flex items-center gap-2 shrink-0"
                >
                  <span>View All Results</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Topper Result Cards with Full Face Framing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: JEE Main */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4 bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                <img
                  src="/images/static_result_student1.jpg"
                  alt="JEE Aspirants - Achievers Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                JEE Main &amp; Advanced
              </span>
              <h4 className="font-bold text-navy-950 mt-2.5 text-base font-serif">99+ Percentile Club</h4>
              <p className="text-xs text-slate-500 mt-1">Qualified for Premier IITs &amp; NITs</p>
            </div>

            {/* Card 2: NEET */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4 bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                <img
                  src="/images/static_result_student5.jpg"
                  alt="NEET Qualifiers - Achievers Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                NEET Medical UG
              </span>
              <h4 className="font-bold text-navy-950 mt-2.5 text-base font-serif">Top MBBS Selections</h4>
              <p className="text-xs text-slate-500 mt-1">Government Medical College Seats</p>
            </div>

            {/* Card 3: MHT-CET */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4 bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                <img
                  src="/images/static_result_student7.jpg"
                  alt="CET Rankers - Achievers Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-900 px-3 py-1 rounded-full">
                MHT-CET Champions
              </span>
              <h4 className="font-bold text-navy-950 mt-2.5 text-base font-serif">98.5+ Percentile</h4>
              <p className="text-xs text-slate-500 mt-1">Top Engineering &amp; Pharmacy colleges</p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          8. TESTIMONIALS: "What our students say" with Student Portrait
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Side: Smiling Student in Grey Achievers Polo Shirt */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-50 flex items-center justify-center p-2">
                <img
                  key={testimonials[currentTestimonial].id}
                  src={testimonials[currentTestimonial].photo}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-contain animate-fade-in transition-opacity duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 shadow-md text-center">
                  <span className="font-bold text-navy-950 text-sm block font-serif">
                    {testimonials[currentTestimonial].name}
                  </span>
                  <span className="text-[11px] font-bold text-amber-600 block">
                    {testimonials[currentTestimonial].score}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Heading, Quote Card & Carousel Navigation */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-amber-800 bg-amber-100 rounded-full mb-2">
                  Student Reviews
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950">
                  What our <span className="italic text-amber-600 font-serif">students say</span>
                </h2>
              </div>

              {/* Quote Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
                <div className="text-amber-500/30 absolute top-6 right-6">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic relative z-10">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-navy-950 text-base font-serif">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-xs text-amber-700 font-semibold mt-0.5">
                      {testimonials[currentTestimonial].badge}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {testimonials[currentTestimonial].campus}
                    </p>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 font-bold">
                      {currentTestimonial + 1} / {testimonials.length}
                    </span>
                    <button
                      onClick={prevTestimonial}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-navy-950 hover:text-white transition text-slate-700 border border-slate-200"
                      aria-label="Previous Review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-navy-950 hover:text-white transition text-slate-700 border border-slate-200"
                      aria-label="Next Review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          9. ADMISSION ENQUIRY CTA BANNER
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
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
                  className="inline-flex items-center gap-2 text-sm text-amber-400 font-semibold hover:underline"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Admission Desk: +91 8459360161</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => openAdmission('Achievers World School (Manmad)')}
                className="w-full py-4 text-center text-sm font-bold text-navy-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg transition"
              >
                Apply Online Now
              </button>

              <a
                href="https://wa.me/918459360161?text=Hello%20Achievers%20Academy,%20I%20want%20to%20know%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition text-center"
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
