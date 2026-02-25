"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Search, Plus, ChevronRight, Clock, User } from "lucide-react"

export default function CallsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const calls = [
    { id: 1, company: "Amazon", companyId: "amazon", contact: "Sarah Johnson", date: "12 Sep 2024", time: "2:30 PM", duration: "32 min", outcome: "Positive", by: "Neha Sharma", notes: "Discussed Q1 2025 hiring plans" },
    { id: 2, company: "Deloitte", companyId: "deloitte", contact: "Michael Chen", date: "11 Sep 2024", time: "11:00 AM", duration: "25 min", outcome: "Follow-up needed", by: "Priya Singh", notes: "Need to share batch profile" },
    { id: 3, company: "Google", companyId: "google", contact: "Emily Davis", date: "10 Sep 2024", time: "4:00 PM", duration: "45 min", outcome: "Positive", by: "Rahul Kumar", notes: "Confirmed interest in 5 roles" },
    { id: 4, company: "Microsoft", companyId: "microsoft", contact: "John Smith", date: "9 Sep 2024", time: "10:30 AM", duration: "28 min", outcome: "Positive", by: "Amit Patel", notes: "Guest session scheduled" },
    { id: 5, company: "Flipkart", companyId: "flipkart", contact: "Priya Verma", date: "8 Sep 2024", time: "3:00 PM", duration: "20 min", outcome: "No answer", by: "Sneha Patel", notes: "Will try again tomorrow" },
    { id: 6, company: "Accenture", companyId: "accenture", contact: "David Wilson", date: "7 Sep 2024", time: "2:00 PM", duration: "35 min", outcome: "Positive", by: "Rahul Kumar", notes: "Interested in consulting roles" },
    { id: 7, company: "TCS", companyId: "tcs", contact: "Anita Sharma", date: "6 Sep 2024", time: "11:30 AM", duration: "22 min", outcome: "Follow-up needed", by: "Neha Sharma", notes: "Waiting for budget approval" },
    { id: 8, company: "Infosys", companyId: "infosys", contact: "Raj Kapoor", date: "5 Sep 2024", time: "4:30 PM", duration: "18 min", outcome: "Positive", by: "Priya Singh", notes: "JD to be shared next week" },
  ]

  const filteredCalls = calls.filter(call => 
    call.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    call.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    call.by.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Calls</h1>
          <p className="text-sm text-neutral-600">Track all recruiter calls and outcomes</p>
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800">
          <Plus className="w-4 h-4 mr-2" />
          Log Call
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            placeholder="Search calls..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-neutral-200"
          />
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date & Time</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Company</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Contact</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Duration</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Outcome</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">By</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Notes</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {filteredCalls.map((call) => (
              <tr 
                key={call.id} 
                onClick={() => router.push(`/dashboard/companies/${call.companyId}`)}
                className="hover:bg-neutral-50 cursor-pointer"
              >
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-black">{call.date}</div>
                  <div className="text-xs text-neutral-500">{call.time}</div>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-black">{call.company}</td>
                <td className="px-4 py-3 text-sm text-neutral-600">{call.contact}</td>
                <td className="px-4 py-3 text-sm text-neutral-600">{call.duration}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    call.outcome === 'Positive' ? 'bg-neutral-100 text-black' :
                    call.outcome === 'Follow-up needed' ? 'bg-neutral-200 text-black' :
                    'bg-neutral-50 text-neutral-600'
                  }`}>
                    {call.outcome}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">{call.by}</td>
                <td className="px-4 py-3 text-sm text-neutral-600 max-w-[200px] truncate">{call.notes}</td>
                <td className="px-4 py-3">
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
