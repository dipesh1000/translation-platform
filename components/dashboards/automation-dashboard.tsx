"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Zap, CheckCircle2, Clock, XCircle, Activity } from "lucide-react"
import { Notification } from "@/types"
import { formatDateTime } from "@/lib/utils"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface AutomationDashboardProps {
  notifications: Notification[]
  activityData: { time: string; whatsapp: number; email: number; automation: number }[]
}

export function AutomationDashboard({ notifications, activityData }: AutomationDashboardProps) {
  const whatsappCount = notifications.filter(n => n.type === 'whatsapp').length
  const emailCount = notifications.filter(n => n.type === 'email').length
  const automationCount = notifications.filter(n => n.type === 'automation').length
  const successCount = notifications.filter(n => n.status === 'success').length
  const failedCount = notifications.filter(n => n.status === 'failed').length

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Automation Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Email + WhatsApp activity and automation triggers</p>
      </div>

      {/* Stats */}
      <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">WhatsApp</CardTitle>
            <MessageSquare className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{whatsappCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email</CardTitle>
            <Mail className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{emailCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automation</CardTitle>
            <Zap className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{automationCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{successCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{failedCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Activity Timeline
          </CardTitle>
          <CardDescription>Real-time activity across channels</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
            <AreaChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="whatsapp"
                stackId="1"
                stroke="hsl(142, 76%, 36%)"
                fill="hsl(142, 76%, 36%)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="email"
                stackId="1"
                stroke="hsl(217, 91%, 60%)"
                fill="hsl(217, 91%, 60%)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="automation"
                stackId="1"
                stroke="hsl(262, 83%, 58%)"
                fill="hsl(262, 83%, 58%)"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
          <CardDescription>Recent automation events and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.slice(0, 10).map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <div className={`rounded-full p-2 ${
                  notification.type === 'whatsapp' 
                    ? 'bg-green-100 dark:bg-green-900' 
                    : notification.type === 'email'
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : 'bg-purple-100 dark:bg-purple-900'
                }`}>
                  {notification.type === 'whatsapp' ? (
                    <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : notification.type === 'email' ? (
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                    <Badge variant={
                      notification.status === 'success' ? 'success' :
                      notification.status === 'pending' ? 'warning' :
                      'destructive'
                    }>
                      {notification.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatDateTime(notification.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

