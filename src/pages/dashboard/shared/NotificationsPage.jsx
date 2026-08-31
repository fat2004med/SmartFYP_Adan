import React, { useState } from 'react'
import { FileText, Clock, Calendar, CheckCircle2, CheckCircle, CheckCheck } from 'lucide-react'
import { useData } from '../../../context/DataContext.jsx'
import { Badge, statusTone, Button } from '../../../components/ui.jsx'

const ICONS = { FileText, Clock, Calendar, CheckCircle2, CheckCircle }
const TABS = ['All', 'Unread', 'Projects', 'Deadlines', 'Meetings']

export default function NotificationsPage() {
  const { notifications, markAllNotificationsRead, markNotificationRead } = useData()
  const [tab, setTab] = useState('All')

  const filtered = notifications.filter((n) => {
    if (tab === 'All') return true
    if (tab === 'Unread') return !n.read
    if (tab === 'Projects') return n.type === 'project'
    if (tab === 'Deadlines') return n.type === 'deadline'
    if (tab === 'Meetings') return n.type === 'meeting'
    return true
  })

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">Notifications</h2>
        <Button variant="ghost" onClick={markAllNotificationsRead}>
          <CheckCheck size={16} /> Mark All as Read
        </Button>
      </div>

      <div className="mb-5 flex gap-1 overflow-x-auto rounded-lg bg-slate-100 p-1">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === t ? 'bg-white text-ink-900 shadow-sm' : 'text-slate-500 hover:text-ink-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((n) => {
          const Icon = ICONS[n.icon] || FileText
          return (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`flex cursor-pointer items-start gap-4 rounded-xl border-l-4 bg-white p-4 shadow-card ${
                n.read ? 'border-l-slate-200' : 'border-l-brand-500'
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Icon size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-ink-900">{n.title}</p>
                  <Badge tone={statusTone(n.priority)}>{n.priority}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500">{n.desc}</p>
                <p className="mt-2 text-xs text-slate-400">{n.time}</p>
              </div>
              {!n.read && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />}
            </div>
          )
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center text-slate-400">
            No notifications here.
          </div>
        )}
      </div>
    </div>
  )
}
