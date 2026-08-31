import React from 'react'
import { useData } from '../../../context/DataContext.jsx'
import { ProgressBar, Card } from '../../../components/ui.jsx'

export default function ProgressUpdates() {
  const { milestones } = useData()
  const done = milestones.filter((m) => m.done).length
  const overall = Math.round((done / milestones.length) * 100)

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-ink-900">Progress Updates</h2>

      <Card>
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-ink-900">Overall Project Completion</span>
          <span className="font-semibold text-ink-900">{overall}%</span>
        </div>
        <ProgressBar value={overall} />
      </Card>

      <Card title="Milestones">
        <div className="space-y-4">
          {milestones.map((m) => (
            <div key={m.id} className="flex items-center gap-4">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${m.done ? 'bg-emerald-100 text-emerald-600' : 'border-2 border-slate-300 text-transparent'}`}>
                {m.done && '✓'}
              </span>
              <div className="flex-1">
                <p className={`text-sm font-medium ${m.done ? 'text-ink-900' : 'text-slate-500'}`}>{m.title}</p>
              </div>
              <p className="text-xs text-slate-400">
                {m.done ? `Completed: ${m.completed}` : `Due: ${m.due}`}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
