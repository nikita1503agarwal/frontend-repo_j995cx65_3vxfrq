import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // No backend requirement now: simulate
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! I will reach back within 24 hours.')
      e.target.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s work together</h2>
          <p className="mt-2 text-blue-100/80">Tell me about your project — branding, website, or visual content.</p>

          <form onSubmit={submit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Your name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <textarea required name="message" placeholder="Describe your project or idea" rows={5} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button type="submit" className="inline-flex justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow hover:opacity-95">Send message</button>
            {status && <p className="text-sm text-blue-100/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
