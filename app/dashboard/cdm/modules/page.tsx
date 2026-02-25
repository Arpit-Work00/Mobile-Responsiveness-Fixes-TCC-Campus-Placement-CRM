"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Users, Clock, CheckCircle2, Play } from "lucide-react"

export default function CDMModulesPage() {
  const modules = [
    {
      id: "career-clarity",
      name: "Career Clarity",
      description: "Help students identify target roles, industries, and companies",
      sessions: 4,
      completed: 320,
      inProgress: 45,
      notStarted: 15,
      mentorHours: 128,
      status: "active",
    },
    {
      id: "resume-linkedin",
      name: "Resume & LinkedIn",
      description: "Build compelling professional profiles and resumes",
      sessions: 3,
      completed: 285,
      inProgress: 78,
      notStarted: 17,
      mentorHours: 95,
      status: "active",
    },
    {
      id: "case-interviews",
      name: "Case Interviews",
      description: "Structured preparation for consulting and PM case interviews",
      sessions: 6,
      completed: 142,
      inProgress: 98,
      notStarted: 140,
      mentorHours: 210,
      status: "active",
    },
    {
      id: "behavioral",
      name: "Behavioral & HR",
      description: "STAR method, common questions, and fit interviews",
      sessions: 3,
      completed: 198,
      inProgress: 112,
      notStarted: 70,
      mentorHours: 85,
      status: "active",
    },
    {
      id: "technical",
      name: "Technical Rounds",
      description: "Domain-specific technical preparation",
      sessions: 4,
      completed: 95,
      inProgress: 65,
      notStarted: 220,
      mentorHours: 120,
      status: "active",
    },
    {
      id: "gd-extempore",
      name: "GD & Extempore",
      description: "Group discussions and impromptu speaking",
      sessions: 2,
      completed: 165,
      inProgress: 88,
      notStarted: 127,
      mentorHours: 55,
      status: "upcoming",
    },
  ]

  const totalStudents = 380

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-black">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-black">Journey Modules</h1>
            <p className="text-sm text-neutral-600">CDM preparation modules and student progress</p>
          </div>
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800">
          <BookOpen className="w-4 h-4 mr-2" />
          Configure Modules
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{modules.length}</div>
          <div className="text-sm text-neutral-600">Active Modules</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{modules.reduce((a, m) => a + m.sessions, 0)}</div>
          <div className="text-sm text-neutral-600">Total Sessions</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{modules.reduce((a, m) => a + m.mentorHours, 0)}</div>
          <div className="text-sm text-neutral-600">Mentor Hours Delivered</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">{Math.round(modules.reduce((a, m) => a + m.completed, 0) / modules.length)}</div>
          <div className="text-sm text-neutral-600">Avg Completions/Module</div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => {
          const completionRate = Math.round((module.completed / totalStudents) * 100)
          return (
            <div key={module.id} className="border border-neutral-200 rounded-lg p-5 bg-white hover:border-black transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-black">{module.name}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{module.description}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  module.status === 'active' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                }`}>
                  {module.status === 'active' ? 'ACTIVE' : 'UPCOMING'}
                </span>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">{module.sessions} sessions</span>
                  <span className="text-neutral-600">{module.mentorHours}h mentor time</span>
                </div>
                
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-neutral-600">Batch Progress</span>
                    <span className="font-medium text-black">{completionRate}%</span>
                  </div>
                  <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: `${completionRate}%` }} />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-black">{module.completed}</div>
                    <div className="text-xs text-neutral-500">Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-black">{module.inProgress}</div>
                    <div className="text-xs text-neutral-500">In Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-black">{module.notStarted}</div>
                    <div className="text-xs text-neutral-500">Not Started</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <Button variant="outline" size="sm" className="w-full border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
                  View Details
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
