# SmartFYP — Frontend

A complete React frontend for **SmartFYP**, a modular web-based Final Year
Project (FYP) management system, built to match the UI design and role
structure described in the project documentation (React.js + Tailwind CSS,
consuming a MERN-style API).

This package is **frontend only**, wired up with realistic mock data via
React Context so every screen is fully interactive out of the box. Swap the
`DataContext` calls for real `fetch`/`axios` calls to your Node/Express +
MongoDB API when the backend is ready.

## Tech stack

- React 18 + Vite
- React Router v6
- Tailwind CSS
- lucide-react (icons)
- recharts (charts on the Team Member progress page)

## Getting started in VS Code

1. Open this folder (`smartfyp-frontend`) in VS Code.
2. Open a terminal (``Ctrl+` ``) and install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Logging in (demo mode)

There's no real backend, so the login screen accepts **any password**. Pick a
"User Type" from the dropdown and sign in (or click "Use demo credentials")
to land on that role's dashboard:

| User Type    | Demo Email                          | Lands on                    |
|--------------|--------------------------------------|------------------------------|
| Admin        | admin@smartfyp.edu                   | `/dashboard/admin`          |
| HOD          | hod.cs@smartfyp.edu                  | `/dashboard/hod`            |
| Supervisor   | sarah.johnson@smartfyp.edu           | `/dashboard/supervisor`     |
| Team Leader  | john.smith@student.smartfyp.edu      | `/dashboard/team-leader`    |
| Team Member  | emma.davis@student.smartfyp.edu      | `/dashboard/team-member`    |

Sessions persist in `localStorage`, so refreshing keeps you logged in. Use
"Logout" in the sidebar to switch roles.

## Project structure

```
src/
├── components/         # Reusable UI: Navbar, Footer, Sidebar, Topbar, ui.jsx primitives
├── context/            # AuthContext (role-based mock login), DataContext (mock app data)
├── data/                # mockData.js (projects, users, teams...), navConfig.js (per-role sidebar)
├── layouts/             # PublicLayout, DashboardLayout
├── pages/
│   ├── public/          # Home, Projects (public portal/gallery), About, Contact, Login
│   ├── NotFound.jsx
│   └── dashboard/
│       ├── admin/       # Overview, User Management, Department Management, Project Records
│       ├── hod/         # Overview, Supervisor Management, Project Reports
│       ├── supervisor/  # Dashboard, Project Monitoring, Calendar
│       ├── teamleader/  # Project Submissions, Progress Updates, File Upload
│       ├── teammember/  # Portal (progress tracking), Submissions, Resources
│       └── shared/      # Notifications, Announcements, Meetings, Messages,
│                         # Team Management (+ Create Team), Task Management
├── App.jsx              # All routes
├── main.jsx             # Entry point (providers + router)
└── index.css            # Tailwind + small global styles
```

## Connecting to a real backend

All mock data and mutation functions live in `src/context/DataContext.jsx`
and `src/data/mockData.js`. To connect to the documented MERN backend
(Node.js + Express + MongoDB + Firebase Storage):

1. Replace the `useState(mock.xxx)` initial values with `useEffect` calls to
   your API endpoints (e.g. `GET /api/projects`, `GET /api/users`).
2. Replace the `add*`/`remove*`/`update*` helper functions with `POST` /
   `PATCH` / `DELETE` calls, then update local state from the response.
3. Replace `AuthContext.login()` with a real call to your `/api/auth/login`
   endpoint, storing the returned JWT instead of the mock user object.
4. Add an `axios`/`fetch` wrapper that attaches the auth token to every
   request.

Everything else — routing, role-based sidebars, layouts, and page UI — will
keep working unchanged.
