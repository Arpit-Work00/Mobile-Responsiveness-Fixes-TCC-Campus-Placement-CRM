"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building2,
  Search,
  Filter,
  Send,
  Calendar,
  Eye,
  Upload,
  Sparkles,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowUpRight,
  Users,
  MapPin,
  Briefcase,
} from "lucide-react"

const allCompanies = [
  {
    id: 1,
    name: "McKinsey & Company",
    sector: "Consulting",
    location: "Mumbai",
    intent: "Active",
    roles: 5,
    avgPackage: "32 LPA",
  },
  {
    id: 2,
    name: "Amazon India",
    sector: "Tech",
    location: "Bangalore",
    intent: "Active",
    roles: 12,
    avgPackage: "28 LPA",
  },
  {
    id: 3,
    name: "Flipkart",
    sector: "E-commerce",
    location: "Bangalore",
    intent: "Active",
    roles: 8,
    avgPackage: "24 LPA",
  },
  {
    id: 4,
    name: "Deloitte",
    sector: "Consulting",
    location: "Multiple",
    intent: "Passive",
    roles: 15,
    avgPackage: "18 LPA",
  },
  { id: 5, name: "HDFC Bank", sector: "BFSI", location: "Mumbai", intent: "Active", roles: 10, avgPackage: "16 LPA" },
  {
    id: 6,
    name: "Tata Steel",
    sector: "Manufacturing",
    location: "Jamshedpur",
    intent: "Passive",
    roles: 4,
    avgPackage: "22 LPA",
  },
  {
    id: 7,
    name: "Hindustan Unilever",
    sector: "FMCG",
    location: "Mumbai",
    intent: "Active",
    roles: 6,
    avgPackage: "20 LPA",
  },
  {
    id: 8,
    name: "Google India",
    sector: "Tech",
    location: "Bangalore",
    intent: "Passive",
    roles: 3,
    avgPackage: "45 LPA",
  },
]

const previousRecruiters = [
  { id: 1, name: "Accenture", sector: "Consulting", lastYear: "2023-24", status: "Returning", hires: 12 },
  { id: 2, name: "Infosys", sector: "Tech", lastYear: "2023-24", status: "Returning", hires: 8 },
  { id: 3, name: "TCS", sector: "Tech", lastYear: "2022-23", status: "Dormant", hires: 15 },
  { id: 4, name: "Wipro", sector: "Tech", lastYear: "2021-22", status: "Lost", hires: 5 },
]

const suggestedCompanies = [
  { id: 1, name: "Bain & Company", sector: "Consulting", reason: "Similar campuses hired", match: 92 },
  { id: 2, name: "Microsoft India", sector: "Tech", reason: "Skill match with batch", match: 88 },
  { id: 3, name: "Procter & Gamble", sector: "FMCG", reason: "Sector alignment", match: 85 },
]

const outreachHistory = [
  { company: "McKinsey & Company", sent: "Oct 5", response: "Accepted", status: "Meeting Scheduled" },
  { company: "Amazon India", sent: "Oct 3", response: "Accepted", status: "Role Discussion" },
  { company: "Deloitte", sent: "Oct 1", response: "No Response", status: "Follow-up Due" },
  { company: "Flipkart", sent: "Sep 28", response: "Rejected", status: "Closed" },
]

