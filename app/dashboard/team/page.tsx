"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, TrendingUp, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const teamMembers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@iimb.ac.in",
    role: "Placecom Member",
    assigned: 25,
    active: 18,
    meetings: 8,
    rolesReceived: 4,
    companiesRecruited: 2,
    nonResponsive: 3,
    outreach: 45,
    load: "high",
    sectors: ["Consulting", "BFSI"],
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@iimb.ac.in",
    role: "Placecom Member",
    assigned: 22,
    active: 19,
    meetings: 6,
    rolesReceived: 3,
    companiesRecruited: 1,
    nonResponsive: 2,
    outreach: 38,
    load: "high",
    sectors: ["Technology", "E-commerce"],
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@iimb.ac.in",
    role: "Placecom Member",
    assigned: 18,
    active: 12,
    meetings: 4,
    rolesReceived: 2,
    companiesRecruited: 1,
    nonResponsive: 4,
    outreach: 28,
    load: "medium",
    sectors: ["Manufacturing", "Pharma"],
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@iimb.ac.in",
    role: "Placecom Member",
    assigned: 15,
    active: 10,
    meetings: 3,
    rolesReceived: 1,
    companiesRecruited: 1,
    nonResponsive: 2,
    outreach: 22,
    load: "medium",
    sectors: ["Consulting", "Operations"],
  },
]

