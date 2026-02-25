"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Search,
  Filter,
  Building2,
  MapPin,
  Users,
  IndianRupee,
  Clock,
  Send,
  Check,
  Bell,
  LayoutDashboard,
  Database,
  Settings,
  LogOut,
  ChevronDown,
  TrendingUp,
  Calendar,
} from "lucide-react"
import Link from "next/link"

const companies = [
  {
    id: 1,
    name: "Infosys",
    logo: "I",
    industry: "IT Services",
    location: "Bangalore",
    openRoles: 45,
    avgPackage: "6.5 LPA",
    hiring: true,
    status: null,
  },
  {
    id: 2,
    name: "TCS",
    logo: "T",
    industry: "IT Services",
    location: "Mumbai",
    openRoles: 120,
    avgPackage: "7.2 LPA",
    hiring: true,
    status: null,
  },
  {
    id: 3,
    name: "Wipro",
    logo: "W",
    industry: "IT Services",
    location: "Bangalore",
    openRoles: 65,
    avgPackage: "5.8 LPA",
    hiring: true,
    status: "pending",
  },
  {
    id: 4,
    name: "Reliance Industries",
    logo: "R",
    industry: "Conglomerate",
    location: "Mumbai",
    openRoles: 30,
    avgPackage: "12 LPA",
    hiring: true,
    status: "accepted",
  },
  {
    id: 5,
    name: "HDFC Bank",
    logo: "H",
    industry: "Banking",
    location: "Mumbai",
    openRoles: 80,
    avgPackage: "8 LPA",
    hiring: true,
    status: null,
  },
  {
    id: 6,
    name: "Accenture",
    logo: "A",
    industry: "Consulting",
    location: "Gurgaon",
    openRoles: 200,
    avgPackage: "9.5 LPA",
    hiring: true,
    status: "rejected",
  },
  {
    id: 7,
    name: "Deloitte",
    logo: "D",
    industry: "Consulting",
    location: "Hyderabad",
    openRoles: 55,
    avgPackage: "11 LPA",
    hiring: true,
    status: null,
  },
  {
    id: 8,
    name: "Amazon",
    logo: "A",
    industry: "E-commerce",
    location: "Bangalore",
    openRoles: 40,
    avgPackage: "18 LPA",
    hiring: true,
    status: null,
  },
]

export default function PlacementOfficerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [requestedCompanies, setRequestedCompanies] = useState<number[]>([3, 4, 6])

  const handleSendRequest = (companyId: number) => {
    setRequestedCompanies([...requestedCompanies, companyId])
  }

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            href="/placement-officer"
            className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/placement-officer/leads"
            className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Database className="w-5 h-5" />
            Lead Database
          </Link>
          <button className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors w-full text-left">
            <Calendar className="w-5 h-5" />
            Scheduled Visits
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors w-full text-left">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-foreground">PO</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">Placement Officer</div>
              <div className="text-xs text-muted-foreground">IIT Delhi</div>
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
            <h1 className="hidden md:block text-xl font-semibold text-foreground">Company Dashboard</h1>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              <div className="hidden md:flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                <span className="text-sm text-foreground">Professional Plan</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  78/300 Leads
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Send className="w-4 h-4" />
                <span className="text-xs">Requests Sent</span>
              </div>
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Check className="w-4 h-4" />
                <span className="text-xs">Accepted</span>
              </div>
              <div className="text-2xl font-bold text-primary">18</div>
              <div className="text-xs text-muted-foreground">75% success rate</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Pending</span>
              </div>
              <div className="text-2xl font-bold text-amber-600">4</div>
              <div className="text-xs text-muted-foreground">Awaiting response</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs">Visits Scheduled</span>
              </div>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-xs text-muted-foreground">Upcoming</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search companies by name or industry..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="bg-transparent">
                Industry
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid gap-4">
            {filteredCompanies.map((company) => {
              const isRequested = requestedCompanies.includes(company.id)
              return (
                <div
                  key={company.id}
                  className="bg-card border border-border rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-lg font-bold text-foreground shrink-0">
                      {company.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground">{company.name}</h3>
                        {company.hiring && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                            Actively Hiring
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {company.industry}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {company.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-foreground font-medium">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        {company.openRoles}
                      </div>
                      <div className="text-xs text-muted-foreground">Open Roles</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-foreground font-medium">
                        <IndianRupee className="w-4 h-4 text-muted-foreground" />
                        {company.avgPackage}
                      </div>
                      <div className="text-xs text-muted-foreground">Avg Package</div>
                    </div>
                    <div className="ml-auto md:ml-0">
                      {company.status === "accepted" ? (
                        <Badge className="bg-green-100 text-green-700 border-green-200">Accepted</Badge>
                      ) : company.status === "rejected" ? (
                        <Badge variant="destructive">Rejected</Badge>
                      ) : company.status === "pending" || isRequested ? (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                          Pending
                        </Badge>
                      ) : (
                        <Button size="sm" onClick={() => handleSendRequest(company.id)}>
                          <Send className="w-4 h-4 mr-2" />
                          Send Request
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
