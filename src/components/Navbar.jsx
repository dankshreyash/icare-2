import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../data/content';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timeout = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-slate-200 dark:border-slate-800'
          : 'bg-white dark:bg-slate-950 border-slate-200/80 dark:border-slate-850'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg group py-1 shrink-0"
            aria-label="ICARE Home"
          >
            <img
              src="/icare-logo.png"
              alt="ICARE — Indian Centre for Academic Rankings & Excellence"
              className="h-9 sm:h-11 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation Links (XL and above) */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-slate-950 dark:text-white font-semibold bg-slate-100/90 dark:bg-slate-850 shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Area: Single Clean Theme Pill + Inquire CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Single Toggle Pill */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="inline-flex items-center gap-2 h-9 px-3 rounded-full bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-500/80 transition-all cursor-pointer shadow-2xs"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-200">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-semibold text-slate-700">Light</span>
                </>
              )}
            </button>

            {/* Inquire CTA */}
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="font-medium"
            >
              Inquire
            </Button>
          </div>

          {/* Mobile Right Area: Hamburger Menu Trigger (No duplicate toggle) */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border-l-4 border-amber-500'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-400">→</span>
              </NavLink>
            ))}

            {/* Mobile Dedicated Theme Selector Control */}
            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 pl-1">
                  Appearance
                </span>
                <div className="inline-flex rounded-lg p-1 bg-slate-200/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      theme === 'light'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    <span>Light</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dark</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Inquire Button */}
            <div className="pt-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Inquire & Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
