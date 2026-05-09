import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedWorkflow from '../components/AnimatedWorkflow';
import ScrollReveal from '../components/ScrollReveal';

const STATS = [
  { value: '500+', label: 'Workflow Aktif',       color: 'text-primary' },
  { value: '10k+', label: 'Jam Dihemat/Bulan',    color: 'text-secondary' },
  { value: '99.9%', label: 'Uptime Sistem',        color: 'text-primary' },
  { value: '24/7', label: 'Dukungan Lokal',        color: 'text-secondary' },
];

const SERVICES = [
  { icon: 'forum',       color: 'text-primary',   hoverBg: 'group-hover:bg-primary/10',   title: 'WhatsApp AI Assistant',     desc: 'Bot WhatsApp cerdas yang menangani reservasi, FAQ, dan kualifikasi prospek secara natural menggunakan LLM terkini.' },
  { icon: 'account_tree', color: 'text-secondary', hoverBg: 'group-hover:bg-secondary/10', title: 'n8n Workflow Automation',    desc: 'Desain alur kerja kustom yang menghubungkan berbagai aplikasi untuk mengotomatiskan tugas berulang tanpa hambatan.' },
  { icon: 'sync_alt',    color: 'text-primary',   hoverBg: 'group-hover:bg-primary/10',   title: 'CRM & ERP Integration',      desc: 'Sinkronisasi data real-time antara sistem front-end dan database back-end untuk konsistensi informasi.' },
];

export default function Home() {
  return (
    <main className="pt-24 md:pt-32">

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Left */}
        <div className="z-10 flex flex-col gap-6">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-primary/20 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-primary">Solusi AI Enterprise Indonesia</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-background leading-tight">
              Automasi Bisnis Modern dengan{' '}
              <span className="text-shimmer">AI & n8n</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Tingkatkan efisiensi operasional hingga 80%. Kami merancang dan mengimplementasikan sistem automasi cerdas yang bekerja 24/7 untuk bisnis Anda.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn-fill">
                Konsultasi Gratis
              </button>
              <Link to="/solutions" className="btn-fill-secondary">
                Lihat Solusi
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right */}
        <ScrollReveal delay={200} direction="right">
          <div className="z-10 relative">
            <div
              className="rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(76,215,246,0.2),0_0_40px_rgba(78,222,163,0.1)] cursor-pointer bg-surface/40 backdrop-blur-xl"
              style={{ border: '1px solid rgba(78,222,163,0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              {/* Browser Header */}
              <div className="flex items-center h-[34px] border-b border-white/10 w-full">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2 px-3 w-1/4 h-full border-r border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-error shadow-[inset_2px_2px_5px_rgba(255,255,255,0.15)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#cca704] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.15)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[inset_2px_2px_5px_rgba(255,255,255,0.15)]" />
                </div>
                
                {/* Browser Controls & URL */}
                <div className="flex items-center gap-2.5 px-3 w-3/4 h-full">
                  <div className="flex text-on-surface-variant">
                    <svg viewBox="0 0 20 20" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" />
                    </svg>
                    <svg viewBox="0 0 20 20" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" />
                    </svg>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-full h-[22px] border border-white/20 rounded-[5px] shadow-[inset_2px_2px_2px_rgba(255,255,255,0.05)] text-[10px] text-on-surface-variant tracking-wider font-mono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16.89 16.887" className="absolute left-2.5 fill-current">
                      <path d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z" transform="translate(0.003 0)" />
                    </svg>
                    otomateid.net
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <AnimatedWorkflow />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 border-t border-b border-surface-container-high/50 bg-surface-container-lowest/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label, color }, i) => (
            <ScrollReveal key={label} delay={i * 80} direction="scale">
              <div className="text-center">
                <h3 className={`font-display-xl-mobile text-headline-md ${color}`}>{value}</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 relative">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <ScrollReveal>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4 text-center">
            Solusi Cerdas untuk Bisnis Anda
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-body-lg text-body-lg text-on-surface-variant text-center mb-14 max-w-xl mx-auto">
            Integrasi tanpa batas antara komunikasi pelanggan dan sistem operasional internal.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {SERVICES.map(({ icon, color, hoverBg, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 120} direction="up">
              <div 
                className="card-rot-bg spotlight-card p-8 rounded-xl hover:glow-cyan transition-all duration-300 group cursor-pointer card-hover"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--mouse-x', `-1000px`);
                  e.currentTarget.style.setProperty('--mouse-y', `-1000px`);
                }}
              >
                <div className={`w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-6 ${hoverBg} transition-colors`}>
                  <span className={`material-symbols-outlined ${color} text-3xl`}>{icon}</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-on-surface mb-3">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
