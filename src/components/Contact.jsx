import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending...')
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('Thanks! We will reach out soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-white">Let’s make something playful</h3>
            <p className="mt-3 text-white/70">Tell us about your product, goals, and timelines. We’ll bring the fun.</p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Interactive 3D hero scenes</li>
              <li>• Character design & mascots</li>
              <li>• Game-like onboarding & flows</li>
              <li>• Motion design & micro-interactions</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
            </div>
            <input name="company" placeholder="Company / Project" className="mt-4 w-full rounded-xl bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
            <textarea name="brief" required placeholder="What are you building?" rows="4" className="mt-4 w-full rounded-xl bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-white/30" />
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90 transition">Send</button>
            {status && <p className="mt-2 text-sm text-white/70">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
