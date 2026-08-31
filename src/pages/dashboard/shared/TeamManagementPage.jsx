import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, ProgressBar, Button, Input, Select } from '../../../components/ui.jsx'

const availableMembers = ['Emma Wilson', 'John Doe', 'Alice Smith', 'Tom Johnson', 'Sarah Lee', 'David Kim']
const availableSupervisors = ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Robert Smith', 'Dr. Emily Davis']
const availableLeaders = ['Mike Chen', 'Lisa Wang', 'Ryan Cooper', 'Kevin Liu']

export default function TeamManagementPage() {
  const { teams, addTeam } = useData()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', project: '', supervisor: '', leader: '', members: [] })

  const toggleMember = (m) =>
    setForm((f) => ({
      ...f,
      members: f.members.includes(m) ? f.members.filter((x) => x !== m) : [...f.members, m],
    }))

  const handleSubmit = (e) => {
    e.preventDefault()
    addTeam(form)
    setForm({ name: '', project: '', supervisor: '', leader: '', members: [] })
    setShowForm(false)
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">Team Management</h2>
        <Button onClick={() => setShowForm(true)}><Plus size={16} /> Create Team</Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-panel">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink-900">Create New Team</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input label="Team Name" required placeholder="Enter team name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input label="Project Title" required placeholder="Enter project title" value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} />
              <Select label="Supervisor" required value={form.supervisor} onChange={(e) => setForm({ ...form, supervisor: e.target.value })}>
                <option value="">Select Supervisor</option>
                {availableSupervisors.map((s) => <option key={s}>{s}</option>)}
              </Select>
              <Select label="Team Leader" required value={form.leader} onChange={(e) => setForm({ ...form, leader: e.target.value })}>
                <option value="">Select Team Leader</option>
                {availableLeaders.map((l) => <option key={l}>{l}</option>)}
              </Select>
              <div>
                <span className="mb-1.5 block text-sm font-medium text-ink-800">Team Members</span>
                <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 p-3">
                  {availableMembers.map((m) => (
                    <label key={m} className="flex items-center gap-2 text-sm text-ink-700">
                      <input type="checkbox" checked={form.members.includes(m)} onChange={() => toggleMember(m)} className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)} className="flex-1">Cancel</Button>
                <Button type="submit" className="flex-1">Create Team</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {teams.map((t) => (
          <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink-900">{t.name}</h3>
              <Badge tone="green">{t.status}</Badge>
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              <p className="text-slate-500">Project</p>
              <p className="font-medium text-ink-800">{t.project}</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-500">Supervisor</p>
                <p className="font-medium text-ink-800">{t.supervisor}</p>
              </div>
              <div>
                <p className="text-slate-500">Team Leader</p>
                <p className="font-medium text-ink-800">{t.leader}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-1.5 text-sm text-slate-500">Members ({t.members.length})</p>
              <div className="flex flex-wrap gap-1.5">
                {t.members.map((m) => (
                  <span key={m} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{m}</span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-slate-500">Progress</span>
                <span className="font-medium text-ink-800">{t.progress}%</span>
              </div>
              <ProgressBar value={t.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
