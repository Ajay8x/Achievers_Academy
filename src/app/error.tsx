'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home, Phone, MessageSquare } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime error
    console.error('Unhandled Application Exception caught by Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 sm:p-10 text-center relative overflow-hidden">
        {/* Top Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-rose-500 to-blue-600"></div>

        {/* Floating Top Error Warning Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>System Error Handled Gracefully</span>
        </div>

        {/* Visual Icon */}
        <div className="w-20 h-20 rounded-3xl bg-rose-50 border border-rose-200 mx-auto flex items-center justify-center text-rose-600 mb-6 shadow-sm">
          <AlertCircle className="w-10 h-10" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-3">
          Something Went Unexpectedly Wrong
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          We encountered a temporary technical glitch while loading this section. Our academic portal safeguards your data and session. Please click the button below to reload the page.
        </p>

        {error?.message && (
          <div className="mb-6 p-3 bg-slate-100 rounded-xl text-left border border-slate-200">
            <span className="text-[11px] font-bold uppercase text-slate-500 block mb-1">
              Error Diagnosis:
            </span>
            <code className="text-xs text-rose-600 font-mono break-words block">
              {error.message}
            </code>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again / Reload</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition border border-slate-200"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Helplines */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <span className="font-semibold text-slate-700">Need immediate assistance?</span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+918459360161"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:underline font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8459360161</span>
            </a>
            <a
              href="https://wa.me/918459360161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:underline font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
