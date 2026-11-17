import React from 'react';
import { Home, FileQuestion } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Document Not Found"
        description="The requested institutional page could not be located on the ICARE portal."
      />

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-6">
            <FileQuestion className="w-10 h-10" />
          </div>

          <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
            HTTP 404 Error
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
            Institutional Document Not Found
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            The page, gazette, or analytical framework you are attempting to access does not exist or may have been relocated under our updated portal architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={Home}
              iconPosition="left"
            >
              Return to Homepage
            </Button>
            <Button
              to="/what-we-do"
              variant="outline"
              size="md"
            >
              Explore Practice Areas
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            <span>Need institutional assistance? Contact our Secretariat at </span>
            <a href="mailto:info@icare-india.org" className="text-amber-600 dark:text-amber-400 hover:underline">
              info@icare-india.org
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
