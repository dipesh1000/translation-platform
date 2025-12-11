"use client"

import { OperationalDashboard } from "@/components/dashboards/operational-dashboard"
import { mockProjects, mockTasks, mockChartData } from "@/lib/mock-data"

export default function OperationalDashboardPage() {
  const recentFiles = mockProjects.flatMap(p => p.files)
  return (
    <OperationalDashboard
      projects={mockProjects}
      tasks={mockTasks}
      recentFiles={recentFiles}
      chartData={mockChartData}
    />
  )
}

