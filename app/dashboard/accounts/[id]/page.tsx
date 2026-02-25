"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Send, Briefcase, Users, Globe, MapPin, TrendingUp, Phone } from "lucide-react"

export default function CompanyAccountDetailPage() {
  const [newNote, setNewNote] = useState("")

  const company = {
    name: "McKinsey & Company",
    sector: "Consulting",
    size: "10000+",
    location: "Mumbai",
    website: "mckinsey.com",
    status: "hot",
    owner: "Rahul Sharma",
    tier: "Tier 1",
  }

  const communicationTimeline = [
    {
      id: 1,
      type: "email",
      date: "March 10, 2025 11:30 AM",
      from: "Anita Desai (HR Director, McKinsey)",
      to: "placement@iimb.ac.in",
      subject: "Re: Campus Hiring Discussion",
      body: "Thank you for sharing the batch profile. We'd like to schedule a guest session on March 15. Please confirm venue and timing.",
      threadCount: 3,
      status: "received",
    },
    {
      id: 2,
      type: "email",
      date: "March 10, 2025 9:00 AM",
      from: "Rahul Sharma",
      to: "anita.desai@mckinsey.com",
      subject: "Campus Hiring Discussion",
      body: "Dear Anita, Following up on our conversation last week. Please find attached our 2025 batch profile. Looking forward to discussing campus hiring opportunities.",
      status: "sent",
    },
    {
      id: 3,
      type: "call",
      date: "March 8, 2025 3:00 PM",
      duration: "23 minutes",
      participants: "Rahul Sharma, Anita Desai (HR Director)",
      outcome: "Interested",
      transcript: `
Rahul: Thank you for taking the time today. I wanted to discuss our MBA batch profile.
Anita: Of course. We're definitely interested in IIM Bangalore this year.
Rahul: That's great to hear. We have 400+ students across MBA and EPGP programs.
Anita: Perfect. We're looking for candidates with strong analytical background. Can you share the batch profile?
Rahul: Absolutely. I'll send that over by email today. Would you be open to a guest session?
Anita: Yes, we can do that. Let's aim for mid-March.
      `,
      notes:
        "Very positive conversation. HR confirmed interest. Action: Share batch profile and schedule guest session.",
    },
    {
      id: 4,
      type: "email",
      date: "March 5, 2025 10:15 AM",
      from: "Rahul Sharma",
      to: "anita.desai@mckinsey.com",
      subject: "Batch Profile Sharing",
      body: "Hi Anita, As discussed, please find our MBA 2025 batch profile attached. Happy to discuss further.",
      status: "opened",
    },
    {
      id: 5,
      type: "meeting",
      date: "March 2, 2025 2:00 PM",
      type_detail: "Virtual Meeting",
      attendees: ["Rahul Sharma", "Priya Patel", "Anita Desai (McKinsey)", "Rohan Mehta (McKinsey)"],
      agenda: "Initial discussion about campus hiring requirements",
      outcome: "Agreed to proceed with 2 roles for MBA program",
      notes:
        "McKinsey interested in Management Consultant and Business Analyst roles. No work experience barrier. Looking for analytical skills and problem-solving ability. Timeline: Roles to be posted by March 1, applications by March 20.",
    },
    {
      id: 6,
      type: "email",
      date: "Feb 28, 2025 4:30 PM",
      from: "Anita Desai (McKinsey)",
      to: "placement@iimb.ac.in",
      subject: "Re: Initial Introduction",
      body: "Hi Rahul, Thanks for reaching out. Yes, we're planning campus hiring this year. Let's schedule a call to discuss further. How about next week?",
      status: "received",
    },
    {
      id: 7,
      type: "email",
      date: "Feb 28, 2025 10:00 AM",
      from: "Rahul Sharma",
      to: "anita.desai@mckinsey.com",
      subject: "Initial Introduction",
      body: "Dear Anita, I hope this email finds you well. I'm reaching out from IIM Bangalore's Placement Committee to discuss potential campus hiring opportunities for our 2025 batch.",
      status: "sent",
    },
  ]

  const roles = [
    {
      title: "Management Consultant",
      program: "MBA",
      postedDate: "March 1, 2025",
      status: "Active",
      applications: 45,
    },
    {
      title: "Business Analyst",
      program: "MBA",
      postedDate: "March 1, 2025",
      status: "Active",
      applications: 38,
    },
  ]

  const notes = [
    {
      date: "March 10, 2025",
      author: "Rahul Sharma",
      content: "HR confirmed guest session on March 15. Need to arrange auditorium and AV setup.",
    },
    {
      date: "March 8, 2025",
      author: "Rahul Sharma",
      content: "Very positive meeting. Looking for candidates with strong analytical skills. No work ex barrier.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/accounts">
          <Button variant="outline" size="icon" className="bg-white border-black">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-black">{company.name}</h1>
            <Badge variant="outline" className="bg-black text-white border-black font-semibold">
              {company.status.toUpperCase()}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-600">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {company.location}
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {company.sector}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {company.size} employees
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {company.website}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-neutral-600 mb-1">Account Owner</p>
          <p className="text-sm font-semibold text-black">{company.owner}</p>
        </div>
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="border-b border-neutral-200 bg-transparent w-full justify-start rounded-none h-auto p-0">
          <TabsTrigger
            value="timeline"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Communication Timeline
          </TabsTrigger>
          <TabsTrigger
            value="overview"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="calls"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Calls
          </TabsTrigger>
          <TabsTrigger
            value="emails"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Emails
          </TabsTrigger>
          <TabsTrigger
            value="meetings"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Meetings
          </TabsTrigger>
          <TabsTrigger
            value="roles"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Roles & Processes
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none text-black"
          >
            Notes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-4">
          <Card className="border border-neutral-200 bg-white">
            <CardHeader className="border-b border-neutral-200">
              <CardTitle className="text-base font-bold text-black">Full Communication Timeline</CardTitle>
              <p className="text-sm text-neutral-600">Chronological view of all emails, calls, and meetings</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-neutral-200">
                {communicationTimeline.map((item) => (
                  <div key={item.id} className="p-4 hover:bg-neutral-50">
                    {item.type === "email" && (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-neutral-900 rounded flex items-center justify-center">
                              <Send className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-black">
                                {item.status === "sent" ? "Email Sent" : "Email Received"}
                              </p>
                              <p className="text-xs text-neutral-600">{item.date}</p>
                            </div>
                          </div>
                          {item.status === "received" && (
                            <Badge variant="outline" className="bg-black text-white border-black text-xs">
                              FROM COMPANY
                            </Badge>
                          )}
                        </div>
                        <div className="ml-10">
                          <p className="text-xs text-neutral-600 mb-1">
                            <span className="font-medium">From:</span> {item.from}
                          </p>
                          <p className="text-xs text-neutral-600 mb-1">
                            <span className="font-medium">To:</span> {item.to}
                          </p>
                          <p className="text-sm font-semibold text-black mb-2">Subject: {item.subject}</p>
                          <p className="text-sm text-neutral-700 bg-neutral-50 p-3 rounded border border-neutral-200">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    )}

                    {item.type === "call" && (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                              <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-black">Phone Call</p>
                              <p className="text-xs text-neutral-600">
                                {item.date} • {item.duration}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              item.outcome === "Interested"
                                ? "bg-black text-white border-black"
                                : "bg-neutral-100 text-black border-neutral-300"
                            }`}
                          >
                            {item.outcome}
                          </Badge>
                        </div>
                        <div className="ml-10">
                          <p className="text-xs text-neutral-600 mb-2">
                            <span className="font-medium">Participants:</span> {item.participants}
                          </p>
                          <details className="mb-2">
                            <summary className="text-sm font-medium text-black cursor-pointer hover:underline">
                              View Call Transcript
                            </summary>
                            <div className="mt-2 text-xs text-neutral-700 bg-neutral-50 p-3 rounded border border-neutral-200 whitespace-pre-line font-mono">
                              {item.transcript}
                            </div>
                          </details>
                          <p className="text-sm text-black">
                            <span className="font-medium">Notes:</span> {item.notes}
                          </p>
                        </div>
                      </div>
                    )}

                    {item.type === "meeting" && (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-black">{item.type_detail}</p>
                              <p className="text-xs text-neutral-600">{item.date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="ml-10">
                          <p className="text-xs text-neutral-600 mb-1">
                            <span className="font-medium">Attendees:</span> {item.attendees.join(", ")}
                          </p>
                          <p className="text-xs text-neutral-600 mb-2">
                            <span className="font-medium">Agenda:</span> {item.agenda}
                          </p>
                          <p className="text-sm text-black bg-neutral-50 p-3 rounded border border-neutral-200">
                            <span className="font-medium">Outcome:</span> {item.outcome}
                            <br />
                            <span className="font-medium">Notes:</span> {item.notes}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calls" className="mt-4">
          <Card className="border border-neutral-200 bg-white">
            <CardHeader className="border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-black">Call History</CardTitle>
                <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                  <Phone className="w-4 h-4 mr-2" />
                  Log New Call
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {communicationTimeline
                  .filter((item) => item.type === "call")
                  .map((call) => (
                    <div key={call.id} className="p-4 border border-neutral-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm font-bold text-black">Phone Call</p>
                          <p className="text-xs text-neutral-600">
                            {call.date} • {call.duration}
                          </p>
                          <p className="text-xs text-neutral-600 mt-1">
                            <span className="font-medium">Participants:</span> {call.participants}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${
                            call.outcome === "Interested"
                              ? "bg-black text-white border-black"
                              : "bg-neutral-100 text-black border-neutral-300"
                          }`}
                        >
                          {call.outcome}
                        </Badge>
                      </div>
                      <details>
                        <summary className="text-sm font-medium text-black cursor-pointer hover:underline mb-2">
                          View Full Transcript
                        </summary>
                        <div className="text-xs text-neutral-700 bg-neutral-50 p-3 rounded border border-neutral-200 whitespace-pre-line font-mono">
                          {call.transcript}
                        </div>
                      </details>
                      <p className="text-sm text-black mt-3">
                        <span className="font-medium">Call Notes:</span> {call.notes}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emails" className="mt-4">
          <Card className="border border-neutral-200 bg-white">
            <CardHeader className="border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-black">Email History</CardTitle>
                <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                  <Send className="w-4 h-4 mr-2" />
                  New Email
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-neutral-200">
                {communicationTimeline
                  .filter((item) => item.type === "email")
                  .map((email) => (
                    <div key={email.id} className="p-4 hover:bg-neutral-50">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm font-semibold text-black">{email.subject}</p>
                          <p className="text-xs text-neutral-600">{email.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {email.status === "received" && (
                            <Badge variant="outline" className="bg-black text-white border-black text-xs">
                              COMPANY REPLY
                            </Badge>
                          )}
                          {email.status === "sent" && (
                            <Badge variant="outline" className="bg-neutral-100 text-black border-neutral-300 text-xs">
                              SENT
                            </Badge>
                          )}
                          {email.status === "opened" && (
                            <Badge variant="outline" className="bg-neutral-100 text-black border-neutral-300 text-xs">
                              OPENED
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-600 mb-1">
                        <span className="font-medium">From:</span> {email.from}
                      </p>
                      <p className="text-xs text-neutral-600 mb-2">
                        <span className="font-medium">To:</span> {email.to}
                      </p>
                      <p className="text-sm text-neutral-700 bg-neutral-50 p-3 rounded border border-neutral-200">
                        {email.body}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings" className="mt-4">
          <Card className="border border-neutral-200 bg-white">
            <CardHeader className="border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-black">Meetings</CardTitle>
                <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {communicationTimeline
                  .filter((item) => item.type === "meeting")
                  .map((meeting) => (
                    <div key={meeting.id} className="p-4 border border-neutral-200 rounded-lg bg-white">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-sm font-bold text-black">{meeting.type_detail}</h4>
                          <p className="text-xs text-neutral-600">{meeting.date}</p>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-600 mb-2">
                        <span className="font-medium">Attendees:</span> {meeting.attendees.join(", ")}
                      </p>
                      <p className="text-xs text-neutral-600 mb-2">
                        <span className="font-medium">Agenda:</span> {meeting.agenda}
                      </p>
                      <div className="bg-neutral-50 p-3 rounded border border-neutral-200 text-sm text-black">
                        <p className="mb-2">
                          <span className="font-medium">Outcome:</span> {meeting.outcome}
                        </p>
                        <p>
                          <span className="font-medium">Detailed Notes:</span> {meeting.notes}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border border-neutral-200">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-black">5</p>
                <p className="text-xs text-neutral-600">Total Outreach</p>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-black">3</p>
                <p className="text-xs text-neutral-600">Meetings Held</p>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-black">2</p>
                <p className="text-xs text-neutral-600">Active Roles</p>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-black">83</p>
                <p className="text-xs text-neutral-600">Applications</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-neutral-200">
            <CardHeader>
              <CardTitle className="text-base font-bold text-black">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 pb-3 border-b border-neutral-200 last:border-0">
                  <Calendar className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">Meeting scheduled for March 15</p>
                    <p className="text-xs text-neutral-600">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-neutral-200 last:border-0">
                  <Send className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">Batch profile shared via email</p>
                    <p className="text-xs text-neutral-600">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">2 roles posted</p>
                    <p className="text-xs text-neutral-600">12 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="mt-4">
          <Card className="border border-neutral-200">
            <CardHeader className="border-b border-neutral-200">
              <CardTitle className="text-base font-bold text-black">Active Roles</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-black">Role Title</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Program</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Posted Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Applications</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((role, idx) => (
                      <tr key={idx} className="border-b border-neutral-100 last:border-0">
                        <td className="py-3 px-4 font-medium text-black">{role.title}</td>
                        <td className="py-3 px-4 text-black">{role.program}</td>
                        <td className="py-3 px-4 text-black">{role.postedDate}</td>
                        <td className="py-3 px-4 text-black font-semibold">{role.applications}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline" className="bg-black text-white border-black text-xs">
                            {role.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4 mt-4">
          <Card className="border border-neutral-200">
            <CardHeader className="border-b border-neutral-200">
              <CardTitle className="text-base font-bold text-black">Add New Note</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Textarea
                placeholder="Add notes about this company..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="mb-3 bg-white border-neutral-200"
                rows={3}
              />
              <Button size="sm" className="bg-black text-white">
                Save Note
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-neutral-200">
            <CardHeader className="border-b border-neutral-200">
              <CardTitle className="text-base font-bold text-black">Notes History</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {notes.map((note, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-black">{note.author}</p>
                      <p className="text-xs text-neutral-600">{note.date}</p>
                    </div>
                    <p className="text-sm text-black">{note.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
