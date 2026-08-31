import React, { useMemo, useState } from 'react'
import { Download, FileBarChart, Search, Eye } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, Button } from '../../../components/ui.jsx'

export default function ProjectRecords() {
  const { projects, departments } = useData()
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All Departments')
  const [year, setYear] = useState('All Years')
  const [status, setStatus] = useState('All Status')

  const years = useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), [projects])

  const filtered = projects.filter((p) => {
    const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.team.toLowerCase().includes(query.toLowerCase())
    const matchesDept = dept === 'All Departments' || p.department.includes(dept)
    const matchesYear = year === 'All Years' || String(p.year) === String(year)
    const matchesStatus = status === 'All Status' || p.status === status
    return matchesQuery && matchesDept && matchesYear && matchesStatus
  })

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-ink-900">Project Records</h2>
        <div className="flex gap-2">
          <Button variant="secondary"><Download size={16} /> Export Records</Button>
          <Button variant="success"><FileBarChart size={16} /> Generate Report</Button>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card sm:grid-cols-4">
        <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 sm:col-span-1">
          <Search size={15} className="text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects..." className="w-full text-sm focus:outline-none" />
        </div>
        <select value={dept} onChange={(e) => setDept(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
          <option>All Departments</option>
          {departments.map((d) => <option key={d.id}>{d.name}</option>)}
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
          <option>All Years</option>
          {years.map((y) => <option key={y}>{y}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
          <option>All Status</option><option>Completed</option><option>In Progress</option><option>Pending</option>
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between text-sm">
        <p className="font-medium text-ink-900">{filtered.length} Projects Found</p>
        <p className="text-slate-500">Total Records: {projects.length}</p>
      </div>

      <div className="space-y-4">
        {filtered.map((p) => (
          <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1.3fr_1fr_auto]">
              <div>
                <p className="font-semibold text-ink-900">{p.title}</p>
                <p className="mt-1 text-sm text-slate-500">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">{t}</span>)}
                </div>
              </div>
              <div className="text-sm text-slate-600">
                <p className="text-slate-400">Team &amp; Supervisor</p>
                <p className="font-medium text-ink-800">Leader: {p.leader}</p>
                <p>Supervisor: {p.supervisor}</p>
                <p>{p.members} members</p>
              </div>
              <div className="text-sm text-slate-600">
                <p className="text-slate-400">Academic Info</p>
                <p>{p.department}</p>
                <p>Batch: {p.batch}</p>
                <p>Duration: {p.duration}</p>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                {p.grade !== '-' && <span className="text-sm font-semibold text-ink-900">{p.grade} {p.total && `(${p.total}%)`}</span>}
                <div className="flex gap-2 pt-1">
                  <button className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"><Eye size={13} /> View</button>
                  <button className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700"><Download size={13} /> Export</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
