import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6 sm:p-8',
  border = true,
  bg = 'white', // 'white' | 'slate' | 'navy' | 'glass'
  onClick,
  ...props
}) {
  const bgStyles = {
    white: 'bg-white dark:bg-slate-900',
    slate: 'bg-stone-50 dark:bg-slate-900/60',
    navy: 'bg-slate-900 text-white dark:bg-slate-950',
    glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
  };

  const borderStyles = border
    ? 'border border-slate-200/80 dark:border-slate-800'
    : 'border-0';

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700'
    : 'transition-colors duration-200';

  return (
    <div
      onClick={onClick}
      className={`rounded-xl shadow-xs ${padding} ${bgStyles[bg] || bgStyles.white} ${borderStyles} ${hoverStyles} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
