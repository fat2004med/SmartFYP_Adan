import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function RoleRoute({ role, children }) {
  const { user, roleToPath } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (user.role !== role) return <Navigate to={roleToPath[user.role] || '/'} replace />
  return children
}
