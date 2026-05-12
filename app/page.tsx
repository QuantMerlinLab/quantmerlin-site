export default function QuantMerlinWebsite() {
  const navItems = [
    'Analyse',
    'Nouvelles',
    'Forex',
    'Crypto',
    'Options',
    'Portefeuille',
    'Risk',
    'Blog',
    'Contact Whatsapp',
    'Contactez-nous'
  ];

  const services = [
    {
      title: 'Analyse Quantitative',
      desc: 'Analyse avancée des marchés financiers basée sur les données et les modèles quantitatifs.'
    },
    {
      title: 'Trading Forex',
      desc: 'Apprenez à trader les devises avec des stratégies professionnelles et structurées.'
    },
    {
      title: 'Investissement Crypto',
      desc: 'Comprenez les cryptomonnaies et développez une approche disciplinée des marchés.'
    },
    {
      title: 'Risk Modeling',
      desc: 'Approches quantitatives pour mesurer, analyser et gérer le risque financier.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#061C3F] text-white font-sans">
      {/* Header */}
<header className="border-b border-yellow-500/20 bg-[#064E3B]/95 sticky top-0 z-50 backdrop-blur">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      
      {/* Logo QMA en SVG - Version vert citron + texte blanc */}
<svg viewBox="0 0 100 100" className="w-16 h-16">
  {/* Cercle de fond vert citron */}
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#bef264" />
      <stop offset="100%" stopColor="#84cc16" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#logoGrad)" />
  
  {/* Triangle Q-M-A en BLANC */}
  <text x="50" y="42" textAnchor="middle" className="fill-white font-black text-[14px]" style={{ fontFamily: 'system-ui, sans-serif' }}>Q</text>
  <text x="32" y="68" textAnchor="middle" className="fill-white font-black text-[14px]" style={{ fontFamily: 'system-ui, sans-serif' }}>M</text>
  <text x="68" y="68" textAnchor="middle" className="fill-white font-black text-[14px]" style={{ fontFamily: 'system-ui, sans-serif' }}>A</text>
  
  {/* Effet de brillance optionnel */}
  <ellipse cx="35" cy="30" rx="20" ry="12" fill="white" opacity="0.25" transform="rotate(-30 35 30)" />
</svg>

      <div>
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-white">QuantMerlin</span>{' '}
          <span className="text-yellow-400">Analytics</span>
        </h1>
        <p className="text-sm text-gray-300">
          Spécialiste en modélisation quantitative du risque
        </p>
      </div>
    </div>

    {/* Navigation */}
    <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <a
          key={item}
          href={
            item === 'Analyse' ? '/analyse' :
            item === 'Nouvelles' ? '/nouvelles' :
            item === 'Forex' ? '/forex' :
            item === 'Crypto' ? '/crypto' :
            item === 'Options' ? '/options' :
            item === 'Portefeuille' ? '/portefeuille' :
            item === 'Risk' ? '/risk' :
            item === 'Blog' ? '/blog' :
            item === 'Contact Whatsapp' ? 'https://wa.me/237656545451' : '/contact'
          }
          className="hover:text-yellow-400 transition duration-200"
        >
          {item}
        </a>
      ))}
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.4),_transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 text-sm mb-6">
              Quantitative Finance • Risk Modeling • Market Analytics
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Prenez le contrôle de vos finances avec une{' '}
              <span className="text-yellow-400">approche professionnelle</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              QuantMerlin Analytics accompagne les investisseurs et passionnés des marchés financiers grâce à une approche data-driven, quantitative et orientée gestion du risque.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg shadow-yellow-500/30 transition">
                Commencer maintenant
              </button>

              <button className="border border-yellow-500/40 hover:bg-yellow-500/10 px-6 py-3 rounded-2xl font-semibold transition">
                Découvrir nos analyses
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-3xl rounded-full"></div>

            <div className="relative bg-[#102B5C] border border-yellow-500/20 rounded-[2rem] p-8 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Performance Dashboard</p>
                  <h3 className="text-2xl font-bold">Market Overview</h3>
                </div>

                <div className="px-4 py-2 rounded-xl bg-green-500/10 text-green-400 text-sm font-semibold border border-green-500/20">
                  +12.48%
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 w-[82%]"></div>
                <div className="h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 w-[65%]"></div>
                <div className="h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 w-[91%]"></div>
                <div className="h-4 rounded-full bg-gradient-to-r from-red-400 to-pink-500 w-[45%]"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="bg-[#0B0B0B] p-5 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm">Risk Score</p>
                  <h4 className="text-3xl font-bold text-yellow-400 mt-2">Low</h4>
                </div>

                <div className="bg-[#0B0B0B] p-5 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm">Market Trend</p>
                  <h4 className="text-3xl font-bold text-green-400 mt-2">Bullish</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#0B0B0B] border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Nos Expertises
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Une approche moderne de la finance quantitative
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Développez vos compétences financières grâce à des méthodes structurées basées sur les données, les statistiques et les marchés globaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#102B5C] border border-yellow-500/10 hover:border-yellow-400/40 transition rounded-[2rem] p-8 shadow-xl hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl mb-6">
                  📈
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section className="py-24">
  <div className="max-w-5xl mx-auto px-6">
    <div className="bg-gradient-to-br from-[#0a1528] to-[#07101d] border border-yellow-500/20 rounded-[2rem] p-10 md:p-14 shadow-2xl text-center">
      <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-bold mb-4">
        Contact & Réseau
      </p>

      <h2 className="text-4xl md:text-5xl font-black mb-6">
        Construisons votre autonomie financière
      </h2>

      <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
        Rejoignez QuantMerlin Analytics pour accéder à des analyses de marché, des formations et une approche quantitative des investissements.
      </p>

      {/* ✅ Grille contact avec gestion du texte long */}
      <div className="grid md:grid-cols-3 gap-6 text-left">
  
  {/* Téléphone */}
  <div className="bg-[#102B5C] p-6 rounded-2xl border border-white/5 min-w-0 flex items-start gap-3">
    <span className="text-yellow-400 text-xl">📞</span>
    <div>
      <p className="text-gray-400 text-sm">Téléphone</p>
      <h3 className="text-base font-bold break-all text-white">+237 656 545 451</h3>
    </div>
  </div>

  {/* Email */}
  <div className="bg-[#102B5C] p-6 rounded-2xl border border-white/5 min-w-0 flex items-start gap-3">
    <span className="text-yellow-400 text-xl">✉️</span>
    <div>
      <p className="text-gray-400 text-sm">Email</p>
      <a href="mailto:quantmerlinanalytics@gmail.com" className="text-base font-bold break-all text-yellow-400 hover:underline">
        quantmerlinanalytics@gmail.com
      </a>
    </div>
  </div>

  {/* Site Web */}
  <div className="bg-[#102B5C] p-6 rounded-2xl border border-white/5 min-w-0 flex items-start gap-3">
    <span className="text-yellow-400 text-xl">🌐</span>
    <div>
      <p className="text-gray-400 text-sm">Site Web</p>
      <a href="https://quantmerlinanalytics.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold break-all text-yellow-400 hover:underline">
        quantmerlinanalytics.com
      </a>
    </div>
  </div>
  
</div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/10 py-8 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 QuantMerlin Analytics — Tous droits réservés.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition">WhatsApp</a>
            <a href="#" className="hover:text-yellow-400 transition">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}