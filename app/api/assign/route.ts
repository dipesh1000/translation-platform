import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Simulate task assignment
    const newTask = {
      id: `task-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      status: body.status || "pending",
    }
    return NextResponse.json({ task: newTask }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to assign task" },
      { status: 500 }
    )
  }
}

