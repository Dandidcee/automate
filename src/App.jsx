import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import FAB from './components/FAB';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Solutions from './pages/Solutions';
import Layanan from './pages/Layanan';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-fixed relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="ambient-glow-cyan top-0 left-[-10vw]"></div>
        <div className="ambient-glow-emerald top-[400px] right-[-10vw]"></div>
        
        <ScrollToTop />
        <TopNavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <FAB />
        <Footer />
      </div>
    </Router>
  );
}
