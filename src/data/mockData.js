// Central mock dataset for the SmartFYP frontend.
// In production this would be replaced by calls to the Express/MongoDB API.

export const departments = [
  { id: 'cs', name: 'Computer Science', hod: 'Dr. Sarah Johnson', projects: 28, supervisors: 8, students: 156 },
  { id: 'ee', name: 'Electronics', hod: 'Dr. Michael Chen', projects: 22, supervisors: 6, students: 112 },
  { id: 'me', name: 'Mechanical', hod: 'Dr. Robert Smith', projects: 19, supervisors: 5, students: 98 },
  { id: 'it', name: 'Information Technology', hod: 'Dr. Emily Davis', projects: 25, supervisors: 7, students: 134 },
  { id: 'el', name: 'Electrical', hod: 'Dr. James Wilson', projects: 18, supervisors: 5, students: 87 },
]

export const users = [
  { id: 'u1', initials: 'DSJ', name: 'Dr. Sarah Johnson', email: 'sarah.johnson@college.edu', role: 'HOD', department: 'Computer Science', status: 'Active' },
  { id: 'u2', initials: 'PMC', name: 'Prof. Michael Chen', email: 'michael.chen@college.edu', role: 'Supervisor', department: 'Electronics', status: 'Active' },
  { id: 'u3', initials: 'JS', name: 'John Smith', email: 'john.smith@student.edu', role: 'Team Leader', department: 'Computer Science', status: 'Active' },
  { id: 'u4', initials: 'ED', name: 'Emma Davis', email: 'emma.davis@student.edu', role: 'Team Member', department: 'Information Technology', status: 'Active' },
  { id: 'u5', initials: 'PRW', name: 'Prof. Robert Wilson', email: 'robert.wilson@college.edu', role: 'Supervisor', department: 'Mechanical', status: 'Inactive' },
]

