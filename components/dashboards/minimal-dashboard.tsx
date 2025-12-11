"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ClipboardList, Users, DollarSign, TrendingUp } from "lucide-react"
import { KPIMetric } from "@/types"

interface MinimalDashboardProps {
  kpis: KPIMetric[]
}

export function MinimalDashboard({ kpis }: MinimalDashboardProps) {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Key performance indicators</p>
      </div>

      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
              {index === 0 && <FileText className="h-4 w-4 text-muted-foreground" />}
              {index === 1 && <ClipboardList className="h-4 w-4 text-muted-foreground" />}
              {index === 2 && <Users className="h-4 w-4 text-muted-foreground" />}
              {index === 3 && <DollarSign className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{kpi.value}</div>
              {kpi.change !== undefined && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                  <TrendingUp className={`h-3 w-3 ${
                    kpi.trend === 'up' ? 'text-green-600' : 
                    kpi.trend === 'down' ? 'text-red-600' : 
                    'text-muted-foreground'
                  }`} />
                  <span className={
                    kpi.trend === 'up' ? 'text-green-600' : 
                    kpi.trend === 'down' ? 'text-red-600' : 
                    'text-muted-foreground'
                  }>
                    {kpi.change > 0 ? '+' : ''}{kpi.change}%
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

