import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="mx-auto flex h-full max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_30px_rgba(255,255,255,0.3)]">
              Playful brand experiences that feel alive
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              We mix interactive 3D, character design, and motion to turn products into worlds. Tap, drag, and explore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 transition">See our work</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-transparent ring-1 ring-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">Start a project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
