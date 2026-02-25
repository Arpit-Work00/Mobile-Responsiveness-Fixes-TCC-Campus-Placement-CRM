"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Video, Bot, Users, Play, Download, Calendar, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentInterviewsPage() {
  const aiCredits = 8
  const expertCredits = 2

  const pastAIInterviews = [
    { type: "Case Interview", date: "12 Oct", duration: "32 min", score: 78, areas: ["Structuring: 85", "Math: 72", "Synthesis: 75"] },
    { type: "Behavioral", date: "8 Oct", duration: "28 min", score: 72, areas: ["STAR: 75", "Clarity: 70", "Impact: 71"] },
    { type: "Product", date: "3 Oct", date: "3 Oct", duration: "35 min", score: 65, areas: ["Framework: 68", "Creativity: 62", "Prioritization: 65"] },
  ]

  const expertSessions = [
    { expert: "Rajiv Sharma (ex-McKinsey)", type: "Case Mock", date: "10 Oct", verdict: "Almost Ready", feedback: "Strong structuring, needs work on synthesis" },
  ]

  const scheduled = [
    { type: "Expert Mock - Consulting", date: "18 Oct, 3 PM", expert: "Rajiv Sharma", credits: "expert" },
  ]

  const interviewTypes = [
    { name: "Case Interview", description: "Market sizing, profitability, M&A cases", duration: "30-40 min", icon: "📊" },
    { name: "Behavioral", description: "STAR method, leadership, teamwork", duration: "25-30 min", icon: "🎯" },
    { name: "Product", description: "Product design, improvement, metrics", duration: "30-40 min", icon: "💡" },
    { name: "Technical", description: "Domain-specific technical questions", duration: "30-45 min", icon: "⚙️" },
  ]

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
            <h1 className="text-xl font-bold text-black">Mock Interviews</h1>
            <p className="text-sm text-neutral-600">Practice with AI or schedule expert sessions</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm border border-neutral-200 rounded px-3 py-1.5">
            <span className="text-neutral-600">AI Credits:</span> <span className="font-medium text-black">{aiCredits}</span>
          </div>
          <div className="text-sm border border-neutral-200 rounded px-3 py-1.5">
            <span className="text-neutral-600">Expert Credits:</span> <span className="font-medium text-black">{expertCredits}</span>
          </div>
        </div>
      </div>

      {/* Start New Interview */}
      <div>
        <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Start AI Interview</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {interviewTypes.map((type) => (
            <div key={type.name} className="border border-neutral-200 rounded-lg p-4 bg-white hover:border-black transition-colors cursor-pointer">
              <div className="text-2xl mb-2">{type.icon}</div>
              <h3 className="font-semibold text-black">{type.name}</h3>
              <p className="text-xs text-neutral-600 mt-1">{type.description}</p>
              <p className="text-xs text-neutral-500 mt-2">{type.duration}</p>
              <Button size="sm" className="w-full mt-3 bg-black text-white hover:bg-neutral-800">
                <Play className="w-4 h-4 mr-1" />
                Start
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Expert Session */}
      <div className="border-2 border-black rounded-lg p-5 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-black">Book Expert Mock Interview</h3>
            <p className="text-sm text-neutral-600 mt-1">45-min session with industry experts from McKinsey, BCG, Amazon, Google</p>
          </div>
          <Button className="bg-black text-white hover:bg-neutral-800">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Session (2 credits left)
          </Button>
        </div>
      </div>

      <Tabs defaultValue="past" className="w-full">
        <TabsList className="border-b border-neutral-200 bg-transparent w-full justify-start h-auto p-0 rounded-none">
          <TabsTrigger value="past" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2">
            Past AI Interviews
          </TabsTrigger>
          <TabsTrigger value="expert" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2">
            Expert Sessions
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2">
            Scheduled
          </TabsTrigger>
        </TabsList>

        <TabsContent value="past" className="mt-4">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {pastAIInterviews.map((interview, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-neutral-50">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-neutral-400" />
                    <div>
                      <div className="font-medium text-black">{interview.type}</div>
                      <div className="text-xs text-neutral-500">{interview.date} - {interview.duration}</div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    {interview.areas.map((area, i) => (
                      <span key={i} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded">{area}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className={`text-2xl font-bold ${
                    interview.score >= 75 ? 'text-black' : 
                    interview.score >= 60 ? 'text-neutral-600' : 
                    'text-neutral-400'
                  }`}>
                    {interview.score}%
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-black">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-black">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="expert" className="mt-4">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {expertSessions.map((session, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-neutral-50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-black" />
                  <div>
                    <div className="font-medium text-black">{session.type}</div>
                    <div className="text-sm text-neutral-600">{session.expert}</div>
                    <div className="text-xs text-neutral-500">{session.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    session.verdict === 'Ready' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                  }`}>
                    {session.verdict}
                  </span>
                  <div className="text-sm text-neutral-600 mt-2 max-w-xs text-right">{session.feedback}</div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="mt-4">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {scheduled.map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-neutral-50">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-black" />
                  <div>
                    <div className="font-medium text-black">{item.type}</div>
                    {item.expert && <div className="text-sm text-neutral-600">with {item.expert}</div>}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-black">{item.date}</div>
                  <span className={`text-xs px-2 py-0.5 rounded mt-1 inline-block ${
                    item.credits === 'expert' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {item.credits === 'expert' ? 'EXPERT' : 'AI'}
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
