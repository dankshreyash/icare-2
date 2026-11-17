import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function TeamCard({
  name,
  role,
  initials,
  photoUrl,
  category,
  credentials,
  focus,
  shortBio,
  location,
  university,
  variant = 'leader', // 'leader' | 'analyst' | 'tech'
  onReadBio,
  className = ''
}) {
  const getInitialsBg = (str) => {
    const colors = [
      'bg-slate-800 text-amber-400 border-slate-700',
      'bg-amber-900 text-amber-200 border-amber-800',
      'bg-slate-900 text-white border-slate-800',
      'bg-amber-800 text-white border-amber-700'
    ];
    let hash = 0;
    for (let i = 0; i < (str || '').length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  if (variant === 'analyst') {
    return (
      <div className={`p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${className}`}>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif text-sm font-bold border ${getInitialsBg(name)}`}>
              {initials || name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                {name}
              </h4>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                {role}
              </p>
            </div>
          </div>

          {focus && (
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
              <span className="font-medium text-slate-700 dark:text-slate-300">Focus:</span> {focus}
            </p>
          )}
        </div>

        {(university || location) && (
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            {location && (
              <>
                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                <span>{location}</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'tech') {
    return (
      <div className={`p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-amber-400/60 transition-all duration-200 ${className}`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-serif text-base font-bold border shrink-0 ${getInitialsBg(name)}`}>
            {initials || name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-900 dark:text-white text-base">
              {name}
            </h4>
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mt-0.5">
              {role}
            </p>
            {focus && (
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {focus}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default: Leader Card
  return (
    <div className={`group rounded-xl p-6 sm:p-7 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`Portrait of ${name}`}
              className="w-16 h-16 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
            />
          ) : (
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-serif text-xl font-bold tracking-wider border shadow-xs ${getInitialsBg(name)}`}>
              {initials}
            </div>
          )}

          {category && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {category}
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {name}
        </h3>

        <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">
          {role}
        </p>

        {credentials && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
            {credentials}
          </p>
        )}

        {shortBio && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3.5 leading-relaxed line-clamp-3">
            {shortBio}
          </p>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        {focus && (
          <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[190px]">
            {focus}
          </span>
        )}
        <button
          onClick={onReadBio}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-amber-400 hover:text-amber-600 transition-colors cursor-pointer ml-auto"
        >
          <span>View Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
