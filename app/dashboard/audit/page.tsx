"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, Filter, User, Building2, Mail, Phone, Calendar, FileText, Settings } from "lucide-react"

export default function AuditLogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const logs = [
    { id: 1, action: "Email Sent", user: "Neha Sharma", target: "Amazon", targetType: "company", details: "Cold outreach email", timestamp: "Today 2:30 PM", icon: Mail },
    { id: 2, action: "Call Logged", user: "Rahul Kumar", target: "Deloitte", targetType: "company", details: "32 min call with Sarah Johnson", timestamp: "Today 11:00 AM", icon: Phone },
    { id: 3, action: "Meeting Created", user: "Priya Singh", target: "Google", targetType: "company", details: "Guest session scheduled for 15 Sep", timestamp: "Today 10:15 AM", icon: Calendar },
    { id: 4, action: "Role Added", user: "Amit Patel", target: "Microsoft", targetType: "company", details: "Product Manager - 5 positions", timestamp: "Yesterday 4:30 PM", icon: FileText },
    { id: 5, action: "Company Created", user: "Sneha Patel", target: "Stripe", targetType: "company", details: "New company added to pipeline", timestamp: "Yesterday 2:00 PM", icon: Building2 },
    { id: 6, action: "Account Assigned", user: "Placement Head", target: "Flipkart", targetType: "company", details: "Assigned to Neha Sharma", timestamp: "Yesterday 11:30 AM", icon: User },
    { id: 7, action: "Status Changed", user: "Rahul Kumar", target: "Accenture", targetType: "company", details: "Changed from Warm to Cold", timestamp: "22 Sep 5:00 PM", icon: Settings },
    { id: 8, action: "Note Added", user: "Neha Sharma", target: "Amazon", targetType: "company", details: "Key contact information updated", timestamp: "22 Sep 3:15 PM", icon: FileText },
    { id: 9, action: "Email Received", user: "System", target: "TCS", targetType: "company", details: "Reply from recruiting@tcs.com", timestamp: "22 Sep 1:00 PM", icon: Mail },
    { id: 10, action: "Meeting Completed", user: "Priya Singh", target: "BCG", targetType: "company", details: "Info session - 45 attendees", timestamp: "21 Sep 4:00 PM", icon: Calendar },
    { id: 11, action: "Application Received", user: "System", target: "Rohit Sharma", targetType: "student", details: "Applied for Amazon PM role", timestamp: "21 Sep 2:30 PM", icon: User },
    { id: 12, action: "Interview Scheduled", user: "Amit Patel", target: "Ananya Gupta", targetType: "student", details: "Google Round 1 - 23 Sep 10 AM", timestamp: "21 Sep 11:00 AM", icon: Calendar },
  ]

  const filteredLogs = logs.filter(log => 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.details.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Audit Log</h1>
          <p className="text-sm text-neutral-600">Complete activity history across the platform</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            placeholder="Search activity..."
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
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Action</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">User</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Target</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Details</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {filteredLogs.map((log) => (
              <tr key={log.id} className="hover:bg-neutral-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <log.icon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm font-medium text-black">{log.action}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">{log.user}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-black">{log.target}</span>
                    <span className="text-xs text-neutral-400">({log.targetType})</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600 max-w-[250px] truncate">{log.details}</td>
                <td className="px-4 py-3 text-sm text-neutral-500">{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
