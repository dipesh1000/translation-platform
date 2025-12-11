"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockProjects } from "@/lib/mock-data"
import Link from "next/link"
import { Plus, FileText } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default function ProjectsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Projects</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Manage translation projects</p>
        </div>
        <Link href="/projects/new" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {mockProjects.map((project) => (
          <Card key={project.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>
                    {project.customerName} • {project.languagePair.from} → {project.languagePair.to}
                  </CardDescription>
                </div>
                <Badge variant={
                  project.status === 'completed' ? 'success' :
                  project.status === 'in-progress' ? 'default' :
                  'secondary'
                }>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {project.files.length} file(s)
                  </div>
                  <span>Deadline: {formatDate(project.deadline)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

