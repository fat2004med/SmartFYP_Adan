import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const events = {
  5: [{ title: 'Team Alpha Review', color: 'bg-brand-500' }],
  12: [{ title: 'Supervisor Meeting', color: 'bg-purple-500' }],
  18: [{ title: 'Proposal Deadline', color: 'bg-rose-500' }],
  24: [{ title: 'Progress Check-in', color: 'bg-emerald-500' }],
}

export default function CalendarPage() {
  const [monthOffset, setMonthOffset] = useState(0)
  const today = new Date()
  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const monthName = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
  const startDay = viewDate.getDay()
  const cells = [...Array(startDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-ink-900">Calendar</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => setMonthOffset((m) => m - 1)} className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50"><ChevronLeft size={16} /></button>
          <span className="w-40 text-center text-sm font-medium text-ink-900">{monthName}</span>
          <button onClick={() => setMonthOffset((m) => m + 1)} className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase text-slate-400">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d} className="py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {cells.map((day, i) => (
            <div key={i} className={`min-h-20 rounded-lg border p-2 text-xs ${day ? 'border-slate-100' : 'border-transparent'}`}>
              {day && (
                <>
                  <p className="mb-1 font-medium text-ink-800">{day}</p>
                  {(events[day] || []).map((e) => (
                    <p key={e.title} className={`mb-1 truncate rounded px-1.5 py-0.5 text-[10px] font-medium text-white ${e.color}`}>{e.title}</p>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
