"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { CheckCircle2, Video, FileText } from "lucide-react"

export default function Prepare() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Preparation & Guidance</h1>
          <p className="text-gray-600">Practice, improve, and get ready for opportunities</p>
        </div>

        {/* Credits Card */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Your Credits</h2>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-600">Mock Interviews</p>
                  <p className="text-2xl font-bold">5 remaining</p>
                </div>
                <div className="border-l border-gray-200 pl-6">
                  <p className="text-sm text-gray-600">Expert Feedback</p>
                  <p className="text-2xl font-bold">3 remaining</p>
                </div>
              </div>
            </div>
            <Button variant="outline">Upgrade to Plus</Button>
          </div>
        </Card>

        <Tabs defaultValue="mocks" className="space-y-6">
          <TabsList>
            <TabsTrigger value="mocks">Mock Interviews</TabsTrigger>
            <TabsTrigger value="feedback">Feedback & Reports</TabsTrigger>
            <TabsTrigger value="modules">Learning Modules</TabsTrigger>
          </TabsList>

          <TabsContent value="mocks" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Schedule Mock */}
              <Card className="p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Schedule Mock Interview</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Interview Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Case Interview", "Behavioral", "Technical", "Product Design"].map((type) => (
                        <Button key={type} variant="outline" className="justify-start bg-transparent">
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Date & Time</label>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    <Video className="mr-2 h-4 w-4" />
                    Schedule Mock Interview
                  </Button>
                </div>
              </Card>

              {/* Upcoming Mocks */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-3">
                    <Badge className="mb-2 bg-blue-100 text-blue-700">Case Interview</Badge>
                    <p className="text-sm font-medium">Tomorrow, 3:00 PM</p>
                    <p className="text-xs text-gray-600 mt-1">With Expert: Priya Sharma</p>
                  </div>
                  <div className="text-center py-6 text-sm text-gray-600">No other sessions scheduled</div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            {[
              {
                type: "Case Interview",
                date: "5 Feb 2025",
                expert: "Rajesh Kumar",
                score: 7.5,
                status: "completed",
              },
              {
                type: "Behavioral",
                date: "28 Jan 2025",
                expert: "Anita Desai",
                score: 8.0,
                status: "completed",
              },
            ].map((feedback, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{feedback.type} Mock</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {feedback.score}/10
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Conducted by {feedback.expert} on {feedback.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Report
                  </Button>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Communication</span>
                      <span className="text-sm text-gray-600">8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Problem Solving</span>
                      <span className="text-sm text-gray-600">7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Confidence</span>
                      <span className="text-sm text-gray-600">8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-1">Key Recommendation</p>
                  <p className="text-sm text-gray-600">
                    Work on structuring your approach more clearly in the first 2 minutes.
                  </p>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="modules">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Case Interview Fundamentals",
                  progress: 65,
                  status: "In Progress",
                  lessons: "8/12 lessons",
                },
                {
                  title: "Product Management Essentials",
                  progress: 30,
                  status: "In Progress",
                  lessons: "3/10 lessons",
                },
                {
                  title: "Behavioral Interview Mastery",
                  progress: 0,
                  status: "Not Started",
                  lessons: "0/8 lessons",
                },
                {
                  title: "Resume & Profile Optimization",
                  progress: 0,
                  status: "Not Started",
                  lessons: "0/5 lessons",
                },
              ].map((module) => (
                <Card key={module.title} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{module.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{module.lessons}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    {module.progress > 0 ? "Continue Learning" : "Start Module"}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
