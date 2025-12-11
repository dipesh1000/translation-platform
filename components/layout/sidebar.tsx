"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  ClipboardList, 
  Settings,
  Bell,
  UserCheck
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Projects", href: "/projects", icon: FileText },
  { name: "Tasks", href: "/tasks", icon: ClipboardList },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Team", href: "/team", icon: UserCheck },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  onLinkClick?: () => void
}

export function Sidebar({ onLinkClick }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-16 items-center border-b px-4 sm:px-6">
        <h1 className="text-lg sm:text-xl font-bold truncate">Translation Platform</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 sm:px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onLinkClick}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

