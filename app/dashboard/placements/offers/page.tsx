"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, CheckCircle2, Clock, ChevronRight } from "lucide-react"

export default function PlacementOffersPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const offers = [
    {
      id: "offer-001",
      studentName: "Ananya Reddy",
      rollNo: "2024MBA006",
      role: "Associate Consultant",
      company: "McKinsey & Company",
      ctc: "38 LPA",
      offerDate: "12 Sep 2024",
      deadline: "20 Sep 2024",
      status: "Accepted",
    },
    {
      id: "offer-002",
      studentName: "Sneha Patel",
      rollNo: "2024MBA004",
      role: "Investment Banking Analyst",
      company: "JP Morgan",
      ctc: "30 LPA",
      offerDate: "14 Sep 2024",
      deadline: "21 Sep 2024",
      status: "Pending",
    },
    {
      id: "offer-003",
      studentName: "Rahul Gupta",
      rollNo: "2024MBA003",
      role: "Business Analyst",
      company: "Amazon",
      ctc: "24 LPA",
      offerDate: "15 Sep 2024",
      deadline: "22 Sep 2024",
      status: "Pending",
    },
    {
      id: "offer-004",
      studentName: "Vikram Singh",
      rollNo: "2024MBA015",
      role: "Associate Consultant",
      company: "BCG",
      ctc: "36 LPA",
      offerDate: "10 Sep 2024",
      deadline: "18 Sep 2024",
      status: "Accepted",
    },
    {
      id: "offer-005",
      studentName: "Priya Verma",
      rollNo: "2024MBA002",
      role: "Associate Consultant",
      company: "McKinsey & Company",
      ctc: "38 LPA",
      offerDate: "13 Sep 2024",
      deadline: "20 Sep 2024",
      status: "Declined",
    },
    {
      id: "offer-006",
      studentName: "Karan Mehta",
      rollNo: "2024MBA007",
      role: "Product Manager",
      company: "Google",
      ctc: "45 LPA",
      offerDate: "11 Sep 2024",
      deadline: "19 Sep 2024",
      status: "Accepted",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "bg-black text-white"
      case "Pending":
        return "bg-neutral-200 text-black"
      case "Declined":
        return "bg-neutral-100 text-neutral-500"
      default:
        return "bg-neutral-100 text-black"
    }
  }

  const filteredOffers = offers.filter(offer =>
    offer.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Stats
  const stats = {
    total: offers.length,
    accepted: offers.filter(o => o.status === 'Accepted').length,
    pending: offers.filter(o => o.status === 'Pending').length,
    declined: offers.filter(o => o.status === 'Declined').length,
    avgCTC: Math.round(offers.filter(o => o.status === 'Accepted').reduce((sum, o) => sum + parseInt(o.ctc), 0) / offers.filter(o => o.status === 'Accepted').length),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-black">Offers</h1>
          <p className="text-sm text-neutral-600 mt-1">Track placement offers and acceptances</p>
        </div>
        <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Download className="w-4 h-4 mr-1" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.total}</div>
          <div className="text-xs text-neutral-600">Total Offers</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.accepted}</div>
          <div className="text-xs text-neutral-600">Accepted</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.pending}</div>
          <div className="text-xs text-neutral-600">Pending</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.declined}</div>
          <div className="text-xs text-neutral-600">Declined</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.avgCTC} LPA</div>
          <div className="text-xs text-neutral-600">Avg CTC (Accepted)</div>
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

      {/* Offers Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">CTC</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Offer Date</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Deadline</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredOffers.map((offer) => (
                <tr
                  key={offer.id}
                  onClick={() => router.push(`/dashboard/cdm/students/${offer.rollNo}`)}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-black">{offer.studentName}</div>
                    <div className="text-xs text-neutral-500">{offer.rollNo}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{offer.role}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{offer.company}</td>
                  <td className="px-4 py-3 text-sm text-center font-semibold text-black">{offer.ctc}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{offer.offerDate}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{offer.deadline}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${getStatusColor(offer.status)}`}>
                      {offer.status === 'Accepted' && <CheckCircle2 className="w-3 h-3" />}
                      {offer.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {offer.status}
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
