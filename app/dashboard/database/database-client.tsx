"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, Calendar, Phone, Mail, Linkedin, Copy, CheckCircle2, Sparkles, X } from "lucide-react"

const companyDatabase = [
  {
    id: 1,
    name: "Accenture Strategy",
    sector: "Consulting",
    size: "5000+",
    location: "Bangalore",
    confidence: "high",
    recruiterName: "Anjali Mehta",
    recruiterTitle: "Campus Hiring Lead",
    email: "anjali.mehta@accenture.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/in/anjalimehta",
    pastCampusHiring: ["IIM A", "IIM B", "IIM C", "XLRI"],
    publicRoles: ["Management Consultant", "Business Analyst"],
    lastHiring: "2024",
    relevanceScore: 95,
  },
  {
    id: 2,
    name: "Bain & Company",
    sector: "Consulting",
    size: "3000+",
    location: "Mumbai",
    confidence: "high",
    recruiterName: "Rahul Verma",
    recruiterTitle: "Talent Acquisition Manager",
    email: "rahul.verma@bain.com",
    phone: "+91 98765 43211",
    linkedin: "linkedin.com/in/rahulverma",
    pastCampusHiring: ["IIM A", "IIM B", "ISB"],
    publicRoles: ["Associate Consultant"],
    lastHiring: "2024",
    relevanceScore: 92,
  },
  {
    id: 3,
    name: "Boston Consulting Group",
    sector: "Consulting",
    size: "8000+",
    location: "Gurgaon",
    confidence: "medium",
    recruiterName: "Priya Sharma",
    recruiterTitle: "HR Business Partner",
    email: "priya.sharma@bcg.com",
    phone: "+91 98765 43212",
    linkedin: "linkedin.com/in/priyasharma",
    pastCampusHiring: ["IIM A", "IIM B", "IIM C"],
    publicRoles: ["Consultant", "Associate"],
    lastHiring: "2023",
    relevanceScore: 88,
  },
  {
    id: 4,
    name: "Goldman Sachs",
    sector: "Finance",
    size: "10000+",
    location: "Bangalore",
    confidence: "high",
    recruiterName: "Sneha Reddy",
    recruiterTitle: "University Recruiting Lead",
    email: "sneha.reddy@gs.com",
    phone: "+91 98765 43213",
    linkedin: "linkedin.com/in/snehareddy",
    pastCampusHiring: ["IIM A", "IIM B", "IIM C", "ISB"],
    publicRoles: ["Analyst", "Associate"],
    lastHiring: "2024",
    relevanceScore: 94,
  },
  {
    id: 5,
    name: "Amazon India",
    sector: "Tech",
    size: "50000+",
    location: "Bangalore",
    confidence: "medium",
    recruiterName: "Karan Singh",
    recruiterTitle: "Campus Recruiter",
    email: "karan.singh@amazon.in",
    phone: "+91 98765 43214",
    linkedin: "linkedin.com/in/karansingh",
    pastCampusHiring: ["IIM A", "IIM B", "IIT D", "IIT B"],
    publicRoles: ["Product Manager", "Business Analyst"],
    lastHiring: "2024",
    relevanceScore: 90,
  },
]

const meetingRequests = [
  {
    id: 1,
    company: "McKinsey & Company",
    type: "Guest Session",
    requestedDate: "March 15, 2025",
    status: "confirmed",
    creditUsed: 1,
    requestedBy: "Rahul Sharma",
    requestedOn: "March 1, 2025",
    notes: "Pre-placement talk confirmed. Venue: Auditorium A",
  },
  {
    id: 2,
    company: "Amazon India",
    type: "Campus Visit Discussion",
    requestedDate: "March 20, 2025",
    status: "pending",
    creditUsed: 1,
    requestedBy: "Priya Patel",
    requestedOn: "March 5, 2025",
    notes: "Waiting for confirmation on dates",
  },
  {
    id: 3,
    company: "Bain & Company",
    type: "Role Discussion",
    requestedDate: "March 18, 2025",
    status: "scheduled",
    creditUsed: 1,
    requestedBy: "Neha Sharma",
    requestedOn: "March 3, 2025",
    notes: "Virtual meeting scheduled via Zoom",
  },
  {
    id: 4,
    company: "Goldman Sachs",
    type: "Introduction Call",
    requestedDate: "March 12, 2025",
    status: "completed",
    creditUsed: 1,
    requestedBy: "Amit Kumar",
    requestedOn: "Feb 28, 2025",
    notes: "Successful intro call. Moving to formal process.",
  },
]

