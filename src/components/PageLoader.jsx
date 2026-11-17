import React from 'react';

export default function PageLoader() {
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="w-12 h-12 rounded-full border-3 border-amber-500/20 border-t-amber-500 animate-spin mb-4" />
      <span className="font-serif text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">
        Loading Institutional Intelligence...
      </span>
      <span className="sr-only">Loading page content, please wait</span>
    </div>
  );
}
