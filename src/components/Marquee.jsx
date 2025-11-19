import { motion } from 'framer-motion'

const logos = ['Nintendo', 'Riot', 'Spotify', 'Discord', 'Roblox', 'Epic Games']

export default function Marquee() {
  return (
    <section className="relative bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap py-6 text-white/70"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="text-sm tracking-wide">{name}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
