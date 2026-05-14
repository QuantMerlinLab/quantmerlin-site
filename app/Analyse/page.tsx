"use client";

import { useState, useEffect } from "react";

const marketCategories = {
  Forex: ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD", "USD/CAD", "XAU/USD"],
  Crypto: ["BTC/USD", "ETH/USD", "SOL/USD"],
  Indices: ["S&P 500", "Nasdaq", "DAX"],
  Actions: ["US Tech", "Financials"],
  "Matières Premières": ["Or", "Pétrole", "Argent"],
};

const euroFaqs = [
  {
    title: "Qu’est-ce que l’euro ?",
    content:
      "L’euro est la monnaie officielle de la zone euro et l’une des devises les plus échangées au monde.",
  },
  {
    title: "Quel est le rôle de la BCE ?",
    content:
      "La BCE pilote la politique monétaire de la zone euro et influence directement la valeur de l’euro.",
  },
  {
    title: "Inflation et EUR",
    content:
      "Une inflation élevée peut conduire à un resserrement monétaire, favorable à l’euro.",
  },
];

export default function AnalysePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (selectedAsset === "EUR/USD") {
      fetch("/data/eurusd.json")
        .then((res) => res.json())
        .then((data) => setAnalysisData(data))
        .catch((err) => console.error(err));
    }
  }, [selectedAsset]);

  return (
    <main className="min-h-screen bg-[#061C3F] text-white">
      {/* HEADER */}
      <section className="py-20 px-6 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm font-bold mb-4">
            QuantMerlin Analytics
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Analyse des Marchés
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            Intelligence de marché, analyse quantitative et perspectives macro-financières.
          </p>
        </div>
      </section>

      {/* MAIN MENU */}
      <section className="py-8 px-6 bg-black/20 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {Object.keys(marketCategories).map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedAsset(null);
                setAnalysisData(null);
              }}
              className={`px-6 py-3 rounded-full font-bold transition ${
                selectedCategory === category
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* SUBMENU */}
      {selectedCategory && (
        <section className="py-8 px-6 border-b border-yellow-500/10">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
            {marketCategories[selectedCategory as keyof typeof marketCategories].map((asset) => (
              <button
                key={asset}
                onClick={() => setSelectedAsset(asset)}
                className={`px-5 py-2 rounded-xl font-semibold transition ${
                  selectedAsset === asset
                    ? "bg-yellow-400 text-black"
                    : "bg-[#102B5C] hover:bg-yellow-500 hover:text-black"
                }`}
              >
                {asset}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* EURUSD DYNAMIC */}
      {analysisData && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#102B5C] rounded-3xl p-10 border border-yellow-500/20 shadow-2xl">
              <p className="text-yellow-400 text-sm uppercase tracking-[0.25em] mb-4">
                Forex • {analysisData.pair}
              </p>

              <h2 className="text-4xl font-black mb-6">
                Analyse automatique EUR/USD
              </h2>

              <p className="text-gray-400 mb-8">
                {analysisData.date}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-black/20 p-6 rounded-2xl">
                  <p className="text-gray-400">Prix</p>
                  <p className="text-3xl font-bold">{analysisData.price}</p>
                </div>

                <div className="bg-black/20 p-6 rounded-2xl">
                  <p className="text-gray-400">Biais</p>
                  <p className="text-3xl font-bold">{analysisData.bias}</p>
                </div>

                <div className="bg-black/20 p-6 rounded-2xl">
                  <p className="text-gray-400">RSI</p>
                  <p className="text-3xl font-bold">{analysisData.rsi}</p>
                </div>
              </div>

              <div className="space-y-4 text-lg text-gray-200">
                <p>{analysisData.analysis}</p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Comprendre l’EUR
                </h3>

                <div className="space-y-4">
                  {euroFaqs.map((faq, index) => (
                    <div key={index} className="bg-black/30 rounded-2xl">
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="w-full text-left p-6 font-bold"
                      >
                        {faq.title}
                      </button>

                      {openFaq === index && (
                        <div className="px-6 pb-6 text-gray-300">
                          {faq.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}