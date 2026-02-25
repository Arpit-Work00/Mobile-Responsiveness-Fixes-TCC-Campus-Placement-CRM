"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function CreateProfile() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [skills, setSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState("")

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()])
      setSkillInput("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleComplete = () => {
    router.push("/saarthi/dashboard")
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-semibold">
            TCC
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your Saarthi Profile</h1>
            <p className="text-gray-600">This profile grows with you. You can update it anytime.</p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? "bg-black" : "bg-gray-200"}`} />
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? "bg-black" : "bg-gray-200"}`} />
            <div className={`flex-1 h-2 rounded-full ${step >= 3 ? "bg-black" : "bg-gray-200"}`} />
          </div>

          {/* Step 1: Education & Experience */}
          {step === 1 && (
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-6">Education & Experience</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="college">College/University</Label>
                  <Input id="college" placeholder="e.g., IIM Ahmedabad" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program">Program</Label>
                    <Select>
                      <SelectTrigger id="program">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mba">MBA</SelectItem>
                        <SelectItem value="pgdm">PGDM</SelectItem>
                        <SelectItem value="epgp">EPGP</SelectItem>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="bba">BBA</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Graduation Year</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2024">2024 (Graduate)</SelectItem>
                        <SelectItem value="2023">2023 (Graduate)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Prior Work Experience (Years)</Label>
                  <Select>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Fresher (0 years)</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current-role">Current/Previous Role (Optional)</Label>
                  <Input id="current-role" placeholder="e.g., Product Manager at XYZ Corp" />
                </div>

                <Button onClick={() => setStep(2)} className="w-full bg-black text-white hover:bg-gray-800">
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Skills & Interests */}
          {step === 2 && (
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-6">Skills & Career Interests</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      id="skills"
                      placeholder="Add a skill and press Enter"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addSkill()
                        }
                      }}
                    />
                    <Button type="button" onClick={addSkill} variant="outline">
                      Add
                    </Button>
                  </div>
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="pl-3 pr-1">
                          {skill}
                          <button onClick={() => removeSkill(skill)} className="ml-2 hover:text-red-600">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Career Interests</Label>
                  <Select>
                    <SelectTrigger id="interests">
                      <SelectValue placeholder="Primary career interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="product">Product Management</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="marketing">Marketing & Sales</SelectItem>
                      <SelectItem value="tech">Technology & Engineering</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="analytics">Data & Analytics</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aspirations">What are you looking for? (Optional)</Label>
                  <Textarea
                    id="aspirations"
                    placeholder="e.g., I want to transition from tech to consulting..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 bg-black text-white hover:bg-gray-800">
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Preferences */}
          {step === 3 && (
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-6">Location & Preferences</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Locations</Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi NCR</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="any">Open to any location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-type">Job Type Preference</Label>
                  <Select>
                    <SelectTrigger id="job-type">
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time roles only</SelectItem>
                      <SelectItem value="internship">Internships</SelectItem>
                      <SelectItem value="projects">Project-based work</SelectItem>
                      <SelectItem value="all">Open to all</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="start-date">When can you start?</Label>
                  <Select>
                    <SelectTrigger id="start-date">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="3months">Within 3 months</SelectItem>
                      <SelectItem value="6months">Within 6 months</SelectItem>
                      <SelectItem value="graduate">After graduation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button onClick={handleComplete} className="flex-1 bg-black text-white hover:bg-gray-800">
                    Complete Profile
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
