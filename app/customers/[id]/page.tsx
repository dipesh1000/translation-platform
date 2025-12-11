"use client"

import { CustomerProfile } from "@/components/screens/customer-profile"
import { mockCustomers, mockContactHistory, mockProjects } from "@/lib/mock-data"

export default function CustomerPage({ params }: { params: { id: string } }) {
  const customer = mockCustomers.find(c => c.id === params.id)
  
  if (!customer) {
    return <div>Customer not found</div>
  }

  const customerProjects = mockProjects.filter(p => p.customerId === customer.id)
  const customerContacts = mockContactHistory.filter(c => c.customerId === customer.id)
  const customerDocuments = customerProjects.flatMap(p => p.files)

  return (
    <CustomerProfile
      customer={customer}
      contactHistory={customerContacts}
      projects={customerProjects}
      documents={customerDocuments}
    />
  )
}

