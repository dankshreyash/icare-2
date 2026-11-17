import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../data/content';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-slate-200 dark:border-slate-800'
          : 'bg-white dark:bg-slate-950 border-slate-200/80 dark:border-slate-850'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg group py-1 shrink-0"
            aria-label="ICARE Home"
          >
            <picture>
              <source type="image/webp" srcSet="/icare-logo.webp" />
              <img
                src="/icare-logo.png"
                alt="ICARE — Indian Centre for Academic Rankings & Excellence"
                width="860"
                height="290"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-9 sm:h-10 lg:h-11 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-200 group-hover:opacity-90"
              />
            </picture>
          </Link>

          {/* Desktop Navigation Links — All options visible on big screens (lg and up) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" aria-label="Main Navigation">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-lg text-xs lg:text-[13px] xl:text-sm font-medium transition-all duration-150 relative whitespace-nowrap ${
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
                      <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-0.5 bg-amber-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Area — Theme Toggle & Inquire CTA on big screens */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200/80 dark:border-slate-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Inquire CTA */}
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="font-medium text-xs xl:text-sm px-3.5 xl:px-4 py-2"
            >
              Inquire
            </Button>
          </div>

          {/* Small Device / Mobile Area: Burger menu only */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* The Burger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Small Device Drawer (Opens when burger is clicked) */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
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

            {/* Inquire CTA for mobile */}
            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
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
