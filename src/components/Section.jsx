import React from 'react';

export default function Section({
  children,
  className = '',
  containerClassName = '',
  bg = 'default', // 'default' | 'offwhite' | 'navy' | 'slate' | 'transparent'
  id,
  fullWidth = false,
  ...props
}) {
  const bgStyles = {
    default: 'bg-white dark:bg-slate-900/60',
    offwhite: 'bg-stone-50 dark:bg-slate-950',
    navy: 'bg-slate-950 text-white dark:bg-slate-950 border-y border-slate-800',
    slate: 'bg-slate-100/70 dark:bg-slate-900 border-y border-slate-200/70 dark:border-slate-800',
    transparent: 'bg-transparent'
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 relative transition-colors duration-200 ${bgStyles[bg] || bgStyles.default} ${className}`}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
}
