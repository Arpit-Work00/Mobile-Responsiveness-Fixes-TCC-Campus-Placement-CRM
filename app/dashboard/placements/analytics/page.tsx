"use client"

import { Button } from "@/components/ui/button"
import { Download, TrendingUp, TrendingDown, ArrowRight } from "lucide-react"

export default function PlacementAnalyticsPage() {
  const overviewStats = [
    { label: "Total Students", value: 380, change: null },
    { label: "Placed", value: 28, change: "+5 this week" },
    { label: "Placement %", value: "7.4%", change: null },
    { label: "Avg CTC", value: "32.5 LPA", change: "+2.3 vs last year" },
    { label: "Highest CTC", value: "52 LPA", change: null },
    { label: "Median CTC", value: "28 LPA", change: null },
  ]

  const funnelData = [
    { stage: "Eligible Students", count: 380, percent: "100%" },
    { stage: "Applied", count: 320, percent: "84%" },
    { stage: "Shortlisted", count: 185, percent: "49%" },
    { stage: "Interviewed", count: 95, percent: "25%" },
    { stage: "Offers Received", count: 42, percent: "11%" },
    { stage: "Offers Accepted", count: 28, percent: "7%" },
  ]

  const companyBreakdown = [
    { company: "McKinsey & Company", offers: 6, avgCTC: "38 LPA", acceptRate: "100%" },
    { company: "Amazon", offers: 5, avgCTC: "26 LPA", acceptRate: "80%" },
    { company: "JP Morgan", offers: 4, avgCTC: "30 LPA", acceptRate: "75%" },
    { company: "BCG", offers: 3, avgCTC: "36 LPA", acceptRate: "100%" },
    { company: "Google", offers: 3, avgCTC: "45 LPA", acceptRate: "100%" },
    { company: "Hindustan Unilever", offers: 3, avgCTC: "24 LPA", acceptRate: "67%" },
  ]

  const functionBreakdown = [
    { function: "Consulting", placed: 12, avgCTC: "37 LPA", percent: "43%" },
    { function: "Finance", placed: 6, avgCTC: "31 LPA", percent: "21%" },
    { function: "Product", placed: 4, avgCTC: "28 LPA", percent: "14%" },
    { function: "Marketing", placed: 3, avgCTC: "24 LPA", percent: "11%" },
    { function: "Operations", placed: 3, avgCTC: "22 LPA", percent: "11%" },
  ]

  const yearComparison = [
    { metric: "Total Offers", current: 42, lastYear: 38, change: "+10.5%" },
    { metric: "Avg CTC", current: "32.5 LPA", lastYear: "30.2 LPA", change: "+7.6%" },
    { metric: "Placement Rate", current: "7.4%", lastYear: "6.8%", change: "+0.6%" },
    { metric: "Consulting Offers", current: 15, lastYear: 12, change: "+25%" },
    { metric: "Tech Offers", current: 8, lastYear: 10, change: "-20%" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-black">Placement Analytics</h1>
          <p className="text-sm text-neutral-600 mt-1">Final Placements 2024-25 | As of {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
        </div>
        <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
          <Download className="w-4 h-4 mr-1" />
          Export Report
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {overviewStats.map((stat, idx) => (
          <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white">
            <div className="text-2xl font-bold text-black">{stat.value}</div>
            <div className="text-xs text-neutral-600">{stat.label}</div>
            {stat.change && (
              <div className="text-xs text-neutral-500 mt-1">{stat.change}</div>
            )}
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <h2 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">Placement Funnel</h2>
        <div className="flex items-center gap-2 overflow-x-auto pb-4">
          {funnelData.map((stage, idx) => (
            <div key={idx} className="flex items-center">
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-black">{stage.count}</div>
                <div className="text-xs text-neutral-600 mt-1">{stage.stage}</div>
                <div className="text-xs text-neutral-400">{stage.percent}</div>
              </div>
              {idx < funnelData.length - 1 && (
                <ArrowRight className="w-4 h-4 text-neutral-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Breakdown */}
        <div className="border border-neutral-200 rounded-lg p-6 bg-white">
          <h2 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">Top Recruiting Companies</h2>
          <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 text-xs font-semibold text-neutral-600">Company</th>
                <th className="text-center py-2 text-xs font-semibold text-neutral-600">Offers</th>
                <th className="text-center py-2 text-xs font-semibold text-neutral-600">Avg CTC</th>
                <th className="text-center py-2 text-xs font-semibold text-neutral-600">Accept Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {companyBreakdown.map((company, idx) => (
                <tr key={idx}>
                  <td className="py-2 text-sm text-black">{company.company}</td>
                  <td className="py-2 text-sm text-center text-black">{company.offers}</td>
                  <td className="py-2 text-sm text-center text-neutral-600">{company.avgCTC}</td>
                  <td className="py-2 text-sm text-center text-neutral-600">{company.acceptRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

        {/* Function Breakdown */}
        <div className="border border-neutral-200 rounded-lg p-6 bg-white">
          <h2 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">By Function</h2>
          <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 text-xs font-semibold text-neutral-600">Function</th>
                <th className="text-center py-2 text-xs font-semibold text-neutral-600">Placed</th>
                <th className="text-center py-2 text-xs font-semibold text-neutral-600">Avg CTC</th>
                <th className="text-center py-2 text-xs font-semibold text-neutral-600">% of Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {functionBreakdown.map((func, idx) => (
                <tr key={idx}>
                  <td className="py-2 text-sm text-black">{func.function}</td>
                  <td className="py-2 text-sm text-center text-black">{func.placed}</td>
                  <td className="py-2 text-sm text-center text-neutral-600">{func.avgCTC}</td>
                  <td className="py-2 text-sm text-center text-neutral-600">{func.percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>

      {/* Year-over-Year Comparison */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <h2 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">Year-over-Year Comparison</h2>
        <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-left py-2 text-xs font-semibold text-neutral-600">Metric</th>
              <th className="text-center py-2 text-xs font-semibold text-neutral-600">2024-25 (Current)</th>
              <th className="text-center py-2 text-xs font-semibold text-neutral-600">2023-24</th>
              <th className="text-center py-2 text-xs font-semibold text-neutral-600">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {yearComparison.map((row, idx) => (
              <tr key={idx}>
                <td className="py-2 text-sm text-black">{row.metric}</td>
                <td className="py-2 text-sm text-center font-semibold text-black">{row.current}</td>
                <td className="py-2 text-sm text-center text-neutral-600">{row.lastYear}</td>
                <td className="py-2 text-center">
                  <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                    row.change.startsWith('+') ? 'text-black' : 'text-neutral-500'
                  }`}>
                    {row.change.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {row.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
