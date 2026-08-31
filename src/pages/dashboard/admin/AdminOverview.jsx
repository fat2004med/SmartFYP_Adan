import React from 'react'
import { Building2, FolderKanban, Users2, Users } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { StatCard, Badge, statusTone, Card } from '../../../components/ui.jsx'

export default function AdminOverview() {
  const { stats, projects, departments } = useData()
  const recent = projects.slice(0, 4)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Building2} label="Total Departments" value={stats.admin.departments} tone="blue" />
        <StatCard icon={FolderKanban} label="Total Projects" value={stats.admin.projects} tone="green" />
        <StatCard icon={Users2} label="Active Teams" value={stats.admin.teams} tone="purple" />
        <StatCard icon={Users} label="Total Users" value={stats.admin.users} tone="orange" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Recent Projects">
          <div className="space-y-4">
            {recent.map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink-900">{p.title}</p>
                  <p className="text-xs text-slate-500">{p.department.split('&')[0].trim()} &middot; {p.team}</p>
                </div>
                <Badge tone={statusTone(p.status)}>{p.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Department Overview">
          <div className="space-y-4">
            {departments.map((d) => (
              <div key={d.id} className="flex items-center justify-between">
                <p className="text-sm font-medium text-ink-900">{d.name}</p>
                <p className="text-sm text-slate-500">{d.projects} projects &middot; {d.supervisors} supervisors</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
