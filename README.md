# Translation Platform - Document Translation Management & Automation

A modern, SaaS-style Document Translation Management & Automation Platform built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI.

## 🎨 Features

### Part 1: UI Screens
- ✅ **Customer Profile Screen** - View customer details, contact history, documents, and project history
- ✅ **Project Creation Screen** - Upload files, auto-assign customer folders, select language pairs, set deadlines
- ✅ **Task Assignment Screen** - Assign tasks to team members with instructions and deadlines
- ✅ **Team Member Task View** - View assigned tasks, upload translations, mark tasks as completed
- ✅ **Admin Dashboard** - KPI cards, pending tasks, active customers, monthly projects graph
- ✅ **Automated Notifications Screen** - Monitor WhatsApp messages, email parser logs, and automation triggers

### Part 2: Workflow Automation Flow Diagram
- ✅ Interactive SVG flowchart showing the complete workflow from WhatsApp/Email inquiry to project closure

### Part 3: Dashboard Variations
- ✅ **Minimal Dashboard** - KPIs only with clean, focused design
- ✅ **Operational Dashboard** - Projects, files, tasks with detailed charts
- ✅ **Automation Dashboard** - Email + WhatsApp activity with real-time activity feed

### Part 4: Working Prototype
- ✅ **Module 1: Project Creation + File Upload** - Fully functional with routing and mock data
- ✅ **Module 2: Task Assignment** - Complete task assignment flow with team selection and status updates

### Part 5: Code Quality
- ✅ Clean folder structure (`app/`, `components/`, `lib/`)
- ✅ Reusable components with TypeScript
- ✅ TypeScript types for all entities (Project, Customer, Task, etc.)
- ✅ API stubs (`/api/project`, `/api/upload`, `/api/assign`)
- ✅ Loading states, empty states, error states
- ✅ Smooth animations and transitions (Airbnb-style)
- ✅ Light & dark mode support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
demodoc/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (stubs)
│   ├── customers/         # Customer pages
│   ├── projects/          # Project pages
│   ├── tasks/             # Task pages
│   ├── dashboards/        # Dashboard variations
│   ├── workflow/          # Workflow diagram page
│   └── layout.tsx         # Root layout
├── components/
│   ├── screens/           # Main UI screen components
│   ├── dashboards/        # Dashboard variations
│   ├── layout/            # Layout components (Sidebar, Header)
│   └── ui/                # ShadCN UI components
├── lib/
│   ├── mock-data.ts       # Mock data for demo
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎯 Key Pages

- `/` - Admin Dashboard
- `/customers` - Customer list
- `/customers/[id]` - Customer profile
- `/projects` - Project list
- `/projects/new` - Create new project
- `/tasks` - Task list
- `/tasks/assign` - Assign task
- `/tasks/my` - Team member task view
- `/notifications` - Notifications screen
- `/workflow` - Workflow automation diagram
- `/dashboards/minimal` - Minimal dashboard
- `/dashboards/operational` - Operational dashboard
- `/dashboards/automation` - Automation dashboard

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode support)

## 🎨 Design Principles

The UI follows modern design principles inspired by:
- **Airbnb Design System** - Clean, spacious layouts with smooth animations
- **Linear** - Focused, minimal interface with excellent typography
- **Notion** - Flexible, content-first design
- **Framer** - Polished micro-interactions and transitions

## 📱 Mobile Responsive

The platform is fully responsive and optimized for mobile devices:
- **Collapsible Sidebar** - Hamburger menu on mobile, full sidebar on desktop
- **Responsive Grids** - Cards and layouts adapt to screen size (1 column on mobile, 2-3 on tablet, 3-4 on desktop)
- **Touch-Friendly** - All buttons and interactive elements meet minimum 44x44px touch target size
- **Mobile Search** - Collapsible search bar on mobile devices
- **Responsive Typography** - Text sizes scale appropriately (text-2xl on mobile, text-3xl on desktop)
- **Adaptive Charts** - Charts resize and maintain readability on all screen sizes
- **Flexible Forms** - Form layouts stack vertically on mobile, side-by-side on larger screens
- **Optimized Spacing** - Reduced padding and gaps on mobile for better space utilization

## 📝 API Endpoints (Stubs)

- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project
- `POST /api/upload` - Upload files
- `POST /api/assign` - Assign task to team member

## 🔧 Customization

### Adding New Components
Components are organized by feature in the `components/` directory. Follow the existing patterns for consistency.

### Modifying Mock Data
Edit `lib/mock-data.ts` to customize the demo data.

### Theme Customization
Modify `app/globals.css` to adjust color schemes and `tailwind.config.ts` for theme configuration.

## 📄 License

This project is a demo/portfolio piece. Feel free to use it as a reference for your own projects.

## 🙏 Acknowledgments

- ShadCN UI for the excellent component library
- Radix UI for accessible primitives
- Tailwind CSS for utility-first styling

# translation-platform
