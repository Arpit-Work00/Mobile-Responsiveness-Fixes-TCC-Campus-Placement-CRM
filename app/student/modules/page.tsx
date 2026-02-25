"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, CheckCircle2, Clock, Lock, Play, ChevronRight } from "lucide-react"

export default function StudentModulesPage() {
  const modules = [
    {
      id: "career-clarity",
      name: "Career Clarity",
      description: "Identify your target roles, industries, and companies",
      sessions: [
        { name: "Self Assessment", duration: "45 min", status: "completed" },
        { name: "Industry Deep Dive", duration: "60 min", status: "completed" },
        { name: "Company Research", duration: "45 min", status: "completed" },
        { name: "Target Finalization", duration: "30 min", status: "completed" },
      ],
      progress: 100,
      status: "completed",
    },
    {
      id: "resume-linkedin",
      name: "Resume & LinkedIn",
      description: "Build compelling professional profiles",
      sessions: [
        { name: "Resume Fundamentals", duration: "45 min", status: "completed" },
        { name: "Impact Statements", duration: "60 min", status: "completed" },
        { name: "LinkedIn Optimization", duration: "45 min", status: "in_progress" },
      ],
      progress: 85,
      status: "in_progress",
    },
    {
      id: "case-interviews",
      name: "Case Interviews",
      description: "Master consulting and PM case interviews",
      sessions: [
        { name: "Structuring Frameworks", duration: "60 min", status: "completed" },
        { name: "Market Sizing", duration: "45 min", status: "completed" },
        { name: "Profitability Cases", duration: "60 min", status: "in_progress" },
        { name: "M&A Cases", duration: "60 min", status: "locked" },
        { name: "Growth Strategy", duration: "45 min", status: "locked" },
        { name: "Synthesis & Recommendations", duration: "45 min", status: "locked" },
      ],
      progress: 60,
      status: "in_progress",
    },
    {
      id: "behavioral",
      name: "Behavioral & HR",
      description: "STAR method and fit interviews",
      sessions: [
        { name: "STAR Framework", duration: "45 min", status: "completed" },
        { name: "Story Bank Creation", duration: "60 min", status: "in_progress" },
        { name: "Common Questions", duration: "45 min", status: "locked" },
      ],
      progress: 45,
      status: "in_progress",
    },
    {
      id: "technical",
      name: "Technical Rounds",
      description: "Domain-specific technical preparation",
      sessions: [
        { name: "Technical Fundamentals", duration: "60 min", status: "locked" },
        { name: "Case Studies", duration: "60 min", status: "locked" },
        { name: "Problem Solving", duration: "45 min", status: "locked" },
        { name: "Mock Technicals", duration: "45 min", status: "locked" },
      ],
      progress: 0,
      status: "not_started",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-black" />
      case "in_progress":
        return <Clock className="w-5 h-5 text-neutral-400" />
      case "locked":
        return <Lock className="w-5 h-5 text-neutral-300" />
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-neutral-300" />
    }
  }

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
            <h1 className="text-xl font-bold text-black">Journey Modules</h1>
            <p className="text-sm text-neutral-600">Complete your preparation journey</p>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="border border-neutral-200 rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-black">Overall Progress</span>
          <span className="text-sm text-neutral-600">
            {Math.round(modules.reduce((a, m) => a + m.progress, 0) / modules.length)}% Complete
          </span>
        </div>
        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black rounded-full" 
            style={{ width: `${Math.round(modules.reduce((a, m) => a + m.progress, 0) / modules.length)}%` }} 
          />
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {modules.map((module) => (
          <div key={module.id} className="border border-neutral-200 rounded-lg bg-white overflow-hidden">
            {/* Module Header */}
            <div className="p-4 border-b border-neutral-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {getStatusIcon(module.status)}
                  <div>
                    <h3 className="font-semibold text-black">{module.name}</h3>
                    <p className="text-sm text-neutral-600 mt-0.5">{module.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-black">{module.progress}%</div>
                  <div className="text-xs text-neutral-500">{module.sessions.length} sessions</div>
                </div>
              </div>
              <div className="mt-3 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-black rounded-full" style={{ width: `${module.progress}%` }} />
              </div>
            </div>

            {/* Sessions */}
            <div className="divide-y divide-neutral-100">
              {module.sessions.map((session, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between px-4 py-3 ${
                    session.status === 'locked' ? 'opacity-50' : 'hover:bg-neutral-50 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {session.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-black" />
                    ) : session.status === 'in_progress' ? (
                      <Play className="w-4 h-4 text-black" />
                    ) : (
                      <Lock className="w-4 h-4 text-neutral-300" />
                    )}
                    <span className={`text-sm ${session.status === 'locked' ? 'text-neutral-400' : 'text-black'}`}>
                      {session.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500">{session.duration}</span>
                    {session.status === 'in_progress' && (
                      <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                        Continue
                      </Button>
                    )}
                    {session.status === 'completed' && (
                      <span className="text-xs text-neutral-500">Completed</span>
                    )}
                    {session.status !== 'locked' && (
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
