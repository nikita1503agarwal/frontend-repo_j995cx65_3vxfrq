import { Code2, Palette, Globe, Rocket } from 'lucide-react'

const skillGroups = [
  {
    icon: Palette,
    title: 'Brand & Graphics',
    items: ['Logo Design', 'Illustration', 'Packaging', 'Social Media Kits', 'Print Prep'],
    tools: ['Adobe Illustrator', 'Photoshop', 'Affinity']
  },
  {
    icon: Globe,
    title: 'Web & WordPress',
    items: ['WordPress Sites', 'Elementor', 'Speed Optimization', 'SEO Basics', 'Maintenance'],
    tools: ['WordPress', 'Elementor', 'HTML/CSS/JS']
  },
  {
    icon: Code2,
    title: 'Product & UI',
    items: ['Wireframes', 'Design Systems', 'Prototyping', 'Handoff'],
    tools: ['Figma', 'Components', 'Auto Layout']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills & Tools</h2>
          <p className="mt-2 text-blue-100/80">Everything used to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <g.icon className="text-cyan-400" />
                <div className="text-white font-semibold">{g.title}</div>
              </div>
              <ul className="mt-4 space-y-1 text-blue-100/80 text-sm list-disc list-inside">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-blue-100/70">
                <span className="font-semibold text-white/90">Tools:</span> {g.tools.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
