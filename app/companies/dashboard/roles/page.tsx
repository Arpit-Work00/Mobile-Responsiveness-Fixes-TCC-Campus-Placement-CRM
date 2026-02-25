"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Building2, Check } from "lucide-react"

const campuses = [
  { id: 1, name: "IIM Ahmedabad", programs: ["MBA", "PGPX"] },
  { id: 2, name: "IIM Bangalore", programs: ["MBA", "EPGP"] },
  { id: 3, name: "IIM Calcutta", programs: ["MBA", "PGPEX"] },
  { id: 4, name: "ISB Hyderabad", programs: ["PGP", "PGPMAX"] },
  { id: 5, name: "XLRI Jamshedpur", programs: ["BM", "HRM"] },
  { id: 6, name: "FMS Delhi", programs: ["MBA"] },
]

export default function PostRolePage() {
  const [step, setStep] = useState(1)
  const [selectedCampuses, setSelectedCampuses] = useState<number[]>([])
  const [published, setPublished] = useState(false)

  const toggleCampus = (id: number) => {
    setSelectedCampuses((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  if (published) {
    return (
      <div className="p-8">
        <div className="max-w-xl mx-auto text-center py-16">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold text-black mb-2">Your Role is Live</h1>
          <p className="text-neutral-600 mb-8">
            Campuses will start sharing eligible applications. You&apos;ll receive notifications when new applications
            arrive.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/companies/dashboard/applications">View Applications</Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-neutral-800">
              <Link href="/companies/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black mb-2">Post a Campus Role</h1>
        <p className="text-neutral-600">Define your role and select target campuses.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 1 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
            }`}
          >
            {step > 1 ? <Check className="w-4 h-4" /> : "1"}
          </div>
          <span className="text-sm text-black">Role Details</span>
        </div>
        <div className="flex-1 h-px bg-neutral-200" />
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 2 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
            }`}
          >
            {step > 2 ? <Check className="w-4 h-4" /> : "2"}
          </div>
          <span className="text-sm text-neutral-600">Select Campuses</span>
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
          <span className="text-sm text-neutral-600">Publish</span>
        </div>
      </div>

      {/* Step 1: Role Details */}
      {step === 1 && (
        <div className="max-w-2xl">
          <div className="border border-neutral-200 rounded-lg p-6 space-y-5">
            <div>
              <Label className="text-sm text-black">Role Title</Label>
              <Input placeholder="e.g., Associate Product Manager" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Role Description</Label>
              <Textarea
                placeholder="Describe the role, responsibilities, and what you're looking for..."
                className="mt-1 min-h-[120px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-black">CTC / Stipend</Label>
                <Input placeholder="e.g., 18-22 LPA" className="mt-1" />
              </div>
              <div>
                <Label className="text-sm text-black">Location</Label>
                <Input placeholder="e.g., Bangalore" className="mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-black">Start Date</Label>
                <Input type="date" className="mt-1" />
              </div>
              <div>
                <Label className="text-sm text-black">Role Type</Label>
                <select className="mt-1 w-full h-10 px-3 border border-neutral-200 rounded-md text-sm">
                  <option>Full-time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>
            <div>
              <Label className="text-sm text-black">Eligibility Criteria</Label>
              <Textarea placeholder="e.g., MBA with 1-3 years pre-MBA experience..." className="mt-1" />
            </div>
          </div>
          <Button onClick={() => setStep(2)} className="mt-6 bg-black text-white hover:bg-neutral-800">
            Continue to Select Campuses
          </Button>
        </div>
      )}

      {/* Step 2: Select Campuses */}
      {step === 2 && (
        <div className="max-w-2xl">
          <div className="border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-black">Select Target Campuses</h2>
              <span className="text-sm text-neutral-500">{selectedCampuses.length} selected</span>
            </div>

            <p className="text-sm text-neutral-600 mb-4 p-3 bg-neutral-50 rounded-lg">
              Fewer campuses = faster closures. We recommend selecting 3-5 campuses.
            </p>

            <div className="space-y-3">
              {campuses.map((campus) => (
                <button
                  key={campus.id}
                  onClick={() => toggleCampus(campus.id)}
                  className={`w-full p-4 text-left rounded-lg border flex items-center gap-4 ${
                    selectedCampuses.includes(campus.id) ? "border-black bg-neutral-50" : "border-neutral-200"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center ${
                      selectedCampuses.includes(campus.id) ? "bg-black border-black" : "border-neutral-300"
                    }`}
                  >
                    {selectedCampuses.includes(campus.id) && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <Building2 className="w-5 h-5 text-neutral-400" />
                  <div className="flex-1">
                    <p className="font-medium text-black">{campus.name}</p>
                    <p className="text-xs text-neutral-500">{campus.programs.join(", ")}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="outline" onClick={() => setStep(1)} className="bg-transparent">
              Back
            </Button>
            <Button
              onClick={() => setStep(3)}
              disabled={selectedCampuses.length === 0}
              className="bg-black text-white hover:bg-neutral-800"
            >
              Continue to Review
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Publish */}
      {step === 3 && (
        <div className="max-w-2xl">
          <div className="border border-neutral-200 rounded-lg p-6">
            <h2 className="font-medium text-black mb-4">Review & Publish</h2>

            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-neutral-500">Role</p>
                <p className="font-medium text-black">Associate Product Manager</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-neutral-500">CTC</p>
                <p className="font-medium text-black">18-22 LPA</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-neutral-500">Target Campuses ({selectedCampuses.length})</p>
                <p className="font-medium text-black">
                  {selectedCampuses.map((id) => campuses.find((c) => c.id === id)?.name).join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 border border-neutral-200 rounded-lg">
              <p className="text-sm text-black font-medium mb-2">What happens next?</p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Your role will be visible to selected campuses</li>
                <li>• Campuses will share eligible student applications</li>
                <li>• You&apos;ll receive structured profiles in your ATS</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="outline" onClick={() => setStep(2)} className="bg-transparent">
              Back
            </Button>
            <Button onClick={() => setPublished(true)} className="bg-black text-white hover:bg-neutral-800">
              Publish Role
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
