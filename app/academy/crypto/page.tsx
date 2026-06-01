export default function CryptoCoursePage() {
  return (
    <div className="min-h-screen bg-[#061C3F] text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm mb-6">
          QuantMerlin Academy
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Initiation à la
          <span className="text-yellow-400"> Cryptomonnaie</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          Le guide complet du débutant pour comprendre Bitcoin,
          la Blockchain, les Wallets, les échanges et les bases
          de l'investissement en cryptomonnaies.
        </p>

        <div className="flex flex-wrap gap-4">

          <div className="bg-[#102B5C] px-6 py-4 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm">Prix</p>
            <p className="text-3xl font-black text-yellow-400">
              20 USD
            </p>
          </div>

          <div className="bg-[#102B5C] px-6 py-4 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm">Modules</p>
            <p className="text-3xl font-black">
              10
            </p>
          </div>

          <div className="bg-[#102B5C] px-6 py-4 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm">Niveau</p>
            <p className="text-3xl font-black">
              Débutant
            </p>
          </div>

        </div>

      </section>

        {/* Programme de la formation */}

        <section className="py-24 bg-[#0B0B0B] border-t border-yellow-500/10">
        <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Programme de la formation
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-6">
            Contenu du cours
        </h2>

        <p className="text-gray-400 text-lg">
            Découvrez les concepts fondamentaux des cryptomonnaies,
            de la cryptographie, de la sécurité numérique et de la blockchain.
        </p>
        </div>

        {/* MODULE 1 */}
        <div className="bg-[#102B5C] rounded-3xl p-8 mb-8 border border-yellow-500/20">

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            📚 MODULE 1 — QU'EST-CE QU'UNE CRYPTOMONNAIE ?
        </h3>

        <div className="space-y-2 text-gray-300">

            <p className="font-semibold">
            📖 LEÇON 1 — Définition des cryptomonnaies et des actifs
            </p>

            <p>📄 1.1 Différents types d'actifs</p>
            <p>📄 1.2 Les actifs physiques</p>
            <p>📄 1.3 Les actifs financiers</p>
            <p>📄 1.4 Les actifs intellectuels</p>
            <p>📄 1.5 Les actifs numériques</p>

            <p className="font-semibold mt-6">
            📖 LEÇON 2 — Les caractéristiques d'un moyen d'échange
            </p>

            <p>📄 1.6 Origine et nature d'un moyen d'échange</p>

            <p>📄 1.7 Caractéristiques du Bitcoin</p>

            <div className="ml-8 text-gray-400">
            <p>• 1.7.1 La valeur</p>
            <p>• 1.7.2 L'accessibilité</p>
            <p>• 1.7.3 La divisibilité</p>
            <p>• 1.7.4 La reconnaissance</p>
            <p>• 1.7.5 La résistance à la contrefaçon</p>
            </div>

        </div>
        </div>

        {/* MODULE 2 */}
        <div className="bg-[#102B5C] rounded-3xl p-8 mb-8 border border-yellow-500/20">

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            📚 MODULE 2 — QU'EST-CE QUE LA CRYPTOGRAPHIE ?
        </h3>

        <div className="space-y-2 text-gray-300">

            <p className="font-semibold">
            📖 LEÇON 1 — Définition et importance
            </p>

            <p>📄 2.1 Définition</p>
            <p>📄 2.2 Importance</p>

            <p className="font-semibold mt-6">
            📖 LEÇON 2 — Fonctionnement
            </p>

            <p>📄 2.3 Cas d'utilisation</p>
            <p>📄 2.4 Principe théorique</p>

        </div>
        </div>

        {/* MODULE 3 */}
        <div className="bg-[#102B5C] rounded-3xl p-8 mb-8 border border-yellow-500/20">

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            📚 MODULE 3 — LA SÉCURITÉ DES CRYPTOMONNAIES
        </h3>

        <div className="space-y-2 text-gray-300">

            <p className="font-semibold">
            📖 LEÇON 1 — Les différentes clés cryptographiques
            </p>

            <p>📄 3.1.1 Rappel</p>
            <p>📄 3.1.2 Rôle de chaque clé</p>

            <p className="font-semibold mt-6">
            📖 LEÇON 2 — Cas pratique sur le fonctionnement des clés
            </p>

            <p>📄 3.2.1 Cas pratique n°1</p>
            <p>📄 3.2.2 Cas pratique n°2</p>

            <p className="font-semibold mt-6">
            📖 LEÇON 3 — Qu'est-ce que la phrase de récupération ?
            </p>

            <p>📄 3.3.1 Définition</p>

        </div>
        </div>

        {/* MODULE 4 VERROUILLÉ */}
        <div className="bg-[#102B5C] rounded-3xl p-8 border border-yellow-500/20">

        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            🔒 MODULE 4 — LA RÉVOLUTION DE LA BLOCKCHAIN ET SES APPLICATIONS
        </h3>

        <p className="text-gray-300 mb-6">
            Ce module fait partie du contenu premium de la formation.
        </p>

        <div className="bg-black/20 rounded-2xl p-6">

            <p className="text-yellow-400 font-bold mb-4">
            Débloquez l'accès complet :
            </p>

            <ul className="space-y-2 text-gray-300">
            <li>✓ Les applications de la blockchain</li>
            <li>✓ Les contrats intelligents</li>
            <li>✓ Les blockchains publiques et privées</li>
            <li>✓ Les études de cas</li>
            <li>✓ Les futurs modules du programme</li>
            <li>✓ Certificat QuantMerlin Academy</li>
            </ul>

            <div className="mt-8 text-center">

            <p className="text-4xl font-black text-yellow-400 mb-4">
                20 USD
            </p>

            <a
            href="/academy/crypto/inscription"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-2xl font-bold transition"
            >
            Débloquer la formation
            </a>

            </div>

            {/* Pourquoi cette formation */}
            <div className="mt-12 bg-[#102B5C] rounded-3xl p-8 border border-yellow-500/20">

            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                Pourquoi cette formation ?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

                <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Accessible aux débutants</span>
                </div>

                <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Accès à vie</span>
                </div>

                <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Certificat de réussite</span>
                </div>

                <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Disponible en français et en anglais</span>
                </div>

                <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Approche progressive</span>
                </div>

                <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Conçue pour les investisseurs débutants</span>
                </div>

            </div>

            </div>

        </div>
        </div>

        </div>
        </section>


    </div>
  );
}