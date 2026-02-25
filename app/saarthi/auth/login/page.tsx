import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SaarthiLogin() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <div className="mb-8">
          <Link href="/" className="text-xl font-semibold">
            TCC
          </Link>
          <h1 className="text-2xl font-bold mt-6 mb-2">Welcome to Saarthi</h1>
          <p className="text-gray-600">Your personal career companion</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>

          <Link href="/saarthi/profile/create">
            <Button className="w-full bg-black text-white hover:bg-gray-800">Continue</Button>
          </Link>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/saarthi/auth/signup" className="font-medium text-black hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </Card>
    </div>
  )
}
