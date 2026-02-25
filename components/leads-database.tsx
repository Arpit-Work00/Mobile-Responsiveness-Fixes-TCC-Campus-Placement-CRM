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
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Lock,
  Bell,
  LayoutDashboard,
  Database,
  Settings,
  LogOut,
  ChevronDown,
  Calendar,
  Copy,
  Check,
} from "lucide-react"
import Link from "next/link"

const leads = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Head of Campus Recruitment",
    company: "Infosys",
    email: "priya.sharma@infosys.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/in/priyasharma",
    industry: "IT Services",
    isUnlocked: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "HR Director",
    company: "TCS",
    email: "rajesh.k@tcs.com",
    phone: "+91 98765 43211",
    linkedin: "linkedin.com/in/rajeshkumar",
    industry: "IT Services",
    isUnlocked: true,
  },
  {
    id: 3,
    name: "Anita Verma",
    title: "Talent Acquisition Lead",
    company: "Amazon India",
    email: "a••••@amazon.com",
    phone: "+91 •••••••••••",
    linkedin: "locked",
    industry: "E-commerce",
    isUnlocked: false,
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "Campus Relations Manager",
    company: "Microsoft",
    email: "v••••@microsoft.com",
    phone: "+91 •••••••••••",
    linkedin: "locked",
    industry: "Technology",
    isUnlocked: false,
  },
  {
    id: 5,
    name: "Sneha Patel",
    title: "University Programs Head",
    company: "Google",
    email: "s••••@google.com",
    phone: "+91 •••••••••••",
    linkedin: "locked",
    industry: "Technology",
    isUnlocked: false,
  },
  {
    id: 6,
    name: "Amit Joshi",
    title: "HR Manager - Fresher Hiring",
    company: "Wipro",
    email: "amit.j@wipro.com",
    phone: "+91 98765 43215",
    linkedin: "linkedin.com/in/amitjoshi",
    industry: "IT Services",
    isUnlocked: true,
  },
  {
    id: 7,
    name: "Kavita Reddy",
    title: "Director of Campus Hiring",
    company: "Deloitte",
    email: "k••••@deloitte.com",
    phone: "+91 •••••••••••",
    linkedin: "locked",
    industry: "Consulting",
    isUnlocked: false,
  },
  {
    id: 8,
    name: "Suresh Menon",
    title: "Campus Recruitment Lead",
    company: "Accenture",
    email: "suresh.m@accenture.com",
    phone: "+91 98765 43217",
    linkedin: "linkedin.com/in/sureshmenon",
    industry: "Consulting",
    isUnlocked: true,
  },
]

export default function LeadsDatabase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [unlockedLeads, setUnlockedLeads] = useState<number[]>(leads.filter((l) => l.isUnlocked).map((l) => l.id))
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const usedLeads = unlockedLeads.length
  const totalLeads = 300

  const handleUnlock = (leadId: number) => {
    if (usedLeads < totalLeads) {
      setUnlockedLeads([...unlockedLeads, leadId])
    }
  }

  const handleCopy = (text: string, leadId: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(leadId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.industry.toLowerCase().includes(searchQuery.toLowerCase()),
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
            className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/placement-officer/leads"
            className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
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
            <h1 className="hidden md:block text-xl font-semibold text-foreground">Lead Database</h1>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="hidden md:flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                <span className="text-sm text-foreground">Professional Plan</span>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {usedLeads}/{totalLeads} Leads
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {/* Lead Usage Card */}
          <div className="bg-card border border-border rounded-xl p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-semibold text-foreground">Lead Credits</h2>
                <p className="text-sm text-muted-foreground">
                  You have used {usedLeads} out of {totalLeads} leads this year
                </p>
              </div>
              <div className="flex-1 max-w-md">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(usedLeads / totalLeads) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>{usedLeads} used</span>
                  <span>{totalLeads - usedLeads} remaining</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, company, or industry..."
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

          {/* Leads List */}
          <div className="grid gap-4">
            {filteredLeads.map((lead) => {
              const isUnlocked = unlockedLeads.includes(lead.id)
              return (
                <div
                  key={lead.id}
                  className={`bg-card border rounded-xl p-4 md:p-5 ${
                    isUnlocked ? "border-border" : "border-dashed border-muted-foreground/30"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-lg font-bold text-foreground shrink-0">
                        {lead.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">{lead.name}</h3>
                          {!isUnlocked && (
                            <Badge variant="outline" className="text-muted-foreground">
                              <Lock className="w-3 h-3 mr-1" />
                              Locked
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{lead.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-3 h-3 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{lead.company}</span>
                          <Badge variant="secondary" className="text-xs">
                            {lead.industry}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {isUnlocked ? (
                        <>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                            <span className="text-foreground">{lead.email}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => handleCopy(lead.email, lead.id)}
                            >
                              {copiedId === lead.id ? (
                                <Check className="w-3 h-3 text-primary" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </Button>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                            <span className="text-foreground">{lead.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Linkedin className="w-4 h-4 text-muted-foreground shrink-0" />
                            <a href="#" className="text-primary hover:underline flex items-center gap-1">
                              {lead.linkedin}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-end gap-2">
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            {lead.email}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {lead.phone}
                          </div>
                          <Button size="sm" onClick={() => handleUnlock(lead.id)} className="mt-2">
                            <Lock className="w-4 h-4 mr-2" />
                            Unlock Contact
                          </Button>
                        </div>
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
