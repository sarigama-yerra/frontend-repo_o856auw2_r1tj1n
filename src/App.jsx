import Hero from './components/Hero'
import BoostGrid from './components/BoostGrid'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(0,229,255,0.15),transparent_60%),radial-gradient(1200px_800px_at_110%_10%,rgba(106,0,255,0.12),transparent_60%)] bg-slate-950 text-white">
      {/* Top nav */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#6A00FF] shadow-[0_0_24px_rgba(0,229,255,0.6)]" />
            <span className="font-semibold tracking-wide text-white/90">Apex Boosts</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#boosts" className="hover:text-white transition">Boosts</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#boosts" className="hidden sm:inline-flex rounded-lg px-4 py-2 text-slate-950 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">Get Started</a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Boosts grid */}
      <BoostGrid />

      {/* Safety + highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[{
            t: 'Verified Predators',
            d: 'Handpicked top 0.1% players with proven track records.'
          }, {
            t: 'Account Safety',
            d: 'VPN matching, 2FA coordination, and zero third‑party tools.'
          }, {
            t: 'Live Progress',
            d: 'Track order status in real-time with instant updates.'
          }].map((i, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] mb-3 shadow-[0_0_16px_rgba(0,229,255,0.6)]"></div>
              <h3 className="text-base sm:text-lg font-semibold">{i.t}</h3>
              <p className="mt-1 text-slate-300/90 text-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer id="contact" className="relative mt-6 sm:mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold">Ready to climb?</h4>
              <p className="text-slate-300/90 text-sm">Get a tailored quote in under a minute.</p>
            </div>
            <a href="#boosts" className="inline-flex rounded-lg px-4 py-2 text-slate-950 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">Browse boosts</a>
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">Apex Legends is a trademark of Electronic Arts. This site is not affiliated with or endorsed by EA.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
