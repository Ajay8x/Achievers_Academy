'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, School, Sparkles } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [campus, setCampus] = useState('Achievers World School (Manmad)');
  const [inquiryType, setInquiryType] = useState('General Admission');
  const [customMsg, setCustomMsg] = useState('');

  const WHATSAPP_NUMBER = '918459360161'; // Primary WhatsApp contact

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Achievers Academy,
I want to inquire about: ${inquiryType}
Campus: ${campus}
${customMsg ? `Additional Message: ${customMsg}` : ''}
Please share complete details.`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Chat on WhatsApp</h4>
                  <span className="text-xs text-emerald-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                    Online Admission Helpdesk
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Form */}
            <form onSubmit={handleSendWhatsApp} className="p-4 space-y-3 text-left">
              <p className="text-xs text-slate-600">
                Select your preferred campus and requirement to start chatting directly with our admission counselor.
              </p>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Select Campus
                </label>
                <select
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                  className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Achievers World School (Manmad)">Achievers World School (Manmad)</option>
                  <option value="Achievers IIT & Medical (Chandwad)">Achievers IIT & Medical (Chandwad)</option>
                  <option value="Wisdom International School (Niphad)">Wisdom International School (Niphad)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="General Admission (2025-26)">General Admission (2025-26)</option>
                  <option value="JEE & NEET Integrated Batch">JEE & NEET Integrated Batch</option>
                  <option value="MHT-CET Science Preparation">MHT-CET Science Preparation</option>
                  <option value="Hostel & Residential Facilities">Hostel & Residential Facilities</option>
                  <option value="Bus & Transport Routes">Bus & Transport Routes</option>
                  <option value="Fee Structure & Scholarships">Fee Structure & Scholarships</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Any question or note? (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Need bus timings from Pimpalgaon"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition"
              >
                <span>Start WhatsApp Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Trigger Button - Sleek, Compact Luxury Glowing Style */}
        <div className="relative group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 blur-sm opacity-60 group-hover:opacity-90 transition duration-300"></div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="WhatsApp Chat"
            className="relative flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-full shadow-lg border border-white/80 hover:border-white transition-all duration-300 transform hover:scale-105 active:scale-95 glow-emerald-pulse"
          >
            <div className="relative w-6 h-6 rounded-full bg-white/20 border border-white/50 flex items-center justify-center shrink-0">
              <svg
                className="w-3.5 h-3.5 fill-current text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full animate-ping"></span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full ring-1 ring-emerald-600"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow-sm">
              WhatsApp Admission
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

