import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { useData } from '../../../context/DataContext.jsx'
import { ProgressBar, Card } from '../../../components/ui.jsx'

export default function TeamMemberPortal() {
  const { milestones, skillsDevelopment, weeklyActivity } = useData()
  const done = milestones.filter((m) => m.done).length
  const overall = Math.round((done / milestones.length) * 100)
  const totalHours = weeklyActivity.reduce((a, w) => a + w.hours, 0)
  const totalTasks = weeklyActivity.reduce((a, w) => a + w.tasks, 0)

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-ink-900">Progress Tracking</h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card>
          <p className="mb-3 text-sm font-medium text-slate-500">Overall Progress</p>
          <div className="flex items-center gap-4">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full" style={{ background: `conic-gradient(#4f46e5 ${overall * 3.6}deg, #e2e8f0 0deg)` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-sm font-bold text-ink-900">{overall}%</div>
            </div>
            <p className="text-sm text-slate-500">Project Completion</p>
          </div>
        </Card>
        <Card>
          <p className="mb-3 text-sm font-medium text-slate-500">Milestones</p>
          <p className="text-3xl font-bold text-ink-900">{done}/{milestones.length}</p>
          <p className="text-sm text-slate-500">Completed</p>
        </Card>
        <Card>
          <p className="mb-3 text-sm font-medium text-slate-500">This Week</p>
          <div className="space-y-1 text-sm">
            <p className="flex justify-between"><span className="text-slate-500">Hours Worked</span><span className="font-medium text-ink-900">16</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Tasks Completed</span><span className="font-medium text-ink-900">4</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Submissions</span><span className="font-medium text-ink-900">2</span></p>
          </div>
        </Card>
      </div>

      <Card title="Project Milestones">
        <div className="space-y-4">
          {milestones.map((m) => (
            <div key={m.id} className="flex items-center gap-4">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${m.done ? 'bg-emerald-100 text-emerald-600' : 'border-2 border-slate-300 text-transparent'}`}>
                {m.done && '✓'}
              </span>
              <p className={`flex-1 text-sm font-medium ${m.done ? 'text-ink-900' : 'text-slate-500'}`}>{m.title}</p>
              <p className="text-xs text-slate-400">{m.done ? `Due: ${m.due} (Completed: ${m.completed})` : `Due: ${m.due}`}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Skills Development">
        <div className="space-y-4">
          {skillsDevelopment.map((s) => (
            <div key={s.skill}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-ink-800">{s.skill}</span>
                <span className="font-medium text-ink-900">{s.value}%</span>
              </div>
              <ProgressBar value={s.value} color="bg-indigo-600" />
            </div>
          ))}
        </div>
      </Card>

      <Card title="Weekly Activity">
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <BarChart data={weeklyActivity}>
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#f1f5f9' }} />
              <Bar dataKey="hours" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