export const projects = [
  {
    id: 'p1', title: 'AI-Powered Healthcare Diagnosis System',
    description: 'Machine learning system for early disease detection using medical imaging and patient data analysis.',
    tags: ['Python', 'TensorFlow', 'OpenCV', '+2'],
    department: 'Computer Science & Engineering', team: 'Team Alpha', leader: 'Sarah Johnson', supervisor: 'Dr. Emily Watson',
    batch: '2020-2024', year: 2024, duration: '8 months', members: 4, status: 'Completed', grade: 'A+', total: 88,
  },
  {
    id: 'p2', title: 'Smart Campus IoT Infrastructure',
    description: 'Comprehensive IoT network for campus automation, energy management, and security monitoring.',
    tags: ['Arduino', 'Raspberry Pi', 'LoRaWAN', '+2'],
    department: 'Electronics & Communication', team: 'Team Beta', leader: 'David Kim', supervisor: 'Prof. Robert Smith',
    batch: '2020-2024', year: 2024, duration: '10 months', members: 4, status: 'Completed', grade: 'A', total: 84,
  },
  {
    id: 'p3', title: 'Renewable Energy Optimization Platform',
    description: 'Predictive analytics system for optimizing renewable energy generation and distribution.',
    tags: ['MATLAB', 'Simulink', 'Python', '+2'],
    department: 'Mechanical Engineering', team: 'Team Gamma', leader: 'John Wilson', supervisor: 'Dr. Michael Brown',
    batch: '2019-2023', year: 2023, duration: '9 months', members: 4, status: 'Completed', grade: 'A+', total: 90,
  },
  {
    id: 'p4', title: 'Blockchain-Based Supply Chain Management',
    description: 'Transparent and secure supply chain tracking using blockchain technology.',
    tags: ['Solidity', 'Ethereum', 'Web3.js', '+2'],
    department: 'Information Technology', team: 'Team Epsilon', leader: 'Kevin Liu', supervisor: 'Dr. Andrew Wilson',
    batch: '2019-2023', year: 2023, duration: '8 months', members: 4, status: 'Completed', grade: 'A', total: 84,
  },
  {
    id: 'p5', title: 'Smart Grid Power Management',
    description: 'Intelligent power grid system for efficient energy distribution and load balancing.',
    tags: ['SCADA', 'PLC', 'Python', '+2'],
    department: 'Electrical Engineering', team: 'Team Zeta', leader: 'Mark Taylor', supervisor: 'Sarah Johnson',
    batch: '2020-2024', year: 2024, duration: '11 months', members: 4, status: 'In Progress', grade: '-', total: null,
  },
  {
    id: 'p6', title: 'Autonomous Drone Navigation System',
    description: 'Computer vision and AI-based autonomous navigation system for drones.',
    tags: ['ROS', 'OpenCV', 'Python', '+2'],
    department: 'Computer Science & Engineering', team: 'Team Eta', leader: 'Ryan Cooper', supervisor: 'Dr. Mark Thompson',
    batch: '2019-2023', year: 2023, duration: '10 months', members: 4, status: 'Completed', grade: 'A+', total: 93,
  },
  {
    id: 'p7', title: 'Structural Health Monitoring System',
    description: 'Real-time monitoring system for detecting structural damage in bridges and buildings.',
    tags: ['Sensors', 'LabVIEW', 'C++', '+2'],
    department: 'Civil Engineering', team: 'Team Delta', leader: '-', supervisor: '-',
    batch: '2020-2024', year: 2024, duration: '9 months', members: 4, status: 'In Progress', grade: '-', total: null,
  },
  {
    id: 'p8', title: 'Wireless Sensor Network for Agriculture',
    description: 'IoT based monitoring system for precision agriculture and crop management.',
    tags: ['Zigbee', 'Arduino', 'LoRa', '+2'],
    department: 'Electronics & Communication', team: 'Team Theta', leader: '-', supervisor: '-',
    batch: '2020-2024', year: 2024, duration: '9 months', members: 4, status: 'Pending', grade: '-', total: null,
  },
  {
    id: 'p9', title: 'Robotic Assembly Line Automation',
    description: 'Automated robotic system for manufacturing assembly line optimization.',
    tags: ['ROS', 'PLC', 'CAD', '+2'],
    department: 'Mechanical Engineering', team: 'Team Iota', leader: '-', supervisor: '-',
    batch: '2019-2023', year: 2023, duration: '10 months', members: 4, status: 'In Progress', grade: '-', total: null,
  },
]

export const teams = [
  { id: 't1', name: 'AI Research Team', project: 'Machine Learning for Healthcare', supervisor: 'Dr. Sarah Johnson', leader: 'Mike Chen', members: ['Emma Wilson', 'John Doe', 'Alice Smith'], progress: 75, status: 'active' },
  { id: 't2', name: 'Web Development Team', project: 'E-commerce Platform', supervisor: 'Dr. Robert Brown', leader: 'Lisa Wang', members: ['Tom Johnson', 'Sarah Lee', 'David Kim'], progress: 60, status: 'active' },
]

export const supervisorPerformance = [
  { name: 'Prof. Michael Chen', specialty: 'AI & Machine Learning', projects: 4, teams: 3 },
  { name: 'Prof. Sarah Wilson', specialty: 'Software Engineering', projects: 3, teams: 2 },
  { name: 'Prof. Robert Johnson', specialty: 'Data Science', projects: 5, teams: 4 },
  { name: 'Prof. Lisa Anderson', specialty: 'Cybersecurity', projects: 2, teams: 2 },
]

