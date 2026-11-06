import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Map, 
  Lock 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1E3D] text-slate-200 pt-16 pb-8 border-t-2 border-amber-400/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-navy-800/80 items-start">
          
          {/* ==================== BRANCH 01 ==================== */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-3.5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-1 bg-white/5 rounded-2xl border border-white/10 shadow-md">
              <img
                src="/images/static_Web_Logo_1.png"
                alt="Achievers World School Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/30">
              Branch 01
            </span>

            <h4 className="text-base font-bold text-white font-serif leading-snug">
              Achievers World School
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-navy-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-4 h-4 fill-navy-950 text-amber-400" />
              </div>
              <span className="leading-relaxed">
                Shrinath Dream City, Umrane Road, Manmad
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Achievers+World+School+Manmad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy-950/80 hover:bg-navy-900 border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 text-xs font-semibold shadow-sm transition"
            >
              <Map className="w-3.5 h-3.5 text-amber-400" />
              <span>View on Map</span>
            </a>
          </div>


          {/* ==================== BRANCH 02 ==================== */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-3.5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-1 bg-white/5 rounded-2xl border border-white/10 shadow-md">
              <img
                src="/images/static_achievers_group_of_institutes.png"
                alt="Achievers Group of Institutes Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/30">
              Branch 02
            </span>

            <h4 className="text-base font-bold text-white font-serif leading-snug">
              Achievers IIT &amp; Medical
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-navy-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-4 h-4 fill-navy-950 text-amber-400" />
              </div>
              <span className="leading-relaxed">
                Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Achievers+IIT+Medical+Chandwad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy-950/80 hover:bg-navy-900 border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 text-xs font-semibold shadow-sm transition"
            >
              <Map className="w-3.5 h-3.5 text-amber-400" />
              <span>View on Map</span>
            </a>
          </div>


          {/* ==================== BRANCH 03 (FEATURED CARD) ==================== */}
          <div className="lg:col-span-3 rounded-3xl bg-[#132B50]/80 border border-blue-400/20 p-5 shadow-xl flex flex-col items-start space-y-3.5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-1 bg-white/10 rounded-2xl border border-white/10 shadow-md">
              <img
                src="/images/static_Wisdom-logo.png"
                alt="Wisdom International School Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/30">
              Branch 03
            </span>

            <h4 className="text-base font-bold text-white font-serif leading-snug">
              Wisdom International School
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-navy-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-4 h-4 fill-navy-950 text-amber-400" />
              </div>
              <span className="leading-relaxed">
                Niphad-Sambhajinagar Road, Niphad
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Wisdom+International+School+Niphad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy-950/80 hover:bg-navy-900 border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 text-xs font-semibold shadow-sm transition"
            >
              <Map className="w-3.5 h-3.5 text-amber-400" />
              <span>View on Map</span>
            </a>
          </div>


          {/* ==================== QUICK LINKS ==================== */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-base font-bold text-white font-serif tracking-wide">
                Quick Links
              </h4>
              <div className="w-8 h-1 bg-amber-400 rounded-full mt-1.5"></div>
            </div>

            <ul className="space-y-2 text-xs pt-1">
              <li>
                <Link href="/" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/accreditations" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>Accreditations</span>
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition flex items-center gap-2">
                  <span className="text-amber-400 font-bold">&rarr;</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>


          {/* ==================== GET IN TOUCH ==================== */}
          <div className="lg:col-span-3 space-y-3">
            <div>
              <h4 className="text-base font-bold text-white font-serif tracking-wide">
                Get In Touch
              </h4>
              <div className="w-8 h-1 bg-amber-400 rounded-full mt-1.5"></div>
            </div>

            <div className="space-y-3 pt-1">
              {/* Phone Card */}
              <div className="p-3 rounded-2xl bg-navy-900/90 border border-white/10 flex items-center gap-3 shadow-sm hover:border-amber-400/40 transition">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-navy-950 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 fill-navy-950 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-white block">Phone</span>
                  <a 
                    href="tel:8385853131" 
                    className="text-xs text-slate-300 hover:text-amber-400 transition block truncate"
                  >
                    8385853131 / 8999542174
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-3 rounded-2xl bg-navy-900/90 border border-white/10 flex items-center gap-3 shadow-sm hover:border-amber-400/40 transition">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-navy-950 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-navy-950" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-white block">Email</span>
                  <a 
                    href="mailto:achieversgroupofinstitutes@gmail.com" 
                    className="text-xs text-slate-300 hover:text-amber-400 transition block truncate"
                    title="achieversgroupofinstitutes@gmail.com"
                  >
                    achieversgroupofinstitutes@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-2">
                FOLLOW US
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] hover:opacity-90 text-white flex items-center justify-center shadow-sm transition transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white flex items-center justify-center shadow-sm transition transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-[#FF0000] hover:opacity-90 text-white flex items-center justify-center shadow-sm transition transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-[#1DA1F2] hover:opacity-90 text-white flex items-center justify-center shadow-sm transition transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Achievers Group of Institutes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/about" className="hover:text-amber-400 transition">About Academy</Link>
            <span>&bull;</span>
            <Link href="/admission" className="hover:text-amber-400 transition">Admissions 2025-26</Link>
            <span>&bull;</span>
            <Link href="/admin" className="hover:text-amber-400 transition flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
