'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight,
  BookOpen,
  Atom,
  GraduationCap,
  Trophy,
  Stethoscope,
  Microscope,
  Lock
} from 'lucide-react';
import AdmissionModal from './AdmissionModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-md bg-white">
        
        {/* =========================================================================
            TOP NAV BAR: Brand Logo + Identity + Helplines + Socials
           ========================================================================= */}
        <div className="bg-[#0B1E3D] text-slate-200 py-2.5 px-4 sm:px-6 lg:px-8 border-b border-navy-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Top Left: Hexagonal Logo + Academy Title */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center p-0.5 bg-white/10 rounded-xl border border-white/15 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/images/achievers_main_logo.png"
                  alt="Achievers Group of Institutes"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold font-serif text-white tracking-wide leading-tight group-hover:text-amber-400 transition">
                  Achievers Group of Institutes
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-slate-300 uppercase">
                  EXCELLENCE IN EDUCATION
                </span>
              </div>
            </Link>

            {/* Top Right: Email, Phone & Social Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
              {/* Email */}
              <a 
                href="mailto:achieversgroupofinstitutes@gmail.com" 
                className="hidden lg:flex items-center gap-1.5 hover:text-amber-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs">achieversgroupofinstitutes@gmail.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:8459360161" 
                className="flex items-center gap-1.5 hover:text-amber-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-white">8459360161</span>
                <span>/</span>
                <span className="text-slate-300">8999542174</span>
              </a>

              {/* Social Circles */}
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold transition"
                >
                  f
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center text-xs font-bold transition"
                >
                  in
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-black text-white flex items-center justify-center text-xs font-bold transition"
                >
                  𝕏
                </a>

                {/* Admin Quick Portal */}
                <Link
                  href="/admin"
                  className="ml-1 text-slate-400 hover:text-white transition"
                  title="Admin Portal"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>

          </div>
        </div>


        {/* =========================================================================
            MAIN NAVBAR: Concise Text Navigation + "✦ Get In Touch" CTA
           ========================================================================= */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            
            {/* Mobile Brand View */}
            <div className="flex md:hidden items-center gap-2">
              <Link href="/" className="font-bold text-navy-950 font-serif text-sm">
                Achievers Academy
              </Link>
            </div>

            {/* Desktop Concise Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
              
              {/* 1. Home */}
              <Link
                href="/"
                className={`py-1 transition ${
                  isActive('/') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                }`}
              >
                Home
              </Link>

              {/* 2. About */}
              <Link
                href="/about"
                className={`py-1 transition ${
                  isActive('/about') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                }`}
              >
                About
              </Link>

              {/* 3. Results (Dropdown) */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setResultsOpen(true)}
                onMouseLeave={() => setResultsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 py-1 transition ${
                    pathname.startsWith('/results') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                  }`}
                >
                  <span>Results</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${resultsOpen ? 'rotate-180' : ''}`} />
                </button>

                {resultsOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 animate-fade-in ring-1 ring-black/5">
                      <Link
                        href="/results"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition"
                      >
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <div>
                          <span className="font-bold text-xs text-navy-950 block">All Board &amp; Entrance Results</span>
                          <span className="text-[10px] text-slate-400">100% Pass Milestones</span>
                        </div>
                      </Link>

                      <Link
                        href="/results"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition"
                      >
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        <div>
                          <span className="font-bold text-xs text-navy-950 block">JEE Main &amp; Advanced</span>
                          <span className="text-[10px] text-slate-400">99+ Percentile Club</span>
                        </div>
                      </Link>

                      <Link
                        href="/results"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition"
                      >
                        <Stethoscope className="w-4 h-4 text-emerald-600" />
                        <div>
                          <span className="font-bold text-xs text-navy-950 block">NEET Medical UG</span>
                          <span className="text-[10px] text-slate-400">Top MBBS Selections</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Courses (Categorized Dropdown: Class 11th & Class 12th) */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 py-1 transition ${
                    pathname.startsWith('/programs') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
                </button>

                {coursesOpen && (
                  <div className="absolute top-full left-0 w-60 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 animate-fade-in ring-1 ring-black/5 space-y-3">
                      
                      {/* CLASS 11TH */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 px-2">
                          CLASS 11TH
                        </span>
                        <div className="space-y-1">
                          <Link
                            href="/programs/competitive-exams"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-navy-950 text-xs font-semibold transition"
                          >
                            <Microscope className="w-3.5 h-3.5 text-blue-500" />
                            <span>11th CET</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-navy-950 text-xs font-semibold transition"
                          >
                            <Atom className="w-3.5 h-3.5 text-purple-600" />
                            <span>11th JEE</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-navy-950 text-xs font-semibold transition"
                          >
                            <Stethoscope className="w-3.5 h-3.5 text-rose-500" />
                            <span>11th NEET</span>
                          </Link>
                        </div>
                      </div>

                      {/* CLASS 12TH */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 px-2">
                          CLASS 12TH
                        </span>
                        <div className="space-y-1">
                          <Link
                            href="/programs/competitive-exams"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-navy-950 text-xs font-semibold transition"
                          >
                            <Microscope className="w-3.5 h-3.5 text-blue-500" />
                            <span>12th CET</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-navy-950 text-xs font-semibold transition"
                          >
                            <Atom className="w-3.5 h-3.5 text-purple-600" />
                            <span>12th JEE</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-navy-950 text-xs font-semibold transition"
                          >
                            <Stethoscope className="w-3.5 h-3.5 text-rose-500" />
                            <span>12th NEET</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 5. Gallery */}
              <Link
                href="/gallery"
                className={`py-1 transition ${
                  isActive('/gallery') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                }`}
              >
                Gallery
              </Link>

              {/* 6. Admission */}
              <Link
                href="/admission"
                className={`py-1 transition ${
                  isActive('/admission') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                }`}
              >
                Admission
              </Link>

              {/* 7. Contact */}
              <Link
                href="/contact"
                className={`py-1 transition ${
                  isActive('/contact') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : 'hover:text-navy-950'
                }`}
              >
                Contact
              </Link>

            </nav>

            {/* Right Action: "✦ Get In Touch" Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-[#0B1E3D] hover:bg-navy-900 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition flex items-center gap-1.5 group transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Get In Touch</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MOBILE MENU DRAWER
           ========================================================================= */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              About
            </Link>
            <Link
              href="/results"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Results
            </Link>
            <Link
              href="/programs/competitive-exams"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Courses (11th &amp; 12th CET, JEE, NEET)
            </Link>
            <Link
              href="/campuses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Campuses
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Gallery
            </Link>
            <Link
              href="/admission"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Admission
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl font-bold text-navy-950 hover:bg-slate-50"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 bg-[#0B1E3D] text-white font-bold rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        )}

      </header>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCampus="Achievers World School (Manmad)"
      />
    </>
  );
}
