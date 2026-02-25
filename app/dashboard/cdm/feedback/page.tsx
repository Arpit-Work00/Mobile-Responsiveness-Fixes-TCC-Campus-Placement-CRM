"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare, Star, ChevronRight } from "lucide-react"

export default function CDMFeedbackPage() {
  const recentFeedback = [
    { student: "Arjun Mehta", mentor: "Rajiv Sharma (ex-McKinsey)", module: "Case Interviews", date: "Today", rating: 4.5, summary: "Strong structuring, needs work on synthesis", actionable: "Practice 2 more profitability cases" },
    { student: "Priya Singh", mentor: "Anita Desai (ex-BCG)", module: "Case Interviews", date: "Today", rating: 5, summary: "Excellent performance, interview ready", actionable: "Move to mock interview stage" },
    { student: "Rahul Kumar", mentor: "Vikram Patel (ex-Amazon)", module: "Behavioral", date: "Yesterday", rating: 3.5, summary: "STAR stories need more impact metrics", actionable: "Rewrite leadership story with numbers" },
    { student: "Sneha Reddy", mentor: "Kavita Iyer (ex-Deloitte)", module: "Resume & LinkedIn", date: "Yesterday", rating: 4, summary: "Resume improved significantly, LinkedIn needs updates", actionable: "Update LinkedIn headline and summary" },
    { student: "Amit Joshi", mentor: "Suresh Nair (ex-Google)", module: "Technical", date: "2 days ago", rating: 3, summary: "Product sense weak, needs more practice", actionable: "Complete 5 product critique exercises" },
    { student: "Neha Gupta", mentor: "Rajiv Sharma (ex-McKinsey)", module: "Case Interviews", date: "2 days ago", rating: 4, summary: "Good math, structuring improved", actionable: "Focus on market entry cases" },
  ]

  const mentorStats = [
    { name: "Rajiv Sharma", company: "ex-McKinsey", sessions: 45, avgRating: 4.6, students: 28 },
    { name: "Anita Desai", company: "ex-BCG", sessions: 38, avgRating: 4.8, students: 24 },
    { name: "Vikram Patel", company: "ex-Amazon", sessions: 32, avgRating: 4.4, students: 20 },
    { name: "Kavita Iyer", company: "ex-Deloitte", sessions: 28, avgRating: 4.5, students: 18 },
    { name: "Suresh Nair", company: "ex-Google", sessions: 25, avgRating: 4.3, students: 16 },
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
            <h1 className="text-xl font-bold text-black">Mentor Feedback</h1>
            <p className="text-sm text-neutral-600">Track mentor sessions and student feedback</p>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">168</div>
          <div className="text-sm text-neutral-600">Sessions This Month</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">4.5</div>
          <div className="text-sm text-neutral-600">Avg Session Rating</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">142</div>
          <div className="text-sm text-neutral-600">Students with Feedback</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">28</div>
          <div className="text-sm text-neutral-600">Active Mentors</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Feedback */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Recent Feedback</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {recentFeedback.map((fb, idx) => (
              <div key={idx} className="p-4 hover:bg-neutral-50 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-black">{fb.student}</span>
                      <span className="text-xs text-neutral-500">•</span>
                      <span className="text-xs text-neutral-500">{fb.module}</span>
                      <span className="text-xs text-neutral-500">•</span>
                      <span className="text-xs text-neutral-500">{fb.date}</span>
                    </div>
                    <div className="text-sm text-neutral-600 mt-1">Mentor: {fb.mentor}</div>
                    <div className="text-sm text-black mt-2">{fb.summary}</div>
                    <div className="text-xs text-neutral-600 mt-1 bg-neutral-50 px-2 py-1 rounded inline-block">
                      Action: {fb.actionable}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <Star className="w-4 h-4 text-black fill-black" />
                    <span className="text-sm font-medium text-black">{fb.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Leaderboard */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Top Mentors</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {mentorStats.map((mentor, idx) => (
              <div key={idx} className="p-3 hover:bg-neutral-50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-black text-sm">{mentor.name}</div>
                    <div className="text-xs text-neutral-500">{mentor.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-black fill-black" />
                      <span className="text-sm font-medium text-black">{mentor.avgRating}</span>
                    </div>
                    <div className="text-xs text-neutral-500">{mentor.sessions} sessions</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
