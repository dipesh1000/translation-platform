"use client"

import { NotificationsScreen } from "@/components/screens/notifications-screen"
import { mockNotifications } from "@/lib/mock-data"

export default function NotificationsPage() {
  return <NotificationsScreen notifications={mockNotifications} />
}

