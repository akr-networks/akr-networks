'use client' 
const heroImages = {
  fiber:
    'https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=1800&auto=format&fit=crop',

  patchpanel:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1800&auto=format&fit=crop',

  homewifi:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop',

  hero:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2200&auto=format&fit=crop',
}


export default function AKRNetworksHomepage() {
  return (
    <main className="min-h-screen bg-[#f5f9f7] text-[#183028] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%),linear-gradient(to_bottom,#f8fffc,#eef7f4)] pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <header className="sticky top-0 relative z-20 border-b border-emerald-100 backdrop-blur-2xl bg-white/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group transition">
            <img
              src="/logo.png"
              alt="AKR Networks Logo"
className="h-20 w-20 object-cover drop-shadow-[0_8px_20px_rgba(16,185,129,0.25)] group-hover:scale-105 transition duration-300"            />

            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#163328] group-hover:text-emerald-600 transition">
                AKR Networks
              </h1>

              <p className="text-sm text-gray-600 font-medium tracking-wide">
                Netzwerk- & Infrastrukturservices
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#leistungen" className="hover:text-emerald-600 transition">
              Leistungen
            </a>
            <a href="#about" className="hover:text-emerald-600 transition">
              Über uns
            </a>
            
            <a href="#kontakt" className="hover:text-emerald-600 transition">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="absolute top-0 left-0 w-full h-[420px] overflow-hidden rounded-b-[60px] opacity-40 pointer-events-none">
          <img
            src={heroImages.hero}
            alt="Moderne Glasfaser Lichtsignale"
            className="w-full h-full object-cover scale-110 saturate-125 brightness-[1.05]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 via-white/30 to-[#eef4f1]" />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300/30 bg-emerald-100/70 backdrop-blur-xl text-emerald-700 text-sm mb-6 shadow-[0_0_25px_rgba(52,211,153,0.15)]">
            Moderne Netzwerk- & Infrastrukturservices
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.98] mb-6 tracking-tight text-[#163328]">
            Stabiles WLAN &
            <span className="bg-gradient-to-r from-[#163328] via-emerald-500 to-teal-400 bg-clip-text text-transparent"> moderne Netzwerke </span>
            für Zuhause & Unternehmen
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed max-w-xl mb-10 font-medium">
            Netzwerkverkabelung, WLAN-Optimierung,
            Glasfaser- & Infrastrukturservices für Häuser,
            Wohnungen und Unternehmen.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#163328] via-emerald-500 to-teal-400 text-white font-semibold shadow-[0_10px_35px_rgba(16,185,129,0.35)] hover:scale-105 hover:shadow-[0_0_35px_rgba(52,211,153,0.45)] transition duration-300"
            >
              Jetzt Kontakt aufnehmen
            </a>

            <a
              href="https://wa.me/49123456789"
              className="px-6 py-4 rounded-2xl border border-emerald-200 bg-white/70 backdrop-blur-xl hover:border-emerald-400 hover:text-emerald-600 transition duration-300"
            >
              WhatsApp Support
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-600">
            <div>✓ WLAN Optimierung</div>
            <div>✓ Netzwerkverkabelung</div>
            <div>✓ Netzwerk & WLAN Einrichtung</div>
            <div>✓ Entstörung</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-emerald-400/30 blur-3xl rounded-full animate-pulse" />

          <div className="relative grid gap-5">
            <div className="relative overflow-hidden rounded-[36px] border border-white/60 h-[340px] shadow-[0_25px_80px_rgba(16,185,129,0.18)] bg-white">
              <img
                src={heroImages.fiber}
                alt="LWL Glasfaser Infrastruktur"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/90 via-[#10251d]/30 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-sm text-emerald-300 mb-2">
                  Glasfaser & Infrastruktur
                </p>

                <h3 className="text-4xl font-black text-white max-w-md leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  Moderne Netzwerk- & LWL-Lösungen
                </h3>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[28px] border border-white/60 h-[260px] bg-white shadow-xl">
                <img
                  src={heroImages.patchpanel}
                  alt="CAT7 Netzwerkverkabelung"
                  className="absolute inset-0 w-full h-full object-cover opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08150f]/95 via-[#08150f]/55 to-transparent" />

                <div className="relative p-5 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                    Strukturierte Verkabelung
                  </h3>

                  <p className="text-sm text-white font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    CAT7, Netzwerkdosen, Patchfelder & saubere Infrastruktur.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/60 h-[260px] bg-white shadow-xl">
                <img
                  src={heroImages.homewifi}
                  alt="Modernes Heimnetzwerk"
                  className="absolute inset-0 w-full h-full object-cover opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08150f]/95 via-[#08150f]/60 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-6">
                  <p className="text-emerald-600 text-sm font-semibold tracking-wide uppercase mb-3">
                    Zuhause & Unternehmen
                  </p>

                  <h3 className="text-3xl font-black text-white leading-tight mb-3 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                    Stabiles WLAN in jedem Raum
                  </h3>

                  <p className="text-sm text-white leading-relaxed font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    Zuverlässige WLAN- und Netzwerklösungen für Häuser,
                    Wohnungen und moderne Arbeitsplätze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="leistungen"
        className="relative z-10 max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="mb-12">
          <p className="text-emerald-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Unsere Leistungen
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lösungen für Zuhause & Unternehmen
          </h2>

          <p className="text-gray-600 max-w-2xl">
            Professionelle Netzwerk-, WLAN- und Infrastrukturservices
            für stabile und zuverlässige Verbindungen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Netzwerkverkabelung',
              text: 'Saubere Netzwerkverkabelung für Häuser, Wohnungen und Büros.',
            },
            {
              title: 'WLAN Optimierung',
              text: 'Bessere Reichweite und stabile Verbindungen im gesamten Gebäude.',
            },
            {
              title: 'Glasfaser & Infrastruktur',
              text: 'Unterstützung bei moderner Netzwerk- und LWL-Infrastruktur.',
            },
            {
              title: 'Entstörung & Support',
              text: 'Schnelle Hilfe bei Netzwerk-, Internet- und WLAN-Problemen.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-white bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#163328] via-[#1b4332] to-[#245c46] shadow-[0_30px_80px_rgba(16,185,129,0.18)]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_30%)]" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center p-10 md:p-16">
              <div>
                <p className="text-emerald-200 text-sm font-semibold tracking-wide uppercase mb-4">
                  Über AKR Networks
                </p>

                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 max-w-xl">
                  Persönlicher Service statt komplizierter IT-Sprache
                </h2>

                <p className="text-lg text-emerald-50/90 leading-relaxed mb-6 max-w-2xl">
                  AKR Networks unterstützt Privat- und Geschäftskunden bei
                  Netzwerk-, WLAN- und Infrastrukturprojekten – verständlich,
                  zuverlässig und praxisnah.
                </p>

                <p className="text-base text-emerald-100/80 leading-relaxed max-w-2xl">
                  Fokus liegt auf modernen Lösungen, stabilen Netzwerken und
                  persönlicher Unterstützung ohne unnötig komplizierte Technik-Sprache.
                </p>
              </div>

              <div className="grid gap-5">
                {[
                  'Netzwerkverkabelung',
                  'WLAN & Internet Optimierung',
                  'Glasfaser & Infrastruktur',
                  'Fehlersuche & Entstörung',
                  'Persönlicher Support & Hilfe',
                ].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 hover:bg-white/15 transition duration-300"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-300 to-sky-300" />

                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.8)]" />

                      <p className="text-lg font-semibold text-white tracking-wide">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section
        id="kontakt"
        className="relative z-10 border-t border-white/10 bg-white/80"
      >
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-emerald-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Kontakt
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Bereit für ein stabiles Netzwerk?
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Kontaktieren Sie AKR Networks für moderne Netzwerk-, WLAN-
            und Infrastrukturservices.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kontakt@akr-networks.de"
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:scale-105 transition"
            >
              E-Mail senden
            </a>

            <a
              href="https://wa.me/49123456789"
              className="px-6 py-4 rounded-2xl border border-emerald-200 bg-white/70 backdrop-blur-xl hover:border-emerald-400 hover:text-emerald-600 transition"
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-white/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-2">
              AKR Networks
            </h3>

            <p className="text-sm text-gray-600 max-w-md">
              Netzwerk-, WLAN- & Infrastrukturservices für Häuser,
              Wohnungen und Unternehmen.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
            <a href="/impressum" className="hover:text-emerald-600 transition">
              Impressum
            </a>

            <a href="/datenschutz" className="hover:text-emerald-600 transition">
              Datenschutz
            </a>

            <a href="/agb" className="hover:text-emerald-600 transition">
              AGB
            </a>

            <a href="/cookies" className="hover:text-emerald-600 transition">
              Cookies
            </a>

            <a href="#kontakt" className="hover:text-emerald-600 transition">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
