import React from 'react'
import { Mail, FolderKanban, Users2 } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Avatar, Card } from '../../../components/ui.jsx'

export default function SupervisorManagement() {
  const { supervisorPerformance } = useData()

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-ink-900">Supervisor Management</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {supervisorPerformance.map((s) => (
          <Card key={s.name}>
            <div className="flex items-center gap-3">
              <Avatar initials={s.name.split(' ').map((n) => n[0]).join('').slice(0, 2)} size={44} />
              <div>
                <p className="font-semibold text-ink-900">{s.name}</p>
                <p className="text-sm text-slate-500">{s.specialty}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="flex items-center justify-center gap-1.5 text-lg font-bold text-ink-900">
                  <FolderKanban size={16} className="text-brand-600" /> {s.projects}
                </p>
                <p className="text-xs text-slate-500">Projects</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="flex items-center justify-center gap-1.5 text-lg font-bold text-ink-900">
                  <Users2 size={16} className="text-purple-600" /> {s.teams}
                </p>
                <p className="text-xs text-slate-500">Teams</p>
              </div>
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-300 py-2 text-sm font-medium text-ink-700 hover:bg-slate-50">
              <Mail size={14} /> Send Message
            </button>
          </Card>
        ))}
      </div>
    </div>
  )
}
