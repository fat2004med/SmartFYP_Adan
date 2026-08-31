import React, { useRef, useState } from 'react'
import { UploadCloud, FileText, X, CheckCircle2 } from 'lucide-react'
import { Button, Select } from '../../../components/ui.jsx'

export default function FileUploadPage() {
  const inputRef = useRef(null)
  const [files, setFiles] = useState([])
  const [dragOver, setDragOver] = useState(false)

  const addFiles = (list) => {
    const arr = Array.from(list).map((f) => ({ name: f.name, size: (f.size / 1024).toFixed(1) + ' KB' }))
    setFiles((prev) => [...prev, ...arr])
  }

  const removeFile = (name) => setFiles((prev) => prev.filter((f) => f.name !== name))

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-ink-900">File Upload</h2>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
        <Select label="Document Type" className="mb-5">
          <option>Project Proposal</option>
          <option>Literature Review</option>
          <option>System Design Document</option>
          <option>Implementation Report</option>
          <option>Final Report</option>
        </Select>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files) }}
          onClick={() => inputRef.current.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed py-14 text-center transition-colors ${
            dragOver ? 'border-brand-500 bg-brand-50' : 'border-slate-300 hover:border-brand-400'
          }`}
        >
          <UploadCloud size={36} className="mb-3 text-brand-500" />
          <p className="font-medium text-ink-800">Drag and drop your file here, or click to browse</p>
          <p className="mt-1 text-sm text-slate-500">PDF, DOC, DOCX, ZIP up to 40 MB</p>
          <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
        </div>

        {files.length > 0 && (
          <div className="mt-5 space-y-2">
            {files.map((f) => (
              <div key={f.name} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-brand-600" />
                  <div>
                    <p className="text-sm font-medium text-ink-900">{f.name}</p>
                    <p className="text-xs text-slate-500">{f.size}</p>
                  </div>
                </div>
                <button onClick={() => removeFile(f.name)} className="text-slate-400 hover:text-rose-500"><X size={16} /></button>
              </div>
            ))}
          </div>
        )}

        <Button className="mt-6" disabled={files.length === 0}>
          <CheckCircle2 size={16} /> Submit Files
        </Button>
      </div>
    </div>
  )
}
