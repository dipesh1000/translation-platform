"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { Task, Document } from "@/types"
import { formatDate } from "@/lib/utils"

interface TeamMemberTaskViewProps {
  tasks: Task[]
  onUpload: (taskId: string, files: File[]) => void
  onComplete: (taskId: string) => void
}

export function TeamMemberTaskView({ tasks, onUpload, onComplete }: TeamMemberTaskViewProps) {
  const [uploadingTaskId, setUploadingTaskId] = useState<string | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, taskId: string) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
      setUploadingTaskId(taskId)
    }
  }

  const handleUpload = (taskId: string) => {
    if (selectedFiles.length > 0) {
      onUpload(taskId, selectedFiles)
      setSelectedFiles([])
      setUploadingTaskId(null)
    }
  }

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-600" />
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Completed</Badge>
      case 'in-progress':
        return <Badge variant="default">In Progress</Badge>
      case 'review':
        return <Badge variant="warning">Under Review</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">My Tasks</h1>
        <p className="text-sm sm:text-base text-muted-foreground">View and manage your assigned translation tasks</p>
      </div>

      <div className="grid gap-6">
        {tasks.map((task) => (
          <Card key={task.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    {getStatusIcon(task.status)}
                    {task.projectName}
                  </CardTitle>
                  <CardDescription>
                    Deadline: {formatDate(task.deadline)}
                  </CardDescription>
                </div>
                {getStatusBadge(task.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Instructions */}
              {task.instructions && (
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-medium mb-1">Instructions:</p>
                  <p className="text-sm text-muted-foreground">{task.instructions}</p>
                </div>
              )}

              {/* Assigned Files */}
              <div>
                <p className="text-sm font-medium mb-2">Files to Translate:</p>
                <div className="space-y-2">
                  {task.files.map((file) => (
                    <div key={file.id} className="flex items-center gap-2 rounded-lg border p-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Translated Files */}
              {task.translatedFiles && task.translatedFiles.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Translated Files:</p>
                  <div className="space-y-2">
                    {task.translatedFiles.map((file) => (
                      <div key={file.id} className="flex items-center gap-2 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950 p-3">
                        <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 border-t">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center justify-center gap-2 w-full sm:w-auto">
                      <Upload className="h-4 w-4" />
                      Upload Translation
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upload Translated Files</DialogTitle>
                      <DialogDescription>
                        Upload your completed translation files
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <Input
                          type="file"
                          multiple
                          onChange={(e) => handleFileSelect(e, task.id)}
                          className="hidden"
                          id={`upload-${task.id}`}
                        />
                        <Label htmlFor={`upload-${task.id}`} className="cursor-pointer">
                          <span className="text-primary hover:underline">Click to upload</span>
                        </Label>
                        {selectedFiles.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {selectedFiles.map((file, idx) => (
                              <p key={idx} className="text-sm">{file.name}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSelectedFiles([])
                            setUploadingTaskId(null)
                          }}
                        >
                          Cancel
                        </Button>
                        <Button onClick={() => handleUpload(task.id)}>
                          Upload
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {task.status !== 'completed' && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => onComplete(task.id)}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Mark as Completed
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {tasks.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No tasks assigned</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

