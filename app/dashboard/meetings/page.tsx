"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Calendar,
  Clock,
  MapPin,
  Video,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react"

const meetings = [
  {
    id: 1,
    company: "McKinsey & Company",
    date: "Oct 12, 2024",
    time: "10:00 AM",
    type: "Virtual",
    outcome: "Role Discussion",
    status: "upcoming",
  },
  {
    id: 2,
    company: "Amazon India",
    date: "Oct 18, 2024",
    time: "2:00 PM",
    type: "On-Campus",
    outcome: "PPT Scheduled",
    status: "upcoming",
  },
  {
    id: 3,
    company: "Hindustan Unilever",
    date: "Oct 8, 2024",
    time: "11:00 AM",
    type: "Virtual",
    outcome: "Role Confirmed",
    status: "completed",
  },
  {
    id: 4,
    company: "HDFC Bank",
    date: "Oct 5, 2024",
    time: "3:00 PM",
    type: "On-Campus",
    outcome: "Follow-up Required",
    status: "completed",
  },
]

const roles = [
  {
    id: 1,
    company: "McKinsey & Company",
    role: "Associate Consultant",
    program: "MBA",
    package: "32 LPA",
    positions: 5,
    deadline: "Oct 20",
    status: "Live",
  },
  {
    id: 2,
    company: "Amazon India",
    role: "Program Manager",
    program: "MBA",
    package: "28 LPA",
    positions: 8,
    deadline: "Oct 25",
    status: "Live",
  },
  {
    id: 3,
    company: "Flipkart",
    role: "Product Manager",
    program: "MBA / EPGP",
    package: "24 LPA",
    positions: 4,
    deadline: "Oct 15",
    status: "Live",
  },
  {
    id: 4,
    company: "Hindustan Unilever",
    role: "Management Trainee",
    program: "MBA",
    package: "20 LPA",
    positions: 6,
    deadline: "Oct 10",
    status: "Closed",
  },
]

export default function MeetingsPage() {
  const upcomingMeetings = meetings.filter((m) => m.status === "upcoming")
  const completedMeetings = meetings.filter((m) => m.status === "completed")
  const liveRoles = roles.filter((r) => r.status === "Live")
  const closedRoles = roles.filter((r) => r.status === "Closed")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Meetings & Roles</h1>
        <p className="text-muted-foreground">Track scheduled meetings and active role opportunities</p>
      </div>

      <Tabs defaultValue="meetings" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="meetings">Meetings ({meetings.length})</TabsTrigger>
          <TabsTrigger value="roles">Roles ({roles.length})</TabsTrigger>
        </TabsList>

        {/* Meetings Tab */}
        <TabsContent value="meetings" className="space-y-6">
          {/* Upcoming Meetings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Meetings ({upcomingMeetings.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{meeting.company}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {meeting.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {meeting.time}
                        </span>
                        <span className="flex items-center gap-1">
                          {meeting.type === "Virtual" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                          {meeting.type}
                        </span>
                      </div>
                      <Badge variant="secondary" className="mt-2 bg-foreground text-background">
                        {meeting.outcome}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Reschedule
                    </Button>
                    <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                      Join Meeting
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Completed Meetings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Completed Meetings ({completedMeetings.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {completedMeetings.map((meeting) => (
                <div key={meeting.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{meeting.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {meeting.date} | {meeting.type}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">{meeting.outcome}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Roles Tab */}
        <TabsContent value="roles" className="space-y-6">
          {/* Live Roles */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Live Roles ({liveRoles.length})
              </CardTitle>
              <CardDescription>Roles received through TCC platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {liveRoles.map((role) => (
                <div key={role.id} className="p-4 border border-border rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{role.role}</h3>
                        <p className="text-sm text-muted-foreground">{role.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-3 h-3" />
                            {role.program}
                          </span>
                          <span className="font-semibold text-foreground">{role.package}</span>
                          <span className="text-muted-foreground">{role.positions} positions</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-foreground text-background">Live</Badge>
                      <span className="text-xs text-muted-foreground">Deadline: {role.deadline}</span>
                      <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Closed Roles */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Closed Roles ({closedRoles.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {closedRoles.map((role) => (
                <div key={role.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg opacity-70">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{role.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {role.company} | {role.package}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Closed</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
