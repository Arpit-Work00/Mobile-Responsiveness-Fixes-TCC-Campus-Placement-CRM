"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Users, Download, Check, ChevronUp, Building, Mail, Phone } from "lucide-react"

const plans = [
  {
    name: "ACCESS",
    price: "₹1,00,000",
    current: false,
    features: ["250 company leads", "5 intro credits", "Basic batch profile"],
  },
  {
    name: "ACCESS + GROWTH",
    price: "₹2,50,000",
    current: true,
    popular: true,
    features: ["500 company leads", "20 intro credits", "10 mock interviews", "Priority visibility"],
  },
  {
    name: "ACCESS + OUTCOMES",
    price: "₹5,00,000",
    current: false,
    features: ["1,000 company leads", "50 intro credits", "30 mock interviews", "Quarterly review"],
  },
]

const variableFees = [
  { name: "Participation Fee", amount: "₹7,000 – ₹10,000", description: "When campus applies or submits shortlist" },
  { name: "Success Fee", amount: "₹10,000 – ₹20,000", description: "When an offer is accepted" },
  { name: "Extra Corporate Meetings", amount: "₹5,000 per meeting", description: "Beyond included credits" },
]

const teamMembers = [
  { name: "Dr. Sharma", email: "sharma@iimb.ac.in", role: "Admin" },
  { name: "Placement Team", email: "placement@iimb.ac.in", role: "Member" },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage subscription, team, and account settings</p>
      </div>

      <Tabs defaultValue="subscription" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Subscription Tab */}
        <TabsContent value="subscription" className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-foreground text-background rounded-lg mb-6">
                <div>
                  <p className="font-bold text-lg">ACCESS + GROWTH</p>
                  <p className="text-sm text-background/80">Valid until Oct 2025</p>
                </div>
                <p className="text-2xl font-bold">₹2,50,000/year</p>
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`p-4 rounded-lg border-2 ${
                      plan.current ? "border-foreground bg-secondary" : "border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{plan.name}</h3>
                      {plan.popular && <Badge className="bg-foreground text-background text-xs">Most Popular</Badge>}
                    </div>
                    <p className="text-xl font-bold text-foreground mb-4">{plan.price}/year</p>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-foreground" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {plan.current ? (
                      <Button variant="outline" className="w-full bg-transparent" disabled>
                        Current Plan
                      </Button>
                    ) : (
                      <Button
                        variant={plan.name === "ACCESS + OUTCOMES" ? "default" : "outline"}
                        className={`w-full ${
                          plan.name === "ACCESS + OUTCOMES"
                            ? "bg-foreground text-background hover:bg-foreground/90"
                            : "bg-transparent"
                        }`}
                      >
                        {plan.name === "ACCESS" ? "Downgrade" : "Upgrade"}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Variable Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Variable Fees (Transparent)</CardTitle>
              <CardDescription>Fees apply only when things move</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {variableFees.map((fee, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{fee.name}</p>
                      <p className="text-sm text-muted-foreground">{fee.description}</p>
                    </div>
                    <p className="font-semibold text-foreground">{fee.amount}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">No JD-based fees. No washout charges.</p>
            </CardContent>
          </Card>

          {/* Buy Additional Credits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ChevronUp className="w-5 h-5" />
                Buy Additional Credits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg text-center">
                  <p className="font-semibold text-foreground mb-1">10 Intro Credits</p>
                  <p className="text-2xl font-bold text-foreground mb-3">₹25,000</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Buy Now
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <p className="font-semibold text-foreground mb-1">5 Mock Interviews</p>
                  <p className="text-2xl font-bold text-foreground mb-3">₹15,000</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Buy Now
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <p className="font-semibold text-foreground mb-1">100 Outreach Messages</p>
                  <p className="text-2xl font-bold text-foreground mb-3">₹10,000</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Buy Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Team Members
                  </CardTitle>
                  <CardDescription>Manage who has access to your placement dashboard</CardDescription>
                </div>
                <Button className="bg-foreground text-background hover:bg-foreground/90">Add Member</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                        <span className="text-background font-semibold">{member.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{member.role}</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="w-5 h-5" />
                Institute Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="instituteName">Institute Name</Label>
                  <Input id="instituteName" defaultValue="Indian Institute of Management Bangalore" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Bangalore, Karnataka" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Contact Email
                  </Label>
                  <Input id="email" type="email" defaultValue="placement@iimb.ac.in" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Contact Phone
                  </Label>
                  <Input id="phone" type="tel" defaultValue="+91 80 2699 3000" />
                </div>
              </div>
              <Button className="bg-foreground text-background hover:bg-foreground/90">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Reports
              </CardTitle>
              <CardDescription>Export placement data and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Placement Summary Report", description: "Overview of all placement activities" },
                  { name: "Company Engagement Report", description: "Detailed outreach and meeting data" },
                  { name: "Student Placement Report", description: "Individual student placement status" },
                  { name: "Funnel Analytics Report", description: "Conversion metrics at each stage" },
                ].map((report, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{report.name}</p>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
