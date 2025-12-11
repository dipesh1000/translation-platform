"use client"

import { AdminDashboard } from "@/components/screens/admin-dashboard"
import { mockKPIs, mockChartData, mockTasks, mockCustomers } from "@/lib/mock-data"

export default function Home() {
  return (
    <AdminDashboard
      kpis={mockKPIs}
      chartData={mockChartData}
      pendingTasks={mockTasks.filter(t => t.status === 'pending')}
      activeCustomers={mockCustomers}
    />
  )
}

