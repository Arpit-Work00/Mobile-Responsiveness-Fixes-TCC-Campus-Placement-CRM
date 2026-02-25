"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, ChevronDown, Check, X, Clock, Filter, Download, Mail, Phone, Calendar } from "lucide-react"

type ApplicationStatus = "all" | "new" | "shortlisted" | "interviewed" | "offered" | "rejected"

const applications = [
  {
    id: 1,
    name: "Priya Sharma",
    campus: "IIM Bangalore",
    program: "MBA",
    experience: "3 years",
    company: "TCS",
    skills: ["Product Strategy", "SQL", "Agile"],
    appliedDate: "2024-01-15",
    status: "new",
    email: "priya@example.com",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Rahul Verma",
    campus: "IIM Ahmedabad",
    program: "PGPX",
    experience: "5 years",
    company: "Infosys",
    skills: ["Data Analytics", "Python", "Leadership"],
    appliedDate: "2024-01-14",
    status: "shortlisted",
    email: "rahul@example.com",
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    campus: "ISB Hyderabad",
    program: "PGP",
    experience: "4 years",
    company: "Flipkart",
    skills: ["Product Management", "UX", "Growth"],
    appliedDate: "2024-01-16",
    status: "interviewed",
    email: "ananya@example.com",
    phone: "+91 98765 43212",
  },
  {
    id: 4,
    name: "Vikram Singh",
    campus: "XLRI Jamshedpur",
    program: "BM",
    experience: "2 years",
    company: "HUL",
    skills: ["Marketing", "Brand Strategy", "Analytics"],
    appliedDate: "2024-01-13",
    status: "new",
    email: "vikram@example.com",
    phone: "+91 98765 43213",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    campus: "FMS Delhi",
    program: "MBA",
    experience: "3 years",
    company: "Deloitte",
    skills: ["Consulting", "Strategy", "Excel"],
    appliedDate: "2024-01-12",
    status: "rejected",
    email: "sneha@example.com",
    phone: "+91 98765 43214",
  },
  {
    id: 6,
    name: "Arjun Patel",
    campus: "IIM Calcutta",
    program: "MBA",
    experience: "2 years",
    company: "Goldman Sachs",
    skills: ["Finance", "Valuation", "Modeling"],
    appliedDate: "2024-01-17",
    status: "offered",
    email: "arjun@example.com",
    phone: "+91 98765 43215",
  },
]

