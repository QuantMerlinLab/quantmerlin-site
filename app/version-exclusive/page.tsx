"use client";

import { useState } from "react";

import Link from "next/link";

export default function VersionExclusivePage() {
    const [firstName, setFirstName] = useState("");
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const handleSubmit = async () => {
  try {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/version-exclusive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("✅ Vérifiez votre boîte email.");
      setFirstName("");
      setEmail("");
    } else {
      setMessage(data.error || "Une erreur est survenue.");
    }
  } catch {
    setMessage("Erreur de connexion.");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-[#061C3F] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.4),_transparent_40%)]"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 text-sm mb-8">
            📘 Ressource Premium Gratuite
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Recevez gratuitement la{" "}
            <span className="text-yellow-400">
              Version Exclusive
            </span>{" "}
            du Manuel d'Intelligence Financière Premium
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-10">
            Découvrez les principes, systèmes et stratégies qui permettent
            de transformer un revenu en patrimoine durable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#inscription"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold shadow-lg shadow-yellow-500/30 transition"
            >
              📘 Recevoir mon exemplaire gratuit
            </a>

            <Link
              href="/"
              className="border border-yellow-500/40 hover:bg-yellow-500/10 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              Ce que vous découvrirez
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Une feuille de route claire pour comprendre les fondements
              de la richesse durable et de l'intelligence financière.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                💡 Intelligence Financière
              </h3>
              <p className="text-gray-300">
                Les principes fondamentaux qui distinguent les bâtisseurs
                de patrimoine des simples consommateurs.
              </p>
            </div>

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🏛️ Construction du Patrimoine
              </h3>
              <p className="text-gray-300">
                Les systèmes permettant de transformer progressivement
                son revenu en actifs durables.
              </p>
            </div>

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                📈 Investissement
              </h3>
              <p className="text-gray-300">
                Les bases nécessaires pour comprendre les marchés financiers
                et prendre des décisions plus éclairées.
              </p>
            </div>

            <div className="bg-[#102B5C] p-8 rounded-3xl border border-yellow-500/10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                ⚖️ Gestion du Risque
              </h3>
              <p className="text-gray-300">
                Pourquoi protéger son capital est aussi important
                que rechercher la performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Important */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Important
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Cette Version Exclusive présente les concepts clés,
              les principes fondamentaux et la feuille de route générale.
              Les méthodologies détaillées, études de cas, exercices pratiques
              et stratégies avancées seront développés dans les futures
              formations QuantMerlin Analytics.
            </p>

          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="inscription" className="pb-24">
        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-[#102B5C] rounded-3xl p-10 border border-yellow-500/20">

            <h2 className="text-3xl font-bold text-center mb-8">
              Recevoir mon exemplaire gratuit
            </h2>

            <div className="space-y-6">

              <input
  type="text"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  placeholder="Votre prénom"
  className="w-full px-5 py-4 rounded-xl bg-[#061C3F] border border-white/10"
/>

              <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Votre adresse email"
  className="w-full px-5 py-4 rounded-xl bg-[#061C3F] border border-white/10"
/>

              <button
  onClick={handleSubmit}
  disabled={loading}
  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
>
  {loading
    ? "Envoi..."
    : "📘 Recevoir mon exemplaire"}
</button>

{message && (
  <p className="text-center mt-4 text-green-400">
    {message}
  </p>
)}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}