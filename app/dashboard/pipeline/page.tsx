"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Target,
  Send,
  Calendar,
  Briefcase,
  CheckCircle2,
  Users,
  AlertTriangle,
  ArrowRight,
  Flame,
  Thermometer,
  Snowflake,
} from "lucide-react"

const funnelStages = [
  { id: 1, name: "Companies Targeted", count: 120, icon: Target, color: "bg-secondary" },
  { id: 2, name: "Invitations Sent", count: 85, icon: Send, color: "bg-secondary" },
  { id: 3, name: "Meetings Conducted", count: 32, icon: Calendar, color: "bg-secondary" },
  { id: 4, name: "Roles Received", count: 18, icon: Briefcase, color: "bg-secondary" },
  { id: 5, name: "Process Completed", count: 12, icon: CheckCircle2, color: "bg-secondary" },
  { id: 6, name: "Companies Recruited", count: 9, icon: Users, color: "bg-foreground text-background" },
]

const companyClassification = {
  hot: [
    { name: "McKinsey & Company", stage: "Role Discussion", lastAction: "2 days ago" },
    { name: "Amazon India", stage: "PPT Scheduled", lastAction: "1 day ago" },
    { name: "Flipkart", stage: "Interview Round", lastAction: "Today" },
  ],
  warm: [
    { name: "Deloitte", stage: "Meeting Done", lastAction: "5 days ago" },
    { name: "HDFC Bank", stage: "Follow-up Sent", lastAction: "3 days ago" },
    { name: "Tata Steel", stage: "Initial Discussion", lastAction: "1 week ago" },
  ],
  cold: [
    { name: "Wipro", stage: "No Response", lastAction: "2 weeks ago" },
    { name: "TCS", stage: "No Response", lastAction: "3 weeks ago" },
    { name: "Infosys", stage: "Declined", lastAction: "1 month ago" },
  ],
}

const suggestedActions = [
  { text: "Increase outreach in Consulting sector", priority: "high", impact: "12 potential companies" },
  { text: "Activate alumni roles pipeline", priority: "high", impact: "8 warm leads" },
  { text: "Use remaining 8 meeting credits", priority: "medium", impact: "Convert 3-4 companies" },
  { text: "Follow up with dormant companies", priority: "medium", impact: "5 potential revivals" },
  { text: "Update batch profile for EPGP", priority: "low", impact: "Attract senior roles" },
]

export default function PipelinePage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Placement Pipeline</h1>
        <p className="text-muted-foreground">Visual funnel view and company classification</p>
      </div>

      {/* Funnel Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Placement Funnel (This Year)</CardTitle>
          <CardDescription>Click on any stage to see the company list</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {funnelStages.map((stage, idx) => {
              const widthPercent = 100 - idx * 12
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
                  className={`w-full transition-all ${selectedStage === stage.id ? "ring-2 ring-foreground" : ""}`}
                  style={{ width: `${widthPercent}%`, marginLeft: `${(100 - widthPercent) / 2}%` }}
                >
                  <div className={`flex items-center justify-between p-4 rounded-lg ${stage.color}`}>
                    <div className="flex items-center gap-3">
                      <stage.icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{stage.name}</span>
                    </div>
                    <span className="text-xl font-bold">{stage.count}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Deficit Summary */}
          <div className="mt-6 p-4 bg-secondary rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-foreground">Placement Deficit Analysis</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">120</p>
                <p className="text-xs text-muted-foreground">Target</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">9</p>
                <p className="text-xs text-muted-foreground">Recruited</p>
              </div>
              <div className="bg-foreground rounded-lg p-2">
                <p className="text-2xl font-bold text-background">111</p>
                <p className="text-xs text-background/80">Gap</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Classification */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Hot */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Flame className="w-4 h-4 text-foreground" />
              Hot ({companyClassification.hot.length})
            </CardTitle>
            <CardDescription className="text-xs">Active discussion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {companyClassification.hot.map((company, idx) => (
              <div key={idx} className="p-3 bg-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-foreground" />
                  <span className="font-medium text-sm text-foreground">{company.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {company.stage} | {company.lastAction}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Warm */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-muted-foreground" />
              Warm ({companyClassification.warm.length})
            </CardTitle>
            <CardDescription className="text-xs">Meeting done</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {companyClassification.warm.map((company, idx) => (
              <div key={idx} className="p-3 bg-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-sm text-foreground">{company.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {company.stage} | {company.lastAction}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Cold */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-border" />
              Cold ({companyClassification.cold.length})
            </CardTitle>
            <CardDescription className="text-xs">No response</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {companyClassification.cold.map((company, idx) => (
              <div key={idx} className="p-3 bg-secondary rounded-lg opacity-70">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-sm text-foreground">{company.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {company.stage} | {company.lastAction}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Suggested Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Suggested Actions</CardTitle>
          <CardDescription>Priority actions to improve placement outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {suggestedActions.map((action, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      action.priority === "high"
                        ? "bg-foreground"
                        : action.priority === "medium"
                          ? "bg-muted-foreground"
                          : "bg-border"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-foreground">{action.text}</p>
                    <p className="text-xs text-muted-foreground">{action.impact}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
