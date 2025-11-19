import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-500 to-cyan-400 blur-md opacity-50 group-hover:opacity-80 transition" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Skuhan</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
                Let’s Play
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
                  Let’s Play
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
