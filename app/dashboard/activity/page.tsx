"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Building2,
  Send,
  Calendar,
  CheckCircle2,
  Users,
  FileText,
  Download,
  Filter,
  Clock,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const activityLog = [
  {
    id: 1,
    type: "outreach",
    action: "Outreach sent to McKinsey & Company",
    timestamp: "Today, 10:32 AM",
    user: "Dr. Sharma",
    icon: Send,
  },
  {
    id: 2,
    type: "meeting",
    action: "Meeting scheduled with Amazon India",
    timestamp: "Today, 9:15 AM",
    user: "Dr. Sharma",
    icon: Calendar,
  },
  {
    id: 3,
    type: "role",
    action: "Role received from Flipkart - Product Manager",
    timestamp: "Yesterday, 4:45 PM",
    user: "System",
    icon: Building2,
  },
  {
    id: 4,
    type: "profile",
    action: "Student profiles shared with Deloitte",
    timestamp: "Yesterday, 2:30 PM",
    user: "Dr. Sharma",
    icon: Users,
  },
  {
    id: 5,
    type: "outreach",
    action: "Follow-up sent to HDFC Bank",
    timestamp: "Yesterday, 11:00 AM",
    user: "Dr. Sharma",
    icon: Send,
  },
  {
    id: 6,
    type: "meeting",
    action: "Meeting completed with Hindustan Unilever",
    timestamp: "Oct 8, 3:00 PM",
    user: "Dr. Sharma",
    icon: CheckCircle2,
  },
  {
    id: 7,
    type: "profile",
    action: "Batch profile updated for MBA 2025",
    timestamp: "Oct 7, 10:00 AM",
    user: "Dr. Sharma",
    icon: FileText,
  },
  {
    id: 8,
    type: "outreach",
    action: "Outreach sent to Google India",
    timestamp: "Oct 6, 2:15 PM",
    user: "Dr. Sharma",
    icon: Send,
  },
  {
    id: 9,
    type: "role",
    action: "Role closed - Analyst at TCS",
    timestamp: "Oct 5, 5:30 PM",
    user: "System",
    icon: Building2,
  },
  {
    id: 10,
    type: "meeting",
    action: "Meeting request accepted by Bain & Company",
    timestamp: "Oct 4, 11:45 AM",
    user: "System",
    icon: Calendar,
  },
]

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Activity Log</h1>
          <p className="text-muted-foreground">Complete audit trail of all actions</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activity</SelectItem>
              <SelectItem value="outreach">Outreach</SelectItem>
              <SelectItem value="meeting">Meetings</SelectItem>
              <SelectItem value="role">Roles</SelectItem>
              <SelectItem value="profile">Profiles</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">85</p>
            <p className="text-xs text-muted-foreground">Outreach Sent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">32</p>
            <p className="text-xs text-muted-foreground">Meetings Held</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">18</p>
            <p className="text-xs text-muted-foreground">Roles Received</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">156</p>
            <p className="text-xs text-muted-foreground">Profiles Shared</p>
          </CardContent>
        </Card>
      </div>

      {/* Activity List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Every action tracked for accountability and transparency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {activityLog.map((activity, idx) => (
              <div
                key={activity.id}
                className={`flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-secondary/50 ${
                  idx === 0 ? "bg-secondary" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.type === "outreach"
                      ? "bg-foreground text-background"
                      : activity.type === "meeting"
                        ? "bg-secondary text-foreground"
                        : activity.type === "role"
                          ? "bg-secondary text-foreground"
                          : "bg-secondary text-foreground"
                  }`}
                >
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.timestamp}
                    </span>
                    <span className="text-xs text-muted-foreground">by {activity.user}</span>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className={`text-xs capitalize ${activity.type === "outreach" ? "bg-foreground text-background" : ""}`}
                >
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4 bg-transparent">
            Load More Activity
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
