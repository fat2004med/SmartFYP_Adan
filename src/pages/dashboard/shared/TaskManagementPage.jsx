import React, { useState } from 'react'
import { Plus, Eye, UploadCloud, X } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { useAuth } from '../../../context/AuthContext.jsx'
import { Badge, statusTone, ProgressBar, Button, Input, Select, Textarea } from '../../../components/ui.jsx'

export default function TaskManagementPage() {
  const { tasks, updateTaskStatus } = useData()
  const { user } = useAuth()
  const isLeader = user.role === 'Team Leader'
  const [statusFilter, setStatusFilter] = useState('All Tasks')
  const [priorityFilter, setPriorityFilter] = useState('All Priorities')
  const [showForm, setShowForm] = useState(false)

  const filtered = tasks.filter(
    (t) => (statusFilter === 'All Tasks' || t.status === statusFilter) && (priorityFilter === 'All Priorities' || t.priority === priorityFilter)
  )

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-ink-900">{isLeader ? 'Task Management' : 'Project Tasks'}</h2>
        <div className="flex flex-wrap gap-3">
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
            <option>All Tasks</option><option>In Progress</option><option>Pending</option><option>Completed</option>
          </select>
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none">
            <option>All Priorities</option><option>High</option><option>Medium</option><option>Low</option>
          </select>
          {isLeader && <Button onClick={() => setShowForm(true)}><Plus size={16} /> Assign Task</Button>}
        </div>
      </div>

      {showForm && <AssignTaskForm onClose={() => setShowForm(false)} />}

      <div className="space-y-4">
        {filtered.map((t) => (
          <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-ink-900">{t.title}</h3>
                <p className="text-sm text-slate-500">{t.desc}</p>
                <p className="mt-1 text-xs text-slate-400">Assigned by: {t.assignedBy} &middot; Due: {t.due}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge tone={statusTone(t.priority)}>{t.priority}</Badge>
                <Badge tone={statusTone(t.status)}>{t.status}</Badge>
              </div>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-500">Progress</span>
                <span className="font-medium text-ink-800">{t.progress}%</span>
              </div>
              <ProgressBar value={t.progress} />
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-ink-700 hover:bg-slate-50">
                <Eye size={13} /> View Details
              </button>
              {!isLeader && t.status !== 'Completed' && (
                <button
                  onClick={() => updateTaskStatus(t.id, 'Completed')}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-ink-700 hover:bg-slate-50"
                >
                  <UploadCloud size={13} /> Submit Work
                </button>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center text-slate-400">No tasks match these filters.</div>
        )}
      </div>
    </div>
  )
}

function AssignTaskForm({ onClose }) {
  const [form, setForm] = useState({ title: '', desc: '', assignee: '', due: '', priority: 'Medium' })
  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }
  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-ink-900">Assign New Task</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Task Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <Textarea label="Description" rows={2} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Input label="Assign To" placeholder="Team member name" value={form.assignee} onChange={(e) => setForm({ ...form, assignee: e.target.value })} />
          <Input label="Due Date" type="date" value={form.due} onChange={(e) => setForm({ ...form, due: e.target.value })} />
          <Select label="Priority" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
            <option>High</option><option>Medium</option><option>Low</option>
          </Select>
        </div>
        <div className="flex gap-3">
          <Button type="submit">Assign Task</Button>
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}
