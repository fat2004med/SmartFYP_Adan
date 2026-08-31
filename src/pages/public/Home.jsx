import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users, Building2, Users2, FileText, Calendar, BarChart3, ArrowRight,
} from 'lucide-react'
import { useData } from '../../context/DataContext.jsx'
import { Badge } from '../../components/ui.jsx'

const ICONS = { Users, Building2, Users2, FileText, Calendar, BarChart3 }

export default function Home() {
  const { platformFeatures, platformStats, projects, departments } = useData()
  const featured = projects.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Streamline Your <span className="text-brand-600">Final Year Projects</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Comprehensive project management system designed for colleges to efficiently
              manage final year projects across multiple departments, with role-based access
              for team members, supervisors, HODs, and administrators.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
                Explore Projects
              </Link>
              <Link to="/login" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 hover:bg-slate-50">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-800 shadow-panel">
              <div className="grid h-full grid-cols-2 gap-3 p-8 opacity-90">
                {['Proposal', 'Review', 'Approval', 'Showcase'].map((s, i) => (
                  <div key={s} className="flex flex-col justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <span className="text-xs font-medium uppercase tracking-wide text-white/70">Step {i + 1}</span>
                    <span className="text-sm font-semibold text-white">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink-900">Powerful Features for Project Success</h2>
          <p className="mt-3 text-slate-600">Everything you need to manage final year projects efficiently across your entire institution.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map((f) => {
            const Icon = ICONS[f.icon]
            return (
              <div key={f.title} className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-panel">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-brand-600">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Trusted by Leading Institutions</h2>
          <p className="mt-2 text-brand-100">Join thousands of students and faculty members who rely on our platform for successful project management.</p>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {platformStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-brand-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-ink-900">Featured Student Projects</h2>
            <p className="mt-2 text-slate-600">Discover innovative projects created by our talented students across various departments.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              to="/projects"
              key={p.id}
              className="group overflow-hidden rounded-xl border border-slate-200 transition-shadow hover:shadow-panel"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-brand-100 to-indigo-100 text-brand-700">
                <FileText size={36} />
              </div>
              <div className="p-5">
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge tone="indigo">{p.department.split(' ')[0]}</Badge>
                  <Badge tone={p.status === 'Completed' ? 'green' : 'amber'}>{p.status}</Badge>
                </div>
                <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.description}</p>
                <p className="mt-3 text-xs text-slate-400">by {p.team}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink-900">Departments &amp; Specializations</h2>
            <p className="mt-3 text-slate-600">Our comprehensive system supports all engineering departments with specialized project management tools.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <div key={d.id} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Building2 size={20} />
                </div>
                <h3 className="font-semibold text-ink-900">{d.name}</h3>
                <div className="mt-3 flex justify-between text-sm text-slate-500">
                  <span>Active Projects</span><span className="font-medium text-ink-800">{d.projects}</span>
                </div>
                <div className="mt-1 flex justify-between text-sm text-slate-500">
                  <span>Students</span><span className="font-medium text-ink-800">{d.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-700 to-indigo-900">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Project Management?</h2>
          <p className="mt-3 text-brand-100">Join our platform and experience seamless collaboration, efficient tracking, and successful project delivery across all departments.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/login" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50">
              Get Started Today
            </Link>
            <Link to="/contact" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
