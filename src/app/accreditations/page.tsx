'use client';

import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export default function AccreditationsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Authorized Institutional Affiliations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Accreditations &amp; Recognitions
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Achievers Group of Institutes adheres strictly to national and state statutory educational boards, ensuring legitimate, certified credentials for every enrolled student.
          </p>
        </div>
      </section>

      {/* Main Accreditations Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accreditation 1: CBSE */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-2xl bg-white p-3 border border-slate-200 shrink-0 flex items-center justify-center shadow-xs">
                <img src="/images/images_accreditations_6.jpg" alt="CBSE" className="max-h-full object-contain" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-100 text-navy-800 px-2.5 py-0.5 rounded-full">
                  Central Board
                </span>
                <h3 className="text-xl font-bold font-serif text-navy-950">
                  CBSE (Central Board of Secondary Education)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nationally recognized curriculum that emphasizes conceptual depth, scientific discovery, and alignment with all-India competitive entrances including JEE and NEET.
                </p>
              </div>
            </div>

            {/* Accreditation 2: State Board */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-2xl bg-white p-3 border border-slate-200 shrink-0 flex items-center justify-center shadow-xs">
                <img src="/images/images_accreditations_5.jpg" alt="Maharashtra State Board" className="max-h-full object-contain" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-100 text-gold-900 px-2.5 py-0.5 rounded-full">
                  State Government Board
                </span>
                <h3 className="text-xl font-bold font-serif text-navy-950">
                  Maharashtra State Board (SSC &amp; HSC)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Authorized by the Maharashtra State Board of Secondary and Higher Secondary Education, Pune. Delivers certified schooling and Junior College Science qualifications.
                </p>
              </div>
            </div>

            {/* Accreditation 3: MSBTE */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-2xl bg-white p-3 border border-slate-200 shrink-0 flex items-center justify-center shadow-xs">
                <img src="/images/static_msbte.jfif" alt="MSBTE" className="max-h-full object-contain" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                  Technical Board Approval
                </span>
                <h3 className="text-xl font-bold font-serif text-navy-950">
                  MSBTE (Maharashtra State Board of Technical Education)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Approved for technical and diploma vocational tracks, fostering industry-ready technical skill development and laboratory proficiencies.
                </p>
              </div>
            </div>

            {/* Accreditation 4: PCI */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-2xl bg-white p-3 border border-slate-200 shrink-0 flex items-center justify-center shadow-xs">
                <img src="/images/static_pci.jfif" alt="PCI" className="max-h-full object-contain" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                  Statutory Council Recognition
                </span>
                <h3 className="text-xl font-bold font-serif text-navy-950">
                  PCI (Pharmacy Council of India)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Recognized by the Pharmacy Council of India, ensuring our students receive pharmaceutical science curriculum matching national medical council regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