export default function TeamAssignmentPage() {
  const router = useRouter()

  const handleMemberClick = (memberName: string) => {
    router.push(`/dashboard/companies?owner=${encodeURIComponent(memberName)}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Team Performance & Load Management</h1>
          <p className="text-sm text-neutral-600">Sales-manager style performance tracking for placement team</p>
        </div>
        <Link href="/dashboard/accounts/assign">
          <Button className="bg-black text-white hover:bg-neutral-800">
            <Users className="w-4 h-4 mr-2" />
            Rebalance Accounts
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border border-neutral-200">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-black">80</p>
            <p className="text-xs text-neutral-600">Total Companies Assigned</p>
          </CardContent>
        </Card>
        <Card className="border border-neutral-200">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-black">59</p>
            <p className="text-xs text-neutral-600">Active Conversations</p>
          </CardContent>
        </Card>
        <Card className="border border-neutral-200">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-black">21</p>
            <p className="text-xs text-neutral-600">Total Meetings This Week</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-black">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-black">2</p>
            <p className="text-xs text-neutral-600">Overloaded Members</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-neutral-200">
        <CardHeader className="border-b border-neutral-200">
          <CardTitle className="text-base font-bold text-black">Team Performance Table</CardTitle>
          <p className="text-sm text-neutral-600 mt-1">
            Sales-style funnel metrics for each placement committee member (click row to view accounts)
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-black">Team Member</th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Total
                    <br />
                    Accounts
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Active
                    <br />
                    Conversations
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Meetings
                    <br />
                    Done
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Roles
                    <br />
                    Received
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Companies
                    <br />
                    Recruited
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Non-
                    <br />
                    Responsive
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-black">
                    Load
                    <br />
                    Indicator
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr
                    key={member.id}
                    onClick={() => handleMemberClick(member.name)}
                    className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 cursor-pointer transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-semibold text-black">{member.name}</p>
                        <p className="text-xs text-neutral-600">{member.email}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {member.sectors.map((sector, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-neutral-50 border-neutral-300">
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-base font-bold text-black">{member.assigned}</p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-base font-bold text-black">{member.active}</p>
                      <p className="text-xs text-neutral-500">
                        ({Math.round((member.active / member.assigned) * 100)}%)
                      </p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-base font-bold text-black">{member.meetings}</p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-base font-bold text-black">{member.rolesReceived}</p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <p className="text-base font-bold text-black">{member.companiesRecruited}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <XCircle className="w-4 h-4 text-neutral-400" />
                        <p className="text-base font-medium text-neutral-600">{member.nonResponsive}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Badge
                        variant="outline"
                        className={`font-semibold ${
                          member.load === "high"
                            ? "bg-black text-white border-black"
                            : member.load === "medium"
                              ? "bg-neutral-200 text-black border-neutral-300"
                              : "bg-white text-neutral-600 border-neutral-300"
                        }`}
                      >
                        {member.load === "high" ? "OVERLOADED" : member.load === "medium" ? "BALANCED" : "UNDERLOADED"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-neutral-50 border-t-2 border-neutral-300">
                <tr>
                  <td className="py-3 px-4 font-bold text-black">TOTAL</td>
                  <td className="py-3 px-4 text-center font-bold text-black">
                    {teamMembers.reduce((sum, m) => sum + m.assigned, 0)}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-black">
                    {teamMembers.reduce((sum, m) => sum + m.active, 0)}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-black">
                    {teamMembers.reduce((sum, m) => sum + m.meetings, 0)}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-black">
                    {teamMembers.reduce((sum, m) => sum + m.rolesReceived, 0)}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-black">
                    {teamMembers.reduce((sum, m) => sum + m.companiesRecruited, 0)}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-neutral-600">
                    {teamMembers.reduce((sum, m) => sum + m.nonResponsive, 0)}
                  </td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-black bg-white">
        <CardHeader>
          <CardTitle className="text-base font-bold text-black flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-black" />
            Load Balancing Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
              <p className="text-sm font-medium text-black mb-1">
                <span className="font-bold">Rahul Sharma</span> is handling 25 companies (OVERLOADED)
              </p>
              <p className="text-xs text-neutral-600 mb-2">
                Conversion: 18/25 active (72%) → 8 meetings → 4 roles → 2 recruited
              </p>
              <p className="text-xs text-black">
                <strong>Action:</strong> Reassign 5-7 cold/non-responsive accounts to Sneha Reddy or Amit Kumar
              </p>
            </div>
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
              <p className="text-sm font-medium text-black mb-1">
                <span className="font-bold">Priya Patel</span> has 19/22 active conversations (86% engagement)
              </p>
              <p className="text-xs text-neutral-600 mb-2">Pipeline: 19 active → 6 meetings → 3 roles → 1 recruited</p>
              <p className="text-xs text-black">
                <strong>Action:</strong> High performer but overloaded. Consider redistributing new incoming accounts
              </p>
            </div>
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
              <p className="text-sm font-medium text-black mb-1">
                <span className="font-bold">Amit Kumar</span> has 4 non-responsive accounts
              </p>
              <p className="text-xs text-neutral-600 mb-2">Conversion dropping: 12/18 active (67%)</p>
              <p className="text-xs text-black">
                <strong>Action:</strong> Review non-responsive accounts. Consider reactivation sequence or reassignment
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border border-neutral-200">
          <CardHeader className="border-b border-neutral-200">
            <CardTitle className="text-base font-bold text-black flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Top Performers This Month
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded border border-neutral-200">
                <div>
                  <p className="text-sm font-semibold text-black">Priya Patel</p>
                  <p className="text-xs text-neutral-600">Highest engagement rate (86%)</p>
                </div>
                <Badge variant="outline" className="bg-black text-white border-black">
                  TOP
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded border border-neutral-200">
                <div>
                  <p className="text-sm font-semibold text-black">Rahul Sharma</p>
                  <p className="text-xs text-neutral-600">Most meetings conducted (8)</p>
                </div>
                <Badge variant="outline" className="bg-black text-white border-black">
                  TOP
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-neutral-200">
          <CardHeader className="border-b border-neutral-200">
            <CardTitle className="text-base font-bold text-black flex items-center gap-2">
              <Users className="w-5 h-5" />
              Team Capacity Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Overloaded Members</span>
                <span className="text-base font-bold text-black">2 of 4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Average Accounts per Member</span>
                <span className="text-base font-bold text-black">20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Team Conversion Rate</span>
                <span className="text-base font-bold text-black">74%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Overall Recruitment Rate</span>
                <span className="text-base font-bold text-black">6.25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
