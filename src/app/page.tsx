'use client'

const heroImages = {
  hero: '/dashboard.png',
  smarthome: '/security.png',

  dashboard: '/dashboard.png',

  network: '/homenetwork.png',
}

export default function AKRNetworksHomepage() {
  return (
    <main className="min-h-screen bg-[#f4faf7] text-[#183028] overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_30%),linear-gradient(to_bottom,#f8fffc,#eef7f4)] pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/20 backdrop-blur-2xl bg-white/70 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <a href="/" className="flex items-center gap-4 group">

            <img
              src="/logo.png"
              alt="AKR Networks Logo"
              className="h-20 w-20 object-cover dirop-shadow-[0_10px_25px_rgba(16,185,129,0.25)] group-hover:scale-105 transition duration-300"
            />

            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#163328]">
                AKR Networks – Smart Home & Netzwerk Lösungen
              </h1>

              <p className="text-sm text-gray-600 font-medium tracking-wide">
                Netzwerk •  Smart Home • Infrastruktur
              </p>
            </div>

          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">

            <a href="#leistungen" className="hover:text-emerald-600 transition">
              Leistungen
            </a>

            <a href="#loesungen" className="hover:text-emerald-600 transition">
              Lösungen
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

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-16 items-center">

        <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none" />

        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-300/20 bg-white/70 backdrop-blur-xl text-emerald-600 text-sm mb-8 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
            Netzwerk • WLAN • Smart Home • Infrastruktur
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-[#163328] mb-8">
            Moderne Netzwerke &
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}Smart Home Lösungen
            </span>
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-10 font-medium">
            Netzwerkverkabelung, WLAN Optimierung,
            Home Assistant, Kameras und moderne Infrastruktur
            für Häuser, Wohnungen und Unternehmen.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">

            <a
              href="#kontakt"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#163328] via-emerald-500 to-cyan-400 text-white font-semibold shadow-[0_12px_40px_rgba(16,185,129,0.35)] hover:scale-105 transition duration-300"
            >
              Projekt anfragen
            </a>

            <a
              href="https://wa.me/49123456789"
              className="px-8 py-4 rounded-2xl border border-emerald-200 bg-white/70 backdrop-blur-xl hover:border-emerald-400 hover:text-emerald-600 transition duration-300"
            >
              WhatsApp Kontakt
            </a>

          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xl text-sm text-gray-700">

            <div>✓ Smart Home Steuerung</div>
            <div>✓ Kameras & Türklingeln</div>
            <div>✓ WLAN Optimierung</div>
            <div>✓ Netzwerkverkabelung</div>
            <div>✓ Home Assistant</div>
            <div>✓ Fernzugriff & Alarmierung</div>

          </div>
        </div>

        <div className="relative">

          <div className="absolute -inset-12 bg-emerald-400/20 blur-3xl rounded-full animate-pulse" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/20 shadow-[0_30px_100px_rgba(16,185,129,0.18)] bg-black h-[650px]">

            <img
              src={heroImages.hero}
              alt="Modernes Zuhause"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#08150f]/95 via-[#08150f]/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">

              <div className="grid grid-cols-2 gap-4 mb-6">

                <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-4">

                  <p className="text-emerald-300 text-xs uppercase tracking-wider mb-2">
                    Sicherheit
                  </p>

                  <h3 className="text-white text-xl font-bold">
                    Kameras & Alarmierung
                  </h3>

                </div>

                <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-4">

                  <p className="text-cyan-300 text-xs uppercase tracking-wider mb-2">
                    Smart Home
                  </p>

                  <h3 className="text-white text-xl font-bold">
                    Alles zentral steuerbar
                  </h3>

                </div>

              </div>

              <h3 className="text-4xl font-black text-white leading-tight mb-4">
                Moderne Technik einfach erklärt
              </h3>

              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                Kameras, Licht, WLAN und Smart Home
                zentral über Tablet oder Smartphone steuern.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section
        id="leistungen"
        className="relative z-10 max-w-7xl mx-auto px-6 pb-28"
      >

        <div className="mb-14">

          <p className="text-emerald-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Unsere Leistungen
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5 text-[#163328]">
            Moderne Lösungen für Zuhause & Unternehmen
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl">
            Moderne Smart-Home-, Sicherheits- und Netzwerklösungen
            mit Fokus auf Stabilität, Sicherheit und einfache Bedienung.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: 'Smart Home',
              text: 'Home Assistant, Sensoren, Automationen und zentrale Steuerung.',
            },
            {
              title: 'Kameras & Sicherheit',
              text: 'Außenkameras, Türklingeln und moderne Sicherheitslösungen.',
            },
            {
              title: 'Netzwerk & WLAN',
              text: 'WLAN Optimierung, Access Points und stabile Netzwerke.',
            },
            {
              title: 'Netzwerkverkabelung',
              text: 'CAT7 Verkabelung, Patchpanel und moderne Infrastruktur.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-2xl p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(16,185,129,0.15)] transition duration-300"
            >

              <h3 className="text-2xl font-bold text-emerald-600 mb-5">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {service.text}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* LÖSUNGEN */}
      <section
        id="loesungen"
        className="relative z-10 py-28 bg-[#10231c]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-emerald-300 text-sm font-semibold tracking-wide uppercase mb-4">
              Smarte Lösungen
            </p>

            <h2 className="text-5xl font-black text-white mb-6">
              Technik die wirklich sinnvoll ist
            </h2>

            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Moderne Lösungen für Sicherheit, Komfort,
              WLAN und Smart Home — einfach steuerbar.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="rounded-[36px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">

              <img
                src={heroImages.smarthome}
                alt="Sicherheit"
                className="h-[260px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  Sicherheit auch im Urlaub
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Kameras, Bewegungsmelder und Benachrichtigungen
                  direkt aufs Smartphone — auch unterwegs.
                </p>

              </div>
            </div>

            <div className="rounded-[36px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">

              <img
                src={heroImages.dashboard}
                alt="Dashboard"
                className="h-[260px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  Alles zentral steuerbar
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Licht, Kameras, Temperatur und Smart Home
                  in einer modernen Oberfläche.
                </p>

              </div>
            </div>

            <div className="rounded-[36px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">

              <img
                src={heroImages.network}
                alt="Netzwerk"
                className="h-[260px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  Modernes Heimnetzwerk
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Stabiles WLAN, Patchpanel und moderne Netzwerk-Infrastruktur.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 py-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#163328] via-[#1b4332] to-[#245c46] shadow-[0_30px_80px_rgba(16,185,129,0.18)]">

            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_30%)]" />

            <div className="relative grid lg:grid-cols-2 gap-14 items-center p-10 md:p-16">

              <div>

                <p className="text-emerald-200 text-sm font-semibold tracking-wide uppercase mb-4">
                  Über AKR Networks
                </p>

                <h2 className="text-5xl font-black text-white leading-tight mb-8">
                  Moderne Technik einfach erklärt
                </h2>

                <p className="text-lg text-emerald-50/90 leading-relaxed mb-6">
                  AKR Networks unterstützt Privat- und Geschäftskunden
                  bei modernen Smart-Home-, WLAN- und Netzwerkprojekten.
                </p>

                <p className="text-emerald-100/80 leading-relaxed text-lg">
                  Der Fokus liegt auf verständlichen Lösungen,
                  stabilen Netzwerken und moderner Technik ohne kompliziertes IT-Chaos.
                </p>

              </div>

              <div className="grid gap-5">

                {[
                  'Home Assistant',
                  'WLAN Optimierung',
                  'Kameras & Türklingeln',
                  'Netzwerkverkabelung',
                  'Smart Home Automationen',
                ].map((item) => (
                  <div
                    key={item}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 hover:bg-white/15 transition duration-300"
                  >

                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-300 to-cyan-300" />

                    <div className="flex items-center gap-4">

                      <div className="w-3 h-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.8)]" />

                      <p className="text-lg font-semibold text-white">
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

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="relative z-10 border-t border-white/10 bg-white/80"
      >

        <div className="max-w-5xl mx-auto px-6 py-24">

          <div className="text-center mb-14">

            <p className="text-emerald-600 text-sm font-semibold tracking-wide uppercase mb-3">
              Kontakt
            </p>

            <h2 className="text-5xl font-black mb-6 text-[#163328]">
              Projekt unverbindlich anfragen
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Gemeinsam planen wir moderne Smart-Home-,
              WLAN- und Netzwerkprojekte.
            </p>

          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault()

              const form = e.currentTarget
              const formData = new FormData(form)

              const response = await fetch('https://formspree.io/f/xaqvpdnj', {
                method: 'POST',
                body: formData,
                headers: {
                  Accept: 'application/json',
                },
              })

              if (response.ok) {
                alert('Anfrage erfolgreich versendet!')
                form.reset()
              } else {
                alert('Fehler beim Senden. Bitte erneut versuchen.')
              }
            }}
            className="bg-white rounded-[36px] border border-emerald-100 shadow-[0_20px_60px_rgba(16,185,129,0.08)] p-8 md:p-12 space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-semibold text-[#163328] mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-emerald-500 transition"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#163328] mb-2">
                  E-Mail
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-emerald-500 transition"
                  placeholder="ihre@email.de"
                />
              </div>

            </div>

            <div>
              <label className="block text-sm font-semibold text-[#163328] mb-2">
                Nachricht
              </label>

              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-emerald-500 transition resize-none"
                placeholder="Beschreiben Sie kurz Ihr Projekt..."
              />
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-600">

              <input
                type="checkbox"
                required
                className="mt-1"
              />

              <p>
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung
                meiner Angaben zur Bearbeitung meiner Anfrage zu.
              </p>

            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#163328] via-emerald-500 to-cyan-400 text-white font-semibold shadow-[0_10px_35px_rgba(16,185,129,0.35)] hover:scale-[1.02] transition duration-300"
            >
              Anfrage senden
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-white/70 backdrop-blur-2xl">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-lg font-semibold text-emerald-600 mb-2">
              AKR Networks
            </h3>

            <p className="text-sm text-gray-600 max-w-md">
              Netzwerk-, Smart Home- & Infrastruktur-Lösungen
              für moderne Häuser und Unternehmen.
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