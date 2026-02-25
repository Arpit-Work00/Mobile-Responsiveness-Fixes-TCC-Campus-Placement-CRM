"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, ChevronRight, Users } from "lucide-react"

export default function PlacementShortlistsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const shortlists = [
    {
      id: "sl-001",
      role: "Product Manager",
      company: "Amazon",
      totalApplicants: 45,
      shortlisted: 12,
      interviewed: 8,
      pending: 4,
      status: "Interviews Ongoing",
      lastUpdated: "Today",
    },
    {
      id: "sl-002",
      role: "Associate Consultant",
      company: "McKinsey & Company",
      totalApplicants: 120,
      shortlisted: 25,
      interviewed: 18,
      pending: 7,
      status: "Interviews Ongoing",
      lastUpdated: "Yesterday",
    },
    {
      id: "sl-003",
      role: "Business Analyst",
      company: "Amazon",
      totalApplicants: 38,
      shortlisted: 15,
      interviewed: 15,
      pending: 0,
      status: "Interviews Complete",
      lastUpdated: "2 days ago",
    },
    {
      id: "sl-004",
      role: "Investment Banking Analyst",
      company: "JP Morgan",
      totalApplicants: 65,
      shortlisted: 20,
      interviewed: 15,
      pending: 5,
      status: "Interviews Ongoing",
      lastUpdated: "Today",
    },
    {
      id: "sl-005",
      role: "Assistant Brand Manager",
      company: "Hindustan Unilever",
      totalApplicants: 52,
      shortlisted: 18,
      interviewed: 0,
      pending: 18,
      status: "Shortlist Finalized",
      lastUpdated: "3 days ago",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interviews Ongoing":
        return "bg-black text-white"
      case "Interviews Complete":
        return "bg-neutral-500 text-white"
      case "Shortlist Finalized":
        return "bg-neutral-200 text-black"
      default:
        return "bg-neutral-100 text-black"
    }
  }

  const filteredShortlists = shortlists.filter(sl =>
    sl.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sl.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Stats
  const stats = {
    totalShortlisted: shortlists.reduce((sum, sl) => sum + sl.shortlisted, 0),
    interviewed: shortlists.reduce((sum, sl) => sum + sl.interviewed, 0),
    pending: shortlists.reduce((sum, sl) => sum + sl.pending, 0),
    conversionRate: Math.round((shortlists.reduce((sum, sl) => sum + sl.interviewed, 0) / shortlists.reduce((sum, sl) => sum + sl.shortlisted, 0)) * 100),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Shortlists</h1>
          <p className="text-sm text-neutral-600 mt-1">Track shortlisted candidates by role</p>
        </div>
        <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Download className="w-4 h-4 mr-1" />
          Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.totalShortlisted}</div>
          <div className="text-xs text-neutral-600">Total Shortlisted</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.interviewed}</div>
          <div className="text-xs text-neutral-600">Interviewed</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.pending}</div>
          <div className="text-xs text-neutral-600">Pending Interview</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.conversionRate}%</div>
          <div className="text-xs text-neutral-600">Interview Conversion</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search by role or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-neutral-300"
          />
        </div>
        <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Filter className="w-4 h-4 mr-1" />
          Filters
        </Button>
      </div>

      {/* Shortlists Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Applicants</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Shortlisted</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Interviewed</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Pending</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Updated</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredShortlists.map((sl) => (
                <tr
                  key={sl.id}
                  onClick={() => router.push(`/dashboard/placements/roles/${sl.id}`)}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-medium text-black">{sl.role}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{sl.company}</td>
                  <td className="px-4 py-3 text-sm text-center text-neutral-600">{sl.totalApplicants}</td>
                  <td className="px-4 py-3 text-sm text-center font-semibold text-black">{sl.shortlisted}</td>
                  <td className="px-4 py-3 text-sm text-center text-black">{sl.interviewed}</td>
                  <td className="px-4 py-3 text-sm text-center text-neutral-600">{sl.pending}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(sl.status)}`}>
                      {sl.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{sl.lastUpdated}</td>
                  <td className="px-4 py-3">
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
