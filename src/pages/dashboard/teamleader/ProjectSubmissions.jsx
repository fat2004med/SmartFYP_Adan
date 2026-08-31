import React from 'react'
import { CheckCircle2, Clock3, CircleDashed, PauseCircle, Download, Upload, MessageSquareText } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, Card } from '../../../components/ui.jsx'

const STATUS_ICON = {
  Submitted: CheckCircle2,
  'Under Review': Clock3,
  Pending: CircleDashed,
  'Not Started': PauseCircle,
}

export default function ProjectSubmissions() {
  const { submissions } = useData()
  const completed = submissions.filter((s) => s.status === 'Submitted').length
  const underReview = submissions.filter((s) => s.status === 'Under Review').length
  const pending = submissions.filter((s) => s.status === 'Pending').length
  const notStarted = submissions.filter((s) => s.status === 'Not Started').length

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-ink-900">Project Submissions</h2>
        <p className="text-sm text-slate-500">Project: Smart Campus Management System</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card><p className="text-2xl font-bold text-emerald-600">{completed}</p><p className="text-sm text-slate-500">Completed</p></Card>
        <Card><p className="text-2xl font-bold text-amber-600">{underReview}</p><p className="text-sm text-slate-500">Under Review</p></Card>
        <Card><p className="text-2xl font-bold text-slate-500">{pending}</p><p className="text-sm text-slate-500">Pending</p></Card>
        <Card><p className="text-2xl font-bold text-slate-400">{notStarted}</p><p className="text-sm text-slate-500">Not Started</p></Card>
      </div>

      <Card title="Submission Requirements">
        <p className="-mt-3 mb-4 text-sm text-slate-500">Track and manage all project submission deadlines</p>
        <div className="space-y-3">
          {submissions.map((s) => {
            const Icon = STATUS_ICON[s.status]
            return (
              <div key={s.id} className="flex flex-col gap-3 rounded-lg border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-slate-400" />
                  <div>
                    <p className="font-medium text-ink-900">{s.title}</p>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Start: {s.start} &middot; Due: {s.due}{s.submitted ? ` · Submitted: ${s.submitted}` : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <Badge tone={statusTone(s.status)}>{s.status}</Badge>
                  <span className="text-sm font-medium text-ink-800">{s.grade}</span>
                  <div className="flex gap-2 text-slate-400">
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Download size={15} /></button>
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><Upload size={15} /></button>
                    <button className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600"><MessageSquareText size={15} /></button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <Card title="Recent Submission Activity">
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2 text-ink-800"><CheckCircle2 size={15} className="text-emerald-500" /> Literature Review submitted successfully <span className="ml-auto text-xs text-slate-400">2 days ago</span></p>
          <p className="flex items-center gap-2 text-ink-800"><MessageSquareText size={15} className="text-amber-500" /> Feedback received for Project Proposal <span className="ml-auto text-xs text-slate-400">3 days ago</span></p>
          <p className="flex items-center gap-2 text-ink-800"><Upload size={15} className="text-brand-500" /> Project Proposal submitted for review <span className="ml-auto text-xs text-slate-400">1 week ago</span></p>
        </div>
      </Card>
    </div>
  )
}
