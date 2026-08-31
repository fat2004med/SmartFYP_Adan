import React, { useState } from 'react'
import { Send, Search } from 'lucide-react'
import { Avatar } from '../../../components/ui.jsx'

const threads = [
  { id: 'th1', name: 'Dr. Sarah Johnson', initials: 'SJ', last: 'Please revise section 3 of your literature review.', time: '10:24 AM', unread: 2 },
  { id: 'th2', name: 'Team Alpha Group', initials: 'TA', last: 'John: Uploaded the updated design doc.', time: 'Yesterday', unread: 0 },
  { id: 'th3', name: 'Prof. Michael Chen', initials: 'MC', last: 'Good progress on the prototype!', time: 'Mon', unread: 0 },
]

const seedMessages = [
  { id: 1, from: 'them', text: 'Hi! How is the literature review coming along?', time: '10:02 AM' },
  { id: 2, from: 'me', text: 'Almost done — I should have it ready by tomorrow.', time: '10:10 AM' },
  { id: 3, from: 'them', text: 'Please revise section 3, it needs more recent citations.', time: '10:24 AM' },
]

export default function MessagesPage() {
  const [activeId, setActiveId] = useState(threads[0].id)
  const [messages, setMessages] = useState(seedMessages)
  const [draft, setDraft] = useState('')
  const active = threads.find((t) => t.id === activeId)

  const send = (e) => {
    e.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { id: prev.length + 1, from: 'me', text: draft, time: 'Now' }])
    setDraft('')
  }

  return (
    <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card md:grid-cols-3" style={{ height: '70vh' }}>
      <div className="flex flex-col border-r border-slate-200 md:col-span-1">
        <div className="flex items-center gap-2 border-b border-slate-100 p-4">
          <Search size={16} className="text-slate-400" />
          <input placeholder="Search conversations" className="w-full text-sm focus:outline-none" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {threads.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`flex w-full items-center gap-3 border-b border-slate-50 p-4 text-left hover:bg-slate-50 ${
                activeId === t.id ? 'bg-brand-50' : ''
              }`}
            >
              <Avatar initials={t.initials} size={38} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-ink-900">{t.name}</p>
                  <span className="shrink-0 text-xs text-slate-400">{t.time}</span>
                </div>
                <p className="truncate text-xs text-slate-500">{t.last}</p>
              </div>
              {t.unread > 0 && (
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                  {t.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:col-span-2">
        <div className="flex items-center gap-3 border-b border-slate-100 p-4">
          <Avatar initials={active.initials} size={36} />
          <p className="font-medium text-ink-900">{active.name}</p>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm ${
                  m.from === 'me' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-900'
                }`}
              >
                {m.text}
                <p className={`mt-1 text-[10px] ${m.from === 'me' ? 'text-brand-100' : 'text-slate-400'}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={send} className="flex items-center gap-2 border-t border-slate-100 p-3">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
          <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white hover:bg-brand-700">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
