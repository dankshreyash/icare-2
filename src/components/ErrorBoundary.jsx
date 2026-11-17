import React, { Component } from 'react';
import { AlertOctagon, RotateCcw, Home, Mail } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // Log to console or external telemetry if configured
    console.error('ICARE Portal Caught UI Exception:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert" 
          aria-live="assertive"
          className="min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-4 sm:p-6"
        >
          <div className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-6">
              <AlertOctagon className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 px-3 py-1 rounded bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
              System Notice
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-4 mb-3 text-slate-900 dark:text-white">
              An unexpected render issue occurred
            </h1>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              The institutional portal encountered a temporary execution error. Your session data is intact. Please refresh the page or return to the main portal.
            </p>

            {Boolean(typeof import.meta !== 'undefined' && import.meta.env?.DEV) && this.state.error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-left font-mono text-xs text-red-700 dark:text-red-300 overflow-x-auto max-h-40">
                <p className="font-bold mb-1">{this.state.error.toString()}</p>
                <p className="text-[11px] text-red-500 dark:text-red-400">{this.state.errorInfo?.componentStack}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload Application</span>
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-sm transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Technical Secretariat: info@icare-india.org</span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
