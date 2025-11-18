import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Razouk — Web & Graphic Designer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-blue-100/90"
            >
              5+ years crafting expressive brands, clean interfaces, and fast WordPress sites. Hands-on with Elementor, Adobe Illustrator, Photoshop, Figma, and Affinity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow hover:opacity-95">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-white/90 hover:text-white">
                Contact Me
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-blue-100/70">
              {['WordPress', 'Elementor', 'Illustrator', 'Photoshop', 'Figma', 'Affinity', 'HTML', 'CSS', 'JavaScript'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
