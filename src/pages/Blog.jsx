import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const articles = [
    {
      id: 1, category: 'AI Automation', tag: 'Studi Kasus', date: '12 Okt 2024', featured: true,
      title: 'Masa Depan Bisnis Indonesia dengan AI Agent',
      excerpt: 'Bagaimana perusahaan enterprise dan UMKM di Indonesia mulai mengadopsi AI Agent otonom untuk menggantikan tugas repetitif, meningkatkan responsivitas layanan pelanggan, dan mempercepat pengambilan keputusan strategis.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQAouJia58sVsStD75wG4mC7kIsW3s5vcY9aUte3X-IdTsK5jlbdnRdD18Km19Om7n8nLgeu62LK10JYr7C8WOJn29c8aVQacxZ0ELiCMgz5iQZhnpshpLqDrN_xsqaYwg_wqjF0PQ0wRuc1YXjafjRHWtdnEMRq6B5MCgBOEdZkrCmnNS5uYxe9C9I65SSBBaIk9uAGGzevR2XNR1RgmbShvCe7zYpBpsOhQ5cRzLaJHZT3CDGDqfEPoe1oa7wyydUx8Yc2TuEes',
    },
    {
      id: 2, category: 'WhatsApp Automation', date: '08 Okt 2024',
      title: 'Cara Automasi WhatsApp untuk UMKM',
      excerpt: 'Panduan langkah demi langkah membangun chatbot cerdas dan sistem broadcast WhatsApp API yang terintegrasi dengan database pelanggan Anda tanpa perlu coding rumit.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Si3CF4zpG7yhV2DFx9ryD-Cy3Mg-q528iBTB6LQ5ry1YL9gZmByJCMNPmG_edOFNGKW6AxHPBH4PWVjjhx6OpoqfJhuHSF47RvaD54zglkPTD8HAcF26bgX4Izrk54PDVjhJKKpP4tPN6Vj6fV4KCSKnKgu0_-qg4O-GeeekwIkV4MZ_0nM48T0fJm6PLdugJdqdj7IqonHnstVaWKb6H7zMAlI9b4xHPTsyvHFNHE4UXLedRw4lkSXV4j2YuIErBLVP_LByypM',
    },
    {
      id: 3, category: 'n8n Tutorials', date: '01 Okt 2024',
      title: 'Integrasi CRM n8n: Panduan Lengkap',
      excerpt: 'Pelajari cara n8n developer Indonesia menghubungkan berbagai platform CRM populer untuk menciptakan pipeline penjualan yang sepenuhnya terotomatisasi dan minim error.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Bcl-3JMKdiiXIq8YLKfH6Q5luKedvC1LaJQCKGelW3joBzQEuDo9F9jHK97RVBB87rJo4ddPN9uzla4U7L5QAD7UlHzGupncJZdGI-DapmhjyE0MAfGWGyWS8LElb7YhbpE5pc6VXFsr58F8OoCSRpS5iE8ddh7T0fnmpwp9sSzknhPf7rywANlH29maQhQQytuSn2zKOeckik98F6IvkiEj5pChZVct9HAlECiT3kmS3lxNPrfLX4-NsAlFzEp0A9pN4_J_tj0',
    },
    {
      id: 4, category: 'Studi Kasus', date: '25 Sep 2024',
      title: 'Reduksi Biaya Operasional 40% di Sektor Logistik',
      excerpt: 'Bagaimana sebuah perusahaan logistik lokal memanfaatkan jasa AI automation untuk mengoptimalkan rute pengiriman dan pelacakan armada secara real-time.',
      icon: 'query_stats',
    },
    {
      id: 5, category: 'AI Automation', date: '18 Sep 2024',
      title: 'Memilih Jasa AI Automation yang Tepat',
      excerpt: 'Kriteria krusial yang harus diperhatikan oleh business owner sebelum mempercayakan sistem operasional perusahaan kepada vendor automasi pihak ketiga.',
      icon: 'smart_toy',
    },
  ];

  const categories = [
    { label: 'AI Automation', count: 12 },
    { label: 'WhatsApp Automation', count: 8 },
    { label: 'n8n Tutorials', count: 15 },
    { label: 'Studi Kasus', count: 5 },
  ];

  const tags = ['UMKM', 'CRM', 'Chatbot', 'Efisiensi', 'API', 'n8n', 'GPT'];

  // Filter
  const filtered = articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = !activeCategory || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featuredArticle = filtered.find((a) => a.featured);
  const gridArticles = filtered.filter((a) => !a.featured);

  const categoryColor = {
    'AI Automation': 'bg-primary/20 text-primary border-primary/30',
    'WhatsApp Automation': 'bg-secondary/20 text-secondary border-secondary/30',
    'n8n Tutorials': 'bg-primary/20 text-primary border-primary/30',
    'Studi Kasus': 'bg-tertiary-container/20 text-tertiary-container border-tertiary-container/30',
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <main className="flex-grow pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
      {/* Page Header */}
      <ScrollReveal>
        <div className="mb-16 md:mb-24 text-center md:text-left max-w-3xl">
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6">
            Wawasan <span className="text-shimmer">Automasi</span> & AI.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Jelajahi panduan mendalam, studi kasus, dan tren terbaru seputar AI automation, n8n, dan optimalisasi bisnis di Indonesia.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col-reverse lg:flex-row gap-gutter">
        {/* Left Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12">

          {/* Featured Article */}
          {featuredArticle && (
            <ScrollReveal direction="up" delay={0}>
              <article className="glass-panel rounded-xl overflow-hidden glass-panel-interactive relative group cursor-pointer">
              <div className="h-64 md:h-80 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-variant to-surface-dim opacity-80 z-0" />
                <img
                  alt={featuredArticle.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  src={featuredArticle.img}
                />
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  <span className={`border px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-md ${categoryColor[featuredArticle.category]}`}>
                    {featuredArticle.category}
                  </span>
                  {featuredArticle.tag && (
                    <span className="bg-surface-container-high/60 text-on-surface-variant border border-outline-variant/50 px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-md hidden sm:inline-block">
                      {featuredArticle.tag}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-8 relative z-10 bg-gradient-to-t from-surface-container-low to-transparent mt-[-80px]">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-on-surface-variant mb-6 line-clamp-2">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/20 border border-secondary/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm">person</span>
                    </div>
                    <span>Tim OtomateID • {featuredArticle.date}</span>
                  </div>
                  <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                    Baca Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
              </article>
            </ScrollReveal>
          )}

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-4 block">search_off</span>
              <p>Tidak ada artikel yang cocok dengan pencarian Anda.</p>
            </div>
          )}

          {/* Article Grid */}
          {gridArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {gridArticles.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 100} direction="up">
                  <article className="glass-panel rounded-xl flex flex-col h-full glass-panel-interactive group cursor-pointer">
                  <div className="h-48 w-full relative overflow-hidden rounded-t-xl">
                    <div className="absolute inset-0 bg-surface-container-highest opacity-50 z-0" />
                    {article.img ? (
                      <img
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                        src={article.img}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-500">
                        <span
                          className="material-symbols-outlined text-9xl text-primary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {article.icon}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`border px-3 py-1 rounded-full font-label-sm text-[12px] backdrop-blur-md ${categoryColor[article.category]}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-grow line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-[12px]">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-40"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setCurrentPage(n)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-label-sm text-label-sm transition-colors ${
                  currentPage === n
                    ? 'bg-primary/10 border border-primary text-primary'
                    : 'glass-panel text-on-surface-variant hover:text-primary'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
              disabled={currentPage === 3}
              className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-40"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-8">
          {/* Search */}
          <div className="glass-panel p-6 rounded-xl">
            <h4 className="font-headline-md text-lg text-on-surface mb-4">Cari Artikel</h4>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-3 pl-10 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none"
                placeholder="Ketik kata kunci..."
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="glass-panel p-6 rounded-xl">
            <h4 className="font-headline-md text-lg text-on-surface mb-4">Kategori Topik</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`flex items-center justify-between w-full group ${!activeCategory ? 'text-primary' : 'text-on-surface-variant hover:text-primary'} transition-colors text-sm`}
                >
                  <span>Semua Artikel</span>
                  <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full">{articles.length}</span>
                </button>
              </li>
              {categories.map(({ label, count }) => (
                <li key={label}>
                  <button
                    onClick={() => { setActiveCategory(activeCategory === label ? null : label); setCurrentPage(1); }}
                    className={`flex items-center justify-between w-full group ${activeCategory === label ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'} transition-colors text-sm`}
                  >
                    <span>{label}</span>
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full">{count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="glass-panel p-8 rounded-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">mark_email_unread</span>
              <h4 className="font-headline-md text-lg text-on-surface mb-2">Insight Mingguan</h4>
              <p className="text-on-surface-variant text-sm mb-6">
                Dapatkan strategi automasi terbaru dan studi kasus eksklusif langsung ke inbox Anda.
              </p>
              {subscribed ? (
                <div className="w-full text-center py-3 rounded-lg bg-primary/10 border border-primary text-primary font-label-sm text-label-sm">
                  ✓ Terima kasih! Anda telah berlangganan.
                </div>
              ) : (
                <form className="w-full flex flex-col gap-3" onSubmit={handleSubscribe}>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-center"
                    placeholder="Masukkan alamat email Anda"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-3 rounded-lg shadow-[0_0_15px_rgba(78,222,163,0.2)] hover:brightness-110 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] transition-all"
                  >
                    Berlangganan Gratis
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="glass-panel p-6 rounded-xl">
            <h4 className="font-headline-md text-lg text-on-surface mb-4">Tag Populer</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="bg-surface-container-high border border-outline-variant/30 text-on-surface-variant px-3 py-1 rounded-md text-[12px] hover:border-secondary hover:text-secondary cursor-pointer transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
