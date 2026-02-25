"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Video, Bot, Users, ChevronRight, Download, Play, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CDMInterviewsPage() {
  const aiInterviews = [
    { student: "Arjun Mehta", type: "Case Interview", date: "Today", duration: "32 min", score: 78, areas: ["Structuring: 85", "Math: 72", "Synthesis: 75"], status: "completed" },
    { student: "Priya Singh", type: "Behavioral", date: "Today", duration: "28 min", score: 85, areas: ["STAR: 88", "Clarity: 82", "Impact: 85"], status: "completed" },
    { student: "Rahul Kumar", type: "Product", date: "Yesterday", duration: "35 min", score: 65, areas: ["Framework: 70", "Creativity: 62", "Prioritization: 63"], status: "completed" },
    { student: "Sneha Reddy", type: "Case Interview", date: "Yesterday", duration: "30 min", score: 82, areas: ["Structuring: 88", "Math: 78", "Synthesis: 80"], status: "completed" },
    { student: "Amit Joshi", type: "Technical", date: "2 days ago", duration: "40 min", score: 58, areas: ["Concepts: 65", "Problem Solving: 52", "Communication: 57"], status: "review_needed" },
  ]

  const expertInterviews = [
    { student: "Arjun Mehta", expert: "Rajiv Sharma (ex-McKinsey)", type: "Case Mock", date: "15 Oct", duration: "45 min", verdict: "Ready", feedback: "Strong candidate, recommend for consulting" },
    { student: "Priya Singh", expert: "Anita Desai (ex-BCG)", type: "Case Mock", date: "14 Oct", duration: "50 min", verdict: "Ready", feedback: "Excellent, among top 10% of batch" },
    { student: "Neha Gupta", expert: "Vikram Patel (ex-Amazon)", type: "PM Mock", date: "12 Oct", duration: "45 min", verdict: "Needs Work", feedback: "Product sense developing, 2 more sessions" },
  ]

  const scheduled = [
    { student: "Rahul Kumar", type: "AI Case Interview", date: "Tomorrow, 10 AM", credits: "AI" },
    { student: "Amit Joshi", type: "Expert Mock - Consulting", date: "18 Oct, 3 PM", credits: "Expert", expert: "Rajiv Sharma" },
    { student: "Sneha Reddy", type: "AI Behavioral", date: "17 Oct, 11 AM", credits: "AI" },
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
            <h1 className="text-xl font-bold text-black">AI & Expert Interviews</h1>
            <p className="text-sm text-neutral-600">Mock interviews and readiness assessment</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-neutral-600 border border-neutral-200 rounded px-3 py-1.5">
            <span className="font-medium text-black">AI Credits:</span> 245 remaining
          </div>
          <div className="text-sm text-neutral-600 border border-neutral-200 rounded px-3 py-1.5">
            <span className="font-medium text-black">Expert Credits:</span> 18 remaining
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-5 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">342</div>
          <div className="text-sm text-neutral-600">AI Interviews Done</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">48</div>
          <div className="text-sm text-neutral-600">Expert Mocks Done</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">74%</div>
          <div className="text-sm text-neutral-600">Avg AI Score</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">82%</div>
          <div className="text-sm text-neutral-600">Ready Verdict Rate</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-2xl font-bold text-black">12</div>
          <div className="text-sm text-neutral-600">Scheduled This Week</div>
        </div>
      </div>

      <Tabs defaultValue="ai" className="w-full">
        <TabsList className="border-b border-neutral-200 bg-transparent w-full justify-start h-auto p-0 rounded-none">
          <TabsTrigger value="ai" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2">
            <Bot className="w-4 h-4 mr-2" />
            AI Interviews
          </TabsTrigger>
          <TabsTrigger value="expert" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Expert Mocks
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2">
            Scheduled
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className="mt-4">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Duration</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Score</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Breakdown</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-black uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {aiInterviews.map((interview, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{interview.student}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.type}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.date}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.duration}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-sm font-bold ${
                        interview.score >= 80 ? 'text-black' : 
                        interview.score >= 65 ? 'text-neutral-600' : 
                        'text-neutral-400'
                      }`}>
                        {interview.score}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-xs text-neutral-600 space-x-2">
                        {interview.areas.map((area, i) => (
                          <span key={i} className="bg-neutral-100 px-1.5 py-0.5 rounded">{area}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-black">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-black">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="expert" className="mt-4">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Expert</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Verdict</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Feedback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {expertInterviews.map((interview, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{interview.student}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.expert}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.type}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.date}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        interview.verdict === 'Ready' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                      }`}>
                        {interview.verdict}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="mt-4">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {scheduled.map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-neutral-50">
                <div>
                  <div className="font-medium text-black">{item.student}</div>
                  <div className="text-sm text-neutral-600">{item.type}</div>
                  {item.expert && <div className="text-xs text-neutral-500">Expert: {item.expert}</div>}
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-black">{item.date}</div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    item.credits === 'AI' ? 'bg-neutral-100 text-neutral-600' : 'bg-black text-white'
                  }`}>
                    {item.credits}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
