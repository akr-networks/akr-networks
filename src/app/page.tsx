export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#f4faf7] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        <img
          src="/logo.png"
          alt="AKR Networks Logo"
          className="h-28 w-28 mx-auto mb-8 object-cover"
        />

        <p className="text-emerald-600 font-semibold tracking-[0.25em] uppercase text-sm mb-4">
          AKR Networks
        </p>

        <h1 className="text-5xl md:text-6xl font-black text-[#163328] mb-6 leading-tight">
          Website im Aufbau
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Unsere neue Website wird aktuell vorbereitet.
          Schon bald finden Sie hier moderne Netzwerk-,
          WLAN- und Infrastrukturservices für Privat-
          und Geschäftskunden.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-emerald-100 shadow-sm text-gray-700">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

          Wartungsmodus aktiv
        </div>

      </div>
    </main>
  )
}