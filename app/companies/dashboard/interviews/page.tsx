"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, FileText, CheckCircle2, Send } from "lucide-react"

const interviews = [
  {
    id: 1,
    candidate: "Priya Sharma",
    campus: "IIM Bangalore",
    role: "Associate PM",
    date: "Dec 15, 2025",
    time: "10:00 AM",
    status: "scheduled",
  },
  {
    id: 2,
    candidate: "Rahul Verma",
    campus: "IIM Ahmedabad",
    role: "Associate PM",
    date: "Dec 16, 2025",
    time: "2:00 PM",
    status: "scheduled",
  },
  {
    id: 3,
    candidate: "Ananya Gupta",
    campus: "ISB Hyderabad",
    role: "Associate PM",
    date: "Dec 12, 2025",
    time: "11:00 AM",
    status: "completed",
  },
]

const offers = [
  {
    id: 1,
    candidate: "Ananya Gupta",
    campus: "ISB Hyderabad",
    role: "Associate PM",
    ctc: "22 LPA",
    startDate: "July 2026",
    status: "pending",
  },
]

export default function InterviewsPage() {
  const [activeTab, setActiveTab] = useState<"interviews" | "offers">("interviews")

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black mb-2">Interviews & Offers</h1>
        <p className="text-neutral-600">Schedule interviews and manage offers.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("interviews")}
          className={`px-4 py-2 text-sm rounded-lg border ${
            activeTab === "interviews" ? "bg-black text-white border-black" : "border-neutral-200 text-neutral-600"
          }`}
        >
          Interviews ({interviews.length})
        </button>
        <button
          onClick={() => setActiveTab("offers")}
          className={`px-4 py-2 text-sm rounded-lg border ${
            activeTab === "offers" ? "bg-black text-white border-black" : "border-neutral-200 text-neutral-600"
          }`}
        >
          Offers ({offers.length})
        </button>
      </div>

      {/* Interviews Tab */}
      {activeTab === "interviews" && (
        <div className="space-y-4">
          {interviews.map((interview) => (
            <div key={interview.id} className="border border-neutral-200 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-black">{interview.candidate}</h3>
                  <p className="text-sm text-neutral-500">
                    {interview.campus} • {interview.role}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className="flex items-center gap-1 text-neutral-600">
                      <Calendar className="w-4 h-4" />
                      {interview.date}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-600">
                      <Clock className="w-4 h-4" />
                      {interview.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {interview.status === "scheduled" ? (
                    <>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Scheduled</span>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Video className="w-4 h-4 mr-1" /> Join
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Completed
                      </span>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <FileText className="w-4 h-4 mr-1" /> Feedback
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="bg-transparent mt-4">
            <Calendar className="w-4 h-4 mr-2" /> Schedule New Interview
          </Button>
        </div>
      )}

      {/* Offers Tab */}
      {activeTab === "offers" && (
        <div className="space-y-4">
          {offers.map((offer) => (
            <div key={offer.id} className="border border-neutral-200 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-black">{offer.candidate}</h3>
                  <p className="text-sm text-neutral-500">
                    {offer.campus} • {offer.role}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div>
                      <p className="text-neutral-500">CTC</p>
                      <p className="font-medium text-black">{offer.ctc}</p>
                    </div>
                    <div>
                      <p className="text-neutral-500">Start Date</p>
                      <p className="font-medium text-black">{offer.startDate}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Pending Response</span>
                </div>
              </div>
            </div>
          ))}

          <Button className="bg-black text-white hover:bg-neutral-800 mt-4">
            <Send className="w-4 h-4 mr-2" /> Make New Offer
          </Button>
        </div>
      )}
    </div>
  )
}
