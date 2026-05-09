import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/30">
      {/* Main footer grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="font-display-xl-mobile text-headline-lg-mobile font-bold text-primary w-fit tracking-tighter">
            OtomateID
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-[200px]">
            Solusi Automasi AI Terpercaya di Indonesia. Tingkatkan efisiensi bisnis Anda dengan teknologi cerdas yang dirancang untuk skala enterprise.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col gap-4">
          <span className="text-on-surface font-semibold text-sm">Navigasi</span>
          <Link to="/solutions" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Solusi</Link>
          <Link to="/layanan" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Layanan</Link>
          <Link to="/pricing" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Harga</Link>
        </div>

        {/* Sumber Daya */}
        <div className="flex flex-col gap-4">
          <span className="text-on-surface font-semibold text-sm">Sumber Daya</span>
          <Link to="/blog" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Blog</Link>
          <Link to="/solutions" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Case Studies</Link>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Dokumentasi API</a>
        </div>

        {/* Insight Mingguan */}
        <div className="flex flex-col gap-4">
          <span className="text-on-surface font-semibold text-sm">Insight Mingguan</span>
          {sent ? (
            <p className="text-primary text-sm">✓ Terima kasih telah berlangganan!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="flex-1 bg-surface-container border border-outline-variant rounded-lg py-2.5 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
              />
              <button
                type="submit"
                className="w-10 h-10 shrink-0 bg-primary text-on-primary rounded-lg flex items-center justify-center hover:brightness-110 transition-all"
                aria-label="Berlangganan"
              >
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-on-surface-variant text-xs">
          © 2026 OtomateID. Solusi Otomasi AI Terpercaya di Indonesia.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-xs">Kebijakan Privasi</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-xs">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
