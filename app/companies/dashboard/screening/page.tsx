"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, UserCheck, CheckCircle2 } from "lucide-react"

export default function ScreeningPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black mb-2">Screening Tools</h1>
        <p className="text-neutral-600">Speed up shortlisting with automated or expert-led screening.</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {/* AI Mock Interview */}
        <button
          onClick={() => setSelectedOption("ai")}
          className={`border rounded-lg p-6 text-left transition-colors ${
            selectedOption === "ai" ? "border-black bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
          }`}
        >
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-black mb-1">AI Mock Interview</h2>
          <p className="text-2xl font-bold text-black mb-2">
            ₹200 <span className="text-sm font-normal text-neutral-500">per candidate</span>
          </p>
          <ul className="text-sm text-neutral-600 space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Automated video interview
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              AI-generated score & summary
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Results in 24-48 hours
            </li>
          </ul>
          <p className="text-xs text-neutral-500">Best for: Initial filtering of large applicant pools</p>
        </button>

        {/* Expert-led Interview */}
        <button
          onClick={() => setSelectedOption("expert")}
          className={`border rounded-lg p-6 text-left transition-colors ${
            selectedOption === "expert" ? "border-black bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"
          }`}
        >
          <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <UserCheck className="w-6 h-6 text-neutral-600" />
          </div>
          <h2 className="text-lg font-semibold text-black mb-1">Expert-led Interview</h2>
          <p className="text-2xl font-bold text-black mb-2">
            ₹2,200 <span className="text-sm font-normal text-neutral-500">per candidate</span>
          </p>
          <ul className="text-sm text-neutral-600 space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              1:1 interview with industry expert
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Detailed evaluation report
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Hiring recommendation
            </li>
          </ul>
          <p className="text-xs text-neutral-500">Best for: Final round evaluation of top candidates</p>
        </button>
      </div>

      {/* Apply Section */}
      {selectedOption && (
        <div className="mt-8 max-w-3xl">
          <div className="border border-neutral-200 rounded-lg p-6">
            <h3 className="font-medium text-black mb-4">Apply Screening to Candidates</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Select candidates from your shortlist to apply{" "}
              {selectedOption === "ai" ? "AI Mock Interview" : "Expert-led Interview"} screening.
            </p>

            <div className="space-y-3 mb-6">
              {["Priya Sharma", "Rahul Verma", "Ananya Gupta"].map((name) => (
                <label
                  key={name}
                  className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-black">{name}</span>
                </label>
              ))}
            </div>

            <Button className="bg-black text-white hover:bg-neutral-800">Apply Screening</Button>
          </div>
        </div>
      )}
    </div>
  )
}
