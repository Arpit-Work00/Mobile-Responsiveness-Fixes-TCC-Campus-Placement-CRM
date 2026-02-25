import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, CheckCircle2, XCircle, Calendar } from "lucide-react"

export default function Applications() {
  const applications = [
    {
      id: 1,
      company: "Acme Consulting",
      role: "Management Consultant",
      appliedDate: "12 Jan 2025",
      status: "Interview Scheduled",
      nextStep: "Case Interview on 18 Feb",
      statusColor: "blue",
    },
    {
      id: 2,
      company: "TechCorp India",
      role: "Product Manager",
      appliedDate: "10 Jan 2025",
      status: "Under Review",
      nextStep: "Awaiting shortlist",
      statusColor: "yellow",
    },
    {
      id: 3,
      company: "FinServe Ltd",
      role: "Business Analyst",
      appliedDate: "5 Jan 2025",
      status: "Offer Received",
      nextStep: "Accept by 25 Feb",
      statusColor: "green",
    },
    {
      id: 4,
      company: "RetailCo",
      role: "Category Manager",
      appliedDate: "28 Dec 2024",
      status: "Not Selected",
      nextStep: "Application closed",
      statusColor: "gray",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Offer Received":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "Not Selected":
        return <XCircle className="h-5 w-5 text-gray-400" />
      case "Under Review":
        return <Clock className="h-5 w-5 text-yellow-600" />
      default:
        return <Calendar className="h-5 w-5 text-blue-600" />
    }
  }

  const getStatusBadge = (status: string, color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
      green: "bg-green-100 text-green-700 border-green-200",
      gray: "bg-gray-100 text-gray-700 border-gray-200",
    }
    return <Badge className={colors[color as keyof typeof colors]}>{status}</Badge>
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-gray-600">Track your applications and next steps</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Total Applied</p>
            <p className="text-3xl font-bold">12</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Under Review</p>
            <p className="text-3xl font-bold text-yellow-600">5</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Interviews</p>
            <p className="text-3xl font-bold text-blue-600">3</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Offers</p>
            <p className="text-3xl font-bold text-green-600">1</p>
          </Card>
        </div>

        {/* Applications List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Applications</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {applications.map((app) => (
              <Card key={app.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">{getStatusIcon(app.status)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{app.role}</h3>
                        {getStatusBadge(app.status, app.statusColor)}
                      </div>
                      <p className="text-gray-600 font-medium mb-1">{app.company}</p>
                      <p className="text-sm text-gray-500">Applied on {app.appliedDate}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm">
                    <span className="font-medium">Next Step: </span>
                    <span className="text-gray-600">{app.nextStep}</span>
                  </p>
                </div>

                {app.status === "Interview Scheduled" && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <span className="font-medium">Action Required: </span>
                      Prepare for your case interview. Mock interviews available.
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="active">
            <Card className="p-12 text-center">
              <p className="text-gray-600">Active applications will appear here</p>
            </Card>
          </TabsContent>

          <TabsContent value="offers">
            <Card className="p-12 text-center">
              <p className="text-gray-600">Offer details will appear here</p>
            </Card>
          </TabsContent>

          <TabsContent value="closed">
            <Card className="p-12 text-center">
              <p className="text-gray-600">Closed applications will appear here</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
