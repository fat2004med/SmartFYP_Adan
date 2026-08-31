import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { useAuth, DEMO_ACCOUNTS } from '../../context/AuthContext.jsx'
import { Button, Input, Select } from '../../components/ui.jsx'

const USER_TYPES = [
  { value: 'teammember', label: 'Team Member' },
  { value: 'teamleader', label: 'Team Leader' },
  { value: 'supervisor', label: 'Supervisor' },
  { value: 'hod', label: 'HOD' },
  { value: 'admin', label: 'Admin' },
]

export default function Login() {
  const [userType, setUserType] = useState('teammember')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const result = login(userType, email || DEMO_ACCOUNTS[userType].email)
    if (result.ok) navigate(result.redirectTo)
    else setError(result.error)
  }

  const fillDemo = () => setEmail(DEMO_ACCOUNTS[userType].email)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-panel">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
            <GraduationCap size={24} />
          </span>
          <h1 className="mt-4 text-xl font-bold text-ink-900">Project Management System</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to your account</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <Select label="User Type" value={userType} onChange={(e) => setUserType(e.target.value)}>
            {USER_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </Select>

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <Button type="submit" className="w-full">Sign In</Button>

          <button
            type="button"
            onClick={fillDemo}
            className="w-full text-center text-xs font-medium text-brand-600 hover:text-brand-700"
          >
            Use demo credentials for {USER_TYPES.find((t) => t.value === userType).label}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account? <Link to="/contact" className="font-medium text-brand-600 hover:text-brand-700">Contact Admin</Link>
        </p>
        <p className="mt-2 text-center text-xs text-slate-400">
          Demo mode — any password works. Select a role and sign in to preview that dashboard.
        </p>
      </div>
    </div>
  )
}
