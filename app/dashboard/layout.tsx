"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Building2,
  Settings,
  Menu,
  X,
  LogOut,
  ChevronUp,
  Users,
  MessageSquare,
  Database,
  Briefcase,
  GraduationCap,
  Calendar,
  FileText,
  BarChart3,
  ClipboardList,
  ChevronDown,
} from "lucide-react"

// Main navigation with sections
const navigation = [
  { name: "Command Center", href: "/dashboard", icon: LayoutDashboard },
  { 
    name: "Outreach CRM", 
    icon: Building2,
    children: [
      { name: "All Companies", href: "/dashboard/companies" },
      { name: "Pipeline View", href: "/dashboard/pipeline" },
      { name: "Meetings", href: "/dashboard/meetings" },
      { name: "Calls", href: "/dashboard/calls" },
      { name: "Email Sequences", href: "/dashboard/sequences" },
    ]
  },
  { name: "TCC Database", href: "/dashboard/database", icon: Database },
  { 
    name: "Placements", 
    icon: Briefcase,
    children: [
      { name: "Drives", href: "/dashboard/placements/drives" },
      { name: "Roles", href: "/dashboard/placements/roles" },
      { name: "Applications", href: "/dashboard/placements/applications" },
      { name: "Shortlists", href: "/dashboard/placements/shortlists" },
      { name: "Offers", href: "/dashboard/placements/offers" },
      { name: "Analytics", href: "/dashboard/placements/analytics" },
    ]
  },
  { 
    name: "CDM (Preparation)", 
    icon: GraduationCap,
    children: [
      { name: "Students", href: "/dashboard/cdm/students" },
      { name: "Journey Modules", href: "/dashboard/cdm/modules" },
      { name: "Mentor Feedback", href: "/dashboard/cdm/feedback" },
      { name: "AI Interviews", href: "/dashboard/cdm/interviews" },
      { name: "Batch Analytics", href: "/dashboard/cdm/analytics" },
    ]
  },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Audit Log", href: "/dashboard/audit", icon: ClipboardList },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(["Outreach CRM", "Placements", "CDM (Preparation)"])

  const toggleSection = (name: string) => {
    setExpandedSections(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    )
  }

  // Don't show sidebar on onboarding
  if (pathname?.includes("/onboarding")) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="font-bold text-white text-sm">TCC</span>
          </div>
          <span className="font-semibold text-black">TCC</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar - Pure white background with black text */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-neutral-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-neutral-200">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="font-bold text-white text-sm">TCC</span>
              </div>
              <span className="font-semibold text-lg text-black">TCC Access</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
            {navigation.map((item) => {
              const hasChildren = 'children' in item && item.children
              const isExpanded = expandedSections.includes(item.name)
              const isActive = item.href ? pathname === item.href : item.children?.some(child => pathname === child.href)
              
              if (hasChildren) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleSection(item.name)}
                      className={cn(
                        "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive ? "text-black" : "text-neutral-600 hover:text-black hover:bg-neutral-100",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                    </button>
                    {isExpanded && (
                      <div className="ml-6 mt-0.5 space-y-0.5">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setSidebarOpen(false)}
                              className={cn(
                                "block px-3 py-1.5 rounded text-sm transition-colors",
                                childActive ? "bg-black text-white" : "text-neutral-600 hover:text-black hover:bg-neutral-100",
                              )}
                            >
                              {child.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-black text-white" : "text-neutral-600 hover:text-black hover:bg-neutral-100",
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Credits Widget - Light gray background with black text */}
          <div className="p-4 border-t border-neutral-200">
            <div className="bg-neutral-100 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-neutral-600">Plan</span>
                <span className="text-xs font-semibold text-black">Access + Growth</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-600">Intro Credits</span>
                    <span className="text-black">12/20</span>
                  </div>
                  <div className="h-1.5 bg-neutral-300 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "60%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-600">Outreach</span>
                    <span className="text-black">150</span>
                  </div>
                  <div className="h-1.5 bg-neutral-300 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
              <Link href="/dashboard/settings">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 h-8 text-xs border-neutral-300 text-black hover:bg-neutral-200 bg-transparent"
                >
                  <ChevronUp className="w-3 h-3 mr-1" />
                  Upgrade Plan
                </Button>
              </Link>
            </div>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-sm font-semibold">IB</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black truncate">IIM Bangalore</p>
                <p className="text-xs text-neutral-500 truncate">placement@iimb.ac.in</p>
              </div>
              <Link href="/">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-black hover:bg-neutral-100">
                  <LogOut className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - White background */}
      <main className="lg:pl-64 pt-16 lg:pt-0 min-h-screen bg-white">
        <div className="p-4 lg:p-6">{children}</div>
      </main>
    </div>
  )
}
