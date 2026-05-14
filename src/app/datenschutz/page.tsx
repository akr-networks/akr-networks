export default function DatenschutzPage() {
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
            className="h-20 w-20 object-cover drop-shadow-[0_8px_20px_rgba(16,185,129,0.25)] group-hover:scale-105 transition duration-300"
          />

          <div>
            <h1 className="text-2xl font-black text-[#163328]">
              AKR Networks
            </h1>

            <p className="text-sm text-gray-600">
              Netzwerk • Smart Home • Infrastruktur
            </p>
          </div>
        </a>

        <div className="rounded-[36px] border border-white bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(16,185,129,0.08)] p-8 md:p-14">

          <div className="mb-12">

            <p className="text-emerald-600 font-semibold tracking-wide uppercase mb-3 text-sm">
              Rechtliche Informationen
            </p>

            <h2 className="text-5xl font-black tracking-tight text-[#163328]">
              Datenschutzerklärung
            </h2>

          </div>

          <div className="space-y-12 text-gray-700 leading-relaxed">

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Allgemeine Hinweise
              </h3>

              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig.
                Wir behandeln Ihre personenbezogenen Daten vertraulich
                und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Verantwortliche Stelle
              </h3>

              <div className="space-y-2">
                <p>AKR Networks</p>
                <p>Ali Kassem-Rivera</p>
                <p>E-Mail: kontakt@akr-networks.de</p>
              </div>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Hosting über Vercel
              </h3>

              <p>
                Diese Website wird über den Hosting-Anbieter Vercel Inc.
                bereitgestellt. Beim Aufruf der Website können technisch notwendige
                Daten wie IP-Adresse, Browserinformationen, Betriebssystem,
                Referrer-URL sowie Uhrzeit des Zugriffs verarbeitet werden,
                um einen sicheren und stabilen Betrieb der Website zu gewährleisten.
              </p>

              <p className="mt-4">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                aufgrund unseres berechtigten Interesses an einem sicheren und
                zuverlässigen Betrieb unserer Website.
              </p>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Kontaktaufnahme
              </h3>

              <p>
                Wenn Sie uns per E-Mail, WhatsApp oder über das Kontaktformular
                kontaktieren, werden die von Ihnen übermittelten Daten
                zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.
              </p>

              <p className="mt-4">
                Die Verarbeitung erfolgt ausschließlich zur Bearbeitung Ihrer Anfrage,
                Kommunikation mit Ihnen sowie gegebenenfalls zur Vorbereitung
                oder Durchführung unserer Dienstleistungen.
              </p>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Kontaktformular
              </h3>

              <p>
                Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Formular inklusive der von Ihnen
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                bei uns gespeichert und verarbeitet.
              </p>

              <p className="mt-4">
                Die Verarbeitung der eingegebenen Daten erfolgt ausschließlich
                zum Zweck der Bearbeitung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO
                beziehungsweise auf Grundlage unseres berechtigten Interesses
                an einer effizienten Bearbeitung der Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <p className="mt-4">
                Für die technische Bereitstellung des Kontaktformulars nutzen wir
                den Dienst Formspree.io. Die von Ihnen eingegebenen Daten werden
                an Formspree übertragen und dort zur Zustellung der Anfrage verarbeitet.
              </p>

              <p className="mt-4">
                Weitere Informationen finden Sie unter:
              </p>

              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                className="text-emerald-600 hover:underline break-all"
              >
                https://formspree.io/legal/privacy-policy/
              </a>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Externe Links
              </h3>

              <p>
                Unsere Website enthält Links zu externen Diensten wie WhatsApp.
                Beim Anklicken eines solchen Links verlassen Sie unsere Website.
                Für die Datenverarbeitung auf den jeweiligen externen Seiten
                sind ausschließlich deren Betreiber verantwortlich.
              </p>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Cookies
              </h3>

              <p>
                Aktuell werden auf dieser Website keine Analyse- oder Marketing-Cookies
                eingesetzt. Es werden ausschließlich technisch notwendige Funktionen
                verwendet, die für den sicheren und stabilen Betrieb der Website
                erforderlich sind.
              </p>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Speicherung von Daten
              </h3>

              <p>
                Personenbezogene Daten werden nur solange gespeichert,
                wie dies zur Bearbeitung der Anfrage oder aufgrund gesetzlicher
                Aufbewahrungspflichten erforderlich ist.
              </p>

            </section>

            <section>

              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Ihre Rechte
              </h3>

              <p>
                Sie haben jederzeit das Recht auf Auskunft über die bei uns
                gespeicherten personenbezogenen Daten sowie auf Berichtigung,
                Löschung oder Einschränkung der Verarbeitung im Rahmen der
                gesetzlichen Vorschriften.
              </p>

              <p className="mt-4">
                Außerdem haben Sie das Recht auf Datenübertragbarkeit
                sowie das Recht, sich bei einer Datenschutzaufsichtsbehörde
                zu beschweren.
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