import React, { useState } from 'react'
import { Plus, Clock, Video, Users, X } from 'lucide-react'
import { Button, Input, Select, Card } from '../../../components/ui.jsx'

const seedMeetings = [
  { id: 'mt1', title: 'Monthly Supervisor Meeting', date: '2024-06-03', time: '10:00 AM', with: 'All Supervisors', type: 'Recurring' },
  { id: 'mt2', title: 'Team Alpha Progress Review', date: '2024-05-22', time: '2:00 PM', with: 'Team Alpha', type: 'One-on-one' },
  { id: 'mt3', title: 'Final Presentation Briefing', date: '2024-06-10', time: '11:30 AM', with: 'All Team Leaders', type: 'Briefing' },
]

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState(seedMeetings)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', date: '', time: '', with: '', type: 'One-on-one' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setMeetings((prev) => [...prev, { id: `mt${prev.length + 1}`, ...form }])
    setForm({ title: '', date: '', time: '', with: '', type: 'One-on-one' })
    setShowForm(false)
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">Meetings</h2>
        <Button onClick={() => setShowForm(true)}><Plus size={16} /> Schedule Meeting</Button>
      </div>

      {showForm && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-ink-900">Schedule New Meeting</h3>
            <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input label="Meeting Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="Date" type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              <Input label="Time" type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            </div>
            <Input label="With" placeholder="e.g. Team Alpha, All Supervisors" value={form.with} onChange={(e) => setForm({ ...form, with: e.target.value })} />
            <Select label="Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option>One-on-one</option><option>Team Review</option><option>Briefing</option><option>Recurring</option>
            </Select>
            <div className="flex gap-3">
              <Button type="submit">Schedule</Button>
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {meetings.map((m) => (
          <Card key={m.id}>
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Video size={18} />
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">{m.type}</span>
            </div>
            <h3 className="mt-3 font-semibold text-ink-900">{m.title}</h3>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <Clock size={14} /> {m.date} at {m.time}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
              <Users size={14} /> {m.with}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
