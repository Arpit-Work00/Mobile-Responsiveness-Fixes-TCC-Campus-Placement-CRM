import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Briefcase, Target, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function SaarthiDashboard() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Saarthi</h1>
          <p className="text-gray-600">Your career, mapped over time.</p>
        </div>

        {/* Career Snapshot */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Career Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Stage</p>
              <p className="text-lg font-semibold">Final Year Student</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Roles Targeting</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">Product Management</Badge>
                <Badge variant="secondary">Consulting</Badge>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Readiness Score</p>
              <div className="mt-2">
                <Progress value={65} className="h-2 mb-2" />
                <p className="text-sm font-medium">65% Ready</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Opportunities Card */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Opportunities For You</h2>
              <Link href="/saarthi/dashboard/opportunities">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  company: "Acme Consulting",
                  role: "Management Consultant",
                  type: "Campus Role",
                  location: "Mumbai",
                  match: 92,
                },
                {
                  company: "TechCorp India",
                  role: "Product Manager",
                  type: "Campus Role",
                  location: "Bangalore",
                  match: 88,
                },
                {
                  company: "FinServe Ltd",
                  role: "Business Analyst",
                  type: "Campus Role",
                  location: "Delhi NCR",
                  match: 85,
                },
              ].map((opp) => (
                <div key={opp.role} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold">{opp.role}</h3>
                      <p className="text-sm text-gray-600">{opp.company}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {opp.match}% match
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{opp.type}</span>
                    <span>•</span>
                    <span>{opp.location}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Preparation</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mock Interviews</span>
                  <Badge variant="secondary">5 credits</Badge>
                </div>
                <Link href="/saarthi/dashboard/prepare">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Schedule Mock
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Profile completed</p>
                    <p className="text-gray-600 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Briefcase className="h-4 w-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">3 new roles matched</p>
                    <p className="text-gray-600 text-xs">Today</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/saarthi/dashboard/opportunities">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-gray-50">
                <Briefcase className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">Explore Opportunities</h3>
                <p className="text-sm text-gray-600">Find roles that match your profile</p>
              </div>
            </Link>
            <Link href="/saarthi/dashboard/prepare">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-gray-50">
                <Target className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">Prepare Better</h3>
                <p className="text-sm text-gray-600">Mock interviews and feedback</p>
              </div>
            </Link>
            <Link href="/saarthi/dashboard/profile">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-gray-50">
                <TrendingUp className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">Track Progress</h3>
                <p className="text-sm text-gray-600">See how you're improving</p>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
