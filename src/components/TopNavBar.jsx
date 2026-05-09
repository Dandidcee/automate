import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function TopNavBar() {
  const location = useLocation();
  const path = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/solutions', label: 'Solusi' },
    { to: '/layanan', label: 'Layanan' },
    { to: '/pricing', label: 'Harga' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <>
      <nav className="bg-surface/80 backdrop-blur-xl fixed top-0 left-0 right-0 w-full z-50 border-b border-white/10 shadow-[0px_0px_30px_rgba(16,185,129,0.05)]">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <Link
            to="/"
            className="font-display-xl text-2xl font-bold text-primary tracking-tighter hover:scale-95 transition-transform duration-300"
          >
            OtomaID
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={
                  path === to
                    ? 'text-primary font-bold border-b-2 border-primary pb-1 transition-all duration-300'
                    : 'text-on-surface-variant font-medium hover:text-primary transition-all duration-300'
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="btn-fill">
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-primary p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden grid transition-all duration-300 ease-in-out ${mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
          <div className="overflow-hidden">
            <div className="bg-surface-container-low border-t border-white/10 px-margin-mobile py-4 flex flex-col gap-4 relative z-10 shadow-2xl">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={
                    path === to
                      ? 'text-primary font-bold text-base'
                      : 'text-on-surface-variant font-medium text-base hover:text-primary transition-colors'
                  }
                >
                  {label}
                </Link>
              ))}
              <button className="btn-fill w-full justify-center mt-2">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>

        {/* Blurred Backdrop */}
        <div 
          className={`md:hidden fixed top-full left-0 right-0 h-[100vh] bg-background/60 backdrop-blur-md -z-10 transition-all duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setMobileOpen(false)}
        />
      </nav>
    </>
  );
}
