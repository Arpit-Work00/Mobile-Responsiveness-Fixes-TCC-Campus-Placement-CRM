"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CompanySettingsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black mb-2">Settings</h1>
        <p className="text-neutral-600">Manage your company profile and account settings.</p>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Company Profile */}
        <div className="border border-neutral-200 rounded-lg p-6">
          <h2 className="font-medium text-black mb-4">Company Profile</h2>
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-black">Company Name</Label>
              <Input defaultValue="Acme Technologies Pvt Ltd" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Industry</Label>
              <Input defaultValue="Technology / SaaS" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm text-black">Description</Label>
              <Textarea
                defaultValue="Acme Technologies builds enterprise SaaS solutions for supply chain management."
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-black">Website</Label>
              <Input defaultValue="https://acmetech.com" className="mt-1" />
            </div>
          </div>
          <Button className="mt-4 bg-black text-white hover:bg-neutral-800">Save Changes</Button>
        </div>

        {/* Team Members */}
        <div className="border border-neutral-200 rounded-lg p-6">
          <h2 className="font-medium text-black mb-4">Team Members</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-black">Amit Sharma</p>
                <p className="text-xs text-neutral-500">amit@acmetech.com • Admin</p>
              </div>
              <span className="text-xs text-neutral-500">You</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-black">Priya Menon</p>
                <p className="text-xs text-neutral-500">priya@acmetech.com • Member</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                Remove
              </Button>
            </div>
          </div>
          <Button variant="outline" className="mt-4 bg-transparent">
            Invite Team Member
          </Button>
        </div>

        {/* Billing */}
        <div className="border border-neutral-200 rounded-lg p-6">
          <h2 className="font-medium text-black mb-4">Billing & Plan</h2>
          <div className="p-4 bg-neutral-50 rounded-lg mb-4">
            <p className="text-sm text-neutral-500">Current Plan</p>
            <p className="text-lg font-semibold text-black">Free</p>
            <p className="text-xs text-neutral-500 mt-1">Core access with pay-per-use add-ons</p>
          </div>
          <div className="text-sm text-neutral-600 space-y-2 mb-4">
            <p>• Company profile & role posting — Free</p>
            <p>• Campus applications — Free</p>
            <p>• Screening tools — ₹25,000 per role</p>
            <p>• Dedicated hiring manager — ₹40,000 per role</p>
          </div>
          <Button variant="outline" className="bg-transparent">
            View Pricing Details
          </Button>
        </div>

        {/* Danger Zone */}
        <div className="border border-red-200 rounded-lg p-6">
          <h2 className="font-medium text-red-600 mb-4">Danger Zone</h2>
          <p className="text-sm text-neutral-600 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )
}
