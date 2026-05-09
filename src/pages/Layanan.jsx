import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import StarEffect from '../components/StarEffect';

const MARQUEE_ITEMS = [
  'Gmail', 'WhatsApp', 'Telegram', 'Google Sheets', 'OpenAI GPT-4', 'n8n',
  'Notion', 'Discord', 'Instagram', 'Facebook', 'Google Drive', 'Calendar',
  'Slack', 'YouTube', 'TikTok', 'Email Automation'
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="#25D366" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const N8NIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect width="24" height="24" rx="6" fill="#EA4B71" />
    <text x="2" y="17" fontSize="11" fontWeight="900" fontFamily="monospace" fill="white">n8n</text>
  </svg>
);

const GoogleSheetsIcon = () => (
  <svg viewBox="0 0 48 48" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path fill="#43A047" d="M37 45H11c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h19l10 10v29c0 1.657-1.343 3-3 3z" />
    <path fill="#C8E6C9" d="M40 13H30V3z" />
    <path fill="#2E7D32" d="M30 13l10 10V13z" />
    <path fill="#fff" d="M15 23h18v2H15zm0 4h18v2H15zm0 4h12v2H15z" />
  </svg>
);

const SERVICES = [
  { icon: 'whatsapp', svgIcon: <WhatsAppIcon />, color: '#25D366', title: 'WhatsApp AI Chatbot', desc: 'Auto reply pintar berbasis AI untuk customer service dan penjualan 24/7.' },
  { icon: 'n8n', svgIcon: <N8NIcon />, color: '#EA4B71', title: 'n8n Workflow Automation', desc: 'Otomatisasi proses bisnis kompleks menggunakan n8n — platform terdepan.' },
  { icon: 'support_agent', color: '#4edea3', title: 'Human CS Takeover', desc: 'Perpindahan mulus dari AI ke admin manusia tanpa kehilangan konteks.' },
  { icon: 'sheets', svgIcon: <GoogleSheetsIcon />, color: '#43A047', title: 'CRM & Google Sheets', desc: 'Sinkronisasi data customer secara real-time ke CRM atau spreadsheet.' },
  { icon: 'smart_toy', color: '#4edea3', title: 'AI Customer Service', desc: 'AI assistant merespons pelanggan secara cerdas dan kontekstual 24/7.' },
  { icon: 'notifications_active', color: '#4cd7f6', title: 'Reminder & Notifikasi', desc: 'Pengingat otomatis via WhatsApp, Telegram, dan Email.' },
  { icon: 'leaderboard', color: '#fc7c78', title: 'AI Lead Management', desc: 'Pengelolaan dan kualifikasi prospek otomatis berbasis AI.' },
  { icon: 'api', color: '#a78bfa', title: 'Custom API Integration', desc: 'Integrasi sistem bisnis dengan API modern, webhook, dan platform lain.' },
];

const STEPS = [
  { n: '01', icon: 'handshake', title: 'Konsultasi Kebutuhan', desc: 'Kami analisis kebutuhan bisnis Anda secara mendalam dan merancang solusi tepat.' },
  { n: '02', icon: 'design_services', title: 'Desain Workflow AI', desc: 'Tim kami merancang alur automasi yang efisien, scalable, dan mudah dikembangkan.' },
  { n: '03', icon: 'integration_instructions', title: 'Integrasi Sistem', desc: 'Integrasi dengan sistem existing berjalan mulus tanpa gangguan operasional.' },
  { n: '04', icon: 'rocket_launch', title: 'Automation Berjalan', desc: 'Sistem berjalan 24/7 dengan monitoring aktif dan dukungan teknis responsif.' },
];

const STATS = [
  { value: '80%', label: 'Waktu Operasional Dihemat', icon: 'schedule', color: '#4edea3' },
  { value: '< 1s', label: 'Waktu Respons Customer', icon: 'bolt', color: '#4cd7f6' },
  { value: '24/7', label: 'Operasional Tanpa Henti', icon: 'cloud_done', color: '#4edea3' },
  { value: '60%', label: 'Beban Admin Berkurang', icon: 'trending_down', color: '#fc7c78' },
  { value: '3x', label: 'Efisiensi Workflow', icon: 'speed', color: '#4cd7f6' },
  { value: '100+', label: 'Integrasi Modern', icon: 'hub', color: '#a78bfa' },
];

const INDUSTRIES = [
  { icon: 'store', label: 'UMKM' },
  { icon: 'car_repair', label: 'Bengkel' },
  { icon: 'local_hospital', label: 'Klinik' },
  { icon: 'storefront', label: 'Retail' },
  { icon: 'home_work', label: 'Property' },
  { icon: 'shopping_bag', label: 'E-commerce' },
  { icon: 'domain', label: 'Korporat' },
];

const CASES = [
  { icon: 'car_repair', color: '#4edea3', industry: 'Bengkel', title: 'Respon pelanggan naik 80%', desc: 'Bengkel di Surabaya otomatisasi booking service & reminder servis berkala via WhatsApp AI.' },
  { icon: 'shopping_bag', color: '#4cd7f6', industry: 'E-commerce', title: 'Order WA 100% terotomasi', desc: 'Toko online Jakarta proses order WhatsApp, update resi, dan follow-up otomatis.' },
  { icon: 'local_hospital', color: '#fc7c78', industry: 'Klinik', title: 'No-show pasien turun 60%', desc: 'Klinik gigi di Bandung kirim reminder appointment H-1 dan H-3 secara otomatis.' },
  { icon: 'store', color: '#f6c94c', industry: 'UMKM', title: 'Admin CS dari 3 orang ke 1', desc: 'UMKM kuliner otomatisasi FAQ, stok info, dan order via AI — 1 admin untuk 3x volume.' },
];

