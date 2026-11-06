'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, AlertCircle, School, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('admin@achieversacademy.com');
  const [password, setPassword] = useState('Achievers@2025');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-navy-950 text-white p-8 text-center relative">
          <div className="w-14 h-14 rounded-2xl bg-gold-400 mx-auto flex items-center justify-center shadow-md mb-3">
            <School className="w-8 h-8 text-navy-950" />
          </div>
          <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest">
            Institutional Admin
          </span>
          <h2 className="text-2xl font-bold font-serif mt-1">Achievers Academy</h2>
          <p className="text-xs text-slate-300 mt-1">Management &amp; Admission Portal</p>
        </div>

        {/* Form Body */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Admin Username / Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin@achieversacademy.com"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-700 block">Default Credentials Provided:</span>
              <p>Username: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-navy-900 font-mono">admin@achieversacademy.com</code></p>
              <p>Password: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-navy-900 font-mono">Achievers@2025</code></p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-navy-900 hover:bg-navy-950 text-white font-bold rounded-xl text-sm transition shadow flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

