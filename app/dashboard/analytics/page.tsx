"use client"

import { Button } from "@/components/ui/button"
import { Download, TrendingUp, TrendingDown, Building2, Users, Briefcase, Target } from "lucide-react"

export default function AnalyticsPage() {
  const metrics = [
    { label: "Total Companies", value: "320", change: "+12", trend: "up" },
    { label: "Active Conversations", value: "98", change: "+8", trend: "up" },
    { label: "Meetings This Month", value: "52", change: "+15", trend: "up" },
    { label: "Roles Received", value: "28", change: "+5", trend: "up" },
    { label: "Offers Made", value: "12", change: "+3", trend: "up" },
    { label: "Conversion Rate", value: "8.7%", change: "+1.2%", trend: "up" },
  ]

  const funnelData = [
    { stage: "Targeted", count: 320, rate: "100%" },
    { stage: "Contacted", count: 245, rate: "77%" },
    { stage: "Replied", count: 98, rate: "40%" },
    { stage: "Meeting Done", count: 52, rate: "53%" },
    { stage: "Roles Received", count: 28, rate: "54%" },
    { stage: "Process Live", count: 18, rate: "64%" },
    { stage: "Offers Made", count: 12, rate: "67%" },
    { stage: "Accepted", count: 8, rate: "67%" },
  ]

  const sectorBreakdown = [
    { sector: "Tech", companies: 85, roles: 12, offers: 5 },
    { sector: "Consulting", companies: 45, roles: 8, offers: 3 },
    { sector: "BFSI", companies: 62, roles: 4, offers: 2 },
    { sector: "FMCG", companies: 38, roles: 2, offers: 1 },
    { sector: "Healthcare", companies: 28, roles: 1, offers: 1 },
    { sector: "Others", companies: 62, roles: 1, offers: 0 },
  ]

  const teamPerformance = [
    { name: "Neha Sharma", accounts: 32, meetings: 8, roles: 5, conversion: "15.6%" },
    { name: "Rahul Kumar", accounts: 28, meetings: 6, roles: 4, conversion: "14.3%" },
    { name: "Priya Singh", accounts: 25, meetings: 5, roles: 3, conversion: "12.0%" },
    { name: "Amit Patel", accounts: 22, meetings: 4, roles: 2, conversion: "9.1%" },
    { name: "Sneha Patel", accounts: 30, meetings: 7, roles: 4, conversion: "13.3%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-black">Analytics</h1>
          <p className="text-sm text-neutral-600">Placement operations performance</p>
        </div>
        <Button variant="outline" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="border border-neutral-200 rounded-lg p-4 bg-white">
            <div className="text-xs text-neutral-500 uppercase tracking-wide">{metric.label}</div>
            <div className="text-2xl font-bold text-black mt-1">{metric.value}</div>
            <div className={`text-xs mt-1 flex items-center gap-1 ${metric.trend === 'up' ? 'text-black' : 'text-neutral-500'}`}>
              {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div>
        <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Placement Funnel</h2>
        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white relative">
          <div className="overflow-x-auto">
          <div className="grid grid-cols-8 divide-x divide-neutral-200 min-w-[800px]">
            {funnelData.map((stage) => (
              <div key={stage.stage} className="px-3 py-4 text-center">
                <div className="text-2xl font-bold text-black">{stage.count}</div>
                <div className="text-[10px] text-neutral-600 mt-1 leading-tight">{stage.stage}</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">{stage.rate}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sector Breakdown */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Sector Breakdown</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white relative">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-2 text-left text-xs font-semibold text-black">Sector</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Companies</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Roles</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Offers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {sectorBreakdown.map((sector) => (
                  <tr key={sector.sector} className="hover:bg-neutral-50">
                    <td className="px-4 py-2.5 text-sm font-medium text-black">{sector.sector}</td>
                    <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{sector.companies}</td>
                    <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{sector.roles}</td>
                    <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{sector.offers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>

        {/* Team Performance */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Team Performance</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white relative">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-4 py-2 text-left text-xs font-semibold text-black">Member</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Accounts</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Meetings</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Roles</th>
                  <th className="px-4 py-2 text-center text-xs font-semibold text-black">Conv %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {teamPerformance.map((member) => (
                  <tr key={member.name} className="hover:bg-neutral-50">
                    <td className="px-4 py-2.5 text-sm font-medium text-black">{member.name}</td>
                    <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{member.accounts}</td>
                    <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{member.meetings}</td>
                    <td className="px-4 py-2.5 text-sm text-center text-neutral-600">{member.roles}</td>
                    <td className="px-4 py-2.5 text-sm text-center font-medium text-black">{member.conversion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
