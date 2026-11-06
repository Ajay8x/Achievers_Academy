'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Target, 
  Award, 
  Users, 
  HeartHandshake, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Lightbulb
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            About Achievers Group of Institutes
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Empowering minds and shaping futures through academic excellence, moral integrity, and rural empowerment for over two decades.
          </p>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                Our Institutional Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 leading-tight">
                Nurturing Rural Potential with World-Class Educational Infrastructure
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Achievers Academy was founded on a steadfast conviction: that every student, regardless of geography, deserves access to top-tier academic pedagogy, cutting-edge science labs, and premier competitive exam mentoring.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Over the past 15+ years, Achievers has grown from a visionary foundation into a multi-campus network comprising **Achievers World School in Manmad**, **Achievers IIT &amp; Medical in Chandwad**, and **Wisdom International School in Niphad**. We have proudly mentored more than 18,000 alumni who now study in prestigious IITs, NITs, Government Medical Colleges, and top universities across the nation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold text-navy-900 font-serif">18,000+</span>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Graduates &amp; Alumni</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold text-gold-600 font-serif">200+</span>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Senior Educators &amp; Mentors</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/static_achivers.jpg"
                  alt="Achievers Campus Architecture"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent text-white">
                  <span className="text-xs font-bold text-gold-400 uppercase">Values &amp; Discipline</span>
                  <h4 className="text-lg font-bold font-serif">A Conducive Sanctuary for Holistic Learning</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-navy-700 font-bold">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 mt-1">
              Mission &amp; Vision
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              The guiding principles that drive our commitment to institutional excellence, student character, and societal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-navy-500 transition">
              <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-900 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 font-serif mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                To provide world-class education in rural and semi-urban settings, bridging the gap between student aspiration and transformative opportunity. We instill strong moral values, uncompromising discipline, and leadership qualities to shape responsible citizens who contribute meaningfully to society.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Equal access to premier science &amp; technology coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Inculcate resilience, scientific temper, and self-reliance</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-gold-500 transition">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-900 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 font-serif mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                To become a recognized beacon of excellence in rural and institutional education by nurturing globally competitive, intellectually vibrant, and morally grounded leaders who drive regional and national progress.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Foster 100% academic competence and career readiness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Cultivate ethical, compassionate, and visionary leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
              Pedagogical Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950 mt-1">
              Our Educational Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-navy-950 font-serif">Conceptual Clarity First</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We believe true mastery stems from deep foundational comprehension rather than rote memorization. Our teachers use interactive demonstrations and hands-on experiments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-navy-950 font-serif">Discipline &amp; Character</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Academic success must be anchored in personal character, humility, respect for elders, and a structured daily timetable that includes sports and meditation.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-navy-950 font-serif">Personalized Attention</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                With favorable student-to-teacher ratios, regular doubt-solving clinics, and periodic parent-teacher consultations, no student is left behind.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 text-sm font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-xl shadow transition"
            >
              Connect with Our Academic Mentors
            </button>
          </div>
        </div>
      </section>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

