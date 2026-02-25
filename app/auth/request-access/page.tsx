"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Check } from "lucide-react"

export default function RequestAccessPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
              <span className="font-bold text-background text-sm">TCC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">TCC</span>
          </Link>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-background" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Request Submitted</h1>
            <p className="text-muted-foreground mb-6">
              We will review your request and get back to you within 2-3 business days.
            </p>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border p-4">
        <Link href="/auth/login" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Request Access</h1>
            <p className="text-muted-foreground">Fill in your details and we will set up your campus profile</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Dr. Sharma" className="h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institute">Institute Name</Label>
              <Input id="institute" placeholder="IIM Bangalore" className="h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Input id="designation" placeholder="Placement Officer" className="h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Official Email</Label>
              <Input id="email" type="email" placeholder="placement@iimb.ac.in" className="h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Why do you want access?</Label>
              <Textarea id="message" placeholder="Tell us about your placement needs..." className="min-h-[100px]" />
            </div>
            <Button type="submit" className="w-full h-12 bg-foreground text-background hover:bg-foreground/90">
              Submit Request
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
