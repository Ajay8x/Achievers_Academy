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
    <footer className="bg-[#070E1E] text-slate-200 pt-16 pb-8 border-t-2 border-blue-600/50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

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


          {/* ==================== CONTACT & ADMISSIONS ==================== */}
          <div className="lg:col-span-3 space-y-3">
            <div>
              <h4 className="text-base font-bold text-white font-serif tracking-wide">
                Contact &amp; Admissions
              </h4>
              <div className="w-8 h-1 bg-blue-500 rounded-full mt-1.5"></div>
            </div>

            <div className="space-y-3 pt-1">
              {/* Phone Card */}
              <div className="p-3 rounded-2xl bg-navy-900/90 border border-white/10 flex items-center gap-3 shadow-sm hover:border-blue-400/40 transition">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-white block">Phone</span>
                  <a 
                    href="tel:8385853131" 
                    className="text-xs text-slate-300 hover:text-blue-400 transition block truncate"
                  >
                    8385853131 / 8999542174
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-3 rounded-2xl bg-navy-900/90 border border-white/10 flex items-center gap-3 shadow-sm hover:border-blue-400/40 transition">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-white block">Email</span>
                  <a 
                    href="mailto:achieversgroupofinstitutes@gmail.com" 
                    className="text-xs text-slate-300 hover:text-blue-400 transition block truncate"
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
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918459360161"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#1fa951] text-white flex items-center justify-center shadow-md transition transform hover:-translate-y-1 hover:shadow-[#25D366]/40"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-md transition transform hover:-translate-y-1 hover:shadow-[#1877F2]/40"
                >
                  <i className="fa-brands fa-facebook-f text-base"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white flex items-center justify-center shadow-md transition transform hover:-translate-y-1 hover:shadow-rose-500/40"
                >
                  <i className="fa-brands fa-instagram text-base"></i>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-[#FF0000] hover:bg-[#d90000] text-white flex items-center justify-center shadow-md transition transform hover:-translate-y-1 hover:shadow-red-500/40"
                >
                  <i className="fa-brands fa-youtube text-base"></i>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-[#0F1419] hover:bg-black text-white flex items-center justify-center shadow-md border border-white/20 transition transform hover:-translate-y-1"
                >
                  <i className="fa-brands fa-x-twitter text-base"></i>
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
