'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export type ToastType = 'error' | 'success' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (toast: Omit<Toast, 'id'>) => string;
  showError: (message: string, title?: string) => string;
  showSuccess: (message: string, title?: string) => string;
  showWarning: (message: string, title?: string) => string;
  showInfo: (message: string, title?: string) => string;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type, title, message, duration = 5000 }: Omit<Toast, 'id'>) => {
      const id = 'toast-' + Math.random().toString(36).substring(2, 9);
      const newToast: Toast = { id, type, title, message, duration };

      setToasts((prev) => [newToast, ...prev].slice(0, 4)); // Keep up to 4 toasts max

      if (duration > 0) {
        setTimeout(() => {
          dismissToast(id);
        }, duration);
      }

      return id;
    },
    [dismissToast]
  );

  const showError = useCallback(
    (message: string, title = 'Attention Required') => {
      return showToast({ type: 'error', title, message, duration: 6000 });
    },
    [showToast]
  );

  const showSuccess = useCallback(
    (message: string, title = 'Success') => {
      return showToast({ type: 'success', title, message, duration: 5000 });
    },
    [showToast]
  );

  const showWarning = useCallback(
    (message: string, title = 'Notice') => {
      return showToast({ type: 'warning', title, message, duration: 5000 });
    },
    [showToast]
  );

  const showInfo = useCallback(
    (message: string, title = 'Information') => {
      return showToast({ type: 'info', title, message, duration: 5000 });
    },
    [showToast]
  );

  return (
    <ToastContext.Provider
      value={{ toasts, showToast, showError, showSuccess, showWarning, showInfo, dismissToast }}
    >
      {children}

      {/* Top Floating Pop-up Notification Banner Container */}
      <aside
        aria-label="System notifications"
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[99999] flex flex-col gap-3 w-[94vw] max-w-lg pointer-events-none"
      >
        {toasts.map((toast) => {
          const isError = toast.type === 'error';
          const isSuccess = toast.type === 'success';
          const isWarning = toast.type === 'warning';

          return (
            <div
              key={toast.id}
              role={isError ? 'alert' : 'status'}
              aria-live={isError ? 'assertive' : 'polite'}
              className={`pointer-events-auto animate-toast-slide-down relative overflow-hidden rounded-2xl p-4 sm:p-4.5 border shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                isError
                  ? 'bg-[#0B1120]/95 text-white border-rose-500/80 shadow-rose-950/50'
                  : isSuccess
                  ? 'bg-[#0B1120]/95 text-white border-emerald-500/80 shadow-emerald-950/50'
                  : isWarning
                  ? 'bg-[#0B1120]/95 text-white border-amber-500/80 shadow-amber-950/50'
                  : 'bg-[#0B1120]/95 text-white border-blue-500/80 shadow-blue-950/50'
              }`}
            >
              <div className="flex items-start gap-3.5">
                {/* Visual Icon Badge */}
                <div
                  className={`shrink-0 p-2 sm:p-2.5 rounded-xl border ${
                    isError
                      ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                      : isSuccess
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : isWarning
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                      : 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                  }`}
                >
                  {isError && <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {isSuccess && <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {isWarning && <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {!isError && !isSuccess && !isWarning && <Info className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>

                {/* Content Message */}
                <div className="flex-1 min-w-0 pr-2 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isError
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                          : isSuccess
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : isWarning
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {toast.title || (isError ? 'Error Notification' : isSuccess ? 'Success' : 'Notice')}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 font-sans mt-1.5 leading-relaxed break-words font-medium">
                    {toast.message}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => dismissToast(toast.id)}
                  className="shrink-0 p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                  aria-label="Dismiss notification"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Glowing progress line at the bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  isError
                    ? 'bg-gradient-to-r from-rose-500 via-rose-400 to-rose-600'
                    : isSuccess
                    ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600'
                    : isWarning
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600'
                    : 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600'
                }`}
              />
            </div>
          );
        })}
      </aside>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
