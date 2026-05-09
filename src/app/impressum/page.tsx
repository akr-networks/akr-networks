export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f4faf7] text-[#163328] relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.12),transparent_30%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">

        <a
          href="/"
          className="inline-flex items-center gap-4 mb-12 group"
        >
          <img
            src="/logo.png"
            alt="AKR Networks Logo"
            className="h-16 w-auto object-contain group-hover:scale-105 transition duration-300"
          />

          <div>
            <h1 className="text-2xl font-black text-[#163328]">
              AKR Networks
            </h1>

            <p className="text-sm text-gray-600">
              Netzwerk- & Infrastrukturservices
            </p>
          </div>
        </a>

        <div className="rounded-[36px] border border-white bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(16,185,129,0.08)] p-8 md:p-14">

          <div className="mb-12">
            <p className="text-emerald-600 font-semibold tracking-wide uppercase mb-3 text-sm">
              Rechtliche Informationen
            </p>

            <h2 className="text-5xl font-black tracking-tight text-[#163328]">
              Impressum
            </h2>
          </div>

          <div className="grid gap-10">

            <section>
              <h3 className="text-2xl font-bold text-emerald-600 mb-5">
                Angaben gemäß § 5 TMG
              </h3>

              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>AKR Networks</p>
                <p>Ali Kassem-Rivera</p>
                <p>Adresse folgt</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-emerald-600 mb-5">
                Kontakt
              </h3>

              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>E-Mail: kontakt@akr-networks.de</p>
                <p>Telefon: folgt</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-emerald-600 mb-5">
                Verantwortlich für den Inhalt
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Ali Kassem-Rivera
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-emerald-600 mb-5">
                Haftungshinweis
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
                für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
                sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </section>

          </div>

          <div className="mt-14 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-500 transition"
            >
              ← Zurück zur Startseite
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}