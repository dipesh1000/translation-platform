import { NextResponse } from "next/server"
import { mockProjects } from "@/lib/mock-data"

export async function GET() {
  try {
    return NextResponse.json({ projects: mockProjects })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Simulate project creation
    const newProject = {
      id: `proj-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      status: "draft",
    }
    return NextResponse.json({ project: newProject }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    )
  }
}

