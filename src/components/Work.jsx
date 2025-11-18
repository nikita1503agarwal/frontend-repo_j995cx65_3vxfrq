import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Brand System — Cafe Lumo',
    desc: 'Logo, packaging, and playful illustration pack for a modern coffee brand.',
    tags: ['Illustrator', 'Photoshop'],
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Portfolio Website — Photographer',
    desc: 'Responsive WordPress + Elementor with sleek galleries and fast performance.',
    tags: ['WordPress', 'Elementor'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'SaaS Landing Redesign',
    desc: 'Clean UI kit, layout system, and icon set built in Figma.',
    tags: ['Figma', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="mt-2 text-blue-100/80">A mix of branding, UI, and web builds.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.image} alt="" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-blue-100/80">{p.desc}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-blue-100/70">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
