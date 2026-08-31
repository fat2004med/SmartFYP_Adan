import React from 'react'
import { UserCog, FolderKanban, Users2, GraduationCap } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { StatCard, Card } from '../../../components/ui.jsx'

export default function HodOverview() {
  const { stats, supervisorPerformance, recentActivities } = useData()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={UserCog} label="Total Supervisors" value={stats.hod.supervisors} tone="green" />
        <StatCard icon={FolderKanban} label="Active Projects" value={stats.hod.activeProjects} tone="blue" />
        <StatCard icon={Users2} label="Teams" value={stats.hod.teams} tone="purple" />
        <StatCard icon={GraduationCap} label="Students" value={stats.hod.students} tone="orange" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Supervisor Performance">
          <div className="space-y-4">
            {supervisorPerformance.map((s) => (
              <div key={s.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink-900">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.specialty}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-medium text-ink-800">{s.projects} Projects</p>
                  <p className="text-xs text-slate-500">{s.teams} Teams</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Recent Activities">
          <div className="space-y-4">
            {recentActivities.map((a, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <div>
                  <p className="text-sm text-ink-800">{a.text}</p>
                  <p className="text-xs text-slate-400">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
