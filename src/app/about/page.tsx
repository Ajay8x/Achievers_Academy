'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Target, 
  Compass, 
  Quote, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import AdmissionModal from '@/components/AdmissionModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800">
      
      {/* =========================================================================
          1. HERO BANNER: Warm Sunrise to Deep Blue Gradient
         ========================================================================= */}
      <section className="relative bg-gradient-to-r from-amber-600 via-navy-900 to-[#0B1E3D] text-white py-20 sm:py-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight text-white drop-shadow-sm">
            About Our Achievers Group of Institute
          </h1>
          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Empowering minds, shaping futures through excellence in education for over two decades
          </p>
        </div>
      </section>


      {/* =========================================================================
          2. OUR MISSION & VISION: 2 Side-by-Side Cards
         ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950">
              Our Mission &amp; Vision
            </h2>
            <div className="w-14 h-1 bg-amber-400 rounded-full mx-auto mt-2.5 mb-3"></div>
            <p className="text-xs sm:text-sm text-slate-600">
              Guiding principles that drive our commitment to educational excellence and student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Mission Card */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border-2 border-amber-300/80 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-5">
                <Target className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-navy-950 text-center mb-4">
                Our Mission
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center">
                &ldquo;Provide world-class education, earlier in a rural setting to bridge the gap between opportunity and dreams. Instilling strong moral values, discipline, and leadership qualities to shape responsible citizens who contribute meaningfully to society.&rdquo;
              </p>
            </div>

            {/* Vision Card */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border-2 border-blue-900/60 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-navy-900 flex items-center justify-center mx-auto mb-5">
                <Compass className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-navy-950 text-center mb-4">
                Our Vision
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center">
                &ldquo;To become a beacon of excellence in rural education by nurturing globally competent, confident, and compassionate learners through world-class facilities, innovative teaching, and strong value-based learning.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          3. WELCOME TO ACHIEVERS WORLD SCHOOL
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image: Neoclassical Portico Campus */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/static_achivers.jpg"
                  alt="Achievers World School Campus"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block">
                WELCOME TO
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight leading-tight text-navy-950">
                ACHIEVERS <span className="text-amber-500 font-serif">WORLD SCHOOL</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located at the heart of academic excellence, our Achievers zone is a proud reflection of the dedication, discipline, and perseverance nurtured at our institution. Each achievement represents not just individual success, but the collective effort of students, educators, and a supportive learning environment that encourages excellence.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Through a strong focus on academic rigor, character building, and holistic development, our achievers are empowered to excel in academics, sports, arts, and leadership. These accomplishments inspire future generations to dream bigger, work harder, and strive for excellence in every pursuit.
              </p>

              <div className="pt-2">
                <Link
                  href="/campuses/achievers-world-school-manmad"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-950 hover:text-amber-600 transition"
                >
                  <span>Explore AWS Manmad Campus</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          4. KEY STATISTICS BANNER: Deep Royal Navy Blue Banner
         ========================================================================= */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B1E3D] text-white p-8 sm:p-12 shadow-xl border border-navy-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="pt-4 md:pt-0">
                <span className="block text-3xl sm:text-5xl font-extrabold font-serif text-amber-400">
                  15+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1 block">
                  Years of Excellence
                </span>
              </div>

              <div className="pt-4 md:pt-0">
                <span className="block text-3xl sm:text-5xl font-extrabold font-serif text-amber-400">
                  18000+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1 block">
                  Students Enrolled
                </span>
              </div>

              <div className="pt-4 md:pt-0">
                <span className="block text-3xl sm:text-5xl font-extrabold font-serif text-amber-400">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1 block">
                  Success Rate
                </span>
              </div>

              <div className="pt-4 md:pt-0">
                <span className="block text-3xl sm:text-5xl font-extrabold font-serif text-amber-400">
                  5
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium mt-1 block">
                  Curriculum Options
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          5. MEET OUR FOUNDER: Shri. Roshan Dilip Lokhande
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy-950">
              Meet Our Founder
            </h2>
            <div className="w-14 h-1 bg-amber-400 rounded-full mx-auto mt-2.5 mb-3"></div>
            <p className="text-xs sm:text-sm text-slate-600">
              Visionary leadership that has transformed educational excellence in rural Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold tracking-wider text-amber-600 uppercase block">
                FOUNDER &amp; DIRECTOR
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950">
                Shri. Roshan Dilip Lokhande
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Shri. Roshan Dilip Lokhande is the Founder and Director of Achievers Academy. With a strong passion for education and student development, he established the academy to provide quality learning, clear guidance, and a supportive academic environment.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                His vision is to help students build confidence, discipline, and achieve their best in competitive exams. Under his leadership, Achievers Academy focuses on excellence, innovation, and student-centered teaching.
              </p>

              {/* Quote Box */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white border border-amber-200 shadow-sm relative">
                <Quote className="w-8 h-8 text-amber-400/40 absolute top-3 right-4" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Education is not just about academic excellence; it is about nurturing compassionate, confident individuals who can make a positive difference in the world.&rdquo;
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-2.5 bg-navy-950 hover:bg-amber-600 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-sm"
                >
                  Connect with Founder&apos;s Desk
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/static_achivers.jpg"
                  alt="Founder Leadership & Vision"
                  className="w-full h-80 sm:h-96 object-cover"
                />
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
