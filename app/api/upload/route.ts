import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files") as File[]
    
    // Simulate file upload
    const uploadedFiles = files.map((file, index) => ({
      id: `file-${Date.now()}-${index}`,
      name: file.name,
      type: file.type,
      size: file.size,
      uploadedAt: new Date().toISOString(),
      url: `/uploads/${file.name}`,
    }))

    return NextResponse.json({ files: uploadedFiles }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    )
  }
}

