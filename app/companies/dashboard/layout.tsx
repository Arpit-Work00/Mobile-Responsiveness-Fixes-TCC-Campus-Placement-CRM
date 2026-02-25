"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  FileText,
  Users,
  Filter,
  Calendar,
  GitBranch,
  FolderKanban,
  UserCheck,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/companies/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/companies/dashboard/explore", label: "Explore & Compare", icon: Building2 },
  { href: "/companies/dashboard/roles", label: "Post Role", icon: FileText },
  { href: "/companies/dashboard/applications", label: "Applications", icon: Users },
  { href: "/companies/dashboard/screening", label: "Screening", icon: Filter },
  { href: "/companies/dashboard/interviews", label: "Interviews", icon: Calendar },
  { href: "/companies/dashboard/pipeline", label: "Pipeline", icon: GitBranch },
  { href: "/companies/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/companies/dashboard/laterals", label: "Laterals", icon: UserCheck },
  { href: "/companies/dashboard/settings", label: "Settings", icon: Settings },
]

export default function CompanyDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-200 flex flex-col">
        <div className="p-6 border-b border-neutral-200">
          <Link href="/companies" className="text-xl font-semibold text-black">
            TCC
          </Link>
          <p className="text-xs text-neutral-500 mt-1">Company Console</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive ? "bg-black text-white" : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-sm font-medium">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-black">Acme Technologies</p>
              <p className="text-xs text-neutral-500">Free Plan</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent" asChild>
            <Link href="/companies">
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
