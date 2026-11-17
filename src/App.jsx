import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
            <Navbar />
            <main className="flex-1">
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
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
