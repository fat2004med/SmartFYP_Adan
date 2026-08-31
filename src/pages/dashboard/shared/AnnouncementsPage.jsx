import React, { useState } from 'react'
import { Plus, Paperclip, Trash2, Pause, Pencil, X } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { useAuth } from '../../../context/AuthContext.jsx'
import { Badge, statusTone, Button, Input, Select, Textarea } from '../../../components/ui.jsx'

export default function AnnouncementsPage() {
  const { announcements, addAnnouncement, removeAnnouncement } = useData()
  const { user } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [typeFilter, setTypeFilter] = useState('All Types')
  const [priorityFilter, setPriorityFilter] = useState('All Priorities')
  const [form, setForm] = useState({ title: '', type: 'Academic', priority: 'Medium', body: '', expires: '', audience: 'All Students' })

  const canCreate = ['Admin', 'HOD', 'Supervisor', 'Team Leader'].includes(user.role)

  const filtered = announcements.filter(
    (a) => (typeFilter === 'All Types' || a.type === typeFilter) && (priorityFilter === 'All Priorities' || a.priority === priorityFilter)
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    addAnnouncement({ ...form, by: user.name, posted: new Date().toLocaleDateString() })
    setForm({ title: '', type: 'Academic', priority: 'Medium', body: '', expires: '', audience: 'All Students' })
    setShowForm(false)
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-ink-900">Announcements</h2>
          <p className="text-sm text-slate-500">{announcements.length} active announcements</p>
        </div>
        {canCreate && (
          <Button onClick={() => setShowForm(true)}>
            <Plus size={16} /> Create Announcement
          </Button>
        )}
      </div>

      {showForm && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-ink-900">New Announcement</h3>
            <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input label="Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Announcement title" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select label="Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option>Academic</option><option>Event</option><option>Deadline</option><option>General</option>
              </Select>
              <Select label="Priority" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
                <option>High</option><option>Medium</option><option>Low</option>
              </Select>
              <Input label="Expires On" type="date" value={form.expires} onChange={(e) => setForm({ ...form, expires: e.target.value })} />
            </div>
            <Textarea label="Message" rows={3} required value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} placeholder="Write the announcement details..." />
            <Input label="Audience" value={form.audience} onChange={(e) => setForm({ ...form, audience: e.target.value })} placeholder="e.g. All Students, Supervisors" />
            <div className="flex gap-3">
              <Button type="submit">Publish Announcement</Button>
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Select label="Filter by Type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option>All Types</option><option>Academic</option><option>Event</option><option>Deadline</option><option>General</option>
        </Select>
        <Select label="Filter by Priority" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
          <option>All Priorities</option><option>High</option><option>Medium</option><option>Low</option>
        </Select>
      </div>

      <div className="space-y-4">
        {filtered.map((a) => (
          <div key={a.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-ink-900">{a.title}</h3>
                  <Badge tone="indigo">{a.type}</Badge>
                  <Badge tone={statusTone(a.priority)}>{a.priority}</Badge>
                  <Badge tone="green">{a.status}</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
                {a.attachments?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {a.attachments.map((f) => (
                      <span key={f} className="flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                        <Paperclip size={11} /> {f}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-3 text-xs text-slate-400">
                  {a.by} &middot; Posted {a.posted} &middot; Expires {a.expires} &middot; {a.audience}
                </p>
              </div>
              {canCreate && (
                <div className="flex shrink-0 gap-1 text-slate-400">
                  <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Pause size={15} /></button>
                  <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Pencil size={15} /></button>
                  <button onClick={() => removeAnnouncement(a.id)} className="rounded p-1.5 hover:bg-rose-50 hover:text-rose-600"><Trash2 size={15} /></button>
                </div>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center text-slate-400">
            No announcements match these filters.
          </div>
        )}
      </div>
    </div>
  )
}
