'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Bot, 
  Award, 
  Building2,
  BookOpen,
  LogOut, 
  ExternalLink,
  School,
  Menu,
  X,
  ShieldCheck,
  Activity,
  ChevronRight
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  const navLinks = [
    { label: 'Dashboard Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Admission Enquiries', href: '/admin/enquiries', icon: Users, badge: 'Live' },
    { label: 'Our Campuses', href: '/admin/campuses', icon: Building2 },
    { label: 'Academic Programs', href: '/admin/programs', icon: BookOpen },
    { label: 'Results & Testimonials', href: '/admin/results', icon: Award },
    { label: 'AI Chatbot Knowledge', href: '/admin/chatbot-kb', icon: Bot },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full p-5 text-white">
      <div className="space-y-6">
        {/* Brand & Academy Identity */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 p-1 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <School className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-sm font-serif block tracking-wide text-white">
                Achievers Academy
              </span>
              <span className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Admin Portal
              </span>
            </div>
          </Link>

          {/* Close for mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Menu */}
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 mb-2 block">
            Navigation Menu
          </span>
          <nav className="space-y-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    active
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 translate-x-1'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {item.badge}
                    </span>
                  ) : active ? (
                    <ChevronRight className="w-3.5 h-3.5 opacity-80" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* System Health Status Widget */}
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5 font-semibold">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              System Status
            </span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Optimal
            </span>
          </div>
          <div className="space-y-1 text-[10px] text-slate-400">
            <div className="flex justify-between">
              <span>Database Engine:</span>
              <span className="text-white font-mono">Connected</span>
            </div>
            <div className="flex justify-between">
              <span>Security Guard:</span>
              <span className="text-emerald-400 font-mono">10/10 Active</span>
            </div>
            <div className="flex justify-between">
              <span>AI Chatbot Desk:</span>
              <span className="text-blue-400 font-mono">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer User Profile & Actions */}
      <div className="pt-4 border-t border-slate-800 space-y-2">
        <div className="flex items-center gap-3 px-2 py-1.5 mb-1">
          <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 font-bold text-xs">
            CA
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-white block truncate">Chief Administrator</span>
            <span className="text-[10px] text-slate-400 block truncate">admin@achieversacademy.com</span>
          </div>
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 text-xs text-slate-300 hover:text-white rounded-xl hover:bg-white/10 transition"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            <span>Open Public Website</span>
          </span>
          <span className="text-[10px] text-slate-500">Live</span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:text-rose-300 rounded-xl hover:bg-rose-500/10 transition text-left"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out Safely</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar with Hamburger */}
      <div className="md:hidden bg-[#070E1E] text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <School className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-xs font-serif block">Achievers Admin</span>
            <span className="text-[9px] text-blue-400 uppercase tracking-widest font-semibold">Portal</span>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 focus:outline-none"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-[#070E1E] min-h-screen border-r border-slate-800 shrink-0 sticky top-0 h-screen overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile Overlay & Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 bg-[#070E1E] h-full shadow-2xl flex flex-col z-10 animate-fade-in">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
