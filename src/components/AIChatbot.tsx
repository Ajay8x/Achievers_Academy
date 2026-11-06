'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, Phone, ArrowRight, RefreshCw, UserCheck } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  whatsappUrl?: string;
  suggestedActions?: string[];
  timestamp: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Namaste! Welcome to Achievers Group of Institutes. I am your Virtual Admission Counselor. Ask me about our 3 Campuses (Manmad, Chandwad, Niphad), CBSE & State Board classes, JEE/NEET/CET coaching, or Hostel & Transport facilities!',
      suggestedActions: [
        'Campuses & Locations',
        'JEE & NEET Coaching',
        'Hostel Facilities',
        'Admission Form'
      ],
      timestamp: 'Just now'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend.trim() })
      });
      const data = await res.json();

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: data.reply || "I'm here to help with admissions at Achievers Academy.",
        whatsappUrl: data.whatsappUrl,
        suggestedActions: data.suggestedActions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: "I'm having a brief connection issue. Please connect directly with our admission counselors at +91 8459360161.",
          whatsappUrl: 'https://wa.me/918459360161',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
        {isOpen && (
          <div className="mb-4 w-[92vw] sm:w-[410px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-navy-100 flex flex-col overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white p-4 flex items-center justify-between border-b border-navy-700">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-navy-900"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm font-serif">Achievers Virtual Counselor</h4>
                    <span className="bg-gold-500/20 text-gold-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-gold-400/30">AI</span>
                  </div>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <span>Verified Institutional Assistant</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-medium">Online</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Banner */}
            <div className="bg-navy-50/80 px-4 py-1.5 border-b border-navy-100 text-[11px] text-navy-800 flex items-center justify-between font-medium">
              <span>Supports: English, हिन्दी, Hinglish</span>
              <span className="text-gold-700 font-semibold">24/7 Admission Help</span>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-navy-900 text-white rounded-br-none shadow-sm'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>

                    {/* WhatsApp Handover Button */}
                    {m.whatsappUrl && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <a
                          href={m.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Talk with Counselor on WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {m.timestamp}
                  </span>

                  {/* Quick Action Pills */}
                  {m.suggestedActions && m.suggestedActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.suggestedActions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(action)}
                          className="text-[11px] font-medium bg-white text-navy-800 border border-navy-200 hover:border-navy-500 hover:bg-navy-50 rounded-full px-2.5 py-1 transition shadow-2xs"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-xl w-32 shadow-2xs">
                  <RefreshCw className="w-3.5 h-3.5 text-navy-600 animate-spin" />
                  <span className="text-xs text-slate-500">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask in English or Hinglish..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white rounded-xl transition shadow"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Trigger Button - Sleek, Compact Luxury Glowing Style */}
        <div className="relative group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 blur-sm opacity-60 group-hover:opacity-90 transition duration-300"></div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="AI Admission Assistant"
            className="relative flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-[#07132B] via-[#0E275C] to-[#07132B] hover:from-[#0B1E3D] hover:to-[#0B1E3D] text-white rounded-full shadow-lg border border-amber-400/90 hover:border-amber-300 transition-all duration-300 transform hover:scale-105 active:scale-95 glow-gold-pulse"
          >
            <div className="relative w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-400 rounded-full animate-ping"></span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-400 rounded-full ring-1 ring-navy-950"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow-sm">
              AI Counselor
            </span>
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse hidden sm:inline" />
          </button>
        </div>
      </div>
    </>
  );
}

