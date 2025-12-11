"use client"

import { WorkflowDiagram } from "@/components/workflow-diagram"

export default function WorkflowPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Workflow Automation</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Visual representation of the translation workflow</p>
      </div>
      <div className="rounded-lg border bg-card p-2 sm:p-4">
        <WorkflowDiagram />
      </div>
    </div>
  )
}

