import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import TrackRecord from './pages/TrackRecord';
import ToolsAndInitiatives from './pages/ToolsAndInitiatives';
import LeadershipAndTeam from './pages/LeadershipAndTeam';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.4.1) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg shadow-xl ring-2 ring-slate-900 focus:outline-none transition-all duration-150"
          >
            Skip to main institutional content
          </a>

          <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
            <Navbar />
            <main id="main-content" tabIndex="-1" className="flex-1 focus:outline-none">
              <ErrorBoundary>
                <Routes>
                  {/* Canonical Core Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                  <Route path="/track-record" element={<TrackRecord />} />
                  <Route path="/tools-and-initiatives" element={<ToolsAndInitiatives />} />
                  <Route path="/leadership-and-team" element={<LeadershipAndTeam />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* Legacy Redirects from Old Static HTML URLs */}
                  <Route path="/about.html" element={<Navigate to="/about" replace />} />
                  <Route path="/services" element={<Navigate to="/what-we-do" replace />} />
                  <Route path="/services.html" element={<Navigate to="/what-we-do" replace />} />
                  <Route path="/evolution" element={<Navigate to="/about" replace />} />
                  <Route path="/evolution.html" element={<Navigate to="/about" replace />} />
                  <Route path="/network" element={<Navigate to="/track-record" replace />} />
                  <Route path="/network.html" element={<Navigate to="/track-record" replace />} />
                  <Route path="/gsirf" element={<Navigate to="/track-record" replace />} />
                  <Route path="/gsirf.html" element={<Navigate to="/track-record" replace />} />
                  <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
                  <Route path="/tools" element={<Navigate to="/tools-and-initiatives" replace />} />
                  <Route path="/team" element={<Navigate to="/leadership-and-team" replace />} />
                  <Route path="/leadership" element={<Navigate to="/leadership-and-team" replace />} />

                  {/* 404 Catch-All */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
