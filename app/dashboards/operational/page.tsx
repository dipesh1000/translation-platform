"use client"

import { OperationalDashboard } from "@/components/dashboards/operational-dashboard"
import { mockProjects, mockTasks, mockChartData } from "@/lib/mock-data"

export default function OperationalDashboardPage() {
  const recentFiles = mockProjects.flatMap(p => p.files)
  // Transform chartData to match expected type
  const chartData = mockChartData.map(item => ({
    name: item.name,
    projects: item.projects || 0,
    files: item.files || 0,
  }))
  
  return (
    <OperationalDashboard
      projects={mockProjects}
      tasks={mockTasks}
      recentFiles={recentFiles}
      chartData={chartData}
    />
  )
}

