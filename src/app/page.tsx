export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07110d] text-white flex items-center justify-center px-6">

      {/* Hintergrund Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_30%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-3xl text-center">

        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-white/5 px-6 py-3 mb-8 backdrop-blur-xl">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm tracking-wider text-emerald-200 uppercase font-semibold">
            Wartungsmodus aktiv
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8 bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
          AKR Networks
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-white mb-6">
          Unsere neue Plattform wird aktuell erweitert 😄🔥
        </p>

        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Wir arbeiten aktuell an modernen Smart-Home-, Netzwerk- und Infrastruktur-Lösungen.
          Die Website erhält neue Funktionen, bessere Inhalte und weitere Services rund um
          Home Assistant, WLAN Optimierung, Kamerasysteme und smarte Automationen.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12 text-sm text-white/80">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            ⚡ Smart Home
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            📡 Netzwerk & WLAN
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            🛡️ Sicherheit & Kameras
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="mailto:akr-networks@outlook.de"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 text-black font-bold shadow-[0_10px_40px_rgba(16,185,129,0.35)] hover:scale-105 transition duration-300"
          >
            Kontakt aufnehmen
          </a>

          <a
            href="https://wa.me/49123456789"
            className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:border-emerald-400 transition duration-300"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </main>
  )
}