"use client"

import { AutomationDashboard } from "@/components/dashboards/automation-dashboard"
import { mockNotifications } from "@/lib/mock-data"

const activityData = [
  { time: "00:00", whatsapp: 2, email: 1, automation: 0 },
  { time: "04:00", whatsapp: 1, email: 3, automation: 1 },
  { time: "08:00", whatsapp: 5, email: 4, automation: 2 },
  { time: "12:00", whatsapp: 8, email: 6, automation: 3 },
  { time: "16:00", whatsapp: 6, email: 5, automation: 2 },
  { time: "20:00", whatsapp: 4, email: 3, automation: 1 },
]

export default function AutomationDashboardPage() {
  return (
    <AutomationDashboard
      notifications={mockNotifications}
      activityData={activityData}
    />
  )
}

