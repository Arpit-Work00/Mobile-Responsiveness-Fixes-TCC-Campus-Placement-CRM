"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, User, Target, BookOpen, MessageSquare, Video, FileText, TrendingUp, CheckCircle2, Clock, AlertTriangle } from "lucide-react"

// Student data mapping based on ID
const studentsData: Record<string, { name: string; specialization: string; cpi: number; readinessScore: number; preferredFunction: string }> = {
  "2024MBA001": { name: "Aditya Sharma", specialization: "Marketing", cpi: 8.2, readinessScore: 85, preferredFunction: "Product" },
  "2024MBA002": { name: "Priya Verma", specialization: "Strategy", cpi: 8.5, readinessScore: 92, preferredFunction: "Consulting" },
  "2024MBA003": { name: "Rahul Gupta", specialization: "Operations", cpi: 7.8, readinessScore: 72, preferredFunction: "Analytics" },
  "2024MBA004": { name: "Sneha Patel", specialization: "Finance", cpi: 8.0, readinessScore: 88, preferredFunction: "Finance" },
  "2024MBA005": { name: "Vikram Singh", specialization: "Marketing", cpi: 6.8, readinessScore: 58, preferredFunction: "Marketing" },
  "2024MBA006": { name: "Ananya Reddy", specialization: "Strategy", cpi: 9.0, readinessScore: 95, preferredFunction: "Consulting" },
  "2024MBA007": { name: "Karan Mehta", specialization: "Marketing", cpi: 7.5, readinessScore: 75, preferredFunction: "Product" },
  "2024MBA008": { name: "Neha Singh", specialization: "Finance", cpi: 8.3, readinessScore: 82, preferredFunction: "Finance" },
  "2024MBA009": { name: "Rohit Kumar", specialization: "Operations", cpi: 7.2, readinessScore: 68, preferredFunction: "Operations" },
  "2024MBA010": { name: "Divya Sharma", specialization: "Strategy", cpi: 8.8, readinessScore: 90, preferredFunction: "Consulting" },
}

