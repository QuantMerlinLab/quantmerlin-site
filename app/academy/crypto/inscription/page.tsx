export default function CryptoInscriptionPage() {
  return (
    <div className="min-h-screen bg-[#061C3F] text-white">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="text-center mb-12">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm mb-6">
            QuantMerlin Academy
          </div>

          <h1 className="text-5xl font-black mb-6">
            Débloquer la formation
          </h1>

          <p className="text-xl text-gray-300">
            Initiation à la Cryptomonnaie
          </p>

        </div>

        <div className="bg-[#102B5C] rounded-3xl p-10 border border-yellow-500/20">

          <div className="text-center mb-10">

            <p className="text-gray-400 mb-2">
              Prix de la formation
            </p>

            <h2 className="text-6xl font-black text-yellow-400">
              20 USD
            </h2>

          </div>

          <div className="space-y-6">

            <div className="bg-black/20 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                📱 MTN Mobile Money
              </h3>

              <p className="text-gray-300">
                Numéro : +237 XXX XXX XXX
              </p>

            </div>

            <div className="bg-black/20 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                🟠 Orange Money
              </h3>

              <p className="text-gray-300">
                Numéro : +237 XXX XXX XXX
              </p>

            </div>

            <div className="bg-black/20 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                📧 Après paiement
              </h3>

              <p className="text-gray-300 mb-3">
                Envoyez votre preuve de paiement à :
              </p>

              <p className="text-yellow-400 font-bold">
                contact@quantmerlinanalytics.com
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}