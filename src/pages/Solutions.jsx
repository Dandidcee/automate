import React, { useState, useMemo } from 'react';
import ScrollReveal from '../components/ScrollReveal';

// Configurations
const ADMIN_COST_OPTIONS = [
  { label: 'Rp 1.800.000', value: 1800000 },
  { label: 'Rp 2.500.000', value: 2500000 },
  { label: 'Rp 3.500.000', value: 3500000 },
  { label: 'Rp 5.000.000+', value: 5000000 },
];

const PACKAGE_CONFIG = {
  starter:    { label: 'Starter UMKM',    price: 200000,  color: '#4cd7f6', autoRate: 0.80 },
  growth:     { label: 'Business Growth', price: 1000000, color: '#4edea3', autoRate: 0.85 },
  enterprise: { label: 'Enterprise AI',   price: 0,       color: '#f6c94c', autoRate: 0.95 },
};

function StatBar({ label, value, color, suffix = '%' }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-on-surface-variant">{label}</span>
        <span className="font-bold" style={{ color }}>{value}{suffix}</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
        <div
          className="h-1.5 rounded-full transition-all duration-700"
          style={{ width: `${Math.min(value, 100)}%`, background: `linear-gradient(90deg,${color}88,${color})`, boxShadow: `0 0 8px ${color}60` }}
        />
      </div>
    </div>
  );
}

export default function Solutions() {
  const [chatPerDay, setChatPerDay] = useState(500);
  const [adminCost, setAdminCost] = useState(2500000);
  const [pkg, setPkg] = useState('starter');

  const results = useMemo(() => {
    const pk = PACKAGE_CONFIG[pkg];
    const monthlyChats = chatPerDay * 30;
    const autoHandled = Math.round(monthlyChats * pk.autoRate);
    
    // Asumsi 1 admin handle 15.000 chat/bulan (500/hari)
    const adminCapacity = 15000;
    const currentAdminsNeeded = Math.max(1, Math.ceil(monthlyChats / adminCapacity));
    const currentTotalCost = currentAdminsNeeded * adminCost;
    
    // Dengan AI, hitung sisa chat yang harus di-handle admin
    const remainingChats = monthlyChats - autoHandled;
    const newAdminsNeeded = Math.max(1, Math.ceil(remainingChats / adminCapacity));
    
    // Harga enterprise custom = tidak dimasukkan ke dalam hitungan potongan harga di UI ini, dianggap Rp0 untuk default kalkulator,
    // atau di skip. Kita biarkan price=0 jika custom.
    const newTotalCost = newAdminsNeeded * adminCost + pk.price;
    
    // Waktu operasional yang dihemat (% berdasarkan autoRate)
    const timeSavedPercent = Math.round(pk.autoRate * 100);
    
    // Potensi percepatan respon
    const responseSpeedup = Math.round(timeSavedPercent * 1.1); 
    
    // Penghematan Cost
    const rawSavings = currentTotalCost - newTotalCost;
    const proportionalSavings = ((autoHandled / adminCapacity) * adminCost) - pk.price;
    const displaySavings = rawSavings > 0 ? rawSavings : proportionalSavings;
    const finalSavings = Math.max(0, displaySavings); 
    
    const fmtNum = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
    const fmtRp = (n) => new Intl.NumberFormat('id-ID').format(Math.round(n));

    return { 
      monthlyChats, 
      autoHandled, 
      timeSavedPercent: Math.min(99, timeSavedPercent),
      responseSpeedup: Math.min(99, responseSpeedup),
      finalSavings,
      fmtNum,
      fmtRp,
      pk,
      currentAdminsNeeded,
      newAdminsNeeded,
    };
  }, [chatPerDay, adminCost, pkg]);

  const sel = "w-full bg-surface-container border border-white/10 rounded-xl p-3 text-on-surface text-sm focus:border-primary outline-none cursor-pointer hover:border-primary/40 transition-colors";

  return (
    <main className="pt-32 pb-20">

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6 leading-tight">
              Transformasi Industri dengan{' '}
              <span className="text-shimmer">Automasi Cerdas</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Dari operasional harian hingga layanan pelanggan, OtomateID membantu bisnis Indonesia memangkas biaya dan meningkatkan efisiensi melalui solusi AI terdepan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32">
        <ScrollReveal>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12 text-center">Solusi Per Industri</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

          <ScrollReveal direction="left" delay={0} className="md:col-span-2">
            <div className="glass-panel rounded-xl p-8 group relative overflow-hidden card-hover h-full">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">bed</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Perhotelan</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wider">Tantangan</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Pertanyaan reservasi berulang di luar jam kerja, delay respons yang menurunkan konversi booking, dan manajemen komplain manual.</p>
                  <h4 className="font-label-sm text-label-sm text-primary mb-2 uppercase tracking-wider">Solusi OtomateID</h4>
                  <p className="text-on-surface-variant text-sm">Bot reservasi 24/7 terintegrasi dengan PMS, eskalasi tiket otomatis, dan broadcast promo tersegmentasi.</p>
                </div>
                <div className="bg-surface-container-high/30 backdrop-blur-sm rounded-lg p-6 border border-white/5">
                  <h4 className="font-label-sm text-label-sm text-on-surface mb-4">Hasil Nyata</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
                      <span className="text-on-surface text-sm"><strong className="text-primary">+45%</strong> Direct Booking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">timer</span>
                      <span className="text-on-surface text-sm"><strong className="text-primary">&lt; 1 Menit</strong> Waktu Respons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="glass-panel rounded-xl p-8 group relative overflow-hidden card-hover h-full">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all duration-500" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary">local_hospital</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Klinik & Faskes</h3>
              </div>
              <div className="relative z-10 space-y-4">
                <div><h4 className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider text-xs">Problem</h4>
                  <p className="text-on-surface-variant text-xs">Jadwal dokter berantakan, no-show pasien tinggi.</p></div>
                <div><h4 className="font-label-sm text-label-sm text-primary mb-1 uppercase tracking-wider text-xs">Solusi</h4>
                  <p className="text-on-surface-variant text-xs">Automasi reminder WhatsApp H-1 dan sistem antrean cerdas.</p></div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Penurunan No-Show</span>
                  <span className="font-bold text-primary text-lg">-60%</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <div className="glass-panel rounded-xl p-8 group relative overflow-hidden card-hover h-full">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all duration-500" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary">storefront</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Retail & E-commerce</h3>
              </div>
              <div className="relative z-10 space-y-4">
                <div><h4 className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider text-xs">Problem</h4>
                  <p className="text-on-surface-variant text-xs">Pertanyaan resi manual, cart abandonment tinggi.</p></div>
                <div><h4 className="font-label-sm text-label-sm text-primary mb-1 uppercase tracking-wider text-xs">Solusi</h4>
                  <p className="text-on-surface-variant text-xs">Cek resi otomatis via WA & retargeting keranjang tertinggal.</p></div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Recovery Penjualan</span>
                  <span className="font-bold text-primary text-lg">+30%</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} className="md:col-span-2">
            <div className="glass-panel rounded-xl p-8 group relative overflow-hidden card-hover h-full">
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">domain</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Korporat & B2B</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h4 className="font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wider">Tantangan</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Silo data antar departemen, proses persetujuan berhari-hari, dan onboarding karyawan tidak efisien.</p>
                  <h4 className="font-label-sm text-label-sm text-primary mb-2 uppercase tracking-wider">Solusi OtomateID</h4>
                  <p className="text-on-surface-variant text-sm">Integrasi API multi-platform, workflow approval otomatis via WhatsApp, dan virtual assistant internal HR.</p>
                </div>
                <div className="bg-surface-container-high/30 backdrop-blur-sm rounded-lg p-6 border border-white/5 flex flex-col justify-center space-y-6">
                  {[{ label: 'Waktu Proses Approval', val: 80, color: 'bg-primary', text: 'text-primary', result: 'Turun 80%' }, { label: 'Produktivitas Tim Admin', val: 65, color: 'bg-secondary', text: 'text-secondary', result: 'Naik 65%' }].map(({ label, val, color, text, result }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-2"><span className="text-on-surface-variant">{label}</span><span className={`${text} font-bold`}>{result}</span></div>
                      <div className="w-full bg-surface-container-highest rounded-full h-2"><div className={`${color} h-2 rounded-full`} style={{ width: `${val}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Automation Impact Calculator ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">

          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                Hitung Efisiensi & Potensi <span className="text-shimmer">Penghematan</span> Bisnis Anda
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Simulasikan bagaimana automation membantu meningkatkan respon pelanggan sekaligus mengurangi beban operasional bisnis.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* LEFT — Benefits */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-5">
              <div className="space-y-6">
                {[
                  'Balas pelanggan lebih cepat 24/7',
                  'Kurangi chat yang terlewat',
                  'Ringankan beban admin harian',
                  'Automation lebih hemat dibanding menambah admin baru',
                  'Workflow bisnis lebih efisien',
                  'Siap scaling tanpa meningkatkan operasional secara besar'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/50 border border-white/5 hover:bg-surface-container-low hover:border-primary/20 transition-all">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </div>
                    <p className="text-on-surface text-sm mt-1">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* RIGHT — Calculator & Dashboard */}
            <ScrollReveal direction="right" delay={200} className="lg:col-span-7">
              <div className="rounded-3xl p-1 relative overflow-hidden" style={{ background: 'linear-gradient(145deg, rgba(76,215,246,0.2), rgba(78,222,163,0.1), transparent)' }}>
                <div className="bg-surface/40 backdrop-blur-xl rounded-[22px] p-6 md:p-8 relative overflow-hidden shadow-2xl">
                  {/* Inner glow */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                  
                  <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    
                    {/* INPUTS */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-on-surface mb-1">Jumlah Chat / Ticket per Hari</label>
                        <div className="flex items-center justify-between text-xs text-on-surface-variant mb-3">
                          <span>Volume harian</span>
                          <span className="text-primary font-bold text-base">{chatPerDay >= 10000 ? '10.000+' : chatPerDay.toLocaleString('id-ID')}</span>
                        </div>
                        <input type="range" min="10" max="10000" step="10" value={chatPerDay}
                          onChange={(e) => setChatPerDay(Number(e.target.value))}
                          className="w-full accent-primary h-2 rounded-full outline-none cursor-pointer" />
                        <div className="flex justify-between text-xs text-on-surface-variant mt-2"><span>10</span><span>10.000+</span></div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-on-surface mb-2">Estimasi Biaya Admin / CS per Bulan</label>
                        <select value={adminCost} onChange={(e) => setAdminCost(Number(e.target.value))} className={sel}>
                          {ADMIN_COST_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-on-surface mb-3">Paket Automation OtomaID</label>
                        <div className="space-y-2">
                          {Object.entries(PACKAGE_CONFIG).map(([k, v]) => {
                            const isSelected = pkg === k;
                            return (
                            <button key={k} onClick={() => setPkg(k)}
                              className={`w-full p-3 rounded-xl border text-sm font-semibold transition-all duration-300 text-left flex justify-between items-center ${isSelected ? 'scale-[1.02]' : 'hover:bg-white/5'}`}
                              style={{ 
                                borderColor: isSelected ? v.color : 'rgba(255,255,255,0.1)', 
                                background: isSelected ? `${v.color}15` : 'transparent', 
                                color: isSelected ? v.color : 'rgba(212,228,250,0.5)', 
                                boxShadow: isSelected ? `0 0 15px ${v.color}40` : 'none' 
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded flex-shrink-0 border flex items-center justify-center transition-all duration-300 ${isSelected ? 'border-transparent' : 'border-white/20'}`} style={{ backgroundColor: isSelected ? v.color : 'transparent' }}>
                                  <span className={`material-symbols-outlined text-[14px] text-[#051424] transition-all duration-300 ${isSelected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>check</span>
                                </div>
                                <span>{v.label}</span>
                              </div>
                              <span className="text-xs opacity-80">{v.price === 0 ? 'Custom' : `Rp${new Intl.NumberFormat('id-ID').format(v.price)}/bln`}</span>
                            </button>
                          )})}
                        </div>
                      </div>
                    </div>

                    {/* DASHBOARD RESULTS */}
                    <div className="bg-surface-container-highest/50 rounded-2xl p-6 border border-white/5 flex flex-col">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary text-xl">speed</span>
                        <h3 className="font-bold text-on-surface">Potensi Efisiensi</h3>
                      </div>
                      
                      <div className="space-y-5 mb-6 flex-grow">
                        <StatBar label="Estimasi waktu operasional dihemat" value={results.timeSavedPercent} color="#4edea3" />
                        <StatBar label="Potensi percepatan respon" value={results.responseSpeedup} color="#4cd7f6" />
                      </div>

                      <div className="bg-surface-container-lowest/80 rounded-xl p-4 mb-4 border border-white/5 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 rounded-xl z-0" />
                        <div className="relative z-10">
                          <p className="text-xs text-on-surface-variant mb-1">Potensi Penghematan Bulanan</p>
                          <p className="text-xl font-bold text-primary text-glow-primary">
                            Rp {results.fmtRp(results.finalSavings)}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl p-4 space-y-2" style={{ background: 'rgba(78,222,163,0.05)', border: '1px solid rgba(78,222,163,0.15)' }}>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Dengan {results.pk.label}:</p>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">check_circle</span>
                          <span className="text-on-surface-variant text-xs">Hingga {results.fmtNum(results.autoHandled)}+ chat otomatis/bulan</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">check_circle</span>
                          <span className="text-on-surface-variant text-xs">Potensi hemat hingga Rp{results.fmtRp(results.finalSavings)}/bulan*</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">check_circle</span>
                          <span className="text-on-surface-variant text-xs">Kurangi kebutuhan admin tambahan</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0">check_circle</span>
                          <span className="text-on-surface-variant text-xs">Workflow bisnis lebih efisien</span>
                        </div>
                      </div>
                      
                      <p className="text-[10px] text-on-surface-variant mt-4 opacity-70 text-center leading-relaxed">
                        *Simulasi estimasi berdasarkan rata-rata operasional bisnis dan dapat berbeda tergantung kebutuhan bisnis.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  );
}
