"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, TrendingUp, AlertTriangle } from "lucide-react"

export default function CDMAnalyticsPage() {
  const readinessDistribution = [
    { level: "Interview Ready", count: 85, percentage: 22 },
    { level: "Almost Ready", count: 142, percentage: 37 },
    { level: "In Progress", count: 108, percentage: 28 },
    { level: "Just Started", count: 45, percentage: 12 },
  ]

  const moduleCompletion = [
    { module: "Career Clarity", completed: 84, target: 100 },
    { module: "Resume & LinkedIn", completed: 75, target: 100 },
    { module: "Case Interviews", completed: 37, target: 100 },
    { module: "Behavioral", completed: 52, target: 100 },
    { module: "Technical", completed: 25, target: 100 },
  ]

  const atRiskStudents = [
    { name: "Vikram Reddy", reason: "0 mentor sessions completed", readiness: 15 },
    { name: "Anjali Sharma", reason: "No AI interviews taken", readiness: 22 },
    { name: "Karthik Nair", reason: "Case module not started", readiness: 28 },
    { name: "Deepa Iyer", reason: "Below avg in all areas", readiness: 32 },
    { name: "Rohit Menon", reason: "Inactive for 3 weeks", readiness: 35 },
  ]

  const topPerformers = [
    { name: "Arjun Mehta", readiness: 92, strongAreas: "Cases, Behavioral" },
    { name: "Priya Singh", readiness: 88, strongAreas: "Cases, Technical" },
    { name: "Sneha Reddy", readiness: 85, strongAreas: "Behavioral, Resume" },
    { name: "Rahul Kumar", readiness: 82, strongAreas: "Technical, Cases" },
    { name: "Neha Gupta", readiness: 80, strongAreas: "Cases, GD" },
  ]

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
            <h1 className="text-xl font-bold text-black">Batch Analytics</h1>
            <p className="text-sm text-neutral-600">CDM readiness and preparation metrics</p>
          </div>
        </div>
        <Button variant="outline" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">380</div>
          <div className="text-sm text-neutral-600">Total Students</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">68%</div>
          <div className="text-sm text-neutral-600">Avg Readiness Score</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">227</div>
          <div className="text-sm text-neutral-600">Interview Ready + Almost</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">45</div>
          <div className="text-sm text-neutral-600">At Risk Students</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Readiness Distribution */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Readiness Distribution</h2>
          <div className="border border-neutral-200 rounded-lg p-4 bg-white space-y-4">
            {readinessDistribution.map((level) => (
              <div key={level.level}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-black">{level.level}</span>
                  <span className="text-sm font-medium text-black">{level.count} ({level.percentage}%)</span>
                </div>
                <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full" 
                    style={{ width: `${level.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Completion */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Module Completion Rate</h2>
          <div className="border border-neutral-200 rounded-lg p-4 bg-white space-y-4">
            {moduleCompletion.map((module) => (
              <div key={module.module}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-black">{module.module}</span>
                  <span className="text-sm font-medium text-black">{module.completed}%</span>
                </div>
                <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full" 
                    style={{ width: `${module.completed}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* At Risk Students */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-black" />
            <h2 className="text-sm font-semibold text-black uppercase tracking-wide">At Risk Students</h2>
          </div>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {atRiskStudents.map((student, idx) => (
              <div key={idx} className="p-3 flex items-center justify-between hover:bg-neutral-50">
                <div>
                  <div className="font-medium text-black text-sm">{student.name}</div>
                  <div className="text-xs text-neutral-500">{student.reason}</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-neutral-400">{student.readiness}%</span>
                  <div className="text-xs text-neutral-500">Readiness</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-black" />
            <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Top Performers</h2>
          </div>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {topPerformers.map((student, idx) => (
              <div key={idx} className="p-3 flex items-center justify-between hover:bg-neutral-50">
                <div>
                  <div className="font-medium text-black text-sm">{student.name}</div>
                  <div className="text-xs text-neutral-500">Strong: {student.strongAreas}</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-black">{student.readiness}%</span>
                  <div className="text-xs text-neutral-500">Readiness</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
