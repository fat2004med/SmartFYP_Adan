import React from 'react'
import { Users2, GraduationCap, FolderKanban, ClipboardCheck } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { StatCard, Badge, statusTone, Card, ProgressBar } from '../../../components/ui.jsx'

export default function SupervisorDashboard() {
  const { stats, teamPerformance, upcomingDeadlines } = useData()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Users2} label="Active Teams" value={stats.supervisor.activeTeams} tone="purple" />
        <StatCard icon={GraduationCap} label="Total Students" value={stats.supervisor.totalStudents} tone="blue" />
        <StatCard icon={FolderKanban} label="Projects" value={stats.supervisor.projects} tone="green" />
        <StatCard icon={ClipboardCheck} label="Pending Reviews" value={stats.supervisor.pendingReviews} tone="orange" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Team Performance">
          <div className="space-y-5">
            {teamPerformance.map((t) => (
              <div key={t.name}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-ink-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.project}</p>
                  </div>
                  <Badge tone={statusTone(t.status)}>{t.status}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Leader: {t.leader} &middot; {t.members} members</p>
                <div className="mt-2">
                  <ProgressBar value={t.progress} />
                </div>
                <p className="mt-1 text-xs text-slate-400">Last update: {t.updated}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Upcoming Deadlines">
          <div className="space-y-4">
            {upcomingDeadlines.map((d) => (
              <div key={d.title} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink-900">{d.title}</p>
                  <p className="text-xs text-slate-500">Due: {d.due}</p>
                </div>
                <Badge tone={d.daysLeft <= 7 ? 'red' : 'amber'}>{d.daysLeft} days left</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
