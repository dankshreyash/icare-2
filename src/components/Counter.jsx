import React, { useEffect, useState, useRef } from 'react';

export default function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  label,
  description,
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = parseInt(value, 10) || 0;
    if (start === end) {
      const timeout = setTimeout(() => setDisplayValue(end), 0);
      return () => clearTimeout(timeout);
    }

    const stepTime = Math.max(Math.floor(duration / (end || 1)), 25);
    const stepIncrement = Math.ceil(end / (duration / stepTime)) || 1;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, value, duration]);

  return (
    <div
      ref={elementRef}
      className={`text-center p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-amber-400/50 transition-all duration-300 ${className}`}
    >
      <div className="flex items-baseline justify-center gap-1">
        {prefix && (
          <span className="text-xl sm:text-2xl font-medium text-slate-500 dark:text-slate-400">
            {prefix}
          </span>
        )}
        <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
          {displayValue}
        </span>
        {suffix && (
          <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-600 dark:text-amber-400">
            {suffix}
          </span>
        )}
      </div>

      {label && (
        <h3 className="mt-3.5 text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
          {label}
        </h3>
      )}

      {description && (
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
