import { Customer, Project, Task, TeamMember, ContactHistory, Notification, KPIMetric, ChartData } from "@/types"

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "contact@acme.com",
    phone: "+1-555-0101",
    company: "Acme Corp",
    createdAt: "2024-01-15",
    totalProjects: 12,
    status: "active",
    folderId: "folder-acme-001",
  },
  {
    id: "2",
    name: "TechStart Inc",
    email: "hello@techstart.io",
    phone: "+1-555-0102",
    company: "TechStart",
    createdAt: "2024-02-20",
    totalProjects: 8,
    status: "active",
    folderId: "folder-techstart-002",
  },
  {
    id: "3",
    name: "Global Solutions Ltd",
    email: "info@globalsolutions.com",
    phone: "+1-555-0103",
    company: "Global Solutions",
    createdAt: "2024-03-10",
    totalProjects: 5,
    status: "active",
    folderId: "folder-global-003",
  },
]

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    customerId: "1",
    customerName: "Acme Corporation",
    name: "Marketing Materials Translation",
    languagePair: { from: "English", to: "Spanish" },
    deadline: "2024-12-25",
    status: "in-progress",
    files: [
      {
        id: "file-1",
        name: "brochure.pdf",
        type: "application/pdf",
        size: 2048576,
        uploadedAt: "2024-12-01T10:00:00Z",
        url: "/files/brochure.pdf",
        customerId: "1",
        projectId: "proj-1",
      },
    ],
    createdAt: "2024-12-01",
    folderId: "folder-acme-001",
  },
  {
    id: "proj-2",
    customerId: "2",
    customerName: "TechStart Inc",
    name: "Product Documentation",
    languagePair: { from: "English", to: "French" },
    deadline: "2024-12-30",
    status: "review",
    files: [
      {
        id: "file-2",
        name: "user-manual.docx",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 1536000,
        uploadedAt: "2024-12-05T14:30:00Z",
        url: "/files/user-manual.docx",
        customerId: "2",
        projectId: "proj-2",
      },
    ],
    createdAt: "2024-12-05",
    folderId: "folder-techstart-002",
  },
]

export const mockTasks: Task[] = [
  {
    id: "task-1",
    projectId: "proj-1",
    projectName: "Marketing Materials Translation",
    assignedTo: "team-1",
    assignedToName: "Maria Garcia",
    files: [
      {
        id: "file-1",
        name: "brochure.pdf",
        type: "application/pdf",
        size: 2048576,
        uploadedAt: "2024-12-01T10:00:00Z",
        url: "/files/brochure.pdf",
        customerId: "1",
        projectId: "proj-1",
      },
    ],
    instructions: "Please maintain the original formatting and ensure marketing tone is preserved.",
    status: "in-progress",
    deadline: "2024-12-20",
    createdAt: "2024-12-01",
  },
  {
    id: "task-2",
    projectId: "proj-2",
    projectName: "Product Documentation",
    assignedTo: "team-2",
    assignedToName: "Jean Dupont",
    files: [
      {
        id: "file-2",
        name: "user-manual.docx",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 1536000,
        uploadedAt: "2024-12-05T14:30:00Z",
        url: "/files/user-manual.docx",
        customerId: "2",
        projectId: "proj-2",
      },
    ],
    instructions: "Technical accuracy is critical. Use standard terminology.",
    status: "review",
    deadline: "2024-12-25",
    createdAt: "2024-12-05",
  },
]

export const mockTeamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Maria Garcia",
    email: "maria@translation.com",
    role: "translator",
    status: "available",
  },
  {
    id: "team-2",
    name: "Jean Dupont",
    email: "jean@translation.com",
    role: "translator",
    status: "busy",
  },
  {
    id: "team-3",
    name: "Sarah Chen",
    email: "sarah@translation.com",
    role: "reviewer",
    status: "available",
  },
  {
    id: "team-4",
    name: "David Kim",
    email: "david@translation.com",
    role: "manager",
    status: "available",
  },
]

export const mockContactHistory: ContactHistory[] = [
  {
    id: "contact-1",
    customerId: "1",
    type: "whatsapp",
    direction: "inbound",
    message: "Hello, I need to translate a document. Can you help?",
    timestamp: "2024-12-01T09:00:00Z",
    status: "read",
  },
  {
    id: "contact-2",
    customerId: "1",
    type: "whatsapp",
    direction: "outbound",
    message: "Of course! Please send us the document and we'll get started.",
    timestamp: "2024-12-01T09:05:00Z",
    status: "delivered",
  },
  {
    id: "contact-3",
    customerId: "1",
    type: "email",
    direction: "inbound",
    message: "Subject: Translation Request\n\nHi, I've attached the document for translation.",
    timestamp: "2024-12-01T10:00:00Z",
    status: "read",
  },
]

export const mockNotifications: Notification[] = [
  {
    id: "notif-1",
    type: "whatsapp",
    title: "New WhatsApp Message",
    message: "Received message from Acme Corporation",
    timestamp: "2024-12-10T08:30:00Z",
    status: "success",
  },
  {
    id: "notif-2",
    type: "email",
    title: "Email Parsed",
    message: "New translation request extracted from email",
    timestamp: "2024-12-10T09:15:00Z",
    status: "success",
  },
  {
    id: "notif-3",
    type: "automation",
    title: "Project Created",
    message: "Automatically created project for TechStart Inc",
    timestamp: "2024-12-10T10:00:00Z",
    status: "success",
  },
]

export const mockKPIs: KPIMetric[] = [
  { label: "Active Projects", value: 24, change: 12, trend: "up" },
  { label: "Pending Tasks", value: 18, change: -5, trend: "down" },
  { label: "Active Customers", value: 45, change: 8, trend: "up" },
  { label: "Monthly Revenue", value: "$125,000", change: 15, trend: "up" },
]

export const mockChartData: ChartData[] = [
  { name: "Jan", value: 12, projects: 12, files: 45 },
  { name: "Feb", value: 15, projects: 15, files: 52 },
  { name: "Mar", value: 18, projects: 18, files: 68 },
  { name: "Apr", value: 22, projects: 22, files: 78 },
  { name: "May", value: 20, projects: 20, files: 72 },
  { name: "Jun", value: 24, projects: 24, files: 85 },
]

export const languageOptions = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
]

