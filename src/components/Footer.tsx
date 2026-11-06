import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  Heart,
  School,
  Lock
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Campuses Showcase */}
        <div className="pb-12 border-b border-navy-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Our Educational Network
            </span>
            <h3 className="text-2xl font-bold font-serif text-white mt-1">
              Three Premier Campuses in Nashik District
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Campus 1 */}
            <div className="p-5 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-gold-500/40 transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">Branch 01</span>
                <span className="text-xs bg-navy-800 text-slate-300 px-2.5 py-0.5 rounded-full font-medium">Manmad</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-gold-400 transition font-serif">
                Achievers World School
              </h4>
              <p className="text-xs text-slate-400 mt-2 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Shrinath Dream City, Umrane Road, Manmad, Dist. Nashik</span>
              </p>
              <div className="mt-4 pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs">
                <Link
                  href="/campuses/achievers-world-school-manmad"
                  className="text-gold-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Achievers+World+School+Manmad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Map</span>
                </a>
              </div>
            </div>

            {/* Campus 2 */}
            <div className="p-5 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-gold-500/40 transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">Branch 02</span>
                <span className="text-xs bg-navy-800 text-slate-300 px-2.5 py-0.5 rounded-full font-medium">Chandwad</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-gold-400 transition font-serif">
                Achievers IIT &amp; Medical
              </h4>
              <p className="text-xs text-slate-400 mt-2 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road, Chandwad</span>
              </p>
              <div className="mt-4 pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs">
                <Link
                  href="/campuses/achievers-iit-medical-chandwad"
                  className="text-gold-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Achievers+IIT+Medical+Chandwad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Map</span>
                </a>
              </div>
            </div>

            {/* Campus 3 */}
            <div className="p-5 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-gold-500/40 transition group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">Branch 03</span>
                <span className="text-xs bg-navy-800 text-slate-300 px-2.5 py-0.5 rounded-full font-medium">Niphad</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-gold-400 transition font-serif">
                Wisdom International School
              </h4>
              <p className="text-xs text-slate-400 mt-2 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Niphad-Sambhajinagar Road, Niphad, Dist. Nashik</span>
              </p>
              <div className="mt-4 pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs">
                <Link
                  href="/campuses/wisdom-international-school-niphad"
                  className="text-gold-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Wisdom+International+School+Niphad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links & Information Columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-navy-800 text-xs">
          {/* Col 1: About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5">
                <img 
                  src="/images/static_Web_Logo_1.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <span className="text-base font-bold text-white font-serif">Achievers Group of Institutes</span>
                <p className="text-[11px] text-gold-400">Excellence in Rural &amp; Institutional Education</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Nurturing talent, empowering young minds, and bridging the rural-urban education gap with cutting-edge CBSE curriculum, Maharashtra State Board education, and rigorous JEE &amp; NEET coaching.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-navy-900 border border-navy-800 px-2.5 py-1 rounded text-gold-300 font-medium">CBSE Board</span>
              <span className="bg-navy-900 border border-navy-800 px-2.5 py-1 rounded text-gold-300 font-medium">Maharashtra SSC &amp; HSC</span>
              <span className="bg-navy-900 border border-navy-800 px-2.5 py-1 rounded text-gold-300 font-medium">MSBTE Approved</span>
              <span className="bg-navy-900 border border-navy-800 px-2.5 py-1 rounded text-gold-300 font-medium">PCI Recognized</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider font-serif">Quick Links</h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-gold-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition">About Academy</Link></li>
              <li><Link href="/campuses" className="hover:text-gold-400 transition">Our Campuses</Link></li>
              <li><Link href="/facilities/hostel" className="hover:text-gold-400 transition">Hostel &amp; Mess</Link></li>
              <li><Link href="/facilities/transport" className="hover:text-gold-400 transition">Bus Transportation</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-400 transition">Campus Gallery</Link></li>
              <li><Link href="/admin" className="hover:text-gold-400 transition text-slate-500">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider font-serif">Programs</h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/programs/pre-primary" className="hover:text-gold-400 transition">Nursery, Jr &amp; Sr KG</Link></li>
              <li><Link href="/programs/primary-secondary" className="hover:text-gold-400 transition">Primary (Class 1 to 5)</Link></li>
              <li><Link href="/programs/primary-secondary" className="hover:text-gold-400 transition">Secondary (Class 6 to 10)</Link></li>
              <li><Link href="/programs/higher-secondary" className="hover:text-gold-400 transition">11th &amp; 12th Science</Link></li>
              <li><Link href="/programs/competitive-exams" className="hover:text-gold-400 transition">JEE Main &amp; Advanced</Link></li>
              <li><Link href="/programs/competitive-exams" className="hover:text-gold-400 transition">NEET Medical UG</Link></li>
              <li><Link href="/programs/competitive-exams" className="hover:text-gold-400 transition">MHT-CET Coaching</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Helpdesk */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider font-serif">Contact Helpdesk</h5>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:8459360161" className="hover:text-white block font-medium">+91 8459360161</a>
                  <a href="tel:8999542174" className="hover:text-white block">+91 8999542174</a>
                  <a href="tel:8385853131" className="hover:text-white block">+91 8385853131</a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a href="mailto:achieversgroupofinstitutes@gmail.com" className="hover:text-white break-all">
                  achieversgroupofinstitutes@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918459360161"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow transition"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Achievers Group of Institutes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400 transition">Terms &amp; Conditions</Link>
            <span>•</span>
            <Link href="/admin" className="text-gold-500 hover:underline">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

