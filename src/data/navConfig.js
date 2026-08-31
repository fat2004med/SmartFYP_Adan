import {
  LayoutDashboard, Users, FolderKanban, Building2, Bell, Megaphone,
  Users2, UserCog, FileBarChart, CalendarClock, MessageSquare,
  ClipboardList, UploadCloud, TrendingUp, BookOpen, CalendarDays,
} from 'lucide-react'

export const navByRole = {
  Admin: [
    { to: '/dashboard/admin', label: 'Overview', icon: LayoutDashboard, end: true },
    { to: '/dashboard/admin/users', label: 'User Management', icon: Users },
    { to: '/dashboard/admin/projects', label: 'Project Records', icon: FolderKanban },
    { to: '/dashboard/admin/departments', label: 'Department Management', icon: Building2 },
    { to: '/dashboard/admin/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/dashboard/admin/notifications', label: 'Notifications', icon: Bell },
  ],
  HOD: [
    { to: '/dashboard/hod', label: 'Department Overview', icon: LayoutDashboard, end: true },
    { to: '/dashboard/hod/users', label: 'User Management', icon: Users },
    { to: '/dashboard/hod/teams', label: 'Team Management', icon: Users2 },
    { to: '/dashboard/hod/supervisors', label: 'Supervisor Management', icon: UserCog },
    { to: '/dashboard/hod/reports', label: 'Project Reports', icon: FileBarChart },
    { to: '/dashboard/hod/meetings', label: 'Meeting Scheduler', icon: CalendarClock },
    { to: '/dashboard/hod/messages', label: 'Messages', icon: MessageSquare },
    { to: '/dashboard/hod/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/dashboard/hod/notifications', label: 'Notifications', icon: Bell },
  ],
  Supervisor: [
    { to: '/dashboard/supervisor', label: 'Team Overview', icon: LayoutDashboard, end: true },
    { to: '/dashboard/supervisor/teams', label: 'Team Management', icon: Users2 },
    { to: '/dashboard/supervisor/monitoring', label: 'Project Monitoring', icon: FolderKanban },
    { to: '/dashboard/supervisor/calendar', label: 'Calendar', icon: CalendarDays },
    { to: '/dashboard/supervisor/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/dashboard/supervisor/notifications', label: 'Notifications', icon: Bell },
    { to: '/dashboard/supervisor/meetings', label: 'Meetings', icon: CalendarClock },
  ],
  'Team Leader': [
    { to: '/dashboard/team-leader', label: 'Team Coordination', icon: LayoutDashboard, end: true },
    { to: '/dashboard/team-leader/tasks', label: 'Task Management', icon: ClipboardList },
    { to: '/dashboard/team-leader/submissions', label: 'Project Submissions', icon: FolderKanban },
    { to: '/dashboard/team-leader/progress', label: 'Progress Updates', icon: TrendingUp },
    { to: '/dashboard/team-leader/upload', label: 'File Upload', icon: UploadCloud },
    { to: '/dashboard/team-leader/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/dashboard/team-leader/notifications', label: 'Notifications', icon: Bell },
    { to: '/dashboard/team-leader/meetings', label: 'Meetings', icon: CalendarClock },
    { to: '/dashboard/team-leader/messages', label: 'Messages', icon: MessageSquare },
  ],
  'Team Member': [
    { to: '/dashboard/team-member', label: 'Progress Tracking', icon: LayoutDashboard, end: true },
    { to: '/dashboard/team-member/tasks', label: 'Project Tasks', icon: ClipboardList },
    { to: '/dashboard/team-member/submissions', label: 'Submissions', icon: FolderKanban },
    { to: '/dashboard/team-member/resources', label: 'Resources', icon: BookOpen },
    { to: '/dashboard/team-member/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/dashboard/team-member/notifications', label: 'Notifications', icon: Bell },
    { to: '/dashboard/team-member/meetings', label: 'Meetings', icon: CalendarClock },
  ],
}

export const portalTitle = {
  Admin: 'Admin Panel',
  HOD: 'HOD Portal',
  Supervisor: 'Supervisor Portal',
  'Team Leader': 'Team Leader',
  'Team Member': 'Team Member Portal',
}

export const portalSubtitle = {
  Admin: 'System Administration',
  HOD: 'Department Management',
  Supervisor: 'Team Management',
  'Team Leader': 'Dashboard',
  'Team Member': 'Project Management',
}
