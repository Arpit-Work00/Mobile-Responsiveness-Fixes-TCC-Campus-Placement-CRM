"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CompanyLoginPage() {
  const [email, setEmail] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 px-6 py-4">
        <Link href="/companies" className="text-xl font-semibold text-black">
          TCC
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-black mb-2">Access TCC — Campus Hiring Infrastructure</h1>
            <p className="text-neutral-600">No agencies. No lock-ins. Free to start.</p>
          </div>

          <div className="border border-neutral-200 rounded-lg p-6">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2 text-sm font-medium rounded ${
                  !isSignUp ? "bg-black text-white" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2 text-sm font-medium rounded ${
                  isSignUp ? "bg-black text-white" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm text-black">
                  Work Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>

              {isSignUp && (
                <>
                  <div>
                    <Label htmlFor="name" className="text-sm text-black">
                      Full Name
                    </Label>
                    <Input id="name" type="text" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm text-black">
                      Company Name
                    </Label>
                    <Input id="company" type="text" placeholder="Your company" className="mt-1" />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="password" className="text-sm text-black">
                  Password
                </Label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
              </div>

              <Button asChild className="w-full bg-black text-white hover:bg-neutral-800">
                <Link href="/companies/onboarding">{isSignUp ? "Create Account" : "Continue"}</Link>
              </Button>
            </form>

            {!isSignUp && (
              <p className="text-center text-sm text-neutral-500 mt-4">
                Don&apos;t have an account?{" "}
                <button onClick={() => setIsSignUp(true)} className="text-black underline">
                  Sign up free
                </button>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
