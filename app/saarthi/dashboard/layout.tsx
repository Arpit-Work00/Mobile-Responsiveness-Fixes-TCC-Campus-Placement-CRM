import type React from "react"
import Link from "next/link"
import { Home, Briefcase, FileText, Target, Settings, User } from "lucide-react"

export default function SaarthiDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Saarthi
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/saarthi/dashboard" className="text-sm hover:text-gray-600">
                Dashboard
              </Link>
              <Link href="/saarthi/auth/login" className="text-sm hover:text-gray-600">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 border-r border-gray-200 min-h-screen p-6">
          <nav className="space-y-2">
            <Link href="/saarthi/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/saarthi/dashboard/opportunities"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <Briefcase className="h-5 w-5" />
              <span>Opportunities</span>
            </Link>
            <Link
              href="/saarthi/dashboard/applications"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <FileText className="h-5 w-5" />
              <span>My Applications</span>
            </Link>
            <Link
              href="/saarthi/dashboard/prepare"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <Target className="h-5 w-5" />
              <span>Prepare</span>
            </Link>
            <Link
              href="/saarthi/dashboard/profile"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link
              href="/saarthi/dashboard/settings"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
