"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Calendar, MessageSquare, CheckCircle2 } from "lucide-react"
import { Task, TeamMember, Document } from "@/types"
import { formatDate } from "@/lib/utils"

interface TaskAssignmentProps {
  projectId: string
  projectName: string
  files: Document[]
  teamMembers: TeamMember[]
  onAssign: (task: Partial<Task>) => void
}

export function TaskAssignment({ projectId, projectName, files, teamMembers, onAssign }: TaskAssignmentProps) {
  const [selectedMember, setSelectedMember] = useState("")
  const [deadline, setDeadline] = useState("")
  const [instructions, setInstructions] = useState("")
  const [status, setStatus] = useState<"pending" | "in-progress">("pending")

  const handleAssign = () => {
    if (selectedMember && deadline) {
      onAssign({
        projectId,
        assignedTo: selectedMember,
        deadline,
        instructions,
        status,
        files,
      })
    }
  }

  const selectedMemberData = teamMembers.find(m => m.id === selectedMember)

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Assign Task</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Assign translation task to team member</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Assignment Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Project Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-semibold">{projectName}</p>
                <p className="text-sm text-muted-foreground">Project ID: {projectId}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Files to Translate
              </CardTitle>
              <CardDescription>{files.length} file(s)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {files.map((file) => (
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assignment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="team-member">Assign To</Label>
                <Select value={selectedMember} onValueChange={setSelectedMember} required>
                  <SelectTrigger id="team-member">
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamMembers.map((member) => (
                      <SelectItem key={member.id} value={member.id}>
                        <div className="flex items-center gap-2">
                          <span>{member.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {member.role}
                          </Badge>
                          <Badge variant={member.status === 'available' ? 'success' : 'warning'}>
                            {member.status}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Deadline
                </Label>
                <Input
                  id="deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Instructions
                </Label>
                <Textarea
                  id="instructions"
                  placeholder="Add specific instructions for the translator..."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Initial Status</Label>
                <Select value={status} onValueChange={(v) => setStatus(v as "pending" | "in-progress")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-4">
            <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
            <Button onClick={handleAssign} disabled={!selectedMember || !deadline} className="w-full sm:w-auto">
              Assign Task
            </Button>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedMemberData && (
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {selectedMemberData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedMemberData.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedMemberData.role}</p>
                  </div>
                </div>
              )}
              {deadline && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Deadline</p>
                  <p className="font-medium">{formatDate(deadline)}</p>
                </div>
              )}
              {instructions && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Instructions</p>
                  <p className="text-sm">{instructions}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

