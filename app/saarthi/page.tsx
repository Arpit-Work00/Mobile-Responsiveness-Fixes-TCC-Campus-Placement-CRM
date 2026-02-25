import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function SaarthiLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              TCC
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/campus" className="text-sm text-gray-600 hover:text-black">
                For Campuses
              </Link>
              <Link href="/companies" className="text-sm text-gray-600 hover:text-black">
                For Companies
              </Link>
              <Link href="/saarthi/auth/login" className="text-sm font-medium hover:text-gray-600">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-balance">Your Career Doesn't End with Placements.</h1>
          <p className="text-xl text-gray-600 mb-8 text-balance">
            Saarthi is your personal career companion — helping you prepare, choose, and grow over time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/saarthi/auth/signup">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 min-w-[280px]">
                Create Your Saarthi Profile (Free)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Most Career Decisions Are Made With Incomplete Information</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <p>Roles aren't understood deeply</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <p>Advice is generic or late</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <p>Preparation lacks feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Saarthi Brings Structure to Career Decisions</h2>
            <p className="text-lg text-gray-600 mb-8">Capabilities:</p>
            <div className="space-y-4">
              {[
                "Living career profile",
                "Preparation & feedback",
                "Access to roles & projects",
                "Mentorship & guidance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Part of a Larger Ecosystem</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Campuses prepare you</p>
                  <p className="text-gray-600 mt-1">Your campus uses TCC to connect you with companies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Companies hire through TCC</p>
                  <p className="text-gray-600 mt-1">Access roles posted by companies on the platform</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Saarthi carries your profile forward</p>
                  <p className="text-gray-600 mt-1">Your career companion beyond campus placements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-balance">Build a career with clarity.</h2>
          <Link href="/saarthi/auth/signup">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
              Get Started with Saarthi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© 2025 TCC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/campus" className="hover:text-black">
                For Campuses
              </Link>
              <Link href="/companies" className="hover:text-black">
                For Companies
              </Link>
              <Link href="/saarthi" className="hover:text-black">
                For Individuals
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
