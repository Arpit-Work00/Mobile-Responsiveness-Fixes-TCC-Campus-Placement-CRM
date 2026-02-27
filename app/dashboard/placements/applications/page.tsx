"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, CheckCircle2, XCircle, Clock, ChevronRight } from "lucide-react"

export default function PlacementApplicationsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const applications = [
    {
      id: "app-001",
      studentName: "Aditya Sharma",
      rollNo: "2024MBA001",
      role: "Product Manager",
      company: "Amazon",
      appliedDate: "15 Sep 2024",
      status: "Pending",
      cpi: 8.2,
      specialization: "Marketing",
    },
    {
      id: "app-002",
      studentName: "Priya Verma",
      rollNo: "2024MBA002",
      role: "Associate Consultant",
      company: "McKinsey & Company",
      appliedDate: "14 Sep 2024",
      status: "Shortlisted",
      cpi: 8.5,
      specialization: "Strategy",
    },
    {
      id: "app-003",
      studentName: "Rahul Gupta",
      rollNo: "2024MBA003",
      role: "Business Analyst",
      company: "Amazon",
      appliedDate: "14 Sep 2024",
      status: "Shortlisted",
      cpi: 7.8,
      specialization: "Operations",
    },
    {
      id: "app-004",
      studentName: "Sneha Patel",
      rollNo: "2024MBA004",
      role: "Investment Banking Analyst",
      company: "JP Morgan",
      appliedDate: "10 Sep 2024",
      status: "Interview Scheduled",
      cpi: 8.0,
      specialization: "Finance",
    },
    {
      id: "app-005",
      studentName: "Vikram Singh",
      rollNo: "2024MBA005",
      role: "Product Manager",
      company: "Amazon",
      appliedDate: "15 Sep 2024",
      status: "Rejected",
      cpi: 6.8,
      specialization: "Marketing",
    },
    {
      id: "app-006",
      studentName: "Ananya Reddy",
      rollNo: "2024MBA006",
      role: "Associate Consultant",
      company: "McKinsey & Company",
      appliedDate: "14 Sep 2024",
      status: "Offer Received",
      cpi: 9.0,
      specialization: "Strategy",
    },
    {
      id: "app-007",
      studentName: "Karan Mehta",
      rollNo: "2024MBA007",
      role: "Assistant Brand Manager",
      company: "Hindustan Unilever",
      appliedDate: "16 Sep 2024",
      status: "Pending",
      cpi: 7.5,
      specialization: "Marketing",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Shortlisted":
      case "Interview Scheduled":
        return <Clock className="w-4 h-4 text-black" />
      case "Offer Received":
        return <CheckCircle2 className="w-4 h-4 text-black" />
      case "Rejected":
        return <XCircle className="w-4 h-4 text-neutral-400" />
      default:
        return <Clock className="w-4 h-4 text-neutral-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Shortlisted":
        return "bg-black text-white"
      case "Interview Scheduled":
        return "bg-neutral-700 text-white"
      case "Offer Received":
        return "bg-neutral-500 text-white"
      case "Rejected":
        return "bg-neutral-200 text-neutral-600"
      default:
        return "bg-neutral-100 text-black"
    }
  }

  const filteredApplications = applications.filter(app =>
    app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Stats
  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'Pending').length,
    shortlisted: applications.filter(a => a.status === 'Shortlisted' || a.status === 'Interview Scheduled').length,
    offers: applications.filter(a => a.status === 'Offer Received').length,
    rejected: applications.filter(a => a.status === 'Rejected').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-black">Applications</h1>
          <p className="text-sm text-neutral-600 mt-1">Track and manage student applications</p>
        </div>
        <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Download className="w-4 h-4 mr-1" />
          Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.total}</div>
          <div className="text-xs text-neutral-600">Total Applications</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.pending}</div>
          <div className="text-xs text-neutral-600">Pending</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.shortlisted}</div>
          <div className="text-xs text-neutral-600">Shortlisted</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.offers}</div>
          <div className="text-xs text-neutral-600">Offers</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.rejected}</div>
          <div className="text-xs text-neutral-600">Rejected</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search by student, company, or role..."
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

      {/* Applications Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">CPI</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Applied</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredApplications.map((app) => (
                <tr
                  key={app.id}
                  onClick={() => router.push(`/dashboard/cdm/students/${app.rollNo}`)}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-black">{app.studentName}</div>
                    <div className="text-xs text-neutral-500">{app.rollNo} | {app.specialization}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{app.role}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{app.company}</td>
                  <td className="px-4 py-3 text-sm text-center text-black">{app.cpi}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{app.appliedDate}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status}
                    </span>
                  </td>
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
