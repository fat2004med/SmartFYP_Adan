import React from 'react'
import { FileText, Download, Video, Link2 } from 'lucide-react'
import { Card } from '../../../components/ui.jsx'

const resources = [
  { icon: FileText, title: 'Project Documentation Template', type: 'DOCX', size: '245 KB' },
  { icon: FileText, title: 'FYP Guidelines Handbook', type: 'PDF', size: '1.2 MB' },
  { icon: Video, title: 'Literature Review Best Practices', type: 'Video', size: '18 min' },
  { icon: FileText, title: 'Citation Style Guide (IEEE)', type: 'PDF', size: '340 KB' },
  { icon: Link2, title: 'IEEE Xplore Digital Library', type: 'Link', size: '' },
  { icon: FileText, title: 'Final Presentation Template', type: 'PPTX', size: '2.1 MB' },
]

export default function ResourcesPage() {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-ink-900">Resources</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Card key={r.title}>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <r.icon size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink-900">{r.title}</p>
                <p className="text-xs text-slate-500">{r.type}{r.size && ` · ${r.size}`}</p>
              </div>
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-300 py-2 text-sm font-medium text-ink-700 hover:bg-slate-50">
              <Download size={14} /> {r.type === 'Link' ? 'Open Link' : 'Download'}
            </button>
          </Card>
        ))}
      </div>
    </div>
  )
}
