import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export default function Settings() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* Subscription */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Subscription</h2>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold">Saarthi Basic</p>
                <Badge variant="outline">Free</Badge>
              </div>
              <p className="text-sm text-gray-600">Career profile & opportunity access</p>
            </div>
            <Button variant="outline">Upgrade to Plus</Button>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-2">Upgrade to Saarthi Plus (₹999/year)</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Unlimited mock interviews
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Expert feedback on all applications
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Priority support
              </li>
            </ul>
          </div>
        </Card>

        {/* Account Details */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Rahul Sharma" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="rahul@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+91 98765 43210" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Opportunities</p>
                <p className="text-sm text-gray-600">Get notified when new roles match your profile</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Application Updates</p>
                <p className="text-sm text-gray-600">Status changes on your applications</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mock Interview Reminders</p>
                <p className="text-sm text-gray-600">Reminders before scheduled sessions</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Summary</p>
                <p className="text-sm text-gray-600">Weekly digest of opportunities and progress</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Privacy */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Profile Visibility</p>
                <p className="text-sm text-gray-600">Allow companies to discover your profile</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Show Activity Status</p>
                <p className="text-sm text-gray-600">Let others see when you're active</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