export default function OutreachClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sectorFilter, setSectorFilter] = useState("all")
  const [outreachOpen, setOutreachOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)

  const filteredCompanies = allCompanies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSector = sectorFilter === "all" || company.sector === sectorFilter
    return matchesSearch && matchesSector
  })

  const handleSendOutreach = (companyName: string) => {
    setSelectedCompany(companyName)
    setOutreachOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Company Outreach & Engagement</h1>
        <p className="text-muted-foreground">Discover, engage, and track hiring companies</p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="all">All Companies</TabsTrigger>
          <TabsTrigger value="previous">Previous Recruiters</TabsTrigger>
          <TabsTrigger value="suggested">Suggested</TabsTrigger>
          <TabsTrigger value="tracker">Outreach Tracker</TabsTrigger>
        </TabsList>

        {/* All Companies Tab */}
        <TabsContent value="all" className="space-y-4">
          {/* Search & Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={sectorFilter} onValueChange={setSectorFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sectors</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="FMCG">FMCG</SelectItem>
                    <SelectItem value="BFSI">BFSI</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Company List */}
          <div className="grid gap-4">
            {filteredCompanies.map((company) => (
              <Card key={company.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">{company.name}</h3>
                          <Badge
                            variant={company.intent === "Active" ? "default" : "secondary"}
                            className={company.intent === "Active" ? "bg-foreground text-background" : ""}
                          >
                            {company.intent}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {company.sector}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {company.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {company.roles} roles
                          </span>
                          <span className="font-medium text-foreground">{company.avgPackage}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:flex-shrink-0">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="bg-foreground text-background hover:bg-foreground/90"
                        onClick={() => handleSendOutreach(company.name)}
                      >
                        <Send className="w-4 h-4 mr-1" />
                        Outreach
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Calendar className="w-4 h-4 mr-1" />
                        Meeting
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Previous Recruiters Tab */}
        <TabsContent value="previous" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Previous Recruiters</CardTitle>
              <CardDescription>Track continuity and gaps from past placement seasons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-6">
                <Button variant="outline" className="bg-transparent">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Last Year's List
                </Button>
              </div>
              <div className="space-y-3">
                {previousRecruiters.map((recruiter) => (
                  <div key={recruiter.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{recruiter.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {recruiter.sector} | Last: {recruiter.lastYear} | {recruiter.hires} hires
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        recruiter.status === "Returning"
                          ? "bg-foreground text-background"
                          : recruiter.status === "Dormant"
                            ? "bg-secondary text-foreground"
                            : "bg-border text-muted-foreground"
                      }
                    >
                      {recruiter.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Suggested Companies Tab */}
        <TabsContent value="suggested" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Suggested Companies Based on Your Profile
              </CardTitle>
              <CardDescription>
                Companies matched based on similar campuses, skill alignment, and sector fit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestedCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground">{company.name}</p>
                          <Badge variant="secondary" className="bg-foreground text-background">
                            {company.match}% match
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {company.sector} | {company.reason}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-foreground text-background hover:bg-foreground/90"
                      onClick={() => handleSendOutreach(company.name)}
                    >
                      <Send className="w-4 h-4 mr-1" />
                      Reach Out
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Outreach Tracker Tab */}
        <TabsContent value="tracker" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Outreach Tracker</CardTitle>
              <CardDescription>Track all your corporate communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-sm font-medium text-muted-foreground">Company</th>
                      <th className="text-left py-3 text-sm font-medium text-muted-foreground">Message Sent</th>
                      <th className="text-left py-3 text-sm font-medium text-muted-foreground">Response</th>
                      <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-right py-3 text-sm font-medium text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outreachHistory.map((item, idx) => (
                      <tr key={idx} className="border-b border-border last:border-0">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">{item.company}</span>
                          </div>
                        </td>
                        <td className="py-3 text-sm text-muted-foreground">{item.sent}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-1">
                            {item.response === "Accepted" && <CheckCircle2 className="w-4 h-4 text-foreground" />}
                            {item.response === "No Response" && <Clock className="w-4 h-4 text-muted-foreground" />}
                            {item.response === "Rejected" && <XCircle className="w-4 h-4 text-muted-foreground" />}
                            <span className="text-sm text-foreground">{item.response}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <Badge
                            variant="secondary"
                            className={
                              item.status === "Meeting Scheduled" || item.status === "Role Discussion"
                                ? "bg-foreground text-background"
                                : ""
                            }
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3 text-right">
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Outreach Dialog */}
      <Dialog open={outreachOpen} onOpenChange={setOutreachOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Send Corporate Outreach</DialogTitle>
            <DialogDescription>Create and send an invitation to {selectedCompany}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Select Program / Batch Profile</Label>
              <Select defaultValue="mba">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mba">MBA Class of 2025</SelectItem>
                  <SelectItem value="epgp">EPGP Class of 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea
                placeholder="Write your outreach message..."
                className="min-h-[120px]"
                defaultValue={`Dear Hiring Team,\n\nWe would like to invite ${selectedCompany} for campus placements at IIM Bangalore for the 2024-25 season.\n\nOur batch profile is attached for your review.\n\nLooking forward to your response.`}
              />
            </div>
            <div className="space-y-2">
              <Label>Request Type</Label>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Meeting
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  PPT
                </Button>
                <Button variant="outline" size="sm" className="bg-foreground text-background">
                  Role Discussion
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-foreground" />
              <span className="text-sm text-muted-foreground">Batch Profile Link will be attached automatically</span>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setOutreachOpen(false)}>
                Cancel
              </Button>
              <Button
                className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                onClick={() => setOutreachOpen(false)}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
