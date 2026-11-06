'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  Award, 
  Bus, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Lock
} from 'lucide-react';
import AdmissionModal from './AdmissionModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [campusesOpen, setCampusesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-md bg-white">
        {/* Top Info Bar */}
        <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs">
              <a 
                href="tel:8459360161" 
                className="flex items-center gap-1.5 hover:text-gold-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-semibold text-white">+91 8459360161</span> / 8999542174
              </a>
              <span className="hidden sm:inline text-navy-700">|</span>
              <a 
                href="mailto:achieversgroupofinstitutes@gmail.com" 
                className="hidden md:flex items-center gap-1.5 hover:text-gold-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>achieversgroupofinstitutes@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="inline-flex items-center gap-1 text-gold-400 font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>CBSE • SSC & HSC • MSBTE • PCI Affiliated</span>
              </span>
              <span className="text-navy-700">|</span>
              <Link 
                href="/admin" 
                className="text-slate-400 hover:text-white flex items-center gap-1 transition"
                title="Admin Portal"
              >
                <Lock className="w-3 h-3 text-gold-500" />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-navy-50 flex items-center justify-center border border-navy-100 shadow-2xs">
                <img 
                  src="/images/static_Web_Logo_1.png" 
                  alt="Achievers Academy Logo" 
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-navy-900 font-serif leading-tight group-hover:text-gold-600 transition">
                  Achievers Academy
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Group of Institutes • Nashik
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/about') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

              {/* Campuses Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCampusesOpen(true)}
                onMouseLeave={() => setCampusesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    pathname.startsWith('/campuses') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Our Campuses</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {campusesOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                    <Link
                      href="/campuses/achievers-world-school-manmad"
                      onClick={() => setCampusesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-navy-900 text-sm group-hover:text-navy-700">
                          Achievers World School
                        </span>
                        <span className="text-[10px] font-semibold bg-navy-100 text-navy-800 px-2 py-0.5 rounded-full">
                          Manmad
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        Shrinath Dream City, Umrane Road
                      </p>
                    </Link>

                    <Link
                      href="/campuses/achievers-iit-medical-chandwad"
                      onClick={() => setCampusesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-navy-900 text-sm group-hover:text-navy-700">
                          Achievers IIT &amp; Medical
                        </span>
                        <span className="text-[10px] font-semibold bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full">
                          Chandwad
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        Opp. Indian Oil Petrol Pump, Chandwad-Manmad Rd
                      </p>
                    </Link>

                    <Link
                      href="/campuses/wisdom-international-school-niphad"
                      onClick={() => setCampusesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-navy-900 text-sm group-hover:text-navy-700">
                          Wisdom International School
                        </span>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          Niphad
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        Niphad-Sambhajinagar Road
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Academic Programs Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    pathname.startsWith('/programs') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Academic Programs</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {programsOpen && (
                  <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                    <Link
                      href="/programs/pre-primary"
                      onClick={() => setProgramsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition"
                    >
                      <span className="font-bold text-navy-900 text-sm">Nursery to Senior KG</span>
                      <p className="text-xs text-slate-500 mt-0.5">Foundational early childhood education & activity-based learning</p>
                    </Link>
                    <Link
                      href="/programs/primary-secondary"
                      onClick={() => setProgramsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition"
                    >
                      <span className="font-bold text-navy-900 text-sm">Primary &amp; Secondary (Class 1 to 10)</span>
                      <p className="text-xs text-slate-500 mt-0.5">CBSE & Maharashtra State Board holistic curriculum</p>
                    </Link>
                    <Link
                      href="/programs/higher-secondary"
                      onClick={() => setProgramsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition"
                    >
                      <span className="font-bold text-navy-900 text-sm">Higher Secondary (Class 11 &amp; 12)</span>
                      <p className="text-xs text-slate-500 mt-0.5">Science stream with state-of-the-art laboratory infrastructure</p>
                    </Link>
                    <Link
                      href="/programs/competitive-exams"
                      onClick={() => setProgramsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition"
                    >
                      <span className="font-bold text-navy-900 text-sm flex items-center gap-1.5">
                        <span>JEE, NEET &amp; MHT-CET Prep</span>
                        <span className="text-[10px] bg-gold-100 text-gold-800 font-bold px-1.5 py-0.5 rounded">Specialized</span>
                      </span>
                      <p className="text-xs text-slate-500 mt-0.5">National test-prep coaching with proven district rankers</p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Facilities Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setFacilitiesOpen(true)}
                onMouseLeave={() => setFacilitiesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                    pathname.startsWith('/facilities') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Facilities</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {facilitiesOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                    <Link
                      href="/facilities/hostel"
                      onClick={() => setFacilitiesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition"
                    >
                      <span className="font-bold text-navy-900 text-sm flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-navy-600" />
                        <span>Hostel &amp; Residential Wing</span>
                      </span>
                      <p className="text-xs text-slate-500 mt-1">24x7 security, hygienic mess, night library & yoga</p>
                    </Link>
                    <Link
                      href="/facilities/transport"
                      onClick={() => setFacilitiesOpen(false)}
                      className="block p-3 rounded-xl hover:bg-navy-50 transition"
                    >
                      <span className="font-bold text-navy-900 text-sm flex items-center gap-2">
                        <Bus className="w-4 h-4 text-navy-600" />
                        <span>Transportation Fleet</span>
                      </span>
                      <p className="text-xs text-slate-500 mt-1">GPS-tracked buses covering Manmad, Chandwad & Niphad</p>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/results"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/results') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Results
              </Link>

              <Link
                href="/accreditations"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/accreditations') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Accreditations
              </Link>

              <Link
                href="/gallery"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/gallery') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-lg transition ${
                  isActive('/contact') ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Apply for Admission</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-gold-400 rounded-lg shadow-sm"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-fade-in">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-navy-900 rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
            >
              About Us
            </Link>

            {/* Mobile Campuses Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <span className="block px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Our Campuses
              </span>
              <div className="pl-2 space-y-1 mt-1">
                <Link
                  href="/campuses/achievers-world-school-manmad"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800 hover:text-navy-900"
                >
                  Achievers World School – Manmad
                </Link>
                <Link
                  href="/campuses/achievers-iit-medical-chandwad"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800 hover:text-navy-900"
                >
                  Achievers IIT &amp; Medical – Chandwad
                </Link>
                <Link
                  href="/campuses/wisdom-international-school-niphad"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800 hover:text-navy-900"
                >
                  Wisdom International School – Niphad
                </Link>
              </div>
            </div>

            {/* Mobile Programs Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <span className="block px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Academic Programs
              </span>
              <div className="pl-2 space-y-1 mt-1">
                <Link
                  href="/programs/pre-primary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800"
                >
                  Nursery to Senior KG
                </Link>
                <Link
                  href="/programs/primary-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800"
                >
                  Primary &amp; Secondary (Class 1 to 10)
                </Link>
                <Link
                  href="/programs/higher-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800"
                >
                  Higher Secondary (11th &amp; 12th Science)
                </Link>
                <Link
                  href="/programs/competitive-exams"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm font-semibold text-gold-700"
                >
                  JEE, NEET &amp; MHT-CET Preparation
                </Link>
              </div>
            </div>

            {/* Mobile Facilities */}
            <div className="border-t border-slate-100 pt-2">
              <span className="block px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Facilities
              </span>
              <div className="pl-2 space-y-1 mt-1">
                <Link
                  href="/facilities/hostel"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800"
                >
                  Hostel &amp; Residential Wing
                </Link>
                <Link
                  href="/facilities/transport"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-800"
                >
                  Transportation Fleet (GPS Buses)
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              <Link
                href="/results"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Academic Results &amp; Toppers
              </Link>
              <Link
                href="/accreditations"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Accreditations
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Campus Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Contact Us
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-gold-700"
              >
                Admin Portal Login
              </Link>
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-navy-950 bg-gold-400 rounded-xl shadow"
              >
                Apply for Admission (2025-26)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

