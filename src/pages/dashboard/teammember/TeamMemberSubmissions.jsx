import React from 'react'
import { Upload, Download, MessageSquareText, CheckCircle2, Clock3, CircleDashed, PauseCircle } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, Card } from '../../../components/ui.jsx'

const STATUS_ICON = {
  Submitted: CheckCircle2,
  'Under Review': Clock3,
  Pending: CircleDashed,
  'Not Started': PauseCircle,
}

export default function TeamMemberSubmissions() {
  const { submissions } = useData()

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-ink-900">My Submissions</h2>
      <div className="space-y-4">
        {submissions.map((s) => {
          const Icon = STATUS_ICON[s.status]
          return (
            <Card key={s.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-slate-400" />
                  <div>
                    <p className="font-medium text-ink-900">{s.title}</p>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                    <p className="mt-1 text-xs text-slate-400">Due: {s.due}{s.submitted ? ` · Submitted: ${s.submitted}` : ''}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge tone={statusTone(s.status)}>{s.status}</Badge>
                  <span className="text-sm font-medium text-ink-800">{s.grade}</span>
                  <div className="flex gap-1 text-slate-400">
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Upload size={15} /></button>
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Download size={15} /></button>
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><MessageSquareText size={15} /></button>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
