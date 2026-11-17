import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { siteMetadata, navigationLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors duration-200">
      {/* Top Banner with Inquiry Prompt */}
      <div className="border-b border-slate-850 py-10 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Institutional Quality Assessment & Ranking Advisory
            </h3>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              Engage with ICARE for state rating architectures, NIRF acceleration, NAAC SSR validation, or embedded analytics.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-sm shrink-0"
          >
            <span>Initiate an Institutional Dialogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Logo from images folder (4 cols) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group" aria-label="ICARE Home">
              <picture>
                <source type="image/webp" srcSet="/icare-logo.webp" />
                <img
                  src="/icare-logo.png"
                  alt="ICARE — Indian Centre for Academic Rankings & Excellence"
                  width="860"
                  height="290"
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </picture>
            </Link>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {siteMetadata.fullName} is an independent institutional intelligence agency advancing the quality, research capacity, and global competitiveness of Indian higher education.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{siteMetadata.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${siteMetadata.email}`} className="hover:text-amber-400 transition-colors">
                  {siteMetadata.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{siteMetadata.phone}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Frameworks & Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Focus Domains
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/what-we-do" className="hover:text-white transition-colors">
                  State Rating Frameworks (GSIRF, KSURF)
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-white transition-colors">
                  NIRF Technical & Data Validation
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-white transition-colors">
                  Embedded Data Analysts Deployment
                </Link>
              </li>
              <li>
                <Link to="/tools-and-initiatives" className="hover:text-white transition-colors">
                  AI Institutional Simulator
                </Link>
              </li>
              <li>
                <Link to="/tools-and-initiatives" className="hover:text-white transition-colors">
                  TRUTH Index & Scopus Audit
                </Link>
              </li>
              <li>
                <Link to="/tools-and-initiatives" className="hover:text-white transition-colors">
                  Stanford Top-2% Scientists Mapping
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Credibility & Affiliations Note (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Policy & Impact
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="font-medium text-slate-200">
                Independent Institutional Research
              </p>
              <p className="leading-relaxed">
                Operating with uncompromising methodology, verifiable bibliometric telemetry, and non-commercial integrity.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-amber-400 font-mono">
                <span>Founded 2012</span>
                <span>•</span>
                <span>Pan-India Mandates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-850 py-6 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {siteMetadata.copyrightYear} {siteMetadata.fullName} ({siteMetadata.name}). All rights reserved.
          </p>
          <p className="text-slate-500">
            Pioneering academic excellence and verifiable institutional intelligence across Indian universities.
          </p>
        </div>
      </div>
    </footer>
  );
}
