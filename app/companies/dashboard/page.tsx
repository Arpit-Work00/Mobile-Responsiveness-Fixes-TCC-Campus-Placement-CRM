import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  FolderKanban,
  ArrowRight,
  TrendingUp,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react"

export default function CompanyDashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-black">Hiring Control Panel</h1>
          <p className="text-sm text-neutral-600 mt-1">Real-time overview of your hiring operations</p>
        </div>
        <Button asChild className="bg-black text-white hover:bg-neutral-800">
          <Link href="/companies/dashboard/roles">Post a Job</Link>
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="border border-neutral-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wide">Active Roles</span>
            <FileText className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="text-3xl font-semibold text-black mb-1">12</p>
          <p className="text-xs text-green-600">+3 this week</p>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wide">Applications</span>
            <Users className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="text-3xl font-semibold text-black mb-1">347</p>
          <p className="text-xs text-green-600">+28 today</p>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wide">Interviews</span>
            <Calendar className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="text-3xl font-semibold text-black mb-1">18</p>
          <p className="text-xs text-neutral-600">5 today</p>
        </div>
        <div className="border border-neutral-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wide">Offers Made</span>
            <TrendingUp className="w-4 h-4 text-neutral-400" />
          </div>
          <p className="text-3xl font-semibold text-black mb-1">23</p>
          <p className="text-xs text-green-600">8 accepted</p>
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg p-6 mb-6">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">Hiring Funnel</h2>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-black font-medium">Applications</span>
              <span className="text-sm text-black font-medium">347</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-black" style={{ width: "100%" }} />
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-black font-medium">Shortlist</span>
              <span className="text-sm text-black font-medium">89</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-neutral-600" style={{ width: "26%" }} />
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-black font-medium">Interview</span>
              <span className="text-sm text-black font-medium">42</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-neutral-600" style={{ width: "12%" }} />
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-black font-medium">Offer</span>
              <span className="text-sm text-black font-medium">23</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-neutral-600" style={{ width: "7%" }} />
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-black font-medium">Joined</span>
              <span className="text-sm text-black font-medium">8</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-600" style={{ width: "2%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-900 mb-1">3 Roles With No Activity</p>
              <p className="text-xs text-red-700 mb-2">No applications in last 7 days</p>
              <Button variant="outline" size="sm" className="h-7 text-xs bg-white" asChild>
                <Link href="/companies/dashboard/roles">View Roles</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-yellow-900 mb-1">12 Campuses Not Responding</p>
              <p className="text-xs text-yellow-700 mb-2">Follow-up required</p>
              <Button variant="outline" size="sm" className="h-7 text-xs bg-white" asChild>
                <Link href="/companies/dashboard/pipeline">View Pipeline</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-neutral-200 bg-neutral-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900 mb-1">Bottleneck Identified</p>
              <p className="text-xs text-neutral-700 mb-2">Shortlist → Interview conversion low</p>
              <Button variant="outline" size="sm" className="h-7 text-xs bg-white" asChild>
                <Link href="/companies/dashboard/screening">Add Screening</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Link
          href="/companies/dashboard/explore"
          className="border border-neutral-200 rounded-lg p-6 hover:border-black transition-colors group"
        >
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-black mb-1">Hire from Campus</h2>
          <p className="text-sm text-neutral-600 mb-4">Post roles and manage campus recruitment</p>
          <div className="flex items-center gap-1 mt-4 text-sm text-black group-hover:gap-2 transition-all">
            Explore & Compare Campuses <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/companies/dashboard/laterals"
          className="border border-neutral-200 rounded-lg p-6 hover:border-black transition-colors group"
        >
          <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-neutral-600" />
          </div>
          <h2 className="text-lg font-semibold text-black mb-1">Hire from Market</h2>
          <p className="text-sm text-neutral-600 mb-4">Access vetted alumni & experienced professionals</p>
          <div className="flex items-center gap-1 mt-4 text-sm text-neutral-500 group-hover:gap-2 transition-all">
            Explore Profiles <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/companies/dashboard/projects"
          className="border border-neutral-200 rounded-lg p-6 hover:border-black transition-colors group"
        >
          <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <FolderKanban className="w-6 h-6 text-neutral-600" />
          </div>
          <h2 className="text-lg font-semibold text-black mb-1">Post Projects</h2>
          <p className="text-sm text-neutral-600 mb-4">Hire students or teams for short-term work</p>
          <div className="flex items-center gap-1 mt-4 text-sm text-neutral-500 group-hover:gap-2 transition-all">
            Create Project <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>

      <div className="border border-neutral-200 rounded-lg">
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">Pending Actions</h2>
          <span className="text-xs text-neutral-500">5 actions require attention</span>
        </div>
        <div className="divide-y divide-neutral-200">
          {[
            {
              role: "Product Manager",
              action: "Review 12 new applications",
              priority: "high",
              campus: "IIM Bangalore",
            },
            { role: "Software Engineer", action: "Schedule 3 interviews", priority: "medium", campus: "NIT Trichy" },
            {
              role: "Business Analyst",
              action: "Send offer letters (2 candidates)",
              priority: "high",
              campus: "BITS Pilani",
            },
            { role: "Data Analyst", action: "Update role status", priority: "low", campus: "Multiple" },
            {
              role: "UX Designer",
              action: "Campus not responding - follow up",
              priority: "medium",
              campus: "IIIT Delhi",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center gap-4 hover:bg-neutral-50">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.priority === "high"
                    ? "bg-red-500"
                    : item.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-neutral-300"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-black">{item.role}</p>
                <p className="text-xs text-neutral-600">{item.action}</p>
              </div>
              <div className="text-xs text-neutral-500">{item.campus}</div>
              <Button variant="outline" size="sm" className="bg-transparent">
                Action
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
