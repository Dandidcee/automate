import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  const { state } = useLocation();
  const title = state?.title || 'Artikel ini';

  return (
    <main className="flex-grow flex items-center justify-center min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-secondary/10 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto gap-6">

        {/* Big 404 number */}
        <div className="relative select-none">
          <span
            className="font-display-xl text-[80px] md:text-[120px] font-extrabold leading-none text-shimmer"
            style={{ letterSpacing: '-0.04em' }}
          >
            404
          </span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        </div>

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl glass-panel-floating flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '40px', fontVariationSettings: "'FILL' 1" }}>
            article
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline-md text-2xl md:text-3xl text-on-background">
          Artikel Belum Tersedia
        </h1>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Artikel <span className="text-primary font-semibold">"{title}"</span> sedang dalam penulisan atau belum dipublikasikan. 
          Ikuti update terbaru kami di halaman Blog!
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link to="/blog" className="btn-fill">
            ← Kembali ke Blog
          </Link>
          <Link to="/" className="btn-fill-secondary">
            Ke Beranda
          </Link>
        </div>

        {/* Decorative dots */}
        <div className="flex gap-2 mt-6 opacity-30">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-primary" style={{ opacity: (i + 1) / 5 }} />
          ))}
        </div>
      </div>
    </main>
  );
}
