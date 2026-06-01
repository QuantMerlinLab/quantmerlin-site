export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#061C3F] text-white">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 text-sm mb-6">
          QuantMerlin Academy
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Développez vos compétences en{" "}
          <span className="text-yellow-400">
            Finance et Investissement
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-10">
          Accédez à des formations pratiques conçues pour vous aider à
          comprendre les marchés financiers, les cryptomonnaies, la gestion du
          risque et les stratégies d'investissement modernes.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-2xl font-bold transition">
            Découvrir les formations
          </button>

          <button className="border border-yellow-500/40 hover:bg-yellow-500/10 px-8 py-3 rounded-2xl font-semibold transition">
            Voir le programme
          </button>
        </div>

      </section>

      {/* Pourquoi QuantMerlin Academy */}
      <section className="bg-[#0B0B0B] py-24 border-t border-yellow-500/10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Pourquoi nous choisir ?
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Une formation conçue pour les investisseurs modernes
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Nos programmes sont pensés pour vous aider à comprendre les marchés,
              gérer les risques et développer des compétences financières durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">
                Accessible aux débutants
              </h3>
              <p className="text-gray-400">
                Aucune expérience préalable n'est nécessaire.
              </p>
            </div>

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">
                Contenu pratique
              </h3>
              <p className="text-gray-400">
                Des exemples concrets et applicables immédiatement.
              </p>
            </div>

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">
                Certificat
              </h3>
              <p className="text-gray-400">
                Obtenez un certificat de réussite QuantMerlin Academy.
              </p>
            </div>

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="text-xl font-bold mb-3">
                Accès à vie
              </h3>
              <p className="text-gray-400">
                Consultez vos formations quand vous le souhaitez.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-24 bg-[#061C3F]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Nos Formations
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Commencez votre parcours financier
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Découvrez nos programmes conçus pour vous aider à comprendre la finance moderne et prendre de meilleures décisions d'investissement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* Crypto */}
            <div className="bg-[#102B5C] rounded-3xl border border-yellow-500/20 overflow-hidden hover:border-yellow-400 transition">

              <div className="bg-yellow-500 text-black text-center py-2 font-bold">
                Disponible
              </div>

              <div className="p-8">

                <div className="text-5xl mb-5">₿</div>

                <h3 className="text-2xl font-bold mb-3">
                  Initiation à la Cryptomonnaie
                </h3>

                <p className="text-gray-400 mb-6">
                  Comprenez Bitcoin, la Blockchain, les Wallets et les bases de l'investissement crypto.
                </p>

                <div className="space-y-2 text-sm text-gray-300 mb-8">
                  <p>✓ 10 Modules</p>
                  <p>✓ Accès à vie</p>
                  <p>✓ Certificat</p>
                  <p>✓ Niveau débutant</p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-yellow-400">
                    20 $
                  </span>
                </div>

                <a
                  href="/academy/crypto"
                  className="block text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-2xl transition"
                >
                  Voir le programme
                </a>

              </div>
            </div>

            {/* Finance personnelle */}
            <div className="bg-[#102B5C] rounded-3xl border border-white/10 p-8 opacity-80">

              <div className="text-5xl mb-5">🏦</div>

              <h3 className="text-2xl font-bold mb-3">
                Finance Personnelle
              </h3>

              <p className="text-gray-400 mb-6">
                Construisez un système durable pour créer votre patrimoine.
              </p>

              <span className="inline-block bg-gray-700 px-4 py-2 rounded-xl text-sm">
                Bientôt disponible
              </span>

            </div>

            {/* Forex */}
            <div className="bg-[#102B5C] rounded-3xl border border-white/10 p-8 opacity-80">

              <div className="text-5xl mb-5">📈</div>

              <h3 className="text-2xl font-bold mb-3">
                Forex Fundamentals
              </h3>

              <p className="text-gray-400 mb-6">
                Découvrez les bases du marché des devises.
              </p>

              <span className="inline-block bg-gray-700 px-4 py-2 rounded-xl text-sm">
                Bientôt disponible
              </span>

            </div>

            {/* Risk */}
            <div className="bg-[#102B5C] rounded-3xl border border-white/10 p-8 opacity-80">

              <div className="text-5xl mb-5">⚠️</div>

              <h3 className="text-2xl font-bold mb-3">
                Gestion du Risque
              </h3>

              <p className="text-gray-400 mb-6">
                Apprenez à protéger votre capital et gérer l'incertitude.
              </p>

              <span className="inline-block bg-gray-700 px-4 py-2 rounded-xl text-sm">
                Bientôt disponible
              </span>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}