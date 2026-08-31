import React from 'react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, ProgressBar, Card } from '../../../components/ui.jsx'

export default function ProjectMonitoring() {
  const { teamPerformance } = useData()

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-ink-900">Project Monitoring</h2>
      <div className="space-y-5">
        {teamPerformance.map((t) => (
          <Card key={t.name}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-ink-900">{t.project}</h3>
                <p className="text-sm text-slate-500">{t.name} &middot; Leader: {t.leader}</p>
              </div>
              <Badge tone={statusTone(t.status)}>{t.status}</Badge>
            </div>
            <div className="mt-4">
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-slate-500">Overall Progress</span>
                <span className="font-medium text-ink-800">{t.progress}%</span>
              </div>
              <ProgressBar value={t.progress} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-lg bg-slate-50 py-2">
                <p className="font-semibold text-ink-900">{t.members}</p>
                <p className="text-xs text-slate-500">Members</p>
              </div>
              <div className="rounded-lg bg-slate-50 py-2">
                <p className="font-semibold text-ink-900">4</p>
                <p className="text-xs text-slate-500">Milestones</p>
              </div>
              <div className="rounded-lg bg-slate-50 py-2">
                <p className="font-semibold text-ink-900">{t.updated}</p>
                <p className="text-xs text-slate-500">Last Update</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
