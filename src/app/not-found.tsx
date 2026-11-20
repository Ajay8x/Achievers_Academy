import React from 'react';
import Link from 'next/link';
import { School, Home, Phone, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 mx-auto flex items-center justify-center text-blue-600 mb-5">
          <School className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
          Page Not Found (404)
        </span>

        <h1 className="text-3xl font-bold font-serif text-slate-900 mt-4 mb-2">
          Looking for Something Specific?
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          The educational page or resource you requested could not be located. It might have been moved or updated as part of our academic session schedule.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/admission"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition border border-slate-200"
          >
            <span>Apply Now</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Admission Helpline: <a href="tel:+918459360161" className="text-blue-600 font-bold hover:underline">+91 8459360161</a>
        </div>
      </div>
    </div>
  );
}