const FAQS = [
  { q: 'Apa itu automation bisnis?', a: 'Penggunaan teknologi untuk menjalankan proses berulang secara otomatis — balas pesan, kirim notifikasi, sinkronisasi data — tanpa campur tangan manusia.' },
  { q: 'Apa itu n8n dan kenapa OtomaID menggunakannya?', a: 'n8n adalah platform workflow automation open-source yang powerful. Mendukung 400+ integrasi, bisa self-hosted, dan sangat fleksibel untuk kebutuhan bisnis apapun.' },
  { q: 'Berapa biaya membuat chatbot WhatsApp?', a: 'Mulai dari Rp 999.000/bulan untuk paket UMKM dasar hingga custom enterprise. Konsultasi gratis untuk estimasi yang tepat sesuai kebutuhan Anda.' },
  { q: 'Apakah bisa diintegrasikan dengan sistem lama?', a: 'Ya. OtomaID berpengalaman mengintegrasikan berbagai sistem legacy melalui API, webhook, atau scraping.' },
  { q: 'Apakah AI bisa digabung dengan admin manusia?', a: 'Tentu. Fitur Human CS Takeover memungkinkan AI menangani percakapan awal, lalu meneruskan ke admin dengan seluruh konteks tersimpan.' },
  { q: 'Apakah layanan OtomaID cocok untuk UMKM?', a: 'Sangat cocok. Dengan paket terjangkau dan implementasi cepat, UMKM bisa langsung merasakan manfaat automasi tanpa tim IT.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between p-5 gap-4">
        <span className="text-on-surface font-semibold text-sm md:text-base">{q}</span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ${open ? 'rotate-45' : ''}`}>add</span>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed border-t border-white/5 pt-4">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(78,222,163,0.1)', borderBottom: '1px solid rgba(78,222,163,0.1)', padding: '13px 0', background: 'rgba(78,222,163,0.025)' }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{ padding: '0 28px', color: 'rgba(78,222,163,0.65)', fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Inter,sans-serif', letterSpacing: '0.05em' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4edea3', display: 'inline-block', boxShadow: '0 0 6px #4edea3' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Layanan() {
  return (
    <main className="pt-24 md:pt-32">

      {/* 1 — HERO */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary">Jasa AI Automation #1 Indonesia</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6 leading-tight max-w-4xl mx-auto">
            Layanan <span className="text-shimmer">Automasi AI</span> untuk Bisnis Modern Indonesia
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            OtomaID membantu UMKM dan perusahaan mengotomatisasi operasional bisnis dengan AI, chatbot WhatsApp, workflow automation, dan integrasi sistem modern.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-fill">Konsultasi Gratis</button>
            <button className="btn-fill-secondary">Jadwalkan Demo</button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {['500+ Klien Aktif', '10k+ Jam Dihemat', '99.9% Uptime', 'Support 24/7'].map((s) => (
              <span key={s} className="glass-panel px-4 py-2 rounded-full text-on-surface-variant text-sm border border-white/10">{s}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <MarqueeStrip />

      {/* 2 — SERVICES */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 relative">
        <ScrollReveal><h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 text-center">Layanan Kami</h2></ScrollReveal>
        <ScrollReveal delay={100}><p className="text-on-surface-variant max-w-xl mx-auto text-center mb-14">Solusi lengkap otomasi bisnis dari hulu ke hilir — dirancang khusus untuk pasar Indonesia.</p></ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon, svgIcon, color, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 80} direction="up">
              <div
                className="glass-panel rounded-xl p-6 flex flex-col gap-4 cursor-pointer card-hover h-full"
                style={{ borderColor: `${color}20` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${color}18`, border: `1px solid ${color}40` }}>
                  {svgIcon
                    ? svgIcon
                    : <span className="material-symbols-outlined" style={{ color, fontSize: '22px' }}>{icon}</span>
                  }
                </div>
                <h3 className="font-headline-md text-on-surface text-base font-bold">{title}</h3>
                <p className="text-on-surface-variant text-sm flex-1">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3 — HOW IT WORKS */}
      <section className="py-24 bg-surface-container-lowest/50 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal><h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 text-center">Bagaimana OtomaID Bekerja</h2></ScrollReveal>
          <ScrollReveal delay={100}><p className="text-on-surface-variant max-w-lg mx-auto text-center mb-16">Proses onboarding simpel, cepat, dan transparan.</p></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {STEPS.map(({ n, icon, title, desc }, i) => (
              <ScrollReveal key={n} delay={i * 150} direction="up">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 rounded-2xl glass-panel flex flex-col items-center justify-center gap-1 border border-primary/30 shadow-[0_0_20px_rgba(78,222,163,0.1)]">
                    <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
                    <span className="text-xs text-primary/60 font-bold">{n}</span>
                  </div>
                  <h3 className="font-headline-md text-on-surface text-sm font-bold">{title}</h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — STATS */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <ScrollReveal><h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-14 text-center">Dampak Nyata untuk Bisnis Anda</h2></ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {STATS.map(({ value, label, icon, color }, i) => (
            <ScrollReveal key={label} delay={i * 90} direction="scale">
              <div className="glass-panel rounded-xl p-6 flex flex-col items-center text-center gap-3 card-hover" style={{ borderColor: `${color}20` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <span className="material-symbols-outlined" style={{ color }}>{icon}</span>
                </div>
                <span className="text-2xl font-bold" style={{ color }}>{value}</span>
                <span className="text-on-surface-variant text-sm">{label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5 — INDUSTRIES */}
      <section className="py-20 bg-surface-container-lowest/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal><h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12 text-center">Cocok untuk Semua Industri</h2></ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map(({ icon, label }, i) => (
              <ScrollReveal key={label} delay={i * 70} direction="up">
                <div className="glass-panel rounded-xl px-6 py-4 flex items-center gap-3 cursor-pointer card-hover">
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                  <span className="text-on-surface font-semibold text-sm">{label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — CASE STUDIES */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <ScrollReveal><h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 text-center">Studi Kasus Nyata</h2></ScrollReveal>
        <ScrollReveal delay={100}><p className="text-on-surface-variant max-w-xl mx-auto text-center mb-14">Bisnis Indonesia yang sudah merasakan dampak nyata automasi OtomaID.</p></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map(({ icon, color, industry, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="glass-panel rounded-xl p-7 flex gap-5 card-hover relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-[50px] pointer-events-none" style={{ background: `${color}18` }} />
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color }}>{icon}</span>
                </div>
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-2 inline-block" style={{ background: `${color}18`, color }}>{industry}</span>
                  <h3 className="font-headline-md text-on-surface font-bold mb-2 text-base">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7 — FAQ */}
      <section className="py-20 bg-surface-container-lowest/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal><h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12 text-center">Pertanyaan yang Sering Ditanyakan</h2></ScrollReveal>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <FAQItem {...faq} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6">
              Siap Mengotomatisasi <br className="hidden md:block" />
              <span className="text-shimmer">Bisnis Anda?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl mx-auto mb-10">
              Bergabunglah dengan ratusan bisnis Indonesia yang sudah menghemat waktu dan biaya operasional bersama OtomaID.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/6281234567890?text=Halo%20OtomaID%2C%20saya%20ingin%20konsultasi." target="_blank" rel="noopener noreferrer" className="btn-wa">
                {/* WhatsApp SVG Logo */}
                <svg style={{ zIndex: 2, position: 'relative', width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span style={{ zIndex: 2, position: 'relative' }}>Hubungi via WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
