import React, { useState } from 'react'
import { Plus, Pencil, Trash2, X } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, Button, Input, Select, Avatar } from '../../../components/ui.jsx'

const ROLE_TABS = ['All Users', 'HODs', 'Supervisors', 'Team Leaders', 'Team Members']

export default function UserManagement() {
  const { users, addUser, removeUser } = useData()
  const [tab, setTab] = useState('All Users')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', role: 'Team Member', department: 'Computer Science', status: 'Active' })

  const roleMap = { 'HODs': 'HOD', 'Supervisors': 'Supervisor', 'Team Leaders': 'Team Leader', 'Team Members': 'Team Member' }
  const filtered = tab === 'All Users' ? users : users.filter((u) => u.role === roleMap[tab])

  const handleSubmit = (e) => {
    e.preventDefault()
    const initials = form.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 3)
    addUser({ ...form, initials })
    setForm({ name: '', email: '', role: 'Team Member', department: 'Computer Science', status: 'Active' })
    setShowForm(false)
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">User Management</h2>
        <Button onClick={() => setShowForm(true)}><Plus size={16} /> Add User</Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-panel">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink-900">Add New User</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input label="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input label="Email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Select label="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                <option>HOD</option><option>Supervisor</option><option>Team Leader</option><option>Team Member</option>
              </Select>
              <Select label="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })}>
                <option>Computer Science</option><option>Electronics</option><option>Mechanical</option><option>Information Technology</option><option>Electrical</option>
              </Select>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)} className="flex-1">Cancel</Button>
                <Button type="submit" className="flex-1">Add User</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mb-5 flex gap-1 overflow-x-auto rounded-lg bg-slate-100 p-1">
        {ROLE_TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === t ? 'bg-white text-ink-900 shadow-sm' : 'text-slate-500 hover:text-ink-800'
            }`}
          >
            {t} {t !== 'All Users' && `(${users.filter((u) => u.role === roleMap[t]).length})`}
            {t === 'All Users' && `(${users.length})`}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Department</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((u) => (
              <tr key={u.id}>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar initials={u.initials} size={32} />
                    <div>
                      <p className="font-medium text-ink-900">{u.name}</p>
                      <p className="text-xs text-slate-500">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5"><Badge tone="indigo">{u.role}</Badge></td>
                <td className="px-5 py-3.5 text-slate-600">{u.department}</td>
                <td className="px-5 py-3.5"><Badge tone={statusTone(u.status)}>{u.status}</Badge></td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-1 text-slate-400">
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Pencil size={15} /></button>
                    <button onClick={() => removeUser(u.id)} className="rounded p-1.5 hover:bg-rose-50 hover:text-rose-600"><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div className="py-14 text-center text-slate-400">No users in this category.</div>}
      </div>
    </div>
  )
}
