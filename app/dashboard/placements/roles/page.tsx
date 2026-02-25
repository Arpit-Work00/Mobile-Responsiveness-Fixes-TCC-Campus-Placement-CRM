"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, ChevronRight, Users, Sparkles } from "lucide-react"

export default function PlacementRolesPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const roles = [
    {
      id: "pm-amazon",
      title: "Product Manager",
      company: "Amazon",
      function: "Product",
      ctcRange: "25-30 LPA",
      location: "Bangalore",
      eligibility: "Min CPI 7.0, All specializations",
      stage: "Applications Open",
      applications: 45,
      shortlisted: 12,
      interviews: 0,
      offers: 0,
      deadline: "20 Sep 2024",
      recommendedStudents: 28,
    },
    {
      id: "ba-amazon",
      title: "Business Analyst",
      company: "Amazon",
      function: "Analytics",
      ctcRange: "20-25 LPA",
      location: "Hyderabad",
      eligibility: "Min CPI 6.5, Marketing/Operations",
      stage: "Shortlisting",
      applications: 38,
      shortlisted: 15,
      interviews: 8,
      offers: 0,
      deadline: "18 Sep 2024",
      recommendedStudents: 22,
    },
    {
      id: "consultant-mckinsey",
      title: "Associate Consultant",
      company: "McKinsey & Company",
      function: "Consulting",
      ctcRange: "35-40 LPA",
      location: "Mumbai/Delhi",
      eligibility: "Min CPI 8.0, All specializations",
      stage: "Interviews",
      applications: 120,
      shortlisted: 25,
      interviews: 18,
      offers: 0,
      deadline: "15 Sep 2024",
      recommendedStudents: 35,
    },
    {
      id: "abm-hul",
      title: "Assistant Brand Manager",
      company: "Hindustan Unilever",
      function: "Marketing",
      ctcRange: "22-26 LPA",
      location: "Mumbai",
      eligibility: "Min CPI 7.0, Marketing only",
      stage: "PPT Scheduled",
      applications: 0,
      shortlisted: 0,
      interviews: 0,
      offers: 0,
      deadline: "25 Sep 2024",
      recommendedStudents: 40,
    },
    {
      id: "ib-jpmorgan",
      title: "Investment Banking Analyst",
      company: "JP Morgan",
      function: "Finance",
      ctcRange: "28-32 LPA",
      location: "Mumbai",
      eligibility: "Min CPI 7.5, Finance only",
      stage: "Offers Made",
      applications: 65,
      shortlisted: 20,
      interviews: 15,
      offers: 6,
      deadline: "10 Sep 2024",
      recommendedStudents: 18,
    },
  ]

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Applications Open":
        return "bg-black text-white"
      case "Shortlisting":
        return "bg-neutral-700 text-white"
      case "Interviews":
        return "bg-neutral-500 text-white"
      case "Offers Made":
        return "bg-neutral-300 text-black"
      case "PPT Scheduled":
        return "bg-neutral-200 text-black"
      default:
        return "bg-neutral-100 text-black"
    }
  }

  const filteredRoles = roles.filter(role =>
    role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Roles</h1>
          <p className="text-sm text-neutral-600 mt-1">{roles.length} active roles across companies</p>
        </div>
        <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
          <Plus className="w-4 h-4 mr-1" />
          Add Role
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search roles or companies..."
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

      {/* Roles Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">CTC</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Stage</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Apps</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Shortlist</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Interviews</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Offers</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Deadline</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredRoles.map((role) => (
                <tr
                  key={role.id}
                  onClick={() => router.push(`/dashboard/placements/roles/${role.id}`)}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-black">{role.title}</div>
                    <div className="text-xs text-neutral-500">{role.function} | {role.location}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{role.company}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{role.ctcRange}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${getStageColor(role.stage)}`}>
                      {role.stage}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-black">{role.applications}</td>
                  <td className="px-4 py-3 text-sm text-center text-black">{role.shortlisted}</td>
                  <td className="px-4 py-3 text-sm text-center text-black">{role.interviews}</td>
                  <td className="px-4 py-3 text-sm text-center font-semibold text-black">{role.offers}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{role.deadline}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push(`/dashboard/placements/roles/${role.id}?tab=recommended`)
                        }}
                        className="flex items-center gap-1 text-xs text-neutral-500 hover:text-black"
                      >
                        <Sparkles className="w-3 h-3" />
                        {role.recommendedStudents}
                      </button>
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    </div>
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
