"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileText,
  Briefcase,
  Settings,
  Menu,
  X,
  LogOut,
  ChevronUp,
  GraduationCap,
  Calendar,
  MessageSquare,
} from "lucide-react"

const navigation = [
  { name: "My Dashboard", href: "/student", icon: LayoutDashboard },
  { name: "My Applications", href: "/student/applications", icon: Briefcase },
  { name: "Open Roles", href: "/student/jobs", icon: Briefcase },
  { name: "Learning Journey", href: "/student/modules", icon: BookOpen },
  { name: "Mock Interviews", href: "/student/interviews", icon: Video },
  { name: "My Resume", href: "/student/resume", icon: FileText },
  { name: "Mentor Sessions", href: "/student/mentors", icon: MessageSquare },
  { name: "Calendar", href: "/student/calendar", icon: Calendar },
  { name: "Settings", href: "/student/settings", icon: Settings },
]

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
        <Link href="/student" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-black">TCC Student</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-neutral-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-neutral-200">
            <Link href="/student" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg text-black">TCC Student</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-black text-white" : "text-neutral-600 hover:text-black hover:bg-neutral-100",
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-neutral-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-black font-semibold">
                AM
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black truncate">Arjun Mehta</p>
                <p className="text-xs text-neutral-500 truncate">IIM Bangalore | PGP 2025</p>
              </div>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-black">
                <ChevronUp className="w-4 h-4" />
              </Button>
            </div>
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="w-full border-neutral-300 text-neutral-600 hover:text-black hover:bg-neutral-100 bg-transparent">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 lg:p-6">{children}</div>
      </main>
    </div>
  )
}
