export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#061C3F] text-white pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Contactez-nous
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Une question ? Un projet ? Nous répondons sous 24h.
        </p>

        {/* Coordonnées */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="bg-[#102B5C] p-6 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm mb-1">📧 Email</p>
            <a href="mailto:quantmerlinanalytics@gmail.com" className="text-yellow-400 font-bold hover:underline break-all">
              quantmerlinanalytics@gmail.com
            </a>
          </div>
          <div className="bg-[#102B5C] p-6 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm mb-1">📱 WhatsApp</p>
            <a href="https://wa.me/237656545451" target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-bold hover:underline">
              +237 656 545 451
            </a>
          </div>
        </div>

        {/* Formulaire (optionnel - visuel pour l'instant) */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Nom</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl bg-[#102B5C] border border-white/10 focus:border-yellow-500 outline-none transition" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-[#102B5C] border border-white/10 focus:border-yellow-500 outline-none transition" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-[#102B5C] border border-white/10 focus:border-yellow-500 outline-none transition" placeholder="Votre message..."></textarea>
          </div>
          <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition">
            Envoyer le message
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          * Formulaire en cours de développement. Pour l'instant, contactez-nous directement par email ou WhatsApp.
        </p>
      </div>
    </main>
  );
}