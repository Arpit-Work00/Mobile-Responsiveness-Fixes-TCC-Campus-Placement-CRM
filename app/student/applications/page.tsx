"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, Calendar, Clock, CheckCircle2, XCircle, ChevronRight, Filter } from "lucide-react"

export default function StudentApplicationsPage() {
  const searchParams = useSearchParams()
  const statusFilter = searchParams.get('status') || 'all'
  const [selectedStatus, setSelectedStatus] = useState(statusFilter)

  // All applications
  const applications = [
    { 
      id: 1,
      company: "McKinsey & Company", 
      role: "Associate", 
      function: "Consulting",
      ctc: "32-35 LPA",
      status: "applied", 
      appliedDate: "10 Oct 2024", 
      deadline: "25 Oct 2024",
      nextStep: null,
      timeline: [
        { event: "Application Submitted", date: "10 Oct 2024", status: "done" },
        { event: "Shortlist Announcement", date: "26 Oct 2024", status: "pending" },
      ]
    },
    { 
      id: 2,
      company: "Amazon", 
      role: "Product Manager", 
      function: "Product",
      ctc: "40-45 LPA",
      status: "interview", 
      appliedDate: "8 Oct 2024", 
      deadline: "28 Oct 2024",
      nextStep: "Behavioral Round - 20 Oct, 2:30 PM",
      timeline: [
        { event: "Application Submitted", date: "8 Oct 2024", status: "done" },
        { event: "Shortlisted", date: "12 Oct 2024", status: "done" },
        { event: "Case Round", date: "15 Oct 2024", status: "done" },
        { event: "Behavioral Round", date: "20 Oct 2024", status: "upcoming" },
      ]
    },
    { 
      id: 3,
      company: "Bain & Company", 
      role: "Associate Consultant", 
      function: "Consulting",
      ctc: "30-33 LPA",
      status: "applied", 
      appliedDate: "12 Oct 2024", 
      deadline: "30 Oct 2024",
      nextStep: null,
      timeline: [
        { event: "Application Submitted", date: "12 Oct 2024", status: "done" },
        { event: "Shortlist Announcement", date: "31 Oct 2024", status: "pending" },
      ]
    },
    { 
      id: 4,
      company: "Flipkart", 
      role: "Product Manager", 
      function: "Product",
      ctc: "35-40 LPA",
      status: "interview", 
      appliedDate: "5 Oct 2024", 
      deadline: "20 Oct 2024",
      nextStep: "Case Round - 18 Oct, 10:00 AM",
      timeline: [
        { event: "Application Submitted", date: "5 Oct 2024", status: "done" },
        { event: "Shortlisted", date: "10 Oct 2024", status: "done" },
        { event: "Case Round", date: "18 Oct 2024", status: "upcoming" },
      ]
    },
    { 
      id: 5,
      company: "Google", 
      role: "Associate Product Manager", 
      function: "Product",
      ctc: "45-50 LPA",
      status: "applied", 
      appliedDate: "14 Oct 2024", 
      deadline: "1 Nov 2024",
      nextStep: null,
      timeline: [
        { event: "Application Submitted", date: "14 Oct 2024", status: "done" },
        { event: "Shortlist Announcement", date: "2 Nov 2024", status: "pending" },
      ]
    },
    { 
      id: 6,
      company: "BCG", 
      role: "Consultant", 
      function: "Consulting",
      ctc: "32-35 LPA",
      status: "rejected", 
      appliedDate: "1 Oct 2024", 
      deadline: "15 Oct 2024",
      nextStep: null,
      timeline: [
        { event: "Application Submitted", date: "1 Oct 2024", status: "done" },
        { event: "Not Shortlisted", date: "16 Oct 2024", status: "rejected" },
      ]
    },
    { 
      id: 7,
      company: "Deloitte", 
      role: "Consultant", 
      function: "Consulting",
      ctc: "22-25 LPA",
      status: "shortlisted", 
      appliedDate: "3 Oct 2024", 
      deadline: "10 Oct 2024",
      nextStep: "Awaiting interview slot",
      timeline: [
        { event: "Application Submitted", date: "3 Oct 2024", status: "done" },
        { event: "Shortlisted", date: "11 Oct 2024", status: "done" },
        { event: "Interview Scheduling", date: "TBD", status: "pending" },
      ]
    },
    { 
      id: 8,
      company: "Microsoft", 
      role: "Program Manager", 
      function: "Product",
      ctc: "38-42 LPA",
      status: "applied", 
      appliedDate: "15 Oct 2024", 
      deadline: "10 Nov 2024",
      nextStep: null,
      timeline: [
        { event: "Application Submitted", date: "15 Oct 2024", status: "done" },
        { event: "Shortlist Announcement", date: "11 Nov 2024", status: "pending" },
      ]
    },
  ]

  const statusOptions = [
    { value: "all", label: "All Applications" },
    { value: "applied", label: "Applied" },
    { value: "shortlisted", label: "Shortlisted" },
    { value: "interview", label: "Interview Stage" },
    { value: "offer", label: "Offers" },
    { value: "rejected", label: "Rejected" },
  ]

  const filteredApplications = selectedStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === selectedStatus)

  const funnelCounts = {
    all: applications.length,
    applied: applications.filter(a => a.status === 'applied').length,
    shortlisted: applications.filter(a => a.status === 'shortlisted').length,
    interview: applications.filter(a => a.status === 'interview').length,
    offer: applications.filter(a => a.status === 'offer').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "applied": return "bg-neutral-100 text-neutral-600"
      case "shortlisted": return "bg-neutral-200 text-black"
      case "interview": return "bg-black text-white"
      case "rejected": return "bg-neutral-100 text-neutral-400 line-through"
      case "offer": return "bg-black text-white"
      default: return "bg-neutral-100 text-neutral-600"
    }
  }

  const [expandedApp, setExpandedApp] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/student">
          <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-black">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-black">My Applications</h1>
          <p className="text-sm text-neutral-600">Track your placement application status</p>
        </div>
      </div>

      {/* Funnel Stats */}
      <div className="grid grid-cols-6 gap-3">
        {statusOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedStatus(option.value)}
            className={`p-3 rounded-lg border text-center transition-colors ${
              selectedStatus === option.value 
                ? 'border-black bg-black text-white' 
                : 'border-neutral-200 bg-white hover:bg-neutral-50'
            }`}
          >
            <div className={`text-2xl font-bold ${selectedStatus === option.value ? 'text-white' : 'text-black'}`}>
              {funnelCounts[option.value as keyof typeof funnelCounts]}
            </div>
            <div className={`text-xs ${selectedStatus === option.value ? 'text-neutral-200' : 'text-neutral-600'}`}>
              {option.label}
            </div>
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        {filteredApplications.length === 0 ? (
          <div className="p-8 text-center text-neutral-500">
            No applications in this category
          </div>
        ) : (
          <div className="divide-y divide-neutral-200">
            {filteredApplications.map((app) => (
              <div key={app.id}>
                {/* Main Row */}
                <div 
                  onClick={() => setExpandedApp(expandedApp === app.id ? null : app.id)}
                  className="flex items-center justify-between p-4 hover:bg-neutral-50 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div>
                      <div className="font-medium text-black">{app.company}</div>
                      <div className="text-sm text-neutral-600">{app.role} - {app.function}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-medium text-black">{app.ctc}</div>
                      <div className="text-xs text-neutral-500">Applied: {app.appliedDate}</div>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded ${getStatusBadge(app.status)}`}>
                      {app.status.toUpperCase()}
                    </span>
                    <ChevronRight className={`w-5 h-5 text-neutral-400 transition-transform ${expandedApp === app.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Expanded Timeline */}
                {expandedApp === app.id && (
                  <div className="px-4 pb-4 bg-neutral-50">
                    <div className="ml-14 pt-2">
                      {app.nextStep && (
                        <div className="mb-4 p-3 bg-black text-white rounded-lg">
                          <div className="text-xs font-medium uppercase tracking-wide mb-1">Next Step</div>
                          <div className="font-medium">{app.nextStep}</div>
                        </div>
                      )}
                      <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Application Timeline</div>
                      <div className="space-y-3">
                        {app.timeline.map((event, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            {event.status === 'done' ? (
                              <CheckCircle2 className="w-4 h-4 text-black" />
                            ) : event.status === 'rejected' ? (
                              <XCircle className="w-4 h-4 text-neutral-400" />
                            ) : event.status === 'upcoming' ? (
                              <Calendar className="w-4 h-4 text-black" />
                            ) : (
                              <Clock className="w-4 h-4 text-neutral-400" />
                            )}
                            <div className="flex-1">
                              <span className={`text-sm ${event.status === 'rejected' ? 'text-neutral-400' : 'text-black'}`}>
                                {event.event}
                              </span>
                            </div>
                            <span className={`text-xs ${event.status === 'upcoming' ? 'font-medium text-black' : 'text-neutral-500'}`}>
                              {event.date}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
