import Link from "next/link";

export default function QuantMerlinWebsite() {
  const navItems = [
  'ACCUEIL',
  'ACADÉMIE',
  'LIVRES',
  'RECHERCHE',
  'CAPITAL LAB',
  'À PROPOS',
  'CONTACT'
  
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans">
      {/* Header */}
<header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
    <div className="flex items-center gap-4">
      
      {/* Logo QMA - Version Bleu Nuit */}
<svg viewBox="0 0 100 100" className="w-12 h-12">

  {/* Cercle bleu nuit */}
  <circle
  cx="50"
  cy="50"
  r="48"
  fill="#0B1F3A"
  stroke="#163A6B"
  strokeWidth="2"
/>

  {/* Triangle Q-M-A en blanc */}
  <text
    x="50"
    y="42"
    textAnchor="middle"
    fill="white"
    fontWeight="900"
    fontSize="14"
    fontFamily="system-ui, sans-serif"
  >
    Q
  </text>

  <text
    x="32"
    y="68"
    textAnchor="middle"
    fill="white"
    fontWeight="900"
    fontSize="14"
    fontFamily="system-ui, sans-serif"
  >
    M
  </text>

  <text
    x="68"
    y="68"
    textAnchor="middle"
    fill="white"
    fontWeight="900"
    fontSize="14"
    fontFamily="system-ui, sans-serif"
  >
    A
  </text>

</svg>

      <div>
        <h1 className="text-lg font-bold tracking-wide leading-none">
          <span className="block text-[#163A6B]">QUANTMERLIN</span>
          <span className="block text-[#163A6B]">ANALYTICS</span>
        </h1>
      
      </div>
    </div>

    <div className="hidden lg:flex flex-1 max-w-md mx-8">
  <div className="relative w-full">

    <input
      type="text"
      placeholder="Rechercher une analyse..."
      className="
        w-full
        rounded-full
        border
        border-slate-300
        bg-white
        py-2
        pl-12
        pr-4
        text-sm
        text-[#0B1F3A]
        outline-none
        focus:border-[#163A6B]
        focus:ring-2
        focus:ring-[#163A6B]/20
        transition
      "
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>

  </div>
</div>

    {/* Navigation */}
    <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <a
          key={item}
          href={
            item === 'ACCUEIL' ? '/' :
            item === 'ACADÉMIE' ? '/academy' :
            item === 'LIVRES' ? '/books' :
            item === 'RECHERCHE' ? '/research' :
            item === 'CAPITAL LAB' ? '/capital-lab' :
            item === 'À PROPOS' ? '/about' :
            item === 'CONTACT' ? '/contact' :
            '/'
          }
          className="text-[#0B1F3A] hover:text-[#163A6B] transition duration-200"
        >
          {item}
        </a>
      ))}
      {/* Avatar utilisateur */}
  <div
    className="
      w-9
      h-9
      rounded-full
      bg-[#163A6B]
      text-white
      flex
      items-center
      justify-center
      font-bold
      text-sm
      cursor-pointer
      hover:bg-[#0B1F3A]
      transition
    "
  >
    👤
    </div>
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.4),_transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-[#EEF4FA] text-[#163A6B] text-sm mb-6">
               Académie • Recherche • Intelligence Financière
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              <span className="text-[#163A6B]">Prenez le contrôle de vos finances avec une{' '}
              approche professionnelle</span>
            </h2>

            <p className="text-lg text-[#163A6B] leading-relaxed mb-8 max-w-2xl">
              QuantMerlin Analytics accompagne les investisseurs et passionnés des marchés financiers grâce à une approche data-driven, quantitative et orientée gestion du risque.
            </p>

            <div className="flex flex-wrap gap-4">
  <Link
    href="/version-exclusive"
    className="bg-[#163A6B] hover:bg-[#0B1F3A] text-white px-6 py-3 rounded-2xl font-bold transition inline-block"
  >
    📘 Recevoir la Version Exclusive
  </Link>

  <Link
    href="/analyse"
    className="bg-[#163A6B] hover:bg-[#0B1F3A] text-white px-6 py-3 rounded-2xl font-bold transition inline-block"
  >
    📊 Découvrir nos analyses
  </Link>
</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-lg">
          <h3 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Notre Mission
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📘</span>
              <p className="font-semibold">
                Formation en Finance Quantitative
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">📊</span>
              <p className="font-semibold">
                Recherche et Analyse des Marchés
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">⚖️</span>
              <p className="font-semibold">
                Gestion du Risque
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">💡</span>
              <p className="font-semibold">
                Intelligence Financière
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#163A6B] uppercase tracking-[0.3em] text-sm font-bold mb-4">Nos Expertises</p>

            <h2 className="text-4xl md:text-5xl font-black text-[#0B1F3A] mb-6">
              Une approche moderne de la finance quantitative
            </h2>

            <p className="text-[#374151] max-w-3xl mx-auto text-lg">
              Développez vos compétences financières grâce à des méthodes structurées basées sur les données, les statistiques et les marchés globaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#0B1F3A] border border-[#163A6B]/30 shadow-lg hover:shadow-xl hover:border-[#163A6B] transition rounded-[2rem] p-8 hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#163A6B] border border-[#274B7A] flex items-center justify-center text-white text-2xl mb-6">
                  📈
                </div>

                <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                <p className="text-white leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section className="py-24">
  <div className="max-w-5xl mx-auto px-6">
    <div className="bg-[#0B1F3A] border border-[#163A6B]/30 rounded-[2rem] p-10 md:p-14 shadow-2xl text-center">
      <p className="uppercase tracking-[0.3em] text-white text-sm font-bold mb-4">
       Contact & Réseau
      </p>

      <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
        Construisons votre autonomie financière
      </h2>

      <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
        Rejoignez QuantMerlin Analytics pour accéder à des analyses de marché, des formations et une approche quantitative des investissements.
      </p>

      {/* ✅ Grille contact avec gestion du texte long */}
      <div className="grid md:grid-cols-3 gap-6 text-left">
  
  {/* Téléphone */}
  <div className="bg-[#163A6B] p-6 rounded-2xl border border-[#274B7A] min-w-0 flex items-start gap-3">
    <span className="text-white text-xl">📞</span>
    <div>
      <p className="text-gray-400 text-sm">Téléphone</p>
      <h3 className="text-base font-bold break-all text-white">+237 656 545 451</h3>
    </div>
  </div>

  {/* Email */}
  <div className="bg-[#102B5C] p-6 rounded-2xl border border-white/5 min-w-0 flex items-start gap-3">
    <span className="text-white text-xl">✉️</span>
    <div>
      <p className="text-gray-400 text-sm">Email</p>
      <a href="mailto:contact@quantmerlinanalytics.com" className="text-base font-bold break-all text-white hover:underline">
        contact@quantmerlinanalytics.com
      </a>
    </div>
  </div>

  {/* Site Web */}
  <div className="bg-[#102B5C] p-6 rounded-2xl border border-white/5 min-w-0 flex items-start gap-3">
    <span className="text-white text-xl">🌐</span>
    <div>
      <p className="text-white/70 text-sm">Site Web</p>
      <a href="https://quantmerlinanalytics.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold break-all text-white hover:underline">
        quantmerlinanalytics.com
      </a>
    </div>
  </div>
  
</div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 bg-[#0B1F3A] text-white">
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