import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5 backdrop-blur-md text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] shadow-[0_0_16px_#00E5FF]"></span>
            Apex Legends Boosting • 24/7
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_24px_rgba(106,0,255,0.25)]">
            Rank up faster with pro-level Apex boosts
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-2xl">
            Safe, discreet, and efficient boosting from verified Preds. Modern, secure checkout and real-time updates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#boosts" className="group inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 bg-gradient-to-r from-[#00E5FF] to-[#6A00FF] hover:opacity-95 transition-all duration-300">
              Browse boosts
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#faq" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
