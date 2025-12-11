# Quick Start Guide

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

## Key Features to Explore

### 1. UI Screens (Part 1)
- **Customer Profile**: Navigate to `/customers/1` to see a complete customer profile with contact history, documents, and projects
- **Project Creation**: Go to `/projects/new` to create a new project with file upload
- **Task Assignment**: Visit `/tasks/assign` to assign tasks to team members
- **Team Member View**: Check `/tasks/my` to see the team member task interface
- **Admin Dashboard**: The home page (`/`) shows the admin dashboard
- **Notifications**: Visit `/notifications` to see automated notifications

### 2. Workflow Diagram (Part 2)
- Navigate to `/workflow` to see the complete automation flow diagram

### 3. Dashboard Variations (Part 3)
- **Minimal**: `/dashboards/minimal` - Clean KPI-focused dashboard
- **Operational**: `/dashboards/operational` - Projects, files, and tasks overview
- **Automation**: `/dashboards/automation` - Email + WhatsApp activity dashboard

### 4. Working Prototypes (Part 4)
- **Module 1**: `/projects/new` - Full project creation with file upload
- **Module 2**: `/tasks/assign` - Complete task assignment flow

## Design Highlights

- ✨ Smooth animations and transitions
- 🌓 Dark mode support (toggle in header)
- 📱 Responsive design
- 🎨 Modern UI inspired by Airbnb, Linear, Notion, and Framer
- ♿ Accessible components (Radix UI)

## Navigation

Use the sidebar to navigate between different sections:
- Dashboard
- Customers
- Projects
- Tasks
- Notifications
- Team
- Settings

## Mock Data

All data is currently mocked in `lib/mock-data.ts`. Replace with real API calls when integrating with a backend.

