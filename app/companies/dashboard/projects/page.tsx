"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FolderKanban, Plus, Users, Clock, IndianRupee } from "lucide-react"

const existingProjects = [
  {
    id: 1,
    title: "Market Research - EdTech Sector",
    scope: "Analyze competitive landscape and market sizing",
    duration: "4 weeks",
    teamSize: 3,
    stipend: "₹15,000",
    applications: 12,
    status: "active",
  },
  {
    id: 2,
    title: "Financial Modeling - Series A",
    scope: "Build financial model for fundraising",
    duration: "2 weeks",
    teamSize: 2,
    stipend: "₹10,000",
    applications: 8,
    status: "active",
  },
]

export default function ProjectsPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">Projects</h1>
          <p className="text-neutral-600">Post short-term projects and hire students or teams.</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-black text-white hover:bg-neutral-800">
          <Plus className="w-4 h-4 mr-2" /> Post Project
        </Button>
      </div>

      {/* New Project Form */}
      {showForm && (
        <div className="border border-neutral-200 rounded-lg p-6 mb-8">
          <h2 className="font-medium text-black mb-4">Post a New Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label className="text-sm text-black">Project Title</Label>
              <Input placeholder="e.g., Market Research for D2C Brand" className="mt-1" />
            </div>
            <div className="md:col-span-2">
              <Label className="text-sm text-black">Project Scope & Deliverables</Label>
              <Textarea placeholder="Describe what needs to be done and expected outputs..." className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Expected Hours</Label>
              <Input placeholder="e.g., 40 hours" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Duration</Label>
              <Input placeholder="e.g., 4 weeks" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Team Size</Label>
              <Input type="number" placeholder="e.g., 3" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Stipend (optional)</Label>
              <Input placeholder="e.g., ₹15,000" className="mt-1" />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="outline" onClick={() => setShowForm(false)} className="bg-transparent">
              Cancel
            </Button>
            <Button className="bg-black text-white hover:bg-neutral-800">Post Project</Button>
          </div>
        </div>
      )}

      {/* Existing Projects */}
      <div className="space-y-4">
        {existingProjects.map((project) => (
          <div key={project.id} className="border border-neutral-200 rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <FolderKanban className="w-6 h-6 text-neutral-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">{project.title}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{project.scope}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-neutral-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.teamSize} people
                    </span>
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      {project.stipend}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                <p className="text-sm text-neutral-500 mt-2">{project.applications} applications</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
