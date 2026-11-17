import React from 'react';

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  kickerColor = 'saffron',
  className = '',
  titleClassName = '',
  theme = 'light' // 'light' (normal bg) or 'dark' (on navy/dark bg)
}) {
  const alignments = {
    center: 'text-center mx-auto max-w-3xl items-center',
    left: 'text-left max-w-3xl items-start',
    right: 'text-right ml-auto max-w-3xl items-end'
  };

  const kickerStyles = {
    saffron: 'text-amber-700 bg-amber-50 border-amber-200/80 dark:text-amber-400 dark:bg-amber-950/40 dark:border-amber-800/60',
    navy: 'text-slate-800 bg-slate-100 border-slate-300 dark:text-slate-200 dark:bg-slate-800 dark:border-slate-700',
    white: 'text-amber-400 bg-slate-800/80 border-slate-700'
  };

  const titleColors = theme === 'dark' 
    ? 'text-white' 
    : 'text-slate-900 dark:text-slate-100';

  const subtitleColors = theme === 'dark' 
    ? 'text-slate-300' 
    : 'text-slate-600 dark:text-slate-400';

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignments[align] || alignments.center} ${className}`}>
      {kicker && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 border ${kickerStyles[kickerColor] || kickerStyles.saffron}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          {kicker}
        </span>
      )}
      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${titleColors} ${titleClassName}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColors}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
