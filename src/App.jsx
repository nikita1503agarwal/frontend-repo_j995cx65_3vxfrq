import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />

        <footer className="pb-10 text-center text-blue-100/70">
          © {new Date().getFullYear()} Razouk — All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App
