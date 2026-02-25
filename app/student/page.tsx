"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, Briefcase, ChevronRight, CheckCircle2, Clock, AlertTriangle, Target, Star, Calendar, ArrowRight, Building2, User } from "lucide-react"

export default function StudentDashboardPage() {
  const router = useRouter()
  const readinessScore = 78
  const targetFunctions = ["Consulting", "Product Management"]
  
  // Application funnel data
  const applicationFunnel = {
    applied: 8,
    shortlisted: 4,
    interviews: 2,
    offers: 0,
  }

  // Upcoming interviews
  const upcomingInterviews = [
    { company: "Flipkart", role: "Product Manager", round: "Case Round", date: "18 Oct", time: "10:00 AM", type: "Online" },
    { company: "Amazon", role: "PM Intern", round: "Behavioral", date: "20 Oct", time: "2:30 PM", type: "On-campus" },
  ]

  // My applications with status
  const myApplications = [
    { company: "McKinsey & Company", role: "Associate", status: "applied", appliedDate: "10 Oct", deadline: "25 Oct" },
    { company: "Amazon", role: "Product Manager", status: "shortlisted", appliedDate: "8 Oct", nextStep: "Interview on 20 Oct" },
    { company: "Bain & Company", role: "Associate Consultant", status: "applied", appliedDate: "12 Oct", deadline: "30 Oct" },
    { company: "Flipkart", role: "Product Manager", status: "interview", appliedDate: "5 Oct", nextStep: "Case Round - 18 Oct" },
    { company: "Google", role: "APM", status: "applied", appliedDate: "14 Oct", deadline: "1 Nov" },
    { company: "BCG", role: "Consultant", status: "rejected", appliedDate: "1 Oct", rejectedDate: "15 Oct" },
    { company: "Deloitte", role: "Consultant", status: "shortlisted", appliedDate: "3 Oct", nextStep: "Awaiting interview slot" },
    { company: "Microsoft", role: "Program Manager", status: "applied", appliedDate: "15 Oct", deadline: "10 Nov" },
  ]

  // Learning journey modules
  const learningJourney = [
    { name: "Career Clarity", sessions: 4, completed: 4, status: "completed" },
    { name: "Resume & LinkedIn", sessions: 6, completed: 5, status: "in_progress" },
    { name: "Case Interviews", sessions: 10, completed: 6, status: "in_progress" },
    { name: "Behavioral Prep", sessions: 6, completed: 3, status: "in_progress" },
    { name: "Technical Skills", sessions: 8, completed: 0, status: "not_started" },
    { name: "GD & Extempore", sessions: 4, completed: 0, status: "not_started" },
  ]

  // Recent feedback
  const recentFeedback = [
    { from: "Rajiv Sharma (ex-McKinsey)", module: "Case Interview", date: "2 days ago", summary: "Strong structuring, needs work on synthesis", rating: 4.5 },
    { from: "AI Interview Bot", module: "Behavioral", date: "4 days ago", summary: "STAR stories need more impact metrics", rating: 3.8 },
  ]

  // Open roles from college
  const openRoles = [
    { company: "McKinsey", role: "Associate", deadline: "25 Oct", match: 92, ctc: "32 LPA" },
    { company: "Amazon", role: "Product Manager", deadline: "28 Oct", match: 88, ctc: "42 LPA" },
    { company: "Bain", role: "Associate Consultant", deadline: "30 Oct", match: 85, ctc: "30 LPA" },
    { company: "Google", role: "APM", deadline: "1 Nov", match: 82, ctc: "45 LPA" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "applied": return "bg-neutral-100 text-neutral-600"
      case "shortlisted": return "bg-neutral-200 text-black"
      case "interview": return "bg-black text-white"
      case "rejected": return "bg-neutral-100 text-neutral-400"
      case "offer": return "bg-black text-white"
      default: return "bg-neutral-100 text-neutral-600"
    }
  }

  const upcomingTasks = [
    { task: "Complete Case Interview Module", due: "15 Oct", type: "expert", priority: "high" },
    { task: "Prepare STAR Stories", due: "18 Oct", type: "interview", priority: "medium" },
    { task: "Update Resume", due: "20 Oct", type: "resume", priority: "low" },
  ]

  const moduleProgress = [
    { name: "Career Clarity", progress: 100, status: "completed" },
    { name: "Resume & LinkedIn", progress: 83, status: "in_progress" },
    { name: "Case Interviews", progress: 60, status: "in_progress" },
    { name: "Behavioral Prep", progress: 50, status: "in_progress" },
    { name: "Technical Skills", progress: 0, status: "not_started" },
    { name: "GD & Extempore", progress: 0, status: "not_started" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Welcome back, Arjun</h1>
          <p className="text-sm text-neutral-600 mt-1">IIM Bangalore | Target: {targetFunctions.join(", ")}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-black">{readinessScore}%</div>
          <div className="text-sm text-neutral-600">Interview Readiness</div>
        </div>
      </div>

      {/* Application Funnel - Main Feature */}
      <div className="border border-neutral-200 rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-black uppercase tracking-wide">My Application Pipeline</h2>
          <Link href="/student/applications">
            <Button variant="link" size="sm" className="text-black p-0 h-auto">View All Applications</Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div 
            onClick={() => router.push('/student/applications?status=applied')}
            className="text-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <div className="text-3xl font-bold text-black">{applicationFunnel.applied}</div>
            <div className="text-sm text-neutral-600">Applied</div>
          </div>
          <div 
            onClick={() => router.push('/student/applications?status=shortlisted')}
            className="text-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <div className="text-3xl font-bold text-black">{applicationFunnel.shortlisted}</div>
            <div className="text-sm text-neutral-600">Shortlisted</div>
          </div>
          <div 
            onClick={() => router.push('/student/applications?status=interview')}
            className="text-center p-4 border-2 border-black rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <div className="text-3xl font-bold text-black">{applicationFunnel.interviews}</div>
            <div className="text-sm text-neutral-600">Interviews</div>
          </div>
          <div 
            onClick={() => router.push('/student/applications?status=offer')}
            className="text-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <div className="text-3xl font-bold text-black">{applicationFunnel.offers}</div>
            <div className="text-sm text-neutral-600">Offers</div>
          </div>
        </div>
      </div>

      {/* Upcoming Interviews - Critical Alert */}
      {upcomingInterviews.length > 0 && (
        <div className="border-2 border-black rounded-lg p-4 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-black" />
            <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Upcoming Interviews</h2>
          </div>
          <div className="space-y-3">
            {upcomingInterviews.map((interview, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-black">{interview.company} - {interview.role}</div>
                    <div className="text-sm text-neutral-600">{interview.round}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-black">{interview.date}, {interview.time}</div>
                  <div className="text-xs text-neutral-500">{interview.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Learning Journey & Applications */}
        <div className="lg:col-span-2 space-y-6">
          {/* Learning Journey */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Learning Journey</h2>
              <Link href="/student/modules">
                <Button variant="link" size="sm" className="text-black p-0 h-auto">View All Modules</Button>
              </Link>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
              {learningJourney.map((module, idx) => (
                <Link key={idx} href="/student/modules" className="block">
                  <div className="px-4 py-3 hover:bg-neutral-50 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {module.status === 'completed' ? (
                          <CheckCircle2 className="w-4 h-4 text-black" />
                        ) : module.status === 'in_progress' ? (
                          <Clock className="w-4 h-4 text-neutral-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-neutral-300" />
                        )}
                        <span className="text-sm font-medium text-black">{module.name}</span>
                      </div>
                      <span className="text-sm text-neutral-600">{module.completed}/{module.sessions} sessions</span>
                    </div>
                    <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-black rounded-full" style={{ width: `${(module.completed / module.sessions) * 100}%` }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* My Applications */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-black uppercase tracking-wide">My Applications ({myApplications.length})</h2>
              <Link href="/student/applications">
                <Button variant="link" size="sm" className="text-black p-0 h-auto">View All</Button>
              </Link>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Company</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Role</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Next Step</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {myApplications.slice(0, 5).map((app, idx) => (
                    <tr key={idx} onClick={() => router.push('/student/applications')} className="hover:bg-neutral-50 cursor-pointer">
                      <td className="px-4 py-2.5 text-sm font-medium text-black">{app.company}</td>
                      <td className="px-4 py-2.5 text-sm text-neutral-600">{app.role}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusBadge(app.status)}`}>
                          {app.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-sm text-neutral-600">
                        {app.nextStep || (app.status === 'rejected' ? 'Closed' : `Deadline: ${app.deadline}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Feedback */}
          <div>
            <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Recent Feedback</h2>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
              {recentFeedback.map((fb, idx) => (
                <div key={idx} className="p-4 hover:bg-neutral-50 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-black">{fb.module}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{fb.from} - {fb.date}</div>
                      <div className="text-sm text-neutral-600 mt-2">{fb.summary}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-black fill-black" />
                      <span className="text-sm font-medium text-black">{fb.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Open Roles & Quick Actions */}
        <div className="space-y-6">
          {/* Open Roles from College */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Open Roles</h2>
              <Link href="/student/jobs">
                <Button variant="link" size="sm" className="text-black p-0 h-auto">Browse All</Button>
              </Link>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
              {openRoles.map((role, idx) => (
                <Link key={idx} href="/student/jobs" className="block p-3 hover:bg-neutral-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-black">{role.company}</div>
                      <div className="text-xs text-neutral-500">{role.role}</div>
                      <div className="text-xs text-neutral-400 mt-1">{role.ctc} | Deadline: {role.deadline}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-black">{role.match}%</div>
                      <div className="text-xs text-neutral-500">match</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/student/jobs">
              <Button className="w-full mt-3 bg-black text-white hover:bg-neutral-800">
                <Briefcase className="w-4 h-4 mr-2" />
                Apply to More Roles
              </Button>
            </Link>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Quick Actions</h2>
            <div className="space-y-2">
              <Link href="/student/interviews">
                <Button variant="outline" className="w-full justify-start border-neutral-200 text-black hover:bg-neutral-100 bg-transparent">
                  <Video className="w-4 h-4 mr-2" />
                  Take AI Mock Interview
                </Button>
              </Link>
              <Link href="/student/modules">
                <Button variant="outline" className="w-full justify-start border-neutral-200 text-black hover:bg-neutral-100 bg-transparent">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </Link>
              <Link href="/student/resume">
                <Button variant="outline" className="w-full justify-start border-neutral-200 text-black hover:bg-neutral-100 bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Readiness Score */}
          <div className="border border-neutral-200 rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-black">Interview Readiness</span>
              <span className="text-sm text-neutral-600">{readinessScore}%</span>
            </div>
            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div className="h-full bg-black rounded-full transition-all" style={{ width: `${readinessScore}%` }} />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-neutral-500">
              <span>Starting</span>
              <span>Ready</span>
            </div>
          </div>

          {/* Credits Status */}
          <div className="border border-neutral-200 rounded-lg p-4 bg-white">
            <h3 className="text-sm font-semibold text-black mb-3">Your Credits</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">AI Interviews</span>
                <span className="text-sm font-medium text-black">8 remaining</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Expert Mocks</span>
                <span className="text-sm font-medium text-black">2 remaining</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Resume Reviews</span>
                <span className="text-sm font-medium text-black">1 remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
