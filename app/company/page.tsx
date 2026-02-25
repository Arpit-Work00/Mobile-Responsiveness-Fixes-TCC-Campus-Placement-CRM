"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Users,
  Calendar,
  Check,
  X,
  Clock,
  Bell,
  LayoutDashboard,
  Settings,
  LogOut,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

const incomingRequests = [
  {
    id: 1,
    collegeName: "IIT Delhi",
    location: "New Delhi",
    tier: "Tier 1",
    studentsCount: 850,
    avgPlacement: "92%",
    requestDate: "Dec 20, 2025",
    visitType: "Internship + Placement",
    status: "pending",
  },
  {
    id: 2,
    collegeName: "NIT Trichy",
    location: "Tiruchirappalli",
    tier: "Tier 1",
    studentsCount: 620,
    avgPlacement: "88%",
    requestDate: "Dec 19, 2025",
    visitType: "Placement",
    status: "pending",
  },
  {
    id: 3,
    collegeName: "BITS Pilani",
    location: "Pilani",
    tier: "Tier 1",
    studentsCount: 780,
    avgPlacement: "90%",
    requestDate: "Dec 18, 2025",
    visitType: "Internship",
    status: "pending",
  },
  {
    id: 4,
    collegeName: "VIT Vellore",
    location: "Vellore",
    tier: "Tier 2",
    studentsCount: 1200,
    avgPlacement: "78%",
    requestDate: "Dec 17, 2025",
    visitType: "Placement",
    status: "pending",
  },
  {
    id: 5,
    collegeName: "SRM Chennai",
    location: "Chennai",
    tier: "Tier 2",
    studentsCount: 950,
    avgPlacement: "72%",
    requestDate: "Dec 16, 2025",
    visitType: "Internship + Placement",
    status: "accepted",
  },
  {
    id: 6,
    collegeName: "IIIT Hyderabad",
    location: "Hyderabad",
    tier: "Tier 1",
    studentsCount: 420,
    avgPlacement: "95%",
    requestDate: "Dec 15, 2025",
    visitType: "Placement",
    status: "accepted",
  },
]

export default function CompanyDashboard() {
  const [requests, setRequests] = useState(incomingRequests)

  const handleAccept = (id: number) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "accepted" } : req)))
  }

  const handleReject = (id: number) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "rejected" } : req)))
  }

  const pendingRequests = requests.filter((r) => r.status === "pending")
  const acceptedRequests = requests.filter((r) => r.status === "accepted")

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">CampusConnect</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/company"
            className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <button className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors w-full text-left">
            <Calendar className="w-5 h-5" />
            Scheduled Visits
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors w-full text-left">
            <GraduationCap className="w-5 h-5" />
            Past Colleges
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors w-full text-left">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">T</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">TCS HR Team</div>
              <div className="text-xs text-muted-foreground">IT Services</div>
            </div>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-4 md:px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="md:hidden flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <h1 className="hidden md:block text-xl font-semibold text-foreground">Campus Requests</h1>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                  {pendingRequests.length}
                </span>
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Pending Requests</span>
              </div>
              <div className="text-2xl font-bold text-amber-600">{pendingRequests.length}</div>
              <div className="text-xs text-muted-foreground">Awaiting your response</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs">Accepted</span>
              </div>
              <div className="text-2xl font-bold text-primary">{acceptedRequests.length}</div>
              <div className="text-xs text-muted-foreground">This season</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-xs">Upcoming Visits</span>
              </div>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-xs text-muted-foreground">Scheduled</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs">Hires Made</span>
              </div>
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-xs text-muted-foreground">This year</div>
            </div>
          </div>

          {/* Pending Requests Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              Pending Requests ({pendingRequests.length})
            </h2>
            <div className="grid gap-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="bg-card border border-border rounded-xl p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">{request.collegeName}</h3>
                          <Badge
                            variant="secondary"
                            className={
                              request.tier === "Tier 1" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }
                          >
                            {request.tier}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {request.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {request.studentsCount} students
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {request.avgPlacement} placement
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                      <div className="text-left md:text-right">
                        <Badge variant="outline" className="mb-1">
                          {request.visitType}
                        </Badge>
                        <div className="text-xs text-muted-foreground">Requested {request.requestDate}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                          onClick={() => handleReject(request.id)}
                        >
                          <X className="w-4 h-4 mr-1" />
                          Decline
                        </Button>
                        <Button size="sm" onClick={() => handleAccept(request.id)}>
                          <Check className="w-4 h-4 mr-1" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accepted Requests Section */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Accepted ({acceptedRequests.length})
            </h2>
            <div className="grid gap-4">
              {acceptedRequests.map((request) => (
                <div key={request.id} className="bg-card border border-primary/20 rounded-xl p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">{request.collegeName}</h3>
                          <Badge
                            variant="secondary"
                            className={
                              request.tier === "Tier 1" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }
                          >
                            {request.tier}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {request.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {request.studentsCount} students
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {request.avgPlacement} placement
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{request.visitType}</Badge>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Calendar className="w-4 h-4 mr-1" />
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
