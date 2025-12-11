"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockTasks } from "@/lib/mock-data"
import Link from "next/link"
import { Plus, ClipboardList } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default function TasksPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Tasks</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Manage translation tasks</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Link href="/tasks/my" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              <ClipboardList className="h-4 w-4 mr-2" />
              My Tasks
            </Button>
          </Link>
          <Link href="/tasks/assign" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Assign Task
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4">
        {mockTasks.map((task) => (
          <Card key={task.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{task.projectName}</CardTitle>
                  <CardDescription>
                    Assigned to {task.assignedToName}
                  </CardDescription>
                </div>
                <Badge variant={
                  task.status === 'completed' ? 'success' :
                  task.status === 'in-progress' ? 'default' :
                  'secondary'
                }>
                  {task.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{task.files.length} file(s)</span>
                  <span>Deadline: {formatDate(task.deadline)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

