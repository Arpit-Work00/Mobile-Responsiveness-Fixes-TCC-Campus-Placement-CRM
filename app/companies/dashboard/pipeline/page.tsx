import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const funnelStages = [
  { name: "Roles Posted", count: 3, width: "100%" },
  { name: "Applications Received", count: 45, width: "85%" },
  { name: "Shortlisted", count: 18, width: "60%" },
  { name: "Interviews Scheduled", count: 12, width: "45%" },
  { name: "Offers Made", count: 5, width: "25%" },
  { name: "Joins Confirmed", count: 3, width: "15%" },
]

const rolesPipeline = [
  {
    role: "Associate PM",
    applications: 28,
    shortlisted: 12,
    interviews: 8,
    offers: 3,
    joins: 2,
  },
  {
    role: "Business Analyst",
    applications: 17,
    shortlisted: 6,
    interviews: 4,
    offers: 2,
    joins: 1,
  },
]

export default function PipelinePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black mb-2">Hiring Pipeline</h1>
        <p className="text-neutral-600">Visual overview of your campus hiring funnel.</p>
      </div>

      {/* Funnel Visualization */}
      <div className="border border-neutral-200 rounded-lg p-6 mb-8">
        <h2 className="font-medium text-black mb-6">Overall Funnel</h2>
        <div className="space-y-4">
          {funnelStages.map((stage, idx) => (
            <div key={stage.name} className="flex items-center gap-4">
              <div className="w-48 text-sm text-neutral-600">{stage.name}</div>
              <div className="flex-1">
                <div
                  className="h-10 bg-black rounded flex items-center justify-end px-4 transition-all"
                  style={{ width: stage.width }}
                >
                  <span className="text-white text-sm font-medium">{stage.count}</span>
                </div>
              </div>
              {idx < funnelStages.length - 1 && <ArrowRight className="w-4 h-4 text-neutral-300" />}
            </div>
          ))}
        </div>
      </div>

      {/* Role-wise Breakdown */}
      <div className="border border-neutral-200 rounded-lg p-6 mb-8">
        <h2 className="font-medium text-black mb-4">Role-wise Pipeline</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Role</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-neutral-500">Applications</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-neutral-500">Shortlisted</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-neutral-500">Interviews</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-neutral-500">Offers</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-neutral-500">Joins</th>
              </tr>
            </thead>
            <tbody>
              {rolesPipeline.map((role) => (
                <tr key={role.role} className="border-b border-neutral-100">
                  <td className="py-3 px-4 text-sm font-medium text-black">{role.role}</td>
                  <td className="py-3 px-4 text-sm text-center text-neutral-600">{role.applications}</td>
                  <td className="py-3 px-4 text-sm text-center text-neutral-600">{role.shortlisted}</td>
                  <td className="py-3 px-4 text-sm text-center text-neutral-600">{role.interviews}</td>
                  <td className="py-3 px-4 text-sm text-center text-neutral-600">{role.offers}</td>
                  <td className="py-3 px-4 text-sm text-center text-black font-medium">{role.joins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button asChild variant="outline" className="bg-transparent">
          <Link href="/companies/dashboard/applications">View All Applications</Link>
        </Button>
        <Button asChild className="bg-black text-white hover:bg-neutral-800">
          <Link href="/companies/dashboard/roles">Post New Role</Link>
        </Button>
      </div>
    </div>
  )
}
