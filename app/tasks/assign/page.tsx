"use client"

import { useState } from "react"
import { TaskAssignment } from "@/components/screens/task-assignment"
import { mockProjects, mockTeamMembers } from "@/lib/mock-data"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AssignTaskPage() {
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const project = mockProjects[0]

  const handleAssign = (task: any) => {
    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  return (
    <>
      <TaskAssignment
        projectId={project.id}
        projectName={project.name}
        files={project.files}
        teamMembers={mockTeamMembers}
        onAssign={handleAssign}
      />
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <DialogTitle>Task Assigned Successfully!</DialogTitle>
            <DialogDescription>
              The task has been assigned to the team member.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => {
              setShowSuccess(false)
              router.push('/tasks')
            }}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

