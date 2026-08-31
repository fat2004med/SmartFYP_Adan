import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

// Demo accounts — one per role, matching the documented dashboards.
export const DEMO_ACCOUNTS = {
  admin: {
    id: 'u-admin',
    name: 'Prof. Mohtashim',
    email: 'admin@smartfyp.edu',
    role: 'Admin',
    department: 'Administration',
    initials: 'PM',
  },
  hod: {
    id: 'u-hod',
    name: 'Dr. Michael Smith',
    email: 'hod.cs@smartfyp.edu',
    role: 'HOD',
    department: 'Computer Science',
    initials: 'MS',
  },
  supervisor: {
    id: 'u-supervisor',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@smartfyp.edu',
    role: 'Supervisor',
    department: 'Computer Science',
    initials: 'SJ',
  },
  teamleader: {
    id: 'u-teamleader',
    name: 'John Smith',
    email: 'john.smith@student.smartfyp.edu',
    role: 'Team Leader',
    department: 'Computer Science',
    initials: 'JS',
  },
  teammember: {
    id: 'u-teammember',
    name: 'Emma Davis',
    email: 'emma.davis@student.smartfyp.edu',
    role: 'Team Member',
    department: 'Information Technology',
    initials: 'ED',
  },
}

const ROLE_TO_PATH = {
  Admin: '/dashboard/admin',
  HOD: '/dashboard/hod',
  Supervisor: '/dashboard/supervisor',
  'Team Leader': '/dashboard/team-leader',
  'Team Member': '/dashboard/team-member',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('smartfyp_user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('smartfyp_user', JSON.stringify(user))
    else localStorage.removeItem('smartfyp_user')
  }, [user])

  // userType corresponds to the "User Type" dropdown on the login screen
  const login = (userType, email) => {
    const account = DEMO_ACCOUNTS[userType]
    if (!account) return { ok: false, error: 'Unknown user type' }
    const loggedIn = { ...account, email: email || account.email }
    setUser(loggedIn)
    return { ok: true, redirectTo: ROLE_TO_PATH[loggedIn.role] || '/' }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, roleToPath: ROLE_TO_PATH }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
