import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import RoleRoute from './components/RoleRoute.jsx'

import Home from './pages/public/Home.jsx'
import Projects from './pages/public/Projects.jsx'
import About from './pages/public/About.jsx'
import Contact from './pages/public/Contact.jsx'
import Login from './pages/public/Login.jsx'
import NotFound from './pages/NotFound.jsx'

// Shared dashboard pages
import NotificationsPage from './pages/dashboard/shared/NotificationsPage.jsx'
import AnnouncementsPage from './pages/dashboard/shared/AnnouncementsPage.jsx'
import MeetingsPage from './pages/dashboard/shared/MeetingsPage.jsx'
import MessagesPage from './pages/dashboard/shared/MessagesPage.jsx'
import TeamManagementPage from './pages/dashboard/shared/TeamManagementPage.jsx'
import TaskManagementPage from './pages/dashboard/shared/TaskManagementPage.jsx'

// Admin
import AdminOverview from './pages/dashboard/admin/AdminOverview.jsx'
import UserManagement from './pages/dashboard/admin/UserManagement.jsx'
import DepartmentManagement from './pages/dashboard/admin/DepartmentManagement.jsx'
import ProjectRecords from './pages/dashboard/admin/ProjectRecords.jsx'

// HOD
import HodOverview from './pages/dashboard/hod/HodOverview.jsx'
import SupervisorManagement from './pages/dashboard/hod/SupervisorManagement.jsx'
import ProjectReports from './pages/dashboard/hod/ProjectReports.jsx'

// Supervisor
import SupervisorDashboard from './pages/dashboard/supervisor/SupervisorDashboard.jsx'
import ProjectMonitoring from './pages/dashboard/supervisor/ProjectMonitoring.jsx'
import CalendarPage from './pages/dashboard/supervisor/CalendarPage.jsx'

// Team Leader
import ProjectSubmissions from './pages/dashboard/teamleader/ProjectSubmissions.jsx'
import ProgressUpdates from './pages/dashboard/teamleader/ProgressUpdates.jsx'
import FileUploadPage from './pages/dashboard/teamleader/FileUploadPage.jsx'

// Team Member
import TeamMemberPortal from './pages/dashboard/teammember/TeamMemberPortal.jsx'
import TeamMemberSubmissions from './pages/dashboard/teammember/TeamMemberSubmissions.jsx'
import ResourcesPage from './pages/dashboard/teammember/ResourcesPage.jsx'

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />

      {/* Admin dashboard */}
      <Route
        path="/dashboard/admin"
        element={<RoleRoute role="Admin"><DashboardLayout /></RoleRoute>}
      >
        <Route index element={<AdminOverview />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="departments" element={<DepartmentManagement />} />
        <Route path="projects" element={<ProjectRecords />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>

      {/* HOD dashboard */}
      <Route
        path="/dashboard/hod"
        element={<RoleRoute role="HOD"><DashboardLayout /></RoleRoute>}
      >
        <Route index element={<HodOverview />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="teams" element={<TeamManagementPage />} />
        <Route path="supervisors" element={<SupervisorManagement />} />
        <Route path="reports" element={<ProjectReports />} />
        <Route path="meetings" element={<MeetingsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>

      {/* Supervisor dashboard */}
      <Route
        path="/dashboard/supervisor"
        element={<RoleRoute role="Supervisor"><DashboardLayout /></RoleRoute>}
      >
        <Route index element={<SupervisorDashboard />} />
        <Route path="teams" element={<TeamManagementPage />} />
        <Route path="monitoring" element={<ProjectMonitoring />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="meetings" element={<MeetingsPage />} />
      </Route>

      {/* Team Leader dashboard */}
      <Route
        path="/dashboard/team-leader"
        element={<RoleRoute role="Team Leader"><DashboardLayout /></RoleRoute>}
      >
        <Route index element={<ProjectSubmissions />} />
        <Route path="tasks" element={<TaskManagementPage />} />
        <Route path="submissions" element={<ProjectSubmissions />} />
        <Route path="progress" element={<ProgressUpdates />} />
        <Route path="upload" element={<FileUploadPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="meetings" element={<MeetingsPage />} />
        <Route path="messages" element={<MessagesPage />} />
      </Route>

      {/* Team Member dashboard */}
      <Route
        path="/dashboard/team-member"
        element={<RoleRoute role="Team Member"><DashboardLayout /></RoleRoute>}
      >
        <Route index element={<TeamMemberPortal />} />
        <Route path="tasks" element={<TaskManagementPage />} />
        <Route path="submissions" element={<TeamMemberSubmissions />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="meetings" element={<MeetingsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
