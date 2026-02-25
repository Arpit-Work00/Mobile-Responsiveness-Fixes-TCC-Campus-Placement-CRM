"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Phone, Mail, Calendar, FileText, StickyNote, Plus, Users, Linkedin, Copy, Clock } from "lucide-react"

export default function CompanyDetailPage() {
  const params = useParams()
  const companyId = (params?.id as string) || "unknown"
  
  console.log("[v0] CompanyDetailPage loaded with id:", companyId)

  // Mock company data
  const company = {
    name: companyId === "amazon" ? "Amazon" : companyId.charAt(0).toUpperCase() + companyId.slice(1),
    owner: "Neha Sharma",
    status: "Hot",
    lastActivity: "Today 10:30 AM",
    nextAction: "Guest session at 2:00 PM",
    sector: "Tech",
    rolesReceived: 3,
    totalCalls: 12,
    totalEmails: 18,
    totalMeetings: 5,
  }

  const timeline = [
    {
      type: "call",
      date: "12 Sep 2024",
      time: "2:30 PM",
      by: "Neha Sharma",
      notes:
        "Discussed Q1 2025 hiring plans. Company planning to hire 15-20 MBA roles. Need to send batch profile by next week. Hiring manager: Sarah Johnson (sarah.j@amazon.com).",
      outcome: "Positive - Follow-up scheduled",
    },
    {
      type: "email-reply",
      date: "11 Sep 2024",
      time: "4:15 PM",
      from: "Amazon HR (recruiting@amazon.com)",
      subject: "Re: IIM Bangalore - 2024-25 Placement Season",
      body: "Hi Neha,\n\nThank you for reaching out. We're definitely interested in participating in your placement season. Let's schedule a call this week to discuss the roles and timeline.\n\nBest regards,\nSarah Johnson\nUniversity Recruiting Lead",
    },
    {
      type: "email",
      date: "10 Sep 2024",
      time: "10:00 AM",
      by: "Neha Sharma",
      to: "recruiting@amazon.com",
      subject: "IIM Bangalore - 2024-25 Placement Season",
      body: "Dear Amazon Recruiting Team,\n\nI hope this email finds you well. We are reaching out regarding the upcoming placement season at IIM Bangalore for the Class of 2025.\n\nWe would love to discuss potential opportunities for our students and arrange a campus visit.\n\nBest regards,\nNeha Sharma\nPlacement Committee",
    },
    {
      type: "meeting",
      date: "5 Sep 2024",
      attendees: ["Neha Sharma", "Placement Head", "Sarah Johnson (Amazon)", "2 other Amazon representatives"],
      agenda: "Pre-placement discussion",
      outcome: "PPT requested for 15 Sep",
      notes:
        "Company interested in Product Management and Business Analyst roles. Salary range: 20-25 LPA. Process: PPT + Written Test + 2 rounds of interviews.",
    },
    {
      type: "call",
      date: "1 Sep 2024",
      time: "11:00 AM",
      by: "Rahul Kumar",
      notes: "Initial outreach. Spoke with HR coordinator. They will connect us with university recruiting team.",
      outcome: "Warm lead",
    },
    {
      type: "email",
      date: "28 Aug 2024",
      time: "3:00 PM",
      by: "Rahul Kumar",
      to: "recruiting@amazon.com",
      subject: "Introduction - IIM Bangalore Placement Team",
      body: "Dear Team,\n\nI am writing to introduce our institute and explore placement opportunities...",
    },
  ]

  const calls = [
    {
      date: "12 Sep 2024",
      time: "2:30 PM",
      caller: "Neha Sharma",
      duration: "18 min",
      notes:
        "Discussed Q1 2025 hiring plans. Company planning to hire 15-20 MBA roles. Need to send batch profile by next week. Hiring manager: Sarah Johnson (sarah.j@amazon.com).",
      transcript: `Neha: Hi Sarah, thank you for taking my call.\nSarah: Of course! Great to connect.\nNeha: I wanted to follow up on our meeting last week and discuss the roles in more detail.\nSarah: Yes, we're looking at Product Management and Business Analyst positions primarily.\nNeha: That's great. What's your expected timeline?\nSarah: We'd like to start with a PPT in mid-September, followed by assessments and interviews in October.\nNeha: Perfect. I'll send over our batch profile by next week.\nSarah: Sounds good. Looking forward to it.`,
      outcome: "Positive - Follow-up scheduled",
    },
    {
      date: "1 Sep 2024",
      time: "11:00 AM",
      caller: "Rahul Kumar",
      duration: "12 min",
      notes: "Initial outreach. Spoke with HR coordinator. They will connect us with university recruiting team.",
      transcript:
        "Initial conversation to establish contact. HR coordinator was receptive and agreed to forward our request to the appropriate team.",
      outcome: "Warm lead",
    },
    {
      date: "22 Aug 2024",
      time: "4:00 PM",
      caller: "Neha Sharma",
      duration: "25 min",
      notes: "Detailed discussion about batch profile, previous year's placement data, and company expectations.",
      transcript:
        "Comprehensive discussion covering student profiles, company culture fit, and logistical requirements for campus visits.",
      outcome: "Meeting scheduled",
    },
  ]

  const emails = [
    {
      date: "11 Sep 2024",
      time: "4:15 PM",
      from: "Amazon HR",
      email: "recruiting@amazon.com",
      subject: "Re: IIM Bangalore - 2024-25 Placement Season",
      body: "Hi Neha,\n\nThank you for reaching out. We're definitely interested in participating in your placement season. Let's schedule a call this week to discuss the roles and timeline.\n\nBest regards,\nSarah Johnson\nUniversity Recruiting Lead",
      isReply: true,
    },
    {
      date: "10 Sep 2024",
      time: "10:00 AM",
      from: "Neha Sharma (sent)",
      to: "recruiting@amazon.com",
      subject: "IIM Bangalore - 2024-25 Placement Season",
      body: "Dear Amazon Recruiting Team,\n\nI hope this email finds you well. We are reaching out regarding the upcoming placement season at IIM Bangalore for the Class of 2025.\n\nWe would love to discuss potential opportunities for our students and arrange a campus visit.\n\nBest regards,\nNeha Sharma\nPlacement Committee",
      isReply: false,
    },
    {
      date: "28 Aug 2024",
      time: "3:00 PM",
      from: "Rahul Kumar (sent)",
      to: "recruiting@amazon.com",
      subject: "Introduction - IIM Bangalore Placement Team",
      body: "Dear Team,\n\nI am writing to introduce our institute and explore placement opportunities for our upcoming batch.\n\nWe have 380 students across MBA and EPGP programs with diverse backgrounds and strong academic credentials.\n\nI would appreciate the opportunity to discuss this further at your convenience.\n\nBest regards,\nRahul Kumar",
      isReply: false,
    },
  ]

  const meetings = [
    {
      date: "5 Sep 2024",
      time: "3:00 PM",
      attendees: "Neha Sharma, Placement Head, Sarah Johnson (Amazon), 2 other Amazon reps",
      agenda: "Pre-placement discussion",
      outcome: "PPT requested for 15 Sep",
      nextStep: "Send batch profile and finalize PPT date",
      notes:
        "Company interested in Product Management and Business Analyst roles. Salary range: 20-25 LPA. Process: PPT + Written Test + 2 rounds of interviews. Timeline: PPT in mid-Sep, interviews in Oct.",
    },
    {
      date: "15 Aug 2024",
      time: "2:00 PM",
      attendees: "Rahul Kumar, HR Coordinator (Amazon)",
      agenda: "Initial introduction",
      outcome: "Connected with university recruiting team",
      nextStep: "Follow-up with Sarah Johnson",
      notes: "Introductory meeting to establish relationship. Discussed institute profile and student quality.",
    },
  ]

  const roles = [
    {
      title: "Product Manager",
      campus: "IIM Bangalore",
      stage: "PPT Scheduled",
      applications: 45,
      interviews: 0,
      offers: 0,
    },
    {
      title: "Business Analyst",
      campus: "IIM Bangalore",
      stage: "Applications Open",
      applications: 38,
      interviews: 0,
      offers: 0,
    },
    {
      title: "Supply Chain Manager",
      campus: "IIM Bangalore",
      stage: "Role Discussion",
      applications: 0,
      interviews: 0,
      offers: 0,
    },
  ]

  const notes = [
    {
      date: "12 Sep 2024",
      time: "3:00 PM",
      author: "Neha Sharma",
      note: "Key contact: Sarah Johnson (sarah.j@amazon.com). Very responsive and positive about our institute. Mentioned they hired 12 students from our campus last year and were happy with the quality.",
    },
    {
      date: "5 Sep 2024",
      time: "5:00 PM",
      author: "Placement Head",
      note: "Amazon is a priority recruiter. They've been consistent over the past 5 years. Need to ensure smooth process and maintain relationship.",
    },
    {
      date: "1 Sep 2024",
      time: "12:00 PM",
      author: "Rahul Kumar",
      note: "Initial outreach successful. Company seems interested. Need to follow up with detailed batch profile and previous year's placement data.",
    },
  ]

  // Contacts at this company
  const contacts = [
    {
      name: "Sarah Johnson",
      role: "University Recruiting Lead",
      email: "sarah.j@amazon.com",
      phone: "+1 206-555-0123",
      linkedin: "linkedin.com/in/sarahjohnson",
      influence: "Decision Maker",
      lastContact: "12 Sep 2024",
    },
    {
      name: "Michael Chen",
      role: "HR Coordinator",
      email: "m.chen@amazon.com",
      phone: "+1 206-555-0145",
      linkedin: "linkedin.com/in/michaelchen",
      influence: "Gatekeeper",
      lastContact: "1 Sep 2024",
    },
    {
      name: "Priya Patel",
      role: "Product Hiring Manager",
      email: "priya.patel@amazon.com",
      phone: "+1 206-555-0167",
      linkedin: "linkedin.com/in/priyapatel",
      influence: "Decision Maker",
      lastContact: "5 Sep 2024",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link href="/dashboard/companies">
          <Button variant="ghost" size="sm" className="mb-4 text-black hover:bg-neutral-100">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Companies
          </Button>
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-black">{company.name}</h1>
            <p className="text-sm text-neutral-600 mt-1">{company.sector}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent"
            >
              Edit
            </Button>
            <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
              Log Activity
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="border border-neutral-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-neutral-600 mb-1">Assigned Owner</div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">
                NS
              </div>
              <div className="text-sm font-medium text-black">{company.owner}</div>
            </div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-neutral-600 mb-1">Status</div>
            <div className="inline-block px-2 py-1 text-xs font-medium rounded bg-black text-white">
              {company.status}
            </div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-neutral-600 mb-1">Last Activity</div>
            <div className="text-sm font-medium text-black">{company.lastActivity}</div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-neutral-600 mb-1">Next Action</div>
            <div className="text-sm font-medium text-black">{company.nextAction}</div>
          </div>
          <div className="border border-neutral-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-neutral-600 mb-1">Roles Received</div>
            <div className="text-2xl font-bold text-black">{company.rolesReceived}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="w-full justify-start border-b border-neutral-200 bg-transparent rounded-none h-auto p-0">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="timeline"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            Timeline
          </TabsTrigger>
          <TabsTrigger
            value="calls"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            <Phone className="w-4 h-4 mr-1" />
            Calls
          </TabsTrigger>
          <TabsTrigger
            value="emails"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            <Mail className="w-4 h-4 mr-1" />
            Emails
          </TabsTrigger>
          <TabsTrigger
            value="meetings"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Meetings
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            <Users className="w-4 h-4 mr-1" />
            Contacts
          </TabsTrigger>
          <TabsTrigger
            value="roles"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            <FileText className="w-4 h-4 mr-1" />
            Roles & Processes
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent"
          >
            <StickyNote className="w-4 h-4 mr-1" />
            Notes
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: Overview */}
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-white">
              <div className="text-sm text-neutral-600 mb-2">Total Calls</div>
              <div className="text-3xl font-bold text-black">{company.totalCalls}</div>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-white">
              <div className="text-sm text-neutral-600 mb-2">Total Emails</div>
              <div className="text-3xl font-bold text-black">{company.totalEmails}</div>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-white">
              <div className="text-sm text-neutral-600 mb-2">Total Meetings</div>
              <div className="text-3xl font-bold text-black">{company.totalMeetings}</div>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-white">
              <div className="text-sm text-neutral-600 mb-2">Roles Received</div>
              <div className="text-3xl font-bold text-black">{company.rolesReceived}</div>
            </div>
          </div>
          <div className="mt-4 border border-neutral-200 rounded-lg p-4 bg-white">
            <div className="text-sm font-semibold text-black mb-2">Last Outcome</div>
            <div className="text-sm text-neutral-600">
              PPT requested for 15 Sep. Company interested in Product Management and Business Analyst roles.
            </div>
          </div>
        </TabsContent>

        {/* TAB 2: Timeline - MOST IMPORTANT */}
        <TabsContent value="timeline" className="mt-6">
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {item.type === "call" && (
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {item.type === "email" && (
                      <div className="w-8 h-8 rounded-full bg-neutral-500 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {item.type === "email-reply" && (
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {item.type === "meeting" && (
                      <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-black">
                          {item.type === "call" && `Call - ${item.date}`}
                          {item.type === "email" && `Email Sent - ${item.date}`}
                          {item.type === "email-reply" && `Email Reply from Company - ${item.date}`}
                          {item.type === "meeting" && `Meeting - ${item.date}`}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {item.type === "call" && `by ${item.by} at ${item.time}`}
                          {item.type === "email" && `by ${item.by} at ${item.time}`}
                          {item.type === "email-reply" && `from ${item.from} at ${item.time}`}
                          {item.type === "meeting" && `Attendees: ${item.attendees.join(", ")}`}
                        </div>
                      </div>
                      {item.type === "email-reply" && (
                        <span className="text-xs bg-black text-white px-2 py-1 rounded font-medium">COMPANY REPLY</span>
                      )}
                    </div>

                    {item.type === "call" && (
                      <div className="text-sm text-neutral-700">
                        <div className="font-medium mb-1">Notes:</div>
                        <div>{item.notes}</div>
                        {item.outcome && (
                          <div className="mt-2 text-xs bg-neutral-100 px-2 py-1 rounded inline-block">
                            Outcome: {item.outcome}
                          </div>
                        )}
                      </div>
                    )}

                    {(item.type === "email" || item.type === "email-reply") && (
                      <div className="text-sm text-neutral-700">
                        <div className="font-medium mb-1">Subject: {item.subject}</div>
                        {item.to && <div className="text-xs text-neutral-500 mb-2">To: {item.to}</div>}
                        <div className="bg-neutral-50 p-3 rounded border border-neutral-200 whitespace-pre-wrap">
                          {item.body}
                        </div>
                      </div>
                    )}

                    {item.type === "meeting" && (
                      <div className="text-sm text-neutral-700">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div>
                            <div className="font-medium">Agenda:</div>
                            <div>{item.agenda}</div>
                          </div>
                          <div>
                            <div className="font-medium">Outcome:</div>
                            <div>{item.outcome}</div>
                          </div>
                        </div>
                        <div className="font-medium mt-2">Notes:</div>
                        <div>{item.notes}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* TAB 3: Calls */}
        <TabsContent value="calls" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Caller</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Duration</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Notes</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {calls.map((call, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-black">{call.date}</td>
                    <td className="px-4 py-3 text-sm text-black">{call.caller}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{call.duration}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-md">
                      <div className="truncate">{call.notes}</div>
                      <details className="mt-1">
                        <summary className="text-xs text-black cursor-pointer">View transcript</summary>
                        <div className="mt-2 text-xs bg-neutral-50 p-2 rounded whitespace-pre-wrap border border-neutral-200">
                          {call.transcript}
                        </div>
                      </details>
                    </td>
                    <td className="px-4 py-3 text-sm text-black">{call.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* TAB 4: Emails - Shows company replies */}
        <TabsContent value="emails" className="mt-6">
          <div className="space-y-4">
            {emails.map((email, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-black">{email.subject}</div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {email.from} • {email.date} at {email.time}
                    </div>
                    {email.to && <div className="text-xs text-neutral-500">To: {email.to}</div>}
                  </div>
                  {email.isReply && (
                    <span className="text-xs bg-black text-white px-2 py-1 rounded font-medium">COMPANY REPLY</span>
                  )}
                </div>
                <div className="bg-neutral-50 p-3 rounded border border-neutral-200 text-sm text-neutral-700 whitespace-pre-wrap">
                  {email.body}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* TAB 5: Meetings */}
        <TabsContent value="meetings" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Attendees</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Agenda</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Outcome</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Next Step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {meetings.map((meeting, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-black">{meeting.date}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-xs">{meeting.attendees}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{meeting.agenda}</td>
                    <td className="px-4 py-3 text-sm text-black">{meeting.outcome}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-md">
                      <div className="truncate">{meeting.nextStep}</div>
                      <details className="mt-1">
                        <summary className="text-xs text-black cursor-pointer">View notes</summary>
                        <div className="mt-2 text-xs bg-neutral-50 p-2 rounded border border-neutral-200">
                          {meeting.notes}
                        </div>
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* TAB 6: Contacts */}
        <TabsContent value="contacts" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-black">Company Contacts ({contacts.length})</h3>
              <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                <Plus className="w-4 h-4 mr-1" />
                Add Contact
              </Button>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Phone</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Influence</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Last Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {contacts.map((contact, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50">
                      <td className="px-4 py-3">
                        <div className="text-sm font-medium text-black">{contact.name}</div>
                        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-black flex items-center gap-1">
                          <Linkedin className="w-3 h-3" />
                          LinkedIn
                        </a>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600">{contact.role}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-black">{contact.email}</span>
                          <button className="text-neutral-400 hover:text-black" onClick={() => navigator.clipboard.writeText(contact.email)}>
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-black">{contact.phone}</span>
                          <button className="text-neutral-400 hover:text-black" onClick={() => navigator.clipboard.writeText(contact.phone)}>
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          contact.influence === 'Decision Maker' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                        }`}>
                          {contact.influence}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 text-sm text-neutral-600">
                          <Clock className="w-3 h-3" />
                          {contact.lastContact}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* TAB 7: Roles & Processes */}
        <TabsContent value="roles" className="mt-6">
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Role Title</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Campus</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Stage</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Applications</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Interviews</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Offers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {roles.map((role, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{role.title}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{role.campus}</td>
                    <td className="px-4 py-3 text-sm text-black">{role.stage}</td>
                    <td className="px-4 py-3 text-sm text-center text-black">{role.applications}</td>
                    <td className="px-4 py-3 text-sm text-center text-black">{role.interviews}</td>
                    <td className="px-4 py-3 text-sm text-center text-black">{role.offers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* TAB 7: Notes */}
        <TabsContent value="notes" className="mt-6">
          <div className="space-y-4">
            {notes.map((note, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold text-black">{note.author}</div>
                  <div className="text-xs text-neutral-500">
                    {note.date} at {note.time}
                  </div>
                </div>
                <div className="text-sm text-neutral-700">{note.note}</div>
              </div>
            ))}
            <Button className="w-full bg-white border border-neutral-300 text-black hover:bg-neutral-100">
              <Plus className="w-4 h-4 mr-1" />
              Add Note
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
