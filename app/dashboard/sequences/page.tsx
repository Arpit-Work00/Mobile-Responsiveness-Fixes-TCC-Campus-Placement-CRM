"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye, Edit, Copy } from "lucide-react"

const sequences = [
  {
    id: 1,
    name: "Initial Campus Introduction",
    email1: "Campus Hiring Partnership - IIM Bangalore MBA 2025",
    email2: "Following up - Campus Hiring Discussion",
    email3: "Quick Question - Campus Hiring Plans",
    activeAccounts: 45,
    owner: "Rahul Sharma, Priya Patel",
    sent: 45,
    opened: 32,
    responded: 12,
    responseRate: 27,
  },
  {
    id: 2,
    name: "Guest Session Invitation",
    email1: "Invitation - Pre-Placement Talk at IIM Bangalore",
    email2: "Re: Guest Session - Available Dates",
    email3: "Final Reminder - Guest Session Opportunity",
    activeAccounts: 28,
    owner: "All Members",
    sent: 28,
    opened: 24,
    responded: 18,
    responseRate: 64,
  },
  {
    id: 3,
    name: "Follow-up on Pending Response",
    email1: "Checking In - Campus Hiring Discussion",
    email2: "Quick Follow-up - Are You Still Interested?",
    email3: "",
    activeAccounts: 38,
    owner: "Amit Kumar",
    sent: 38,
    opened: 22,
    responded: 8,
    responseRate: 21,
  },
  {
    id: 4,
    name: "Role Specific Outreach - Consulting",
    email1: "Consulting Roles - IIM Bangalore MBA Batch",
    email2: "Follow-up - Consulting Opportunities",
    email3: "Final Touch - Consulting Batch Profile",
    activeAccounts: 15,
    owner: "Rahul Sharma",
    sent: 15,
    opened: 13,
    responded: 7,
    responseRate: 47,
  },
  {
    id: 5,
    name: "Role Specific Outreach - Tech & Product",
    email1: "Tech & Product Management Talent - IIM Bangalore",
    email2: "Re: Tech Hiring at [Company]",
    email3: "Quick Question - Tech Roles",
    activeAccounts: 22,
    owner: "Priya Patel",
    sent: 22,
    opened: 18,
    responded: 9,
    responseRate: 41,
  },
]

const emailTemplates = {
  1: [
    {
      step: 1,
      subject: "Campus Hiring Partnership - IIM Bangalore MBA 2025",
      body: `Dear [HR Name],

I am writing to you from the Placement Committee at IIM Bangalore regarding campus hiring opportunities for our MBA Class of 2025.

Our batch comprises 400+ students with diverse backgrounds in Engineering, Commerce, and Liberal Arts, with an average work experience of 5 years across sectors including Technology, Consulting, BFSI, and Manufacturing.

We would love to explore how [Company Name] can engage with our talented cohort through:
• Pre-placement presentations
• Campus recruitment process
• Summer internship opportunities

I have attached our comprehensive batch profile for your review.

Would you be available for a brief call next week to discuss this further?

Best regards,
[Your Name]
Placement Committee
IIM Bangalore`,
      delay: "Day 0",
    },
    {
      step: 2,
      subject: "Following up - Campus Hiring Discussion",
      body: `Dear [HR Name],

I wanted to follow up on my previous email regarding campus hiring opportunities at IIM Bangalore.

I understand you must be managing multiple priorities. If this is not the right time, I'd be happy to reconnect at a more convenient time.

Alternatively, if there's someone else in your team who handles campus hiring, I'd appreciate being directed to them.

Looking forward to hearing from you.

Best regards,
[Your Name]
Placement Committee`,
      delay: "Day 3",
    },
    {
      step: 3,
      subject: "Quick Question - Campus Hiring Plans",
      body: `Hi [HR Name],

Just checking in one last time regarding campus hiring discussions.

If you're not the right person, could you please point me to someone in your team who handles university recruitment?

Thank you for your time.

Best regards,
[Your Name]`,
      delay: "Day 7",
    },
  ],
}

export default function OutreachSequencesPage() {
  const [expandedSequence, setExpandedSequence] = useState<number | null>(null)

  const toggleExpanded = (sequenceId: number) => {
    setExpandedSequence(expandedSequence === sequenceId ? null : sequenceId)
  }

  const getPerformanceLabel = (rate: number) => {
    if (rate >= 40) return { label: "High", className: "bg-black text-white" }
    if (rate >= 20) return { label: "Medium", className: "bg-neutral-500 text-white" }
    return { label: "Low", className: "bg-neutral-300 text-black" }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Outreach Sequences</h1>
          <p className="text-sm text-neutral-600 mt-1">Email sequences for systematic company outreach</p>
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800">
          <Plus className="w-4 h-4 mr-1" />
          Create Sequence
        </Button>
      </div>

      {/* Sequences Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">
                Sequence Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">Email 1</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">Email 2</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">Email 3</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase tracking-wide">
                Active Accounts
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">Owner</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase tracking-wide">
                Performance
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-black uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {sequences.map((sequence) => {
              const perf = getPerformanceLabel(sequence.responseRate)
              return (
                <>
                  <tr key={sequence.id} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-black">{sequence.name}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-xs truncate">{sequence.email1}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-xs truncate">{sequence.email2}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 max-w-xs truncate">{sequence.email3 || "-"}</td>
                    <td className="px-4 py-3 text-center text-sm font-medium text-black">{sequence.activeAccounts}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{sequence.owner}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={`text-xs font-medium ${perf.className}`}>
                        {perf.label} ({sequence.responseRate}%)
                      </Badge>
                      <div className="text-xs text-neutral-500 mt-1">
                        {sequence.responded}/{sequence.sent} replied
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(sequence.id)}
                          className="h-7 px-2 text-black hover:bg-neutral-100"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-black hover:bg-neutral-100">
                          <Edit className="w-3.5 h-3.5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-black hover:bg-neutral-100">
                          <Copy className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded Email Templates */}
                  {expandedSequence === sequence.id && emailTemplates[sequence.id as keyof typeof emailTemplates] && (
                    <tr>
                      <td colSpan={8} className="px-4 py-4 bg-neutral-50">
                        <div className="space-y-4">
                          <div className="font-semibold text-sm text-black mb-3">Email Template Preview</div>
                          {emailTemplates[sequence.id as keyof typeof emailTemplates].map((template) => (
                            <div key={template.step} className="border border-neutral-200 rounded-lg p-4 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="bg-black text-white border-black">
                                    Email {template.step}
                                  </Badge>
                                  <span className="text-xs text-neutral-500">{template.delay}</span>
                                </div>
                              </div>
                              <div className="mb-2">
                                <div className="text-xs text-neutral-600 mb-1">Subject:</div>
                                <div className="text-sm font-medium text-black">{template.subject}</div>
                              </div>
                              <div>
                                <div className="text-xs text-neutral-600 mb-1">Body:</div>
                                <div className="text-xs text-neutral-700 whitespace-pre-wrap bg-neutral-50 p-3 rounded border border-neutral-200">
                                  {template.body}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
