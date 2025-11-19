import { motion } from 'framer-motion'
import { Gamepad2, Camera, MousePointerClick, Palette } from 'lucide-react'

const items = [
  {
    icon: Gamepad2,
    title: 'Interactive Worlds',
    desc: 'Real-time scenes you can touch, drag, and play with directly in the browser.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Camera,
    title: 'Character-Driven',
    desc: 'Expressive characters and mascots that give your brand a friendly face.',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: MousePointerClick,
    title: 'Delightful UX',
    desc: 'Micro-interactions and motion design that guide attention and make it fun.',
    color: 'from-cyan-400 to-teal-400',
  },
  {
    icon: Palette,
    title: 'Bold Art Direction',
    desc: 'Vibrant color, chunky type, and playful composition—tastefully balanced.',
    color: 'from-amber-400 to-orange-500',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What we do best</h2>
          <p className="mt-2 text-white/60">A playful toolkit to elevate your product and brand.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className={`absolute -top-12 -right-12 h-36 w-36 bg-gradient-to-br ${color} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="mt-1 text-white/70 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
