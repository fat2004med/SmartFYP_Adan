import React from 'react'
import { Layers, Users2, ShieldCheck, Sparkles } from 'lucide-react'

const values = [
  { icon: Sparkles, title: 'Innovation', desc: 'Continuously evolving our platform with cutting-edge features to meet the changing needs of education.' },
  { icon: Users2, title: 'Collaboration', desc: 'Fostering teamwork and communication between all stakeholders in the academic project lifecycle.' },
  { icon: ShieldCheck, title: 'Excellence', desc: 'Committed to delivering the highest quality platform that drives successful project outcomes.' },
]

const whyUs = [
  { title: 'Comprehensive Role Management', desc: 'Tailored dashboards for students, team leaders, supervisors, HODs, and administrators.' },
  { title: 'Real-time Collaboration', desc: 'Seamless communication and file sharing between all project stakeholders.' },
  { title: 'Progress Tracking', desc: 'Advanced analytics and reporting tools for monitoring project progress.' },
  { title: 'Secure & Scalable', desc: 'Enterprise-grade security with the ability to scale across multiple departments.' },
]

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">About Our Platform</h1>
          <p className="mt-3 text-brand-100">Empowering educational institutions with comprehensive project management solutions.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink-900">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We are dedicated to revolutionizing how educational institutions manage final
              year projects. Our platform bridges the gap between students, faculty, and
              administration, creating a seamless ecosystem for academic project management.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              By providing role-based access and comprehensive tools, we ensure that every
              stakeholder has the resources they need to contribute to successful project
              outcomes.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-ink-900">Why Choose Our Platform?</h3>
            <div className="mt-4 space-y-4">
              {whyUs.map((w) => (
                <div key={w.title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                  <div>
                    <p className="font-medium text-ink-900">{w.title}</p>
                    <p className="text-sm text-slate-500">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 to-indigo-900 p-8 shadow-panel">
            <div className="grid h-full grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-lg bg-white/10" style={{ opacity: 0.4 + (i % 3) * 0.2 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900">Our Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <v.icon size={22} />
                </div>
                <h3 className="font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Layers className="mx-auto mb-4 text-brand-600" size={32} />
        <h2 className="text-2xl font-bold text-ink-900">Built by educators, for educators</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          SmartFYP was designed alongside real supervisors and department heads to solve the
          everyday friction of running final year projects across a growing college.
        </p>
      </section>
    </div>
  )
}
