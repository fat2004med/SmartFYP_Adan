import React from 'react'
import { Download } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, ProgressBar, Button, Card } from '../../../components/ui.jsx'

export default function ProjectReports() {
  const { projects, departments } = useData()
  const dept = departments[0]
  const deptProjects = projects.filter((p) => p.department.includes('Computer Science'))
  const completed = deptProjects.filter((p) => p.status === 'Completed').length
  const completionRate = deptProjects.length ? Math.round((completed / deptProjects.length) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">Project Reports &mdash; {dept.name}</h2>
        <Button variant="secondary"><Download size={16} /> Export Report</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card><p className="text-sm text-slate-500">Total Projects</p><p className="mt-1 text-2xl font-bold text-ink-900">{deptProjects.length}</p></Card>
        <Card><p className="text-sm text-slate-500">Completion Rate</p><p className="mt-1 text-2xl font-bold text-ink-900">{completionRate}%</p></Card>
        <Card><p className="text-sm text-slate-500">Avg. Grade</p><p className="mt-1 text-2xl font-bold text-ink-900">A-</p></Card>
      </div>

      <Card title="Project Status Breakdown">
        <div className="space-y-4">
          {deptProjects.map((p) => (
            <div key={p.id}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink-900">{p.title}</span>
                <Badge tone={statusTone(p.status)}>{p.status}</Badge>
              </div>
              <ProgressBar value={p.status === 'Completed' ? 100 : p.status === 'In Progress' ? 55 : 10} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
