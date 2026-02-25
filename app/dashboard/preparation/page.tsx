"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Video,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react"

const mockInterviews = [
  { id: 1, student: "Rahul Sharma", type: "Consulting", date: "Oct 15", time: "10:00 AM", status: "Scheduled" },
  { id: 2, student: "Priya Patel", type: "Product", date: "Oct 16", time: "2:00 PM", status: "Scheduled" },
  { id: 3, student: "Amit Kumar", type: "General", date: "Oct 12", time: "11:00 AM", status: "Completed" },
]

const cdmModules = [
  { name: "Consulting Case Prep", students: 45, completion: 78, status: "Active" },
  { name: "Product Management", students: 32, completion: 65, status: "Active" },
  { name: "Finance Fundamentals", students: 28, completion: 45, status: "Active" },
  { name: "HR & Leadership", students: 20, completion: 30, status: "Inactive" },
]

const recommendations = [
  { sector: "Consulting", roles: 8, suggestion: "Focus on case interviews and problem-solving frameworks" },
  { sector: "Product", roles: 5, suggestion: "Prepare for product sense and metric-driven discussions" },
  { sector: "Tech", roles: 12, suggestion: "Strengthen technical aptitude and system design basics" },
]

export default function PreparationPage() {
  const hasCDM = true
  const mockCreditsRemaining = 5
  const mockCreditsTotal = 10

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Student Preparation</h1>
        <p className="text-muted-foreground">Placement readiness and interview preparation</p>
      </div>

      {/* Credits Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                <Video className="w-5 h-5 text-background" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {mockCreditsRemaining}/{mockCreditsTotal}
                </p>
                <p className="text-sm text-muted-foreground">Mock Interview Credits</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Users className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">125</p>
                <p className="text-sm text-muted-foreground">Students Covered</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Modules Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {hasCDM ? (
        <>
          {/* CDM Modules */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                CDM Modules Activated
              </CardTitle>
              <CardDescription>Career Development Module progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cdmModules.map((module, idx) => (
                  <div key={idx} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{module.name}</p>
                          <p className="text-xs text-muted-foreground">{module.students} students enrolled</p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={module.status === "Active" ? "bg-foreground text-background" : ""}
                      >
                        {module.status}
                      </Badge>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Completion</span>
                        <span className="font-medium text-foreground">{module.completion}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full transition-all"
                          style={{ width: `${module.completion}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mock Interviews */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Mock Interviews
                  </CardTitle>
                  <CardDescription>Schedule and track mock interview sessions</CardDescription>
                </div>
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockInterviews.map((interview) => (
                  <div key={interview.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                        <Users className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{interview.student}</p>
                        <p className="text-sm text-muted-foreground">
                          {interview.type} | {interview.date} at {interview.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {interview.status === "Completed" ? (
                        <Badge variant="secondary">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      ) : (
                        <>
                          <Badge className="bg-foreground text-background">
                            <Clock className="w-3 h-3 mr-1" />
                            Scheduled
                          </Badge>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feedback Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Feedback Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <p className="text-3xl font-bold text-foreground">4.2/5</p>
                  <p className="text-sm text-muted-foreground">Avg Interview Score</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <p className="text-3xl font-bold text-foreground">78%</p>
                  <p className="text-sm text-muted-foreground">Case Crack Rate</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <p className="text-3xl font-bold text-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">Communication Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        /* If CDM Not Purchased */
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preparation Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-background" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Based on your role pipeline, we recommend targeted preparation for:
                  </p>
                  <div className="space-y-2">
                    {recommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Badge variant="secondary">{rec.sector}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {rec.roles} roles | {rec.suggestion}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-4">
              <p className="font-medium text-foreground mb-2">Included Credits:</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="w-4 h-4" />
                Mock Interview Credits: {mockCreditsRemaining} remaining
              </div>
            </div>

            <Button className="w-full mt-4 bg-foreground text-background hover:bg-foreground/90">
              Explore Preparation Modules
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