export const notifications = [
  { id: 'n1', type: 'project', icon: 'FileText', title: 'New Project Proposal Submitted', desc: 'Team Alpha has submitted a new project proposal for AI-Based Healthcare System', time: '2 hours ago', priority: 'high', read: false },
  { id: 'n2', type: 'deadline', icon: 'Clock', title: 'Project Deadline Approaching', desc: 'Smart Traffic Management project deadline is in 3 days', time: '4 hours ago', priority: 'medium', read: false },
  { id: 'n3', type: 'meeting', icon: 'Calendar', title: 'Supervisor Meeting Scheduled', desc: 'Monthly supervisor meeting scheduled for next Monday at 10:00 AM', time: '1 day ago', priority: 'low', read: true },
  { id: 'n4', type: 'project', icon: 'CheckCircle2', title: 'Project Approval Required', desc: 'Mobile Banking App project requires your approval for next phase', time: '2 days ago', priority: 'high', read: false },
  { id: 'n5', type: 'project', icon: 'CheckCircle', title: 'Project Completed', desc: 'Renewable Energy Monitor project has been successfully completed', time: '3 days ago', priority: 'low', read: true },
]

export const announcements = [
  { id: 'a1', title: 'Final Project Submission Guidelines', type: 'Academic', priority: 'High', status: 'Active', body: 'All students must submit their final projects by April 30th, 2024. Please ensure all documentation is complete and follows the specified format. Late submissions will not be accepted without prior approval.', attachments: ['submission_guidelines.pdf', 'format_template.docx'], by: 'Academic Office', posted: '1/15/2024', expires: '5/1/2024', audience: 'All Students, Supervisors' },
  { id: 'a2', title: 'Annual Tech Fest 2024', type: 'Event', priority: 'Medium', status: 'Active', body: 'Join us for the Annual Tech Fest 2024 from March 15-17. Register your projects for exhibition and compete for exciting prizes. Registration deadline: February 28th.', attachments: [], by: 'Event Committee', posted: '1/14/2024', expires: '3/18/2024', audience: 'All Students, Faculty' },
]

export const tasksByRole = [
  { id: 'tk1', title: 'Literature Review', desc: 'Complete comprehensive literature review for the project', assignedBy: 'Dr. Sarah Wilson', due: '2/15/2024', priority: 'High', status: 'In Progress', progress: 75 },
  { id: 'tk2', title: 'System Design Document', desc: 'Create detailed system architecture and design documentation', assignedBy: 'Prof. Michael Chen', due: '2/20/2024', priority: 'Medium', status: 'Pending', progress: 30 },
  { id: 'tk3', title: 'Database Schema Design', desc: 'Design and implement database schema for the application', assignedBy: 'Dr. Sarah Wilson', due: '2/10/2024', priority: 'High', status: 'Completed', progress: 100 },
  { id: 'tk4', title: 'Frontend Prototype', desc: 'Develop initial frontend prototype with basic functionality', assignedBy: 'Prof. Michael Chen', due: '2/25/2024', priority: 'Medium', status: 'In Progress', progress: 45 },
]

export const submissions = [
  { id: 's1', title: 'Project Proposal', desc: 'Initial project proposal with objectives and methodology', start: '2024-01-15', due: '2024-01-25', submitted: '2024-01-23', status: 'Submitted', grade: 'A-' },
  { id: 's2', title: 'Literature Review', desc: 'Comprehensive literature review of related work and research', start: '2024-01-26', due: '2024-02-10', submitted: '2024-02-08', status: 'Under Review', grade: 'Pending' },
  { id: 's3', title: 'System Design Document', desc: 'Detailed system architecture and design specifications', start: '2024-02-11', due: '2024-02-25', submitted: null, status: 'Pending', grade: 'Not graded' },
  { id: 's4', title: 'Implementation Report', desc: 'Technical implementation details and code documentation', start: '2024-02-26', due: '2024-03-15', submitted: null, status: 'Not Started', grade: 'Not graded' },
  { id: 's5', title: 'Testing Report', desc: 'Comprehensive testing results and quality assurance documentation', start: '2024-03-16', due: '2024-03-30', submitted: null, status: 'Not Started', grade: 'Not graded' },
  { id: 's6', title: 'Final Report', desc: 'Complete project documentation and final presentation materials', start: '2024-04-01', due: '2024-04-20', submitted: null, status: 'Not Started', grade: 'Not graded' },
]

