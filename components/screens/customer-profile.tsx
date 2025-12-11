"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Mail, FileText, Calendar, Building2, Phone } from "lucide-react"
import { Customer, ContactHistory, Project, Document } from "@/types"
import { formatDate, formatDateTime } from "@/lib/utils"

interface CustomerProfileProps {
  customer: Customer
  contactHistory: ContactHistory[]
  projects: Project[]
  documents: Document[]
}

export function CustomerProfile({ customer, contactHistory, projects, documents }: CustomerProfileProps) {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
            <AvatarFallback className="text-base sm:text-lg">
              {customer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{customer.name}</h1>
            <p className="text-sm sm:text-base text-muted-foreground">{customer.company}</p>
          </div>
        </div>
        <Badge variant={customer.status === 'active' ? 'success' : 'secondary'}>
          {customer.status}
        </Badge>
      </div>

      {/* Customer Details */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{customer.email}</span>
            </div>
            {customer.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{customer.phone}</span>
              </div>
            )}
            {customer.company && (
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{customer.company}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Joined {formatDate(customer.createdAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="contact" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contact">Contact History</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        {/* Contact History */}
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact History</CardTitle>
              <CardDescription>WhatsApp and Email interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactHistory.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
                  >
                    <div className={`rounded-full p-2 ${
                      contact.type === 'whatsapp' 
                        ? 'bg-green-100 dark:bg-green-900' 
                        : 'bg-blue-100 dark:bg-blue-900'
                    }`}>
                      {contact.type === 'whatsapp' ? (
                        <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={contact.direction === 'inbound' ? 'default' : 'secondary'}>
                          {contact.direction}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDateTime(contact.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm">{contact.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents */}
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Documents</CardTitle>
              <CardDescription>{documents.length} files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(doc.size / 1024 / 1024).toFixed(2)} MB • {formatDate(doc.uploadedAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projects */}
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project History</CardTitle>
              <CardDescription>{projects.length} projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-lg border p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {project.languagePair.from} → {project.languagePair.to}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Deadline: {formatDate(project.deadline)}
                        </p>
                      </div>
                      <Badge variant={
                        project.status === 'completed' ? 'success' :
                        project.status === 'in-progress' ? 'default' :
                        'secondary'
                      }>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

