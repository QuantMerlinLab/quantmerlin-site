'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message envoyé avec succès !');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus("Erreur lors de l'envoi.");
      }
    } catch (error) {
      setStatus('Impossible d’envoyer le message.');
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#061C3F] text-white pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Contactez-nous
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          Une question ? Un projet ? Nous répondons sous 24h.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="bg-[#102B5C] p-6 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm mb-1">📧 Email</p>
            <a
              href="mailto:contact@quantmerlinanalytics.com"
              className="text-yellow-400 font-bold hover:underline break-all"
            >
              contact@quantmerlinanalytics.com
            </a>
          </div>

          <div className="bg-[#102B5C] p-6 rounded-2xl border border-yellow-500/20">
            <p className="text-gray-400 text-sm mb-1">📱 WhatsApp</p>
            <a
              href="https://wa.me/237656545451"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-bold hover:underline"
            >
              +237 656 545 451
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Nom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#102B5C] border border-white/10 focus:border-yellow-500 outline-none transition"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#102B5C] border border-white/10 focus:border-yellow-500 outline-none transition"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#102B5C] border border-white/10 focus:border-yellow-500 outline-none transition"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? 'Envoi...' : 'Envoyer le message'}
          </button>
        </form>

        {status && (
          <p className="mt-6 text-sm text-green-400">
            {status}
          </p>
        )}
      </div>
    </main>
  );
}