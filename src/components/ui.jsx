import React from 'react'

export function Badge({ children, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-600',
    green: 'bg-emerald-100 text-emerald-700',
    blue: 'bg-blue-100 text-blue-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-rose-100 text-rose-700',
    purple: 'bg-purple-100 text-purple-700',
    indigo: 'bg-indigo-100 text-indigo-700',
  }
  return <span className={`badge ${tones[tone] || tones.slate}`}>{children}</span>
}

export function statusTone(status) {
  const map = {
    Completed: 'green',
    Active: 'green',
    active: 'green',
    'In Progress': 'amber',
    'On Track': 'blue',
    Ahead: 'purple',
    Pending: 'amber',
    'Under Review': 'amber',
    'Not Started': 'slate',
    Inactive: 'red',
    Submitted: 'green',
    high: 'red',
    medium: 'amber',
    low: 'slate',
    High: 'red',
    Medium: 'amber',
    Low: 'slate',
  }
  return map[status] || 'slate'
}

export function ProgressBar({ value, color = 'bg-brand-600' }) {
  return (
    <div className="progress-track h-2 w-full">
      <div className={`progress-fill ${color}`} style={{ width: `${value}%` }} />
    </div>
  )
}

export function StatCard({ icon: Icon, label, value, tone = 'blue' }) {
  const tones = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-emerald-50 text-emerald-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    red: 'bg-rose-50 text-rose-600',
  }
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${tones[tone]}`}>
        {Icon && <Icon size={20} strokeWidth={2} />}
      </div>
      <div>
        <p className="text-2xl font-bold text-ink-900 leading-tight">{value}</p>
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </div>
  )
}

export function Card({ children, className = '', title, action }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-card ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          {title && <h3 className="font-semibold text-ink-900">{title}</h3>}
          {action}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  )
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm',
    secondary: 'bg-white hover:bg-slate-50 text-ink-800 border border-slate-300',
    ghost: 'hover:bg-slate-100 text-slate-600',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  }
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Input({ label, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-1.5 block text-sm font-medium text-ink-800">{label}</span>}
      <input
        className={`w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 ${className}`}
        {...props}
      />
    </label>
  )
}

export function Select({ label, children, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-1.5 block text-sm font-medium text-ink-800">{label}</span>}
      <select
        className={`w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 ${className}`}
        {...props}
      >
        {children}
      </select>
    </label>
  )
}

export function Textarea({ label, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-1.5 block text-sm font-medium text-ink-800">{label}</span>}
      <textarea
        className={`w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 ${className}`}
        {...props}
      />
    </label>
  )
}

export function Avatar({ initials, size = 36, tone = 'bg-brand-600' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${tone} font-semibold text-white shrink-0`}
      style={{ width: size, height: size, fontSize: size / 2.6 }}
    >
      {initials}
    </div>
  )
}

export function EmptyState({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {Icon && <Icon size={40} className="mb-3 text-slate-300" />}
      <p className="font-medium text-ink-800">{title}</p>
      {desc && <p className="mt-1 max-w-sm text-sm text-slate-500">{desc}</p>}
    </div>
  )
}
