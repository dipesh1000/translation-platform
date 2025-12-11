"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Mail, Zap, CheckCircle2, Clock, XCircle } from "lucide-react"
import { Notification } from "@/types"
import { formatDateTime } from "@/lib/utils"

interface NotificationsScreenProps {
  notifications: Notification[]
}

export function NotificationsScreen({ notifications }: NotificationsScreenProps) {
  const whatsappNotifications = notifications.filter(n => n.type === 'whatsapp')
  const emailNotifications = notifications.filter(n => n.type === 'email')
  const automationNotifications = notifications.filter(n => n.type === 'automation')

  const getStatusIcon = (status: Notification['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: Notification['status']) => {
    switch (status) {
      case 'success':
        return <Badge variant="success">Success</Badge>
      case 'pending':
        return <Badge variant="warning">Pending</Badge>
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const NotificationCard = ({ notification, icon: Icon }: { notification: Notification; icon: any }) => (
    <div className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
      <div className={`rounded-full p-2 ${
        notification.type === 'whatsapp' 
          ? 'bg-green-100 dark:bg-green-900' 
          : notification.type === 'email'
          ? 'bg-blue-100 dark:bg-blue-900'
          : 'bg-purple-100 dark:bg-purple-900'
      }`}>
        <Icon className={`h-5 w-5 ${
          notification.type === 'whatsapp' 
            ? 'text-green-600 dark:text-green-400' 
            : notification.type === 'email'
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-purple-600 dark:text-purple-400'
        }`} />
      </div>
                <div className="flex-1 space-y-2 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{notification.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{notification.message}</p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      {getStatusIcon(notification.status)}
                      {getStatusBadge(notification.status)}
                    </div>
                  </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>{formatDateTime(notification.timestamp)}</span>
          {notification.metadata && (
            <span className="font-mono text-xs">
              {Object.entries(notification.metadata).map(([key, value]) => (
                <span key={key} className="mr-2">
                  {key}: {String(value)}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Automated Notifications</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Monitor WhatsApp, Email, and automation activity</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="all" className="text-xs sm:text-sm">All</TabsTrigger>
          <TabsTrigger value="whatsapp" className="text-xs sm:text-sm">WhatsApp</TabsTrigger>
          <TabsTrigger value="email" className="text-xs sm:text-sm">Email</TabsTrigger>
          <TabsTrigger value="automation" className="text-xs sm:text-sm">Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>{notifications.length} total notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    icon={
                      notification.type === 'whatsapp' ? MessageSquare :
                      notification.type === 'email' ? Mail : Zap
                    }
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Messages</CardTitle>
              <CardDescription>{whatsappNotifications.length} WhatsApp notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {whatsappNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    icon={MessageSquare}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Parser Logs</CardTitle>
              <CardDescription>{emailNotifications.length} email notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emailNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    icon={Mail}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automation Triggers</CardTitle>
              <CardDescription>{automationNotifications.length} automation events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automationNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    icon={Zap}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

