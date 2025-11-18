import { useState } from 'react'
import { Menu, X, Mail, Download } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-md" />
              <div className="leading-tight">
                <div className="text-white font-semibold tracking-tight">Razouk</div>
                <div className="text-xs text-blue-200/80">Designer • Web & Graphics</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
                <Mail size={16} /> Contact
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white/90 hover:text-white">
                <Download size={16} /> Resume
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/90" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/90">
              <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                <div className="text-white font-semibold">Razouk</div>
                <button className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/90" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-base text-blue-100/90 hover:text-white hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-2 pt-2">
                  <a href="#contact" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow">
                    <Mail size={16} /> Contact
                  </a>
                  <a href="#contact" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white/90">
                    <Download size={16} /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