export default function StudentDetailPage() {
  const params = useParams()
  const studentId = (params?.id as string) || "unknown"

  // Get student data from mapping or generate default
  const studentData = studentsData[studentId]
  
  // Mock student data
  const student = {
    name: studentData?.name || studentId,
    rollNo: studentId,
    email: `${(studentData?.name || "student").toLowerCase().replace(" ", ".")}@iimb.ac.in`,
    batch: "PGP 2024-26",
    targetFunction: studentData?.preferredFunction || "Product Management",
    targetCompanies: ["Amazon", "Google", "Microsoft", "Flipkart"],
    readinessScore: studentData?.readinessScore || 78,
    prepProgress: 65,
    modulesCompleted: 8,
    totalModules: 12,
    mentorSessions: 4,
    aiInterviews: 3,
    expertMocks: 1,
  }

  const modules = [
    { name: "Resume Building", status: "completed", score: 85, date: "1 Sep 2024" },
    { name: "Self Introduction", status: "completed", score: 90, date: "5 Sep 2024" },
    { name: "HR Questions", status: "completed", score: 82, date: "8 Sep 2024" },
    { name: "Case Studies Basics", status: "completed", score: 75, date: "12 Sep 2024" },
    { name: "Product Sense", status: "completed", score: 88, date: "15 Sep 2024" },
    { name: "Estimation Cases", status: "in_progress", score: null, date: null },
    { name: "Strategy Cases", status: "not_started", score: null, date: null },
    { name: "Behavioral Deep Dive", status: "completed", score: 80, date: "18 Sep 2024" },
    { name: "Technical Fundamentals", status: "completed", score: 72, date: "20 Sep 2024" },
    { name: "Guesstimates", status: "in_progress", score: null, date: null },
    { name: "Mock Interview Prep", status: "completed", score: 85, date: "22 Sep 2024" },
    { name: "Final Readiness", status: "not_started", score: null, date: null },
  ]

  const mentorFeedback = [
    { mentor: "Vikram Mehta", company: "Google", date: "20 Sep 2024", type: "Product Case", verdict: "Ready", feedback: "Strong product sense. Structured approach to problem solving. Needs more practice on metrics definition." },
    { mentor: "Anita Desai", company: "Amazon", date: "15 Sep 2024", type: "Behavioral", verdict: "Needs Work", feedback: "Good communication but stories lack impact. Work on STAR format and quantify achievements." },
    { mentor: "Raj Krishnan", company: "McKinsey", date: "10 Sep 2024", type: "Case Interview", verdict: "Ready", feedback: "Excellent framework building. Quick math. Could improve on synthesis and recommendation." },
    { mentor: "Priya Sharma", company: "Microsoft", date: "5 Sep 2024", type: "Resume Review", verdict: "Ready", feedback: "Strong resume. Highlighted key achievements well. Minor formatting suggestions implemented." },
  ]

  const aiInterviews = [
    { type: "Product Case", date: "22 Sep 2024", score: 82, communication: 85, structure: 80, content: 78, recommendation: "Focus on metric-driven answers" },
    { type: "Behavioral", date: "18 Sep 2024", score: 75, communication: 80, structure: 70, content: 75, recommendation: "Practice STAR format more" },
    { type: "Guesstimate", date: "12 Sep 2024", score: 88, communication: 85, structure: 90, content: 88, recommendation: "Great approach, maintain pace" },
  ]

  const applications = [
    { company: "Amazon", role: "Product Manager", status: "Applied", appliedDate: "20 Sep 2024" },
    { company: "Google", role: "Associate PM", status: "Shortlisted", appliedDate: "18 Sep 2024" },
    { company: "Microsoft", role: "PM Intern", status: "Applied", appliedDate: "22 Sep 2024" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/cdm/students">
          <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-black">{student.name}</h1>
            <span className={`text-xs font-medium px-2 py-1 rounded ${
              student.readinessScore >= 80 ? 'bg-black text-white' :
              student.readinessScore >= 60 ? 'bg-neutral-200 text-black' :
              'bg-neutral-100 text-neutral-600'
            }`}>
              Readiness: {student.readinessScore}%
            </span>
          </div>
          <p className="text-sm text-neutral-600">{student.rollNo} | {student.batch} | {student.email}</p>
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800">
          <MessageSquare className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-xs text-neutral-500">Target Function</div>
          <div className="text-sm font-semibold text-black mt-1">{student.targetFunction}</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-xs text-neutral-500">Modules Progress</div>
          <div className="text-sm font-semibold text-black mt-1">{student.modulesCompleted}/{student.totalModules} completed</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-xs text-neutral-500">Mentor Sessions</div>
          <div className="text-sm font-semibold text-black mt-1">{student.mentorSessions} sessions</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-xs text-neutral-500">AI Interviews</div>
          <div className="text-sm font-semibold text-black mt-1">{student.aiInterviews} completed</div>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4 bg-white">
          <div className="text-xs text-neutral-500">Expert Mocks</div>
          <div className="text-sm font-semibold text-black mt-1">{student.expertMocks} completed</div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start border-b border-neutral-200 bg-transparent h-auto p-0 rounded-none">
          <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent">
            <User className="w-4 h-4 mr-1" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="modules" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent">
            <BookOpen className="w-4 h-4 mr-1" />
            Modules
          </TabsTrigger>
          <TabsTrigger value="feedback" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent">
            <MessageSquare className="w-4 h-4 mr-1" />
            Mentor Feedback
          </TabsTrigger>
          <TabsTrigger value="interviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent">
            <Video className="w-4 h-4 mr-1" />
            Interviews
          </TabsTrigger>
          <TabsTrigger value="applications" className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent">
            <FileText className="w-4 h-4 mr-1" />
            Applications
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-black mb-4">Target Companies</h3>
              <div className="flex flex-wrap gap-2">
                {student.targetCompanies.map((company) => (
                  <span key={company} className="text-sm bg-neutral-100 text-black px-3 py-1 rounded">{company}</span>
                ))}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-black mb-4">Readiness Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Overall Score</span>
                  <span className="text-sm font-semibold text-black">{student.readinessScore}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{width: `${student.readinessScore}%`}} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Prep Progress</span>
                  <span className="text-sm font-semibold text-black">{student.prepProgress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-neutral-600 h-2 rounded-full" style={{width: `${student.prepProgress}%`}} />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Modules Tab */}
        <TabsContent value="modules" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Module</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Score</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Completed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {modules.map((module, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{module.name}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        module.status === 'completed' ? 'bg-black text-white' :
                        module.status === 'in_progress' ? 'bg-neutral-200 text-black' :
                        'bg-neutral-100 text-neutral-500'
                      }`}>
                        {module.status === 'completed' ? 'Done' : module.status === 'in_progress' ? 'In Progress' : 'Not Started'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{module.score || '-'}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{module.date || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Mentor Feedback Tab */}
        <TabsContent value="feedback" className="mt-6">
          <div className="space-y-4">
            {mentorFeedback.map((fb, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-black">{fb.type}</h4>
                    <p className="text-xs text-neutral-500">{fb.mentor} ({fb.company}) | {fb.date}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    fb.verdict === 'Ready' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                  }`}>
                    {fb.verdict}
                  </span>
                </div>
                <p className="text-sm text-neutral-700">{fb.feedback}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Interviews Tab */}
        <TabsContent value="interviews" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Score</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Comm</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Structure</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Content</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {aiInterviews.map((interview, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{interview.type}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.date}</td>
                    <td className="px-4 py-3 text-sm text-center font-semibold text-black">{interview.score}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{interview.communication}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{interview.structure}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{interview.content}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{interview.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="applications" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Applied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {applications.map((app, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{app.company}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{app.role}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        app.status === 'Shortlisted' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{app.appliedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
