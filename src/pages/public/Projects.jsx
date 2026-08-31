import React, { useMemo, useState } from 'react'
import { Search, FileText, Users } from 'lucide-react'
import { useData } from '../../context/DataContext.jsx'
import { Badge, statusTone } from '../../components/ui.jsx'

export default function Projects() {
  const { projects, departments } = useData()
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All')
  const [status, setStatus] = useState('All')
  const [year, setYear] = useState('All')

  const years = useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), [projects])

  const filtered = projects.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.team.toLowerCase().includes(query.toLowerCase())
    const matchesDept = dept === 'All' || p.department.includes(dept)
    const matchesStatus = status === 'All' || p.status === status
    const matchesYear = year === 'All' || String(p.year) === String(year)
    return matchesQuery && matchesDept && matchesStatus && matchesYear
  })

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-600 to-indigo-700 py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Student Projects Gallery</h1>
          <p className="mx-auto mt-3 max-w-2xl text-brand-100">
            Explore innovative final year projects from talented students across all departments.
            Search, filter, and discover groundbreaking work from our academic community.
          </p>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-panel">
              <Search size={18} className="text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects by title, description, team name or technology..."
                className="w-full text-sm text-ink-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Department</label>
            <select value={dept} onChange={(e) => setDept(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
              <option>All</option>
              {departments.map((d) => <option key={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
              <option>All</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Pending</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Academic Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
              <option>All</option>
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="font-semibold text-ink-900">{filtered.length} Projects Found</p>
          <p className="text-sm text-slate-500">Showing results for your search</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-panel">
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-100 to-indigo-100 text-brand-700">
                <FileText size={32} />
              </div>
              <div className="p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge tone="indigo">{p.department.split('&')[0].trim()}</Badge>
                  <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                </div>
                <h3 className="font-semibold leading-snug text-ink-900">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <p className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Users size={13} /> by {p.team}
                  </p>
                  <button className="text-xs font-semibold text-brand-600 hover:text-brand-700">View Details &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-slate-500">No projects match your filters. Try adjusting your search.</div>
        )}
      </section>
    </div>
  )
}
