import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import StarEffect from '../components/StarEffect';

const FEATURES_STARTER = ['Otomasi WhatsApp Dasar', 'Integrasi Google Sheets', 'Hingga 1.000 Task / bulan', 'Dukungan Email (SLA 48 Jam)'];
const FEATURES_BUSINESS = ['Advanced n8n Workflows', 'Integrasi CRM (HubSpot, Salesforce)', 'AI Chatbot Assistant (GPT-4)', 'Hingga 10.000 Task / bulan', 'Dukungan Prioritas (SLA 24 Jam)'];
const FEATURES_ENTERPRISE = ['Full-scale AI Agents', 'Custom API Integrations', 'Unlimited Tasks', 'On-Premise Deployment Option', 'Dedicated Local Support 24/7'];

function FeatureItem({ text, highlight }) {
  return (
    <li className="flex mb-4 items-center">
      <svg
        className="w-6 h-6 fill-current text-primary shrink-0"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
        ></path>
      </svg>
      <span className={`ml-2 ${highlight ? 'text-on-surface' : 'text-on-surface-variant'}`}>{text}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <main className="pt-32 pb-24">

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <ScrollReveal direction="left" delay={0} className="w-full lg:w-1/3 shrink-0 flex items-center justify-center">
            <dotlottie-wc
              src="https://lottie.host/cb591189-535a-4f4d-912a-bd6be3e35fea/mG8EvYX11D.lottie"
              style={{ width: '300px', height: '300px' }}
              autoplay loop
            />
          </ScrollReveal>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <ScrollReveal direction="right" delay={100}>
              <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {/* Starter */}
          <ScrollReveal direction="left" delay={0}>
            <div className="glass-card rounded-2xl p-8 flex flex-col card-hover relative group">
              <div className="text-center mb-6">
                <span className="font-label-sm text-label-sm text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4 inline-block border border-secondary/20">Mulai Digital</span>
                <h5 className="font-headline-md text-xl font-semibold text-on-surface mb-3">Starter UMKM</h5>
                <span className="block text-4xl font-bold text-on-surface mb-3">Rp 200k</span>
                <span className="block text-on-surface-variant font-medium">per bulan</span>
              </div>
              <ul className="flex-1 mt-4 mb-8">
                {FEATURES_STARTER.map(f => <FeatureItem key={f} text={f} />)}
              </ul>
              <div className="mt-auto">
                <button className="btn-arrow btn-arrow-secondary">
                  <span>Pilih Starter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74">
                    <circle strokeWidth={3} stroke="currentColor" r="35.5" cy={37} cx={37} />
                    <path fill="currentColor" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Business Growth */}
          <ScrollReveal direction="up" delay={100}>
            <div className="glass-card rounded-2xl p-8 flex flex-col card-hover relative group border-primary/30 shadow-[0px_0px_40px_rgba(16,185,129,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary font-label-sm text-label-sm px-4 py-1 rounded-full shadow-[0_0_15px_rgba(78,222,163,0.5)]">
                Paling Populer
              </div>
              <div className="text-center mb-6 mt-4">
                <h5 className="font-headline-md text-xl font-semibold text-primary mb-3">Business Growth</h5>
                <span className="block text-4xl font-bold text-on-surface mb-3">Rp 1jt</span>
                <span className="block text-on-surface-variant font-medium">per bulan</span>
              </div>
              <ul className="flex-1 mt-4 mb-8">
                {FEATURES_BUSINESS.map(f => <FeatureItem key={f} text={f} highlight />)}
              </ul>
              <div className="mt-auto">
                <button className="btn-arrow btn-arrow-primary">
                  <span>Mulai Sekarang</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74">
                    <circle strokeWidth={3} stroke="#051424" r="35.5" cy={37} cx={37} />
                    <path fill="#051424" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Enterprise */}
          <ScrollReveal direction="right" delay={200}>
            <div className="glass-card rounded-2xl p-8 flex flex-col card-hover relative group">
              <div className="text-center mb-6">
                <span className="font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-3 py-1 rounded-full mb-4 inline-block border border-tertiary/20">Skala Penuh</span>
                <h5 className="font-headline-md text-xl font-semibold text-on-surface mb-3">Enterprise AI</h5>
                <span className="block text-4xl font-bold text-on-surface mb-3">Kustom</span>
                <span className="block text-on-surface-variant font-medium">sesuai kebutuhan</span>
              </div>
              <ul className="flex-1 mt-4 mb-8">
                {FEATURES_ENTERPRISE.map(f => <FeatureItem key={f} text={f} />)}
              </ul>
              <div className="mt-auto">
                <button className="btn-arrow btn-arrow-tertiary">
                  <span>Hubungi Sales</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74">
                    <circle strokeWidth={3} stroke="currentColor" r="35.5" cy={37} cx={37} />
                    <path fill="currentColor" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}
