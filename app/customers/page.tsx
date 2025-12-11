"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { mockCustomers } from "@/lib/mock-data"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default function CustomersPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Customers</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Manage your customer relationships</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mockCustomers.map((customer) => (
          <Link key={customer.id} href={`/customers/${customer.id}`}>
            <Card className="transition-all hover:shadow-lg cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle>{customer.name}</CardTitle>
                    <CardDescription>{customer.company}</CardDescription>
                  </div>
                  <Badge variant={customer.status === 'active' ? 'success' : 'secondary'}>
                    {customer.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{customer.email}</p>
                  {customer.phone && <p className="text-muted-foreground">{customer.phone}</p>}
                  <p className="text-muted-foreground">
                    {customer.totalProjects} projects • Joined {formatDate(customer.createdAt)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

