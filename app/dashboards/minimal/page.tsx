"use client"

import { MinimalDashboard } from "@/components/dashboards/minimal-dashboard"
import { mockKPIs } from "@/lib/mock-data"

export default function MinimalDashboardPage() {
  return <MinimalDashboard kpis={mockKPIs} />
}