export default function DatabaseClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<string>("")
  const [copiedField, setCopiedField] = useState<string>("")

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(""), 2000)
  }

  const handleRequestMeeting = (companyName: string) => {
    setSelectedCompany(companyName)
    setShowRequestModal(true)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-black text-white"
      case "scheduled":
        return "bg-neutral-600 text-white"
      case "pending":
        return "bg-neutral-400 text-white"
      case "completed":
        return "bg-neutral-200 text-black"
      default:
        return "bg-neutral-100 text-black"
    }
  }

  const getConfidenceBadge = (confidence: string) => {
    switch (confidence) {
      case "high":
        return "bg-black text-white"
      case "medium":
        return "bg-neutral-500 text-white"
      case "low":
        return "bg-neutral-300 text-black"
      default:
        return "bg-neutral-100 text-black"
    }
  }

  const filteredCompanies = companyDatabase.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Premium Database & Meeting Requests</h1>
          <p className="text-sm text-neutral-600 mt-1">
            Verified recruiter contacts with facilitated meeting introductions
          </p>
        </div>
        <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
          <Sparkles className="w-4 h-4" />
          <div className="text-sm">
            <div className="font-semibold">12 / 20 Credits Remaining</div>
            <div className="text-xs opacity-80">Meeting requests</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="database" className="w-full">
        <TabsList className="w-full justify-start border-b border-neutral-200 bg-transparent rounded-none h-auto p-0">
          <TabsTrigger
            value="database"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            Company Database
          </TabsTrigger>
          <TabsTrigger
            value="requests"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            Meeting Requests
          </TabsTrigger>
        </TabsList>

        {/* Database Tab */}
        <TabsContent value="database" className="mt-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-neutral-300"
              />
            </div>
          </div>

          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Sector</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Size</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Relevance</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-black uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredCompanies.map((company) => (
                  <tr key={company.id}>
                    <td className="px-4 py-4">
                      <div>
                        <div className="font-semibold text-black mb-1">{company.name}</div>
                        <div className="text-xs text-neutral-600 mb-2">{company.location}</div>

                        {/* Recruiter Details */}
                        <div className="space-y-2 mt-2 pt-2 border-t border-neutral-100">
                          <div className="text-xs font-semibold text-black">{company.recruiterName}</div>
                          <div className="text-xs text-neutral-500">{company.recruiterTitle}</div>

                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-neutral-400" />
                            <span className="text-xs text-neutral-600">{company.email}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopy(company.email, `email-${company.id}`)}
                              className="h-5 w-5 p-0 text-black hover:bg-neutral-100"
                            >
                              {copiedField === `email-${company.id}` ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </Button>
                          </div>

                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-neutral-400" />
                            <span className="text-xs text-neutral-600">{company.phone}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopy(company.phone, `phone-${company.id}`)}
                              className="h-5 w-5 p-0 text-black hover:bg-neutral-100"
                            >
                              {copiedField === `phone-${company.id}` ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </Button>
                          </div>

                          <div className="flex items-center gap-2">
                            <Linkedin className="w-3 h-3 text-neutral-400" />
                            <a
                              href={`https://${company.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-neutral-600 hover:underline"
                            >
                              LinkedIn Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-neutral-600">{company.sector}</td>
                    <td className="px-4 py-4 text-sm text-neutral-600">{company.size}</td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-2xl font-bold text-black">{company.relevanceScore}</div>
                        <Badge className={`text-xs ${getConfidenceBadge(company.confidence)}`}>
                          {company.confidence} confidence
                        </Badge>
                      </div>
                      <div className="text-xs text-neutral-500 mt-2">Last hiring: {company.lastHiring}</div>
                      <div className="text-xs text-neutral-500 mt-1">
                        Campuses: {company.pastCampusHiring.slice(0, 2).join(", ")}
                        {company.pastCampusHiring.length > 2 && ` +${company.pastCampusHiring.length - 2}`}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Button
                        size="sm"
                        onClick={() => handleRequestMeeting(company.name)}
                        className="bg-black text-white hover:bg-neutral-800"
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        Request Meeting
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Meeting Requests Tab */}
        <TabsContent value="requests" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Requested Date</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Requested By</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {meetingRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{request.company}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{request.type}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{request.requestedDate}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={`text-xs font-medium ${getStatusBadge(request.status)}`}>
                        {request.status.toUpperCase()}
                      </Badge>
                      <div className="text-xs text-neutral-500 mt-1">Credit: {request.creditUsed}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600">
                      {request.requestedBy}
                      <div className="text-xs text-neutral-500">{request.requestedOn}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-md">{request.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Meeting Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg border border-neutral-200">
            <CardHeader className="border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-black">Request Meeting</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowRequestModal(false)}
                  className="h-8 w-8 p-0 text-black hover:bg-neutral-100"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-black mb-2 block">Company</label>
                  <Input value={selectedCompany} disabled className="bg-neutral-50" />
                </div>

                <div>
                  <label className="text-sm font-medium text-black mb-2 block">Meeting Type</label>
                  <Select>
                    <SelectTrigger className="border-neutral-300">
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="intro">Introduction Call</SelectItem>
                      <SelectItem value="guest">Guest Session</SelectItem>
                      <SelectItem value="visit">Campus Visit Discussion</SelectItem>
                      <SelectItem value="role">Role Discussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-black mb-2 block">Preferred Date</label>
                  <Input type="date" className="border-neutral-300" />
                </div>

                <div>
                  <label className="text-sm font-medium text-black mb-2 block">Additional Notes</label>
                  <Textarea
                    placeholder="Any specific requirements or topics to discuss..."
                    className="border-neutral-300"
                    rows={4}
                  />
                </div>

                <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Credit Cost</span>
                    <span className="font-bold text-black">1 Meeting Credit</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-neutral-600">Remaining After Request</span>
                    <span className="font-bold text-black">11 Credits</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setShowRequestModal(false)}
                    className="flex-1 bg-black text-white hover:bg-neutral-800"
                  >
                    Submit Request
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowRequestModal(false)}
                    className="flex-1 border-neutral-300 text-black hover:bg-neutral-100"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
