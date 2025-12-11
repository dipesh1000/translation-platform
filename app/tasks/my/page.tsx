"use client"

import { TeamMemberTaskView } from "@/components/screens/team-member-task-view"
import { mockTasks } from "@/lib/mock-data"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function MyTasksPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleUpload = (taskId: string, files: File[]) => {
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage(`Uploaded ${files.length} file(s) successfully!`)
      setShowSuccess(true)
    }, 500)
  }

  const handleComplete = (taskId: string) => {
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage("Task marked as completed!")
      setShowSuccess(true)
    }, 500)
  }

  return (
    <>
      <TeamMemberTaskView
        tasks={mockTasks}
        onUpload={handleUpload}
        onComplete={handleComplete}
      />
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <DialogTitle>Success!</DialogTitle>
            <DialogDescription>{successMessage}</DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowSuccess(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

