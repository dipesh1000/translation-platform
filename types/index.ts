export type LanguagePair = {
  from: string
  to: string
}

export type Customer = {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  createdAt: string
  totalProjects: number
  status: 'active' | 'inactive' | 'archived'
  folderId?: string
}

export type Document = {
  id: string
  name: string
  type: string
  size: number
  uploadedAt: string
  url: string
  customerId: string
  projectId?: string
}

export type Project = {
  id: string
  customerId: string
  customerName: string
  name: string
  languagePair: LanguagePair
  deadline: string
  status: 'draft' | 'in-progress' | 'review' | 'completed' | 'cancelled'
  files: Document[]
  createdAt: string
  completedAt?: string
  folderId: string
}

export type TeamMember = {
  id: string
  name: string
  email: string
  role: 'translator' | 'reviewer' | 'manager' | 'admin'
  avatar?: string
  status: 'available' | 'busy' | 'offline'
}

export type Task = {
  id: string
  projectId: string
  projectName: string
  assignedTo: string
  assignedToName: string
  files: Document[]
  instructions?: string
  status: 'pending' | 'in-progress' | 'review' | 'completed'
  deadline: string
  createdAt: string
  completedAt?: string
  translatedFiles?: Document[]
}

export type ContactHistory = {
  id: string
  customerId: string
  type: 'whatsapp' | 'email'
  direction: 'inbound' | 'outbound'
  message: string
  timestamp: string
  status: 'sent' | 'delivered' | 'read' | 'failed'
}

export type Notification = {
  id: string
  type: 'whatsapp' | 'email' | 'automation'
  title: string
  message: string
  timestamp: string
  status: 'success' | 'pending' | 'failed'
  metadata?: Record<string, any>
}

export type KPIMetric = {
  label: string
  value: string | number
  change?: number
  trend?: 'up' | 'down' | 'neutral'
}

export type ChartData = {
  name: string
  value: number
  [key: string]: string | number
}

