"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowRight, GraduationCap } from "lucide-react"

export default function StudentLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login - redirect to student dashboard
    setTimeout(() => {
      router.push("/student")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="font-bold text-white text-sm">TCC</span>
          </div>
          <span className="font-semibold text-lg text-black">TCC</span>
        </Link>
      </header>

      {/* Login Form */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Student Login</h1>
            <p className="text-neutral-600">Access your placement preparation dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Institute Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="yourname@iimb.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-neutral-300"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-black text-white hover:bg-neutral-800"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login to Student Portal"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-500">
              Are you from the placement team?{" "}
              <Link href="/auth/login" className="text-black font-medium hover:underline">
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-neutral-400">
              By logging in, you agree to the platform terms and privacy policy
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
