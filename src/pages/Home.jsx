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
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
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
              <button className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-8 py-4 rounded-full glow-emerald hover:brightness-110 transition-all font-semibold">
                Konsultasi Gratis
              </button>
              <Link to="/solutions" className="bg-transparent border border-secondary text-secondary font-label-sm text-label-sm px-8 py-4 rounded-full hover:bg-secondary/10 transition-all font-semibold">
                Lihat Solusi
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right */}
        <ScrollReveal delay={200} direction="right">
          <div className="z-10 relative">
            <div
              className="rounded-xl p-4 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(76,215,246,0.2),0_0_40px_rgba(78,222,163,0.1)] cursor-pointer"
              style={{ background: '#051424', border: '1px solid rgba(78,222,163,0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-3">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-tertiary-container" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <AnimatedWorkflow />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {SERVICES.map(({ icon, color, hoverBg, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 120} direction="up">
              <div className="glass-panel p-8 rounded-xl hover:glow-cyan transition-all duration-300 group cursor-pointer card-hover">
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
