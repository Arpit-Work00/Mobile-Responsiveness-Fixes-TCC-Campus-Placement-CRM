"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, ChevronRight, Star } from "lucide-react"

export default function CDMStudentsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const students = [
    {
      id: "2024MBA001",
      name: "Aditya Sharma",
      specialization: "Marketing",
      cpi: 8.2,
      readinessScore: 85,
      modulesCompleted: 12,
      totalModules: 15,
      mentorFeedback: "Strong",
      aiInterviewScore: 78,
      preferredFunction: "Product",
      placementStatus: "Active",
    },
    {
      id: "2024MBA002",
      name: "Priya Verma",
      specialization: "Strategy",
      cpi: 8.5,
      readinessScore: 92,
      modulesCompleted: 15,
      totalModules: 15,
      mentorFeedback: "Excellent",
      aiInterviewScore: 88,
      preferredFunction: "Consulting",
      placementStatus: "Active",
    },
    {
      id: "2024MBA003",
      name: "Rahul Gupta",
      specialization: "Operations",
      cpi: 7.8,
      readinessScore: 72,
      modulesCompleted: 10,
      totalModules: 15,
      mentorFeedback: "Good",
      aiInterviewScore: 65,
      preferredFunction: "Analytics",
      placementStatus: "Active",
    },
    {
      id: "2024MBA004",
      name: "Sneha Patel",
      specialization: "Finance",
      cpi: 8.0,
      readinessScore: 88,
      modulesCompleted: 14,
      totalModules: 15,
      mentorFeedback: "Strong",
      aiInterviewScore: 82,
      preferredFunction: "Finance",
      placementStatus: "Active",
    },
    {
      id: "2024MBA005",
      name: "Vikram Singh",
      specialization: "Marketing",
      cpi: 6.8,
      readinessScore: 58,
      modulesCompleted: 8,
      totalModules: 15,
      mentorFeedback: "Needs Work",
      aiInterviewScore: 52,
      preferredFunction: "Marketing",
      placementStatus: "Active",
    },
    {
      id: "2024MBA006",
      name: "Ananya Reddy",
      specialization: "Strategy",
      cpi: 9.0,
      readinessScore: 95,
      modulesCompleted: 15,
      totalModules: 15,
      mentorFeedback: "Excellent",
      aiInterviewScore: 92,
      preferredFunction: "Consulting",
      placementStatus: "Placed",
    },
    {
      id: "2024MBA007",
      name: "Karan Mehta",
      specialization: "Marketing",
      cpi: 7.5,
      readinessScore: 75,
      modulesCompleted: 11,
      totalModules: 15,
      mentorFeedback: "Good",
      aiInterviewScore: 70,
      preferredFunction: "Marketing",
      placementStatus: "Active",
    },
  ]

  const getReadinessColor = (score: number) => {
    if (score >= 85) return "bg-black text-white"
    if (score >= 70) return "bg-neutral-500 text-white"
    if (score >= 60) return "bg-neutral-300 text-black"
    return "bg-neutral-100 text-neutral-600"
  }

  const getFeedbackColor = (feedback: string) => {
    switch (feedback) {
      case "Excellent":
        return "text-black font-semibold"
      case "Strong":
        return "text-black"
      case "Good":
        return "text-neutral-600"
      default:
        return "text-neutral-400"
    }
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Stats
  const stats = {
    total: students.length,
    highReadiness: students.filter(s => s.readinessScore >= 85).length,
    modulesComplete: students.filter(s => s.modulesCompleted === s.totalModules).length,
    placed: students.filter(s => s.placementStatus === 'Placed').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Students (CDM)</h1>
          <p className="text-sm text-neutral-600 mt-1">Track student preparation and readiness</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.total}</div>
          <div className="text-xs text-neutral-600">Total Students</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.highReadiness}</div>
          <div className="text-xs text-neutral-600">High Readiness (85+)</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.modulesComplete}</div>
          <div className="text-xs text-neutral-600">Modules Complete</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{stats.placed}</div>
          <div className="text-xs text-neutral-600">Placed</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search by name, roll number, or specialization..."
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

      {/* Students Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Specialization</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">CPI</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Readiness</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Modules</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Mentor</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">AI Score</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Preference</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  onClick={() => router.push(`/dashboard/cdm/students/${student.id}`)}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-black">{student.name}</div>
                    <div className="text-xs text-neutral-500">{student.id}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{student.specialization}</td>
                  <td className="px-4 py-3 text-sm text-center text-black">{student.cpi}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getReadinessColor(student.readinessScore)}`}>
                      {student.readinessScore}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-neutral-600">
                    {student.modulesCompleted}/{student.totalModules}
                  </td>
                  <td className={`px-4 py-3 text-sm text-center ${getFeedbackColor(student.mentorFeedback)}`}>
                    {student.mentorFeedback}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-black">{student.aiInterviewScore}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{student.preferredFunction}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      student.placementStatus === 'Placed' ? 'bg-black text-white' : 'bg-neutral-100 text-black'
                    }`}>
                      {student.placementStatus}
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