export default function ApplicationsClient() {
  const [activeTab, setActiveTab] = useState<ApplicationStatus>("all")
  const [search, setSearch] = useState("")
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null)
  const [appStatuses, setAppStatuses] = useState<Record<number, string>>(
    Object.fromEntries(applications.map((a) => [a.id, a.status])),
  )
  const [selectedApps, setSelectedApps] = useState<number[]>([])

  const updateStatus = (id: number, status: string) => {
    setAppStatuses((prev) => ({ ...prev, [id]: status }))
  }

  const toggleSelect = (id: number) => {
    setSelectedApps((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) || app.campus.toLowerCase().includes(search.toLowerCase())
    const matchesCampus = !selectedCampus || app.campus === selectedCampus
    const currentStatus = appStatuses[app.id]
    if (activeTab === "all") return matchesSearch && matchesCampus
    return matchesSearch && matchesCampus && currentStatus === activeTab
  })

  const counts = {
    all: applications.length,
    new: Object.values(appStatuses).filter((s) => s === "new").length,
    shortlisted: Object.values(appStatuses).filter((s) => s === "shortlisted").length,
    interviewed: Object.values(appStatuses).filter((s) => s === "interviewed").length,
    offered: Object.values(appStatuses).filter((s) => s === "offered").length,
    rejected: Object.values(appStatuses).filter((s) => s === "rejected").length,
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-1">Application Tracking System</h1>
          <p className="text-sm text-neutral-600">
            {filteredApps.length} applications • {selectedApps.length} selected
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-transparent">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          {selectedApps.length > 0 && (
            <Button className="bg-black text-white hover:bg-neutral-800">Bulk Action ({selectedApps.length})</Button>
          )}
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {(["all", "new", "shortlisted", "interviewed", "offered", "rejected"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs rounded-lg border capitalize ${
              activeTab === tab
                ? "bg-black text-white border-black"
                : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
            }`}
          >
            {tab} ({counts[tab]})
          </button>
        ))}
      </div>

      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            placeholder="Search by name or campus..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCampus || ""}
          onChange={(e) => setSelectedCampus(e.target.value || null)}
          className="px-4 py-2 border border-neutral-200 rounded-lg text-sm"
        >
          <option value="">All Campuses</option>
          <option value="IIM Bangalore">IIM Bangalore</option>
          <option value="IIM Ahmedabad">IIM Ahmedabad</option>
          <option value="ISB Hyderabad">ISB Hyderabad</option>
          <option value="XLRI Jamshedpur">XLRI Jamshedpur</option>
          <option value="FMS Delhi">FMS Delhi</option>
        </select>
      </div>

      <div className="border border-neutral-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Candidate
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Campus
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Experience
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Applied
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {filteredApps.map((app) => {
              const status = appStatuses[app.id]
              return (
                <tr key={app.id} className="hover:bg-neutral-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedApps.includes(app.id)}
                      onChange={() => toggleSelect(app.id)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-sm font-medium text-neutral-600">
                        {app.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">{app.name}</p>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {app.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {app.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-start gap-1 flex-col">
                      <span className="text-sm text-black font-medium">{app.campus}</span>
                      <span className="text-xs text-neutral-500">{app.program}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-black">{app.experience}</div>
                    <div className="text-xs text-neutral-500">{app.company}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-neutral-600">{app.appliedDate}</div>
                  </td>
                  <td className="px-4 py-3">
                    {status === "new" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        <Clock className="w-3 h-3" /> New
                      </span>
                    )}
                    {status === "shortlisted" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        <Check className="w-3 h-3" /> Shortlisted
                      </span>
                    )}
                    {status === "interviewed" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        <Calendar className="w-3 h-3" /> Interviewed
                      </span>
                    )}
                    {status === "offered" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        <Check className="w-3 h-3" /> Offered
                      </span>
                    )}
                    {status === "rejected" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        <X className="w-3 h-3" /> Rejected
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-7 px-2 text-xs bg-transparent">
                        <FileText className="w-3 h-3 mr-1" /> Resume
                      </Button>
                      <div className="relative group">
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs bg-transparent">
                          <ChevronDown className="w-3 h-3" />
                        </Button>
                        <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-neutral-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                          <button
                            onClick={() => updateStatus(app.id, "shortlisted")}
                            className="w-full px-4 py-2 text-left text-xs hover:bg-neutral-50 flex items-center gap-2"
                          >
                            <Check className="w-3 h-3 text-green-600" /> Shortlist
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, "interviewed")}
                            className="w-full px-4 py-2 text-left text-xs hover:bg-neutral-50 flex items-center gap-2"
                          >
                            <Calendar className="w-3 h-3 text-purple-600" /> Mark Interviewed
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, "offered")}
                            className="w-full px-4 py-2 text-left text-xs hover:bg-neutral-50 flex items-center gap-2"
                          >
                            <Check className="w-3 h-3 text-green-600" /> Send Offer
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, "rejected")}
                            className="w-full px-4 py-2 text-left text-xs hover:bg-neutral-50 flex items-center gap-2 border-t border-neutral-100"
                          >
                            <X className="w-3 h-3 text-red-600" /> Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {filteredApps.length === 0 && (
          <div className="text-center py-12 text-neutral-500 text-sm">No applications found.</div>
        )}
      </div>

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-yellow-900 mb-1">Save recruiter time with screening</h3>
          <p className="text-xs text-yellow-700 mb-3">
            Run AI Mock Interviews (₹200/candidate) or Expert Screening (₹2,200/candidate) to filter faster.
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-yellow-900 text-white hover:bg-yellow-800 h-7 text-xs">
              Setup AI Screening
            </Button>
            <Button size="sm" variant="outline" className="bg-white h-7 text-xs">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
