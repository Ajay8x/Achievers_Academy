'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Bot, 
  Award, 
  LogOut, 
  ExternalLink,
  School,
  FileSpreadsheet
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

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
    { label: 'Admission Enquiries', href: '/admin/enquiries', icon: Users },
    { label: 'AI Chatbot Knowledge', href: '/admin/chatbot-kb', icon: Bot },
  ];

  return (
    <aside className="w-64 bg-navy-950 text-white min-h-screen p-5 flex flex-col justify-between border-r border-navy-800">
      <div className="space-y-6">
        {/* Brand */}
        <div className="flex items-center gap-3 pb-4 border-b border-navy-800">
          <div className="w-10 h-10 rounded-xl bg-gold-400 p-1 flex items-center justify-center">
            <School className="w-6 h-6 text-navy-950" />
          </div>
          <div>
            <span className="font-bold text-sm font-serif block">Achievers Admin</span>
            <span className="text-[10px] text-gold-400 uppercase tracking-widest font-semibold">Management Portal</span>
          </div>
        </div>

        {/* Links */}
        <nav className="space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                  active
                    ? 'bg-gold-500 text-navy-950 font-bold shadow'
                    : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-navy-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-navy-900 transition"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>View Live Website</span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:text-rose-300 rounded-lg hover:bg-navy-900 transition text-left"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

