import React from 'react'
import { Menu, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useData } from '../context/DataContext.jsx'
import { Avatar } from './ui.jsx'
import { navByRole } from '../data/navConfig.js'

export default function Topbar({ onMenuClick, title }) {
  const { user } = useAuth()
  const { notifications } = useData()
  const unread = notifications.filter((n) => !n.read).length
  const notifPath = navByRole[user.role]?.find((n) => n.label === 'Notifications')?.to

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold text-ink-900">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        {notifPath && (
          <Link to={notifPath} className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Bell size={19} />
            {unread > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {unread}
              </span>
            )}
          </Link>
        )}
        <Avatar initials={user.initials} size={34} />
      </div>
    </header>
  )
}
