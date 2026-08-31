import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
              <GraduationCap size={20} />
            </span>
            <span className="text-lg font-bold text-white">SmartFYP</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Comprehensive project management system for educational institutions,
            streamlining final year projects across all departments.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-brand-600 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">For Users</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/login" className="hover:text-white">Student Login</Link></li>
            <li><Link to="/login" className="hover:text-white">Faculty Login</Link></li>
            <li><Link to="/login" className="hover:text-white">Admin Login</Link></li>
            <li><Link to="/contact" className="hover:text-white">Help &amp; Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Contact Info</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>123 University Avenue, Education City, EC 12345</li>
            <li>+1 (555) 123-4567</li>
            <li>info@smartfyp.edu</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} SmartFYP. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
