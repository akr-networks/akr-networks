export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#08110d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-[#08110d] to-teal-400/10" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_60px_rgba(16,185,129,0.08)]">
          
          <p className="text-emerald-300 text-sm mb-3">
            Rechtliche Informationen
          </p>

          <h1 className="text-5xl font-black mb-10 tracking-tight">
            Impressum
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            
            <div>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="space-y-2">
                <p>AKR Networks</p>
                <p>Ali Kassem-Rivera</p>
                <p>Adresse folgt</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                Kontakt
              </h2>

              <div className="space-y-2">
                <p>E-Mail: kontakt@akr-networks.de</p>
                <p>Telefon: folgt</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                Verantwortlich für den Inhalt
              </h2>

              <p>
                Ali Kassem-Rivera
              </p>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-white/10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
            >
              ← Zurück zur Startseite
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}