"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  Users,
  ArrowRight,
  ChevronRight,
  Target,
  Building2,
  TrendingUp,
  BarChart3,
  Calendar,
  Mail,
  Phone,
} from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()

  // Top-level outreach metrics
  const topMetrics = [
    { label: "Total Targets", value: "320", sub: "Universe" },
    { label: "Historical Recruiters", value: "142", sub: "Returning" },
    { label: "Outreach Progress", value: "77%", sub: "245/320 contacted" },
    { label: "Meetings Secured", value: "52", sub: "21% conversion" },
    { label: "JD Pipeline", value: "28", sub: "Active roles" },
    { label: "Sector Spread", value: "14", sub: "Industries" },
  ]

  // Outreach funnel
  const funnelStages = [
    { stage: "Targeted", count: 320, change: "+12", filter: "all" },
    { stage: "Contacted", count: 245, rate: "77%", filter: "contacted" },
    { stage: "Replied", count: 98, rate: "40%", filter: "replied" },
    { stage: "Meeting Done", count: 52, rate: "53%", filter: "meeting_done" },
    { stage: "JD Expected", count: 35, rate: "67%", filter: "jd_expected" },
    { stage: "JD Received", count: 28, rate: "80%", filter: "jd_received" },
    { stage: "Closed", count: 18, rate: "64%", filter: "closed" },
    { stage: "Dropped", count: 14, rate: "-", filter: "dropped" },
  ]

  // Manager Performance
  const managerPerformance = [
    { name: "Priya Sharma", accounts: 110, contacted: 95, meetings: 28, jds: 15, conversion: "26%", dormant: "8%", load: "optimal" },
    { name: "Rahul Verma", accounts: 105, contacted: 82, meetings: 18, jds: 10, conversion: "17%", dormant: "15%", load: "lagging" },
    { name: "Sneha Patel", accounts: 105, contacted: 68, meetings: 6, jds: 3, conversion: "6%", dormant: "32%", load: "critical" },
  ]

  // Alerts
  const alerts = [
    { company: "Accenture", issue: "No response in 18 days. Was strong recruiter in 2023.", owner: "Rahul", severity: "high" },
    { company: "JP Morgan", issue: "Dormant since 2021. Recommend reconnect via alumni.", owner: "Priya", severity: "high" },
    { company: "Flipkart", issue: "Interview feedback pending 5 days.", owner: "Sneha", severity: "medium" },
    { company: "Google", issue: "PPT requested, not sent. 3 days overdue.", owner: "Priya", severity: "medium" },
    { company: "P&G", issue: "Target New - not yet contacted. In sector where we are 32% below benchmark.", owner: "Rahul", severity: "low" },
  ]

  // Dormant accounts
  const dormantAccounts = [
    { company: "Hindustan Unilever", lastContact: "Mar 2022", wasActive: "2019-2022", alumni: "2 present" },
    { company: "JP Morgan", lastContact: "Nov 2021", wasActive: "2018-2021", alumni: "1 present" },
    { company: "Citibank", lastContact: "Jan 2023", wasActive: "2020-2023", alumni: "3 present" },
  ]

  // Today tasks
  const todayTasks = [
    { task: "Follow up Deloitte JD discussion", time: "2:00 PM", owner: "Priya", type: "Call", priority: "high" },
    { task: "Send batch profile to McKinsey", time: "4:00 PM", owner: "Rahul", type: "Email", priority: "high" },
    { task: "Confirm Amazon guest session", time: "EOD", owner: "Sneha", type: "Task", priority: "medium" },
    { task: "4 companies need follow-up", time: "EOD", owner: "Multiple", type: "Outreach", priority: "high" },
    { task: "50 new companies to contact", time: "This week", owner: "Team", type: "Target", priority: "medium" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Outreach Command Center</h1>
          <p className="text-sm text-neutral-600 mt-0.5">
            IIM Bangalore | 2024-25 Placement Cycle | {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent" onClick={() => router.push("/dashboard/analytics")}>
            <BarChart3 className="w-4 h-4 mr-1" />
            Analytics
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-neutral-800" onClick={() => router.push("/dashboard/companies?filter=not_contacted")}>
            <Target className="w-4 h-4 mr-1" />
            Start Outreach
          </Button>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {topMetrics.map((m) => (
          <div key={m.label} className="border border-neutral-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-black">{m.value}</div>
            <div className="text-xs font-medium text-black mt-0.5">{m.label}</div>
            <div className="text-[10px] text-neutral-500">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Outreach Funnel */}
      <div>
        <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Outreach Funnel</h2>
        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
          <div className="grid grid-cols-4 sm:grid-cols-8 divide-x divide-neutral-200">
            {funnelStages.map((stage) => (
              <button
                key={stage.stage}
                onClick={() => router.push(`/dashboard/companies?filter=${stage.filter}`)}
                className="px-1 sm:px-2 py-3 sm:py-4 text-center cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <div className="text-lg sm:text-2xl font-bold text-black">{stage.count}</div>
                <div className="text-[10px] text-neutral-600 mt-1 leading-tight">{stage.stage}</div>
                {stage.rate && <div className="text-[10px] text-neutral-400 mt-0.5">{stage.rate}</div>}
                {stage.change && <div className="text-[10px] text-black mt-0.5">{stage.change}</div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Tasks + Manager Performance */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today Tasks */}
          <div>
            <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Today</h2>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
              {todayTasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-4 px-4 py-3 hover:bg-neutral-50 cursor-pointer transition-colors" onClick={() => router.push("/dashboard/companies")}>
                  <div className="w-14 text-xs font-medium text-neutral-500">{task.time}</div>
                  <div className={`w-2 h-2 rounded-full ${task.priority === "high" ? "bg-black" : "bg-neutral-300"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-black">{task.task}</div>
                    <div className="text-xs text-neutral-500">{task.owner}</div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                    task.type === "Call" ? "bg-black text-white" :
                    task.type === "Email" ? "bg-neutral-200 text-black" :
                    "bg-neutral-100 text-neutral-600"
                  }`}>{task.type}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Manager Performance Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-black" />
                <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Manager Performance</h2>
              </div>
              <Link href="/dashboard/team">
                <Button variant="link" size="sm" className="text-black p-0 h-auto">View Team</Button>
              </Link>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
              <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Manager</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Accounts</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Contacted</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Meetings</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">JDs</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Conv %</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Dormant %</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-black">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {managerPerformance.map((m, idx) => (
                    <tr key={idx} onClick={() => router.push(`/dashboard/companies?owner=${encodeURIComponent(m.name)}`)} className="hover:bg-neutral-50 cursor-pointer">
                      <td className="px-4 py-2.5 text-sm font-medium text-black">{m.name}</td>
                      <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{m.accounts}</td>
                      <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{m.contacted}</td>
                      <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{m.meetings}</td>
                      <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{m.jds}</td>
                      <td className="px-4 py-2.5 text-sm text-center font-medium text-black">{m.conversion}</td>
                      <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{m.dormant}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          m.load === "critical" ? "bg-black text-white" :
                          m.load === "lagging" ? "bg-neutral-200 text-black" :
                          "text-neutral-500"
                        }`}>
                          {m.load === "critical" ? "CRITICAL" : m.load === "lagging" ? "LAGGING" : "OK"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>

          {/* Dormant Accounts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-black" />
              <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Dormant Accounts - Reconnect Recommended</h2>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
              {dormantAccounts.map((d, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 hover:bg-neutral-50 cursor-pointer gap-2" onClick={() => router.push("/dashboard/companies")}>
                  <div>
                    <div className="text-sm font-medium text-black">{d.company}</div>
                    <div className="text-xs text-neutral-500">Last contact: {d.lastContact} | Was active: {d.wasActive}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500">{d.alumni}</span>
                    <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent border-neutral-300">Reconnect</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Alerts + AI Suggestions */}
        <div className="space-y-6">
          {/* Alerts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-black" />
              <h2 className="text-sm font-semibold text-black uppercase tracking-wide">Alerts & Risks</h2>
            </div>
            <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
              {alerts.map((alert, idx) => (
                <div key={idx} className="px-4 py-3 hover:bg-neutral-50 cursor-pointer" onClick={() => router.push("/dashboard/companies")}>
                  <div className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      alert.severity === "high" ? "bg-black" :
                      alert.severity === "medium" ? "bg-neutral-400" :
                      "bg-neutral-200"
                    }`} />
                    <div>
                      <span className="text-sm font-medium text-black">{alert.company}</span>
                      <p className="text-xs text-neutral-600 mt-0.5">{alert.issue}</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Owner: {alert.owner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Intelligence */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-black" />
              <h2 className="text-sm font-semibold text-black uppercase tracking-wide">AI Suggestions</h2>
            </div>
            <div className="border border-neutral-200 rounded-lg bg-white divide-y divide-neutral-200">
              <div className="p-3">
                <p className="text-xs text-neutral-700">
                  <span className="font-semibold text-black">FMCG Sector Gap:</span> Your outreach to FMCG companies is 32% lower than benchmark for your tier. Recommend contacting P&G, Nestle, Marico.
                </p>
              </div>
              <div className="p-3">
                <p className="text-xs text-neutral-700">
                  <span className="font-semibold text-black">Dormant Alert:</span> You last engaged HUL in Mar 2022. They recruited 3 offers in 2022. Recommend reconnect via alumni Suresh Iyer.
                </p>
              </div>
              <div className="p-3">
                <p className="text-xs text-neutral-700">
                  <span className="font-semibold text-black">New Opportunity:</span> EY-Parthenon is expanding campus hiring. 6 peer institutes already engaged. Consider prioritizing.
                </p>
              </div>
              <div className="p-3">
                <p className="text-xs text-neutral-700">
                  <span className="font-semibold text-black">Manager Alert:</span> Sneha Patel has 32% dormant accounts. Reassign 15 accounts to balance workload.
                </p>
              </div>
            </div>
          </div>

          {/* Week Summary */}
          <div>
            <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">This Week</h2>
            <div className="border border-neutral-200 rounded-lg bg-white p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">New outreach sent</span>
                <span className="text-sm font-semibold text-black">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Meetings held</span>
                <span className="text-sm font-semibold text-black">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">New JDs received</span>
                <span className="text-sm font-semibold text-black">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Accounts progressed</span>
                <span className="text-sm font-semibold text-black">12</span>
              </div>
              <div className="border-t border-neutral-200 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-black">vs Weekly Target</span>
                  <span className="text-sm font-semibold text-black">-8 companies behind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
