import React, { createContext, useContext, useState } from 'react'
import * as mock from '../data/mockData.js'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [departments] = useState(mock.departments)
  const [users, setUsers] = useState(mock.users)
  const [projects] = useState(mock.projects)
  const [teams, setTeams] = useState(mock.teams)
  const [notifications, setNotifications] = useState(mock.notifications)
  const [announcements, setAnnouncements] = useState(mock.announcements)
  const [tasks, setTasks] = useState(mock.tasksByRole)
  const [submissions] = useState(mock.submissions)

  const markAllNotificationsRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))

  const markNotificationRead = (id) =>
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))

  const addUser = (user) => setUsers((prev) => [...prev, { id: `u${prev.length + 1}`, ...user }])
  const removeUser = (id) => setUsers((prev) => prev.filter((u) => u.id !== id))

  const addTeam = (team) => setTeams((prev) => [...prev, { id: `t${prev.length + 1}`, progress: 0, status: 'active', ...team }])

  const addAnnouncement = (a) => setAnnouncements((prev) => [{ id: `a${prev.length + 1}`, status: 'Active', attachments: [], ...a }, ...prev])
  const removeAnnouncement = (id) => setAnnouncements((prev) => prev.filter((a) => a.id !== id))

  const updateTaskStatus = (id, status) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status, progress: status === 'Completed' ? 100 : t.progress } : t)))

  return (
    <DataContext.Provider
      value={{
        departments,
        users, addUser, removeUser,
        projects,
        teams, addTeam,
        notifications, markAllNotificationsRead, markNotificationRead,
        announcements, addAnnouncement, removeAnnouncement,
        tasks, updateTaskStatus,
        submissions,
        supervisorPerformance: mock.supervisorPerformance,
        milestones: mock.milestones,
        skillsDevelopment: mock.skillsDevelopment,
        weeklyActivity: mock.weeklyActivity,
        upcomingDeadlines: mock.upcomingDeadlines,
        stats: mock.stats,
        recentActivities: mock.recentActivities,
        teamPerformance: mock.teamPerformance,
        platformFeatures: mock.platformFeatures,
        platformStats: mock.platformStats,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
