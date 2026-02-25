"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Phone, Building, Target, Bell, Shield, Save } from "lucide-react"

export default function StudentSettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-black">Settings</h1>
        <p className="text-sm text-neutral-600">Manage your profile and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <h2 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide flex items-center gap-2">
          <User className="w-4 h-4" />
          Profile Information
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Arjun" className="border-neutral-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Mehta" className="border-neutral-300" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="arjun.mehta@iimb.ac.in" className="border-neutral-300" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" defaultValue="+91 98765 43210" className="border-neutral-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rollNo">Roll Number</Label>
            <Input id="rollNo" defaultValue="PGP/24/123" className="border-neutral-300" disabled />
          </div>
        </div>
      </div>

      {/* Target Preferences */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <h2 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide flex items-center gap-2">
          <Target className="w-4 h-4" />
          Career Preferences
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Target Functions</Label>
            <div className="flex flex-wrap gap-2">
              {["Consulting", "Product Management", "Marketing", "Finance", "Operations", "Strategy"].map((func) => (
                <button
                  key={func}
                  className={`text-sm px-3 py-1.5 rounded border transition-colors ${
                    func === "Consulting" || func === "Product Management"
                      ? "bg-black text-white border-black"
                      : "bg-white text-neutral-600 border-neutral-300 hover:border-black"
                  }`}
                >
                  {func}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Target Sectors</Label>
            <div className="flex flex-wrap gap-2">
              {["Tech", "FMCG", "Banking", "Healthcare", "E-commerce", "Manufacturing"].map((sector) => (
                <button
                  key={sector}
                  className={`text-sm px-3 py-1.5 rounded border transition-colors ${
                    sector === "Tech" || sector === "E-commerce"
                      ? "bg-black text-white border-black"
                      : "bg-white text-neutral-600 border-neutral-300 hover:border-black"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <h2 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide flex items-center gap-2">
          <Bell className="w-4 h-4" />
          Notification Preferences
        </h2>
        <div className="space-y-3">
          {[
            { label: "New job postings matching my profile", checked: true },
            { label: "Mentor session reminders", checked: true },
            { label: "Module completion reminders", checked: true },
            { label: "Application deadline alerts", checked: true },
            { label: "Feedback notifications", checked: false },
          ].map((pref, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked={pref.checked} className="w-4 h-4 accent-black" />
              <span className="text-sm text-neutral-700">{pref.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Privacy */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <h2 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Privacy Settings
        </h2>
        <div className="space-y-3">
          {[
            { label: "Show my profile to recruiters", checked: true },
            { label: "Allow mentors to see my progress", checked: true },
            { label: "Share my readiness score with placement team", checked: true },
          ].map((pref, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked={pref.checked} className="w-4 h-4 accent-black" />
              <span className="text-sm text-neutral-700">{pref.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button className="bg-black text-white hover:bg-neutral-800">
        <Save className="w-4 h-4 mr-2" />
        Save Changes
      </Button>
    </div>
  )
}
