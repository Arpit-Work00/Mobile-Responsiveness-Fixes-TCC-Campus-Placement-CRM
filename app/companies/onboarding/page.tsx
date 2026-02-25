"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export default function CompanyOnboardingPage() {
  const [step, setStep] = useState(1)
  const [designation, setDesignation] = useState("")
  const [fullName, setFullName] = useState("")
  const [location, setLocation] = useState("")
  const [hiringPrefs, setHiringPrefs] = useState<string[]>([])

  const togglePref = (pref: string) => {
    setHiringPrefs((prev) => (prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]))
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 px-6 py-4">
        <Link href="/companies" className="text-xl font-semibold text-black">
          TCC
        </Link>
      </header>

      {/* Progress */}
      <div className="border-b border-neutral-200 px-6 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
              }`}
            >
              {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : "1"}
            </div>
            <span className="text-sm text-black">Claim Profile</span>
          </div>
          <div className="flex-1 h-px bg-neutral-200" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
              }`}
            >
              {step > 2 ? <CheckCircle2 className="w-5 h-5" /> : "2"}
            </div>
            <span className={`text-sm ${step >= 2 ? "text-black" : "text-neutral-600"}`}>Introduce Yourself</span>
          </div>
          <div className="flex-1 h-px bg-neutral-200" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 3 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
              }`}
            >
              3
            </div>
            <span className={`text-sm ${step >= 3 ? "text-black" : "text-neutral-600"}`}>Company Details</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <div>
              <h1 className="text-2xl font-semibold text-black mb-2">Your Company Profile Is Already Created</h1>
              <p className="text-neutral-600 mb-8">
                This profile was auto-created using public data (Tracxn, LinkedIn, official website, hiring reports).
                Please claim and verify it.
              </p>

              <div className="border border-neutral-200 rounded-lg p-6 mb-6">
                <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                  Pre-filled Company Data
                </h2>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Company Name</p>
                    <p className="text-black font-medium">Acme Technologies Pvt Ltd</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Industry</p>
                    <p className="text-black font-medium">Technology / SaaS</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Company Size</p>
                    <p className="text-black font-medium">201-500 employees</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">HQ Location</p>
                    <p className="text-black font-medium">Bangalore, India</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Website</p>
                    <p className="text-black font-medium">acmetech.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Known Hiring Sectors</p>
                    <p className="text-black font-medium">Tech, Product, Sales</p>
                  </div>
                </div>
              </div>

              <Button onClick={() => setStep(2)} className="w-full bg-black text-white hover:bg-neutral-800">
                Claim & Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="text-2xl font-semibold text-black mb-2">Introduce Yourself</h1>
              <p className="text-neutral-600 mb-2">
                This information helps campuses verify your identity and authority.
              </p>
              <p className="text-sm text-neutral-500 mb-8">
                Campuses receive hundreds of outreach messages. Verified profiles get higher response rates.
              </p>

              <div className="space-y-6">
                <div className="border border-neutral-200 rounded-lg p-6">
                  <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">Your Details</h2>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-black">Full Name *</Label>
                      <Input
                        placeholder="As it appears on LinkedIn"
                        className="mt-1"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-black">Designation *</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {["Campus Recruiter", "HR Manager", "Founder", "Head HR / CHRO"].map((d) => (
                          <button
                            key={d}
                            onClick={() => setDesignation(d)}
                            className={`p-3 text-left text-sm rounded border ${
                              designation === d ? "border-black bg-neutral-50" : "border-neutral-200"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-black">Work Location *</Label>
                      <Input
                        placeholder="City, State"
                        className="mt-1"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-black">LinkedIn Profile (Optional)</Label>
                      <Input placeholder="linkedin.com/in/yourprofile" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-200 rounded-lg p-6">
                  <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                    Hiring Authority
                  </h2>

                  <div className="space-y-3">
                    <Label className="text-sm text-black">What level of hiring do you manage? *</Label>
                    <div className="space-y-2">
                      {[
                        { label: "Individual roles (1-2 hires/month)", value: "individual" },
                        { label: "Team-level hiring (3-10 hires/month)", value: "team" },
                        { label: "Business unit hiring (10+ hires/month)", value: "business" },
                        { label: "Company-wide hiring", value: "company" },
                      ].map((level) => (
                        <label
                          key={level.value}
                          className="flex items-start gap-3 p-3 border border-neutral-200 rounded cursor-pointer hover:border-neutral-400"
                        >
                          <input type="radio" name="authority" className="mt-0.5" />
                          <span className="text-sm text-black">{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <Button onClick={() => setStep(3)} className="w-full bg-black text-white hover:bg-neutral-800">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1 className="text-2xl font-semibold text-black mb-2">Company Details</h1>
              <p className="text-neutral-600 mb-8">Complete your company profile for better campus matching.</p>

              <div className="space-y-6">
                <div className="border border-neutral-200 rounded-lg p-6">
                  <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                    About Your Company
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-black">Company Overview</Label>
                      <Textarea
                        placeholder="What does your company do? (2-3 sentences)"
                        className="mt-1"
                        defaultValue="Acme Technologies builds enterprise SaaS solutions for supply chain management."
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-black">Typical Roles You Hire For</Label>
                      <Input
                        placeholder="e.g., Software Engineers, Product Managers, Business Analysts"
                        className="mt-1"
                        defaultValue="Software Engineers, Product Managers, Business Analysts"
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-black">Office Locations</Label>
                      <Input placeholder="Cities where you have offices" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-200 rounded-lg p-6">
                  <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                    Hiring Preferences
                  </h2>

                  <div className="space-y-3">
                    <Label className="text-sm text-black">What type of hiring are you focused on?</Label>
                    {[
                      { id: "campus", label: "Campus Hiring", desc: "Hire freshers from colleges" },
                      { id: "lateral", label: "Lateral Hiring", desc: "Hire experienced professionals" },
                      { id: "projects", label: "Projects / Internships", desc: "Short-term engagements" },
                    ].map((pref) => (
                      <label
                        key={pref.id}
                        className="flex items-start gap-3 p-4 border border-neutral-200 rounded cursor-pointer hover:border-neutral-400"
                      >
                        <input type="checkbox" className="mt-1" />
                        <div>
                          <p className="text-sm font-medium text-black">{pref.label}</p>
                          <p className="text-xs text-neutral-500">{pref.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-black text-white hover:bg-neutral-800">
                  <Link href="/companies/dashboard">Complete Setup</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
