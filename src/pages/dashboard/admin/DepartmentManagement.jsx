import React, { useState } from 'react'
import { Plus, Pencil, Trash2, X, Building2 } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Button, Input } from '../../../components/ui.jsx'

export default function DepartmentManagement() {
  const { departments } = useData()
  const [list, setList] = useState(departments)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', hod: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setList((prev) => [...prev, { id: `d${prev.length + 1}`, projects: 0, supervisors: 0, students: 0, ...form }])
    setForm({ name: '', hod: '' })
    setShowForm(false)
  }

  const remove = (id) => setList((prev) => prev.filter((d) => d.id !== id))

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">Department Management</h2>
        <Button onClick={() => setShowForm(true)}><Plus size={16} /> Add Department</Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-panel">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink-900">Add Department</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input label="Department Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input label="Head of Department" required value={form.hod} onChange={(e) => setForm({ ...form, hod: e.target.value })} />
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)} className="flex-1">Cancel</Button>
                <Button type="submit" className="flex-1">Add Department</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">Department</th>
              <th className="px-5 py-3 font-medium">HOD</th>
              <th className="px-5 py-3 font-medium">Projects</th>
              <th className="px-5 py-3 font-medium">Supervisors</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {list.map((d) => (
              <tr key={d.id}>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Building2 size={16} />
                    </span>
                    <span className="font-medium text-ink-900">{d.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-slate-600">{d.hod}</td>
                <td className="px-5 py-3.5 text-slate-600">{d.projects}</td>
                <td className="px-5 py-3.5 text-slate-600">{d.supervisors}</td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-1 text-slate-400">
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Pencil size={15} /></button>
                    <button onClick={() => remove(d.id)} className="rounded p-1.5 hover:bg-rose-50 hover:text-rose-600"><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
