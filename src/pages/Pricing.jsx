import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const FEATURES_STARTER = ['Otomasi WhatsApp Dasar', 'Integrasi Google Sheets', 'Hingga 1.000 Task / bulan', 'Dukungan Email (SLA 48 Jam)'];
const FEATURES_BUSINESS = ['Advanced n8n Workflows', 'Integrasi CRM (HubSpot, Salesforce)', 'AI Chatbot Assistant (GPT-4)', 'Hingga 10.000 Task / bulan', 'Dukungan Prioritas (SLA 24 Jam)'];
const FEATURES_ENTERPRISE = ['Full-scale AI Agents', 'Custom API Integrations', 'Unlimited Tasks', 'On-Premise Deployment Option', 'Dedicated Local Support 24/7'];

function FeatureItem({ text, highlight }) {
  return (
    <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
      <span className={highlight ? 'text-on-surface' : 'text-on-surface-variant'}>{text}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <main className="pt-32 pb-24">

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <ScrollReveal direction="left" delay={0} className="w-full md:w-1/3 shrink-0 flex items-center justify-center">
            <dotlottie-wc
              src="https://lottie.host/cb591189-535a-4f4d-912a-bd6be3e35fea/mG8EvYX11D.lottie"
              style={{ width: '300px', height: '300px' }}
              autoplay loop
            />
          </ScrollReveal>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <ScrollReveal direction="right" delay={100}>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6">
                Investasi dalam{' '}
                <span className="text-shimmer">Efisiensi</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                Pilih paket otomasi yang sesuai dengan skala bisnis Anda. Dari UMKM hingga Enterprise, kami memiliki solusi untuk mempercepat pertumbuhan Anda dengan teknologi AI terkini.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Starter */}
          <ScrollReveal direction="left" delay={0}>
            <div className="glass-card rounded-2xl p-8 flex flex-col card-hover relative group">
              <div className="mb-8">
                <span className="font-label-sm text-label-sm text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4 inline-block border border-secondary/20">Mulai Digital</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Starter UMKM</h3>
                <p className="text-on-surface-variant text-sm mb-6">Solusi esensial untuk mengotomasi operasional dasar dan komunikasi pelanggan.</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface">Rp 200k</span>
                  <span className="text-on-surface-variant">/ bulan</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {FEATURES_STARTER.map(f => <FeatureItem key={f} text={f} />)}
              </ul>
              <button className="w-full py-4 rounded-lg font-label-sm text-label-sm border border-secondary text-secondary hover:bg-secondary/10 transition-colors">
                Pilih Starter
              </button>
            </div>
          </ScrollReveal>

          {/* Business Growth */}
          <ScrollReveal direction="up" delay={100}>
            <div className="glass-card rounded-2xl p-8 flex flex-col card-hover relative group border-primary/30 shadow-[0px_0px_40px_rgba(16,185,129,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary font-label-sm text-label-sm px-4 py-1 rounded-full shadow-[0_0_15px_rgba(78,222,163,0.5)]">
                Paling Populer
              </div>
              <div className="mb-8 mt-2">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Business Growth</h3>
                <p className="text-on-surface-variant text-sm mb-6">Workflow kompleks dengan integrasi AI untuk perusahaan yang sedang berkembang pesat.</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface">Rp 1jt</span>
                  <span className="text-on-surface-variant">/ bulan</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {FEATURES_BUSINESS.map(f => <FeatureItem key={f} text={f} highlight />)}
              </ul>
              <button className="w-full py-4 rounded-lg font-label-sm text-label-sm bg-primary text-on-primary shadow-[0_0_20px_rgba(78,222,163,0.3)] hover:shadow-[0_0_30px_rgba(78,222,163,0.5)] transition-all">
                Mulai Sekarang
              </button>
            </div>
          </ScrollReveal>

          {/* Enterprise */}
          <ScrollReveal direction="right" delay={200}>
            <div className="glass-card rounded-2xl p-8 flex flex-col card-hover relative group">
              <div className="mb-8">
                <span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-3 py-1 rounded-full mb-4 inline-block border border-tertiary/20">Skala Penuh</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Enterprise AI</h3>
                <p className="text-on-surface-variant text-sm mb-6">Otomasi skala penuh, agen AI kustom, dan dukungan dedikasi untuk korporasi.</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface">Kustom</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {FEATURES_ENTERPRISE.map(f => <FeatureItem key={f} text={f} />)}
              </ul>
              <button className="w-full py-4 rounded-lg font-label-sm text-label-sm border border-secondary text-secondary hover:bg-secondary/10 transition-colors">
                Hubungi Sales
              </button>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}