export const milestones = [
  { id: 'm1', title: 'Project Proposal', due: '1/15/2024', completed: '1/14/2024', done: true },
  { id: 'm2', title: 'Literature Review', due: '2/1/2024', completed: '1/30/2024', done: true },
  { id: 'm3', title: 'System Design', due: '2/15/2024', completed: null, done: false },
  { id: 'm4', title: 'Implementation Phase 1', due: '3/1/2024', completed: null, done: false },
  { id: 'm5', title: 'Testing & Documentation', due: '3/15/2024', completed: null, done: false },
  { id: 'm6', title: 'Final Presentation', due: '4/1/2024', completed: null, done: false },
]

export const skillsDevelopment = [
  { skill: 'Research', value: 85 },
  { skill: 'Programming', value: 72 },
  { skill: 'Documentation', value: 78 },
  { skill: 'Testing', value: 45 },
  { skill: 'Presentation', value: 60 },
]

export const weeklyActivity = [
  { week: 'Week 1', hours: 12, tasks: 3 },
  { week: 'Week 2', hours: 15, tasks: 4 },
  { week: 'Week 3', hours: 10, tasks: 5 },
  { week: 'Week 4', hours: 14, tasks: 3 },
  { week: 'Week 5', hours: 20, tasks: 6 },
  { week: 'Week 6', hours: 16, tasks: 4 },
]

export const upcomingDeadlines = [
  { title: 'AI-Based Healthcare System', due: '5/15/2024', daysLeft: 12 },
  { title: 'Smart Learning Platform', due: '4/28/2024', daysLeft: 5 },
  { title: 'IoT Security Framework', due: '6/10/2024', daysLeft: 28 },
]

export const stats = {
  admin: { departments: 8, projects: 156, teams: 89, users: 342 },
  hod: { supervisors: 12, activeProjects: 28, teams: 15, students: 89 },
  supervisor: { activeTeams: 4, totalStudents: 18, projects: 4, pendingReviews: 3 },
}

export const recentActivities = [
  { text: 'New project proposal submitted by Team Alpha', time: '2 hours ago' },
  { text: 'Project milestone completed by Team Beta', time: '4 hours ago' },
  { text: 'Supervisor meeting scheduled for next week', time: '1 day ago' },
  { text: 'Final presentation approved for Team Gamma', time: '2 days ago' },
]

export const teamPerformance = [
  { name: 'Team Alpha', project: 'AI-Based Healthcare System', status: 'On Track', leader: 'John Smith', members: 4, progress: 65, updated: '2 hours ago' },
  { name: 'Team Beta', project: 'Smart Learning Platform', status: 'Ahead', leader: 'Emma Davis', members: 5, progress: 80, updated: '1 day ago' },
]

export const platformFeatures = [
  { icon: 'Users', title: 'Multi-Role Management', desc: 'Dedicated dashboards for students, team leaders, supervisors, HODs, and administrators with role-specific functionality.' },
  { icon: 'Building2', title: 'Department Structure', desc: 'Organized hierarchy from departments to teams, ensuring clear ownership and appropriate oversight.' },
  { icon: 'Users2', title: 'Team Management', desc: 'Comprehensive tools for assigning and monitoring team deadlines, membership, and notifications.' },
  { icon: 'FileText', title: 'Document Management', desc: 'Secure file upload, version control, and document sharing with approval workflows and feedback.' },
  { icon: 'Calendar', title: 'Calendar Integration', desc: 'Meeting scheduling, deadline tracking, and milestone management with automated reminders.' },
  { icon: 'BarChart3', title: 'Progress Analytics', desc: 'Real-time progress tracking, performance analytics, and comprehensive reporting for all stakeholders.' },
]

export const platformStats = [
  { value: '500+', label: 'Active Projects' },
  { value: '2,500+', label: 'Students' },
  { value: '150+', label: 'Supervisors' },
  { value: '25+', label: 'Departments' },
]
