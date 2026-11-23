'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, Phone, ArrowRight, RefreshCw, UserCheck, Languages } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  whatsappUrl?: string;
  suggestedActions?: string[];
  timestamp: string;
}

const WELCOME_MESSAGES = {
  en: {
    id: 'welcome-en',
    sender: 'bot' as const,
    text: 'Namaste! Welcome to Achievers Group of Institutes. I am your Virtual Admission Counselor. Ask me about our 3 Campuses (Manmad, Chandwad, Niphad), CBSE & State Board classes, JEE/NEET/CET coaching, or Hostel & Transport facilities!',
    suggestedActions: [
      'Campuses & Locations',
      'JEE & NEET Coaching',
      'Hostel Facilities',
      'Admission Form'
    ],
    timestamp: 'Just now'
  },
  hi: {
    id: 'welcome-hi',
    sender: 'bot' as const,
    text: 'नमस्ते! अचीवर्स ग्रुप ऑफ इंस्टीट्यूट्स में आपका स्वागत है। मैं आपका वर्चुअल एडमिशन काउंसलर हूँ। आप हमारे 3 कैंपसों (मनमाड, चांदवड़, निफाड़), CBSE एवं स्टेट बोर्ड, JEE/NEET/CET कोचिंग, या हॉस्टल व बस सुविधा के बारे में पूछ सकते हैं!',
    suggestedActions: [
      'कैंपस एवं स्थान',
      'JEE और NEET कोचिंग',
      'हॉस्टल सुविधाएं',
      'एडमिशन फॉर्म'
    ],
    timestamp: 'अभी'
  }
};

export default function AIChatbot() {
  const { showError } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGES.en]);
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

  const switchLanguage = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    if (messages.length <= 1) {
      setMessages([WELCOME_MESSAGES[lang]]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: `sys-${Date.now()}`,
          sender: 'bot',
          text: lang === 'hi'
            ? '✅ भाषा बदलकर हिन्दी कर दी गई है। अब आप हिंदी या हिंग्लिश में सवाल पूछ सकते हैं।'
            : '✅ Language changed to English. You can now ask questions in English.',
          suggestedActions: lang === 'hi' ? WELCOME_MESSAGES.hi.suggestedActions : WELCOME_MESSAGES.en.suggestedActions,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

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
        body: JSON.stringify({ message: textToSend.trim(), preferredLang: language })
      });
      const data = await res.json();

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: data.reply || (language === 'hi' ? "मैं अचीवर्स एकेडमी एडमिशन में आपकी सहायता के लिए उपस्थित हूँ।" : "I'm here to help with admissions at Achievers Academy."),
        whatsappUrl: data.whatsappUrl,
        suggestedActions: data.suggestedActions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      showError(
        language === 'hi' 
          ? "संपर्क में त्रुटि। आप हमारे एडमिशन डेस्क से सीधे व्हाट्सएप पर बात कर सकते हैं: +91 8459360161"
          : "Connection interrupted. You can connect directly with our admission desk on WhatsApp: +91 8459360161", 
        "Chatbot Error"
      );
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: language === 'hi'
            ? "नेटवर्क समस्या के कारण उत्तर नहीं मिल पाया। कृपया हमारे एडमिशन काउंसलर से +91 8459360161 पर संपर्क करें।"
            : "I'm having a brief connection issue. Please connect directly with our admission counselors at +91 8459360161.",
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
      <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start">
        {isOpen && (
          <div className="mb-3 w-[92vw] sm:w-[395px] h-[530px] max-h-[82vh] bg-white rounded-2xl shadow-2xl border border-navy-100 flex flex-col overflow-hidden animate-slide-up">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white p-3.5 flex items-center justify-between border-b border-navy-700">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-navy-900"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-xs sm:text-sm font-serif">Achievers Virtual Counselor</h4>
                    <span className="bg-gold-500/20 text-gold-300 text-[10px] font-bold px-1.5 py-0.2 rounded border border-gold-400/30">AI</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 flex items-center gap-1">
                    <span>Verified Institutional Assistant</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-medium">Online</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Selector Option Banner (English vs हिन्दी) */}
            <div className="bg-slate-100/95 px-3.5 py-1.5 border-b border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600">
                  <Languages className="w-3.5 h-3.5 text-blue-600" />
                  <span>भाषा / Option:</span>
                </div>
                <div className="inline-flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => switchLanguage('en')}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold transition ${
                      language === 'en'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => switchLanguage('hi')}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${
                      language === 'hi'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>हिन्दी</span>
                    {language === 'hi' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </button>
                </div>
              </div>

              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                language === 'hi' 
                  ? 'text-emerald-800 bg-emerald-50 border-emerald-200' 
                  : 'text-blue-800 bg-blue-50 border-blue-200'
              }`}>
                {language === 'hi' ? 'हिन्दी मोड सक्रिय' : '24/7 Admission Help'}
              </span>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
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
                          <span>{language === 'hi' ? 'व्हाट्सएप पर काउंसलर से बात करें' : 'Talk with Counselor on WhatsApp'}</span>
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
                <div className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-xl w-36 shadow-2xs">
                  <RefreshCw className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                  <span className="text-xs text-slate-500">{language === 'hi' ? 'काउंसलर सोच रहा है...' : 'Thinking...'}</span>
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
                placeholder={language === 'hi' ? "यहाँ हिंदी या हिंग्लिश में पूछें..." : "Ask in English or Hinglish..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition shadow"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="AI Admission Assistant"
          className="group relative flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-black via-[#0B1B3D] to-black hover:from-slate-950 hover:to-slate-950 text-white rounded-full shadow-sm border border-blue-400/80 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 active:scale-95 glow-blue-pulse"
        >
          <div className="relative w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/60 flex items-center justify-center shrink-0">
            <Bot className="w-3 h-3 text-blue-300 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></span>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400 rounded-full ring-1 ring-black"></span>
          </div>
          <span className="text-xs font-bold tracking-wide text-white drop-shadow-sm flex items-center gap-1">
            <span>AI Counselor</span>
            <span className="text-[9px] bg-blue-500/30 text-blue-200 px-1 rounded">EN/हिन्दी</span>
          </span>
        </button>
      </div>
    </>
  );
}
