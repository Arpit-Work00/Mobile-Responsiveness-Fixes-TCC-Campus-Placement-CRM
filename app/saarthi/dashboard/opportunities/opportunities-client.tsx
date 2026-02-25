"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Briefcase, Calendar } from "lucide-react"

export default function OpportunitiesClient() {
  const [searchQuery, setSearchQuery] = useState("")

  const campusRoles = [
    {
      id: 1,
      company: "Acme Consulting",
      role: "Management Consultant",
      location: "Mumbai",
      type: "Full-time",
      ctc: "₹18-22 LPA",
      deadline: "15 Feb 2025",
      match: 92,
      eligible: true,
    },
    {
      id: 2,
      company: "TechCorp India",
      role: "Product Manager",
      location: "Bangalore",
      type: "Full-time",
      ctc: "₹20-25 LPA",
      deadline: "20 Feb 2025",
      match: 88,
      eligible: true,
    },
    {
      id: 3,
      company: "FinServe Ltd",
      role: "Business Analyst",
      location: "Delhi NCR",
      type: "Full-time",
      ctc: "₹15-18 LPA",
      deadline: "10 Feb 2025",
      match: 85,
      eligible: true,
    },
  ]

  const projects = [
    {
      id: 1,
      company: "StartupX",
      role: "Product Strategy Project",
      location: "Remote",
      duration: "3 months",
      stipend: "₹50,000",
      match: 78,
    },
    {
      id: 2,
      company: "GrowthCo",
      role: "Market Research Project",
      location: "Hybrid",
      duration: "2 months",
      stipend: "₹40,000",
      match: 75,
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Opportunities</h1>
          <p className="text-gray-600">Roles and projects matched to your profile</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by role, company, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="campus" className="space-y-6">
          <TabsList>
            <TabsTrigger value="campus">Campus Roles</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="jobs">Jobs (Alumni/Lateral)</TabsTrigger>
          </TabsList>

          <TabsContent value="campus" className="space-y-4">
            {campusRoles.map((role) => (
              <Card key={role.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{role.role}</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {role.match}% match
                      </Badge>
                      {role.eligible && <Badge className="bg-blue-100 text-blue-700">Eligible</Badge>}
                    </div>
                    <p className="text-gray-600 font-medium">{role.company}</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>

                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{role.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <span>{role.type}</span>
                  </div>
                  <div>
                    <span className="font-medium">CTC: </span>
                    {role.ctc}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>Apply by {role.deadline}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-black">Why this fits you: </span>
                    Your background in product management and consulting interest aligns well with this role.
                  </p>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{project.role}</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {project.match}% match
                      </Badge>
                    </div>
                    <p className="text-gray-600 font-medium">{project.company}</p>
                  </div>
                  <Button>Express Interest</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{project.location}</span>
                  </div>
                  <div>
                    <span className="font-medium">Duration: </span>
                    {project.duration}
                  </div>
                  <div>
                    <span className="font-medium">Stipend: </span>
                    {project.stipend}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="jobs">
            <Card className="p-12 text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">Alumni & Lateral Roles</h3>
              <p className="text-gray-600 mb-4">
                Access roles from alumni networks and lateral opportunities after graduation
              </p>
              <Badge variant="secondary">Available after campus placement season</Badge>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
