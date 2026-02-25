import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SaarthiSignup() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <div className="mb-8">
          <Link href="/" className="text-xl font-semibold">
            TCC
          </Link>
          <h1 className="text-2xl font-bold mt-6 mb-2">Create Your Saarthi Profile</h1>
          <p className="text-gray-600">Join thousands building better careers</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Your full name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>

          <Link href="/saarthi/profile/create">
            <Button className="w-full bg-black text-white hover:bg-gray-800">Create Profile</Button>
          </Link>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/saarthi/auth/login" className="font-medium text-black hover:underline">
              Login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  )
}
