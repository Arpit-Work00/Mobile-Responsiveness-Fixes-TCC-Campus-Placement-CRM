"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, MapPin, Clock, CheckCircle2, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function StudentJobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFunction, setSelectedFunction] = useState("all")

  const openRoles = [
    { id: 1, company: "McKinsey & Company", role: "Associate", function: "Consulting", location: "Mumbai", ctc: "32-35 LPA", deadline: "25 Oct", match: 92, applied: false, status: "open" },
    { id: 2, company: "Amazon", role: "Product Manager", function: "Product", location: "Bangalore", ctc: "40-45 LPA", deadline: "28 Oct", match: 88, applied: true, status: "applied" },
    { id: 3, company: "Bain & Company", role: "Associate Consultant", function: "Consulting", location: "Delhi", ctc: "30-33 LPA", deadline: "30 Oct", match: 85, applied: false, status: "open" },
    { id: 4, company: "Google", role: "Associate Product Manager", function: "Product", location: "Bangalore", ctc: "45-50 LPA", deadline: "1 Nov", match: 82, applied: false, status: "open" },
    { id: 5, company: "BCG", role: "Consultant", function: "Consulting", location: "Mumbai", ctc: "32-35 LPA", deadline: "2 Nov", match: 80, applied: false, status: "open" },
    { id: 6, company: "Flipkart", role: "Product Manager", function: "Product", location: "Bangalore", ctc: "35-40 LPA", deadline: "5 Nov", match: 78, applied: true, status: "shortlisted" },
    { id: 7, company: "Deloitte", role: "Consultant", function: "Consulting", location: "Hyderabad", ctc: "22-25 LPA", deadline: "7 Nov", match: 75, applied: false, status: "open" },
    { id: 8, company: "Microsoft", role: "Program Manager", function: "Product", location: "Hyderabad", ctc: "38-42 LPA", deadline: "10 Nov", match: 72, applied: false, status: "open" },
  ]

  const filteredRoles = openRoles.filter(role => {
    const matchesSearch = role.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          role.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFunction = selectedFunction === "all" || role.function.toLowerCase() === selectedFunction
    return matchesSearch && matchesFunction
  })

  const functions = ["all", "consulting", "product"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/student">
            <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-black">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-black">Open Roles</h1>
            <p className="text-sm text-neutral-600">Browse and apply to placement opportunities</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input 
            placeholder="Search companies or roles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-neutral-200"
          />
        </div>
        <div className="flex items-center gap-2">
          {functions.map((fn) => (
            <Button
              key={fn}
              variant={selectedFunction === fn ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFunction(fn)}
              className={selectedFunction === fn ? "bg-black text-white" : "border-neutral-300 text-black hover:bg-neutral-100 bg-transparent"}
            >
              {fn === "all" ? "All Functions" : fn.charAt(0).toUpperCase() + fn.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{openRoles.length}</div>
          <div className="text-sm text-neutral-600">Open Roles</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{openRoles.filter(r => r.applied).length}</div>
          <div className="text-sm text-neutral-600">Applied</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{openRoles.filter(r => r.status === 'shortlisted').length}</div>
          <div className="text-sm text-neutral-600">Shortlisted</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{Math.round(openRoles.reduce((a, r) => a + r.match, 0) / openRoles.length)}%</div>
          <div className="text-sm text-neutral-600">Avg Match Score</div>
        </div>
      </div>

      {/* Roles List */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Function</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Location</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">CTC</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Match</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Deadline</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {filteredRoles.map((role) => (
              <tr key={role.id} className="hover:bg-neutral-50">
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-black">{role.company}</div>
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">{role.role}</td>
                <td className="px-4 py-3">
                  <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                    {role.function}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-sm text-neutral-600">
                    <MapPin className="w-3 h-3" />
                    {role.location}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-black font-medium">{role.ctc}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`text-sm font-bold ${
                    role.match >= 85 ? 'text-black' : 
                    role.match >= 70 ? 'text-neutral-600' : 
                    'text-neutral-400'
                  }`}>
                    {role.match}%
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-sm text-neutral-600">
                    <Clock className="w-3 h-3" />
                    {role.deadline}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  {role.status === 'shortlisted' ? (
                    <span className="text-xs font-medium bg-black text-white px-2 py-1 rounded">SHORTLISTED</span>
                  ) : role.applied ? (
                    <span className="text-xs font-medium bg-neutral-200 text-black px-2 py-1 rounded flex items-center gap-1 justify-center">
                      <CheckCircle2 className="w-3 h-3" />
                      Applied
                    </span>
                  ) : (
                    <Button size="sm" className="bg-black text-white hover:bg-neutral-800 text-xs">
                      Apply
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
