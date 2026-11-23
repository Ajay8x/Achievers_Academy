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
  Target,
  ClipboardList,
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
            TOP NAV BAR: Brand Logo + Identity + Helplines + Socials (Blue, Black, White)
           ========================================================================= */}
        <div className="bg-[#070E1E] text-slate-200 py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Top Left: Hexagonal Logo + Academy Title */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-[48px] md:h-[48px] flex items-center justify-center p-1 bg-white/10 rounded-xl border border-white/20 shadow-md group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/images/achievers_main_logo.png"
                  alt="Achievers Group of Institutes"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-lg font-bold font-serif text-white tracking-wide leading-tight group-hover:text-blue-400 transition">
                  Achievers Group of Institutes
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-slate-300 uppercase mt-0.5">
                  EXCELLENCE IN EDUCATION
                </span>
              </div>
            </Link>

            {/* Top Right: Email, Phone & Social Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
              {/* Email */}
              <a 
                href="mailto:achieversgroupofinstitutes@gmail.com" 
                className="hidden lg:flex items-center gap-1.5 hover:text-blue-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs">achieversgroupofinstitutes@gmail.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:8459360161" 
                className="flex items-center gap-1.5 hover:text-blue-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-white">8459360161</span>
                <span>/</span>
                <span className="text-slate-300">8999542174</span>
              </a>

              {/* Social Circles with Font Awesome */}
              <div className="flex items-center gap-1.5">
                <a
                  href="https://wa.me/918459360161"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center text-[11px] transition transform hover:scale-110"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center text-[11px] transition transform hover:scale-110"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-600 text-white flex items-center justify-center text-[11px] transition transform hover:scale-110"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center text-[11px] transition transform hover:scale-110"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>

                {/* Admin Quick Portal */}
                <Link
                  href="/admin"
                  className="ml-1 p-1 rounded-md text-slate-400 hover:text-amber-400 transition"
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
                  isActive('/') ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600'
                }`}
              >
                Home
              </Link>

              {/* 2. About */}
              <Link
                href="/about"
                className={`py-1 transition ${
                  isActive('/about') ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600'
                }`}
              >
                About
              </Link>

              {/* 3. Results (Dropdown) */}
              <div 
                className="group relative py-2"
                onMouseEnter={() => setResultsOpen(true)}
                onMouseLeave={() => setResultsOpen(false)}
              >
                <button
                  onClick={() => setResultsOpen(!resultsOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                    resultsOpen || pathname.startsWith('/results')
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-700 hover:text-navy-950 group-hover:text-blue-600'
                  }`}
                >
                  <span>Results</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${resultsOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-full left-0 w-60 pt-2 z-50 transition-all ${resultsOpen ? 'block' : 'hidden group-hover:block'}`}>
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 animate-fade-in ring-1 ring-black/5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 px-2.5">
                      EXAMINATION RESULTS
                    </span>
                    <div className="space-y-1">
                      <Link
                        href="/results#cet"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/70 text-slate-700 hover:text-navy-950 text-xs font-semibold transition group/item"
                      >
                        <i className="fa-solid fa-bullseye text-rose-500 text-sm group-hover/item:scale-110 transition-transform"></i>
                        <span>CET Results</span>
                      </Link>

                      <Link
                        href="/results#neet"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/70 text-slate-700 hover:text-navy-950 text-xs font-semibold transition group/item"
                      >
                        <i className="fa-solid fa-bullseye text-rose-500 text-sm group-hover/item:scale-110 transition-transform"></i>
                        <span>NEET Results</span>
                      </Link>

                      <Link
                        href="/results#jee"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/70 text-slate-700 hover:text-navy-950 text-xs font-semibold transition group/item"
                      >
                        <i className="fa-solid fa-bullseye text-rose-500 text-sm group-hover/item:scale-110 transition-transform"></i>
                        <span>JEE Results</span>
                      </Link>

                      <Link
                        href="/results#board"
                        onClick={() => setResultsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/70 text-slate-700 hover:text-navy-950 text-xs font-semibold transition group/item"
                      >
                        <i className="fa-solid fa-clipboard-list text-amber-500 text-sm group-hover/item:scale-110 transition-transform"></i>
                        <span>11th–12th Results</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Courses (Categorized Dropdown: Class 11th & Class 12th) */}
              <div 
                className="group relative py-2"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                    coursesOpen || pathname.startsWith('/programs')
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-700 hover:text-navy-950 group-hover:text-blue-600'
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${coursesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-full left-0 w-64 pt-2 z-50 transition-all ${coursesOpen ? 'block' : 'hidden group-hover:block'}`}>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 animate-fade-in ring-1 ring-black/5 space-y-2.5">
                      
                      {/* CLASS 11TH */}
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 px-2.5">
                          CLASS 11TH
                        </span>
                        <div className="space-y-0.5">
                          <Link
                            href="/programs/competitive-exams#11th-cet"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/80 text-slate-800 hover:text-blue-700 text-xs font-semibold transition group/item"
                          >
                            <Microscope className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>11th CET</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams#11th-jee"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/80 text-slate-800 hover:text-purple-700 text-xs font-semibold transition group/item"
                          >
                            <Atom className="w-4 h-4 text-purple-600 shrink-0" />
                            <span>11th JEE</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams#11th-neet"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/80 text-slate-800 hover:text-rose-600 text-xs font-semibold transition group/item"
                          >
                            <Stethoscope className="w-4 h-4 text-rose-500 shrink-0" />
                            <span>11th NEET</span>
                          </Link>
                        </div>
                      </div>

                      {/* CLASS 12TH */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 px-2.5">
                          CLASS 12TH
                        </span>
                        <div className="space-y-0.5">
                          <Link
                            href="/programs/competitive-exams#12th-cet"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-50/90 text-blue-700 text-xs font-bold transition group/item hover:bg-blue-100"
                          >
                            <Microscope className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>12th CET</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams#12th-jee"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/80 text-slate-800 hover:text-purple-700 text-xs font-semibold transition group/item"
                          >
                            <Atom className="w-4 h-4 text-purple-600 shrink-0" />
                            <span>12th JEE</span>
                          </Link>
                          <Link
                            href="/programs/competitive-exams#12th-neet"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50/80 text-slate-800 hover:text-rose-600 text-xs font-semibold transition group/item"
                          >
                            <Stethoscope className="w-4 h-4 text-rose-500 shrink-0" />
                            <span>12th NEET</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              {/* 5. Gallery */}
              <Link
                href="/gallery"
                className={`py-1 transition ${
                  isActive('/gallery') ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600'
                }`}
              >
                Gallery
              </Link>

              {/* 6. Admission */}
              <Link
                href="/admission"
                className={`py-1 transition ${
                  isActive('/admission') ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600'
                }`}
              >
                Admission
              </Link>

              {/* 7. Contact */}
              <Link
                href="/contact"
                className={`py-1 transition ${
                  isActive('/contact') ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600'
                }`}
              >
                Contact
              </Link>

            </nav>

            {/* Right Action: "Apply Now" CTA Button (Blue, Black, White) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-shimmer px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-blue-600/30 transition flex items-center gap-1.5 group transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-200 group-hover:rotate-12 transition-transform" />
                <span>Apply Now</span>
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
            {/* Examination Results Mobile Section */}
            <div className="space-y-1 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-1">
                EXAMINATION RESULTS
              </span>
              <div className="space-y-0.5">
                <Link
                  href="/results#cet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-blue-600 hover:bg-white font-semibold transition"
                >
                  <i className="fa-solid fa-bullseye text-rose-500 text-xs"></i>
                  <span>CET Results</span>
                </Link>
                <Link
                  href="/results#neet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-blue-600 hover:bg-white font-semibold transition"
                >
                  <i className="fa-solid fa-bullseye text-rose-500 text-xs"></i>
                  <span>NEET Results</span>
                </Link>
                <Link
                  href="/results#jee"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-blue-600 hover:bg-white font-semibold transition"
                >
                  <i className="fa-solid fa-bullseye text-rose-500 text-xs"></i>
                  <span>JEE Results</span>
                </Link>
                <Link
                  href="/results#board"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-blue-600 hover:bg-white font-semibold transition"
                >
                  <i className="fa-solid fa-clipboard-list text-amber-500 text-xs"></i>
                  <span>11th–12th Results</span>
                </Link>
              </div>
            </div>

            {/* Courses Mobile Section (Class 11th & Class 12th) */}
            <div className="space-y-2.5 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-1">
                  CLASS 11TH
                </span>
                <div className="space-y-0.5">
                  <Link
                    href="/programs/competitive-exams#11th-cet"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-blue-600 hover:bg-white font-semibold transition"
                  >
                    <Microscope className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>11th CET</span>
                  </Link>
                  <Link
                    href="/programs/competitive-exams#11th-jee"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-purple-600 hover:bg-white font-semibold transition"
                  >
                    <Atom className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>11th JEE</span>
                  </Link>
                  <Link
                    href="/programs/competitive-exams#11th-neet"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-rose-600 hover:bg-white font-semibold transition"
                  >
                    <Stethoscope className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>11th NEET</span>
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-1">
                  CLASS 12TH
                </span>
                <div className="space-y-0.5">
                  <Link
                    href="/programs/competitive-exams#12th-cet"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-blue-700 bg-blue-100/70 font-bold transition"
                  >
                    <Microscope className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>12th CET</span>
                  </Link>
                  <Link
                    href="/programs/competitive-exams#12th-jee"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-purple-600 hover:bg-white font-semibold transition"
                  >
                    <Atom className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>12th JEE</span>
                  </Link>
                  <Link
                    href="/programs/competitive-exams#12th-neet"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:text-rose-600 hover:bg-white font-semibold transition"
                  >
                    <Stethoscope className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>12th NEET</span>
                  </Link>
                </div>
              </div>
            </div>
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
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Apply Now</span>
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
