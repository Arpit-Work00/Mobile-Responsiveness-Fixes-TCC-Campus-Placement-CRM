import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Building2, Users, GraduationCap, Target, Mail, Calendar, BarChart3, Database, Briefcase, BookOpen } from "lucide-react"

export default function CampusLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="font-bold text-white text-sm">TCC</span>
            </div>
            <span className="font-semibold text-lg text-black">The Career Company</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/campus" className="text-sm font-medium text-black hover:text-neutral-600">
              For Institutes
            </Link>
            <Link href="/companies" className="text-sm font-medium text-neutral-600 hover:text-black">
              For Companies
            </Link>
            <Link href="/saarthi" className="text-sm font-medium text-neutral-600 hover:text-black">
              For Individuals
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
                Login
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - YC Style */}
      <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
              Run placements like a revenue pipeline.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              TCC is a purpose-built Placement CRM that tracks outreach, meetings, roles, applications, shortlists, offers, and student readiness — end-to-end.
            </p>

            {/* Authority Proof Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-black" />
                Founder led placements for 12 seasons across 2 IIMs
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-black" />
                250+ mentors from top companies
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-black" />
                2.5+ years, zero attrition
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/login">
                <Button size="lg" className="min-w-[180px] bg-black text-white hover:bg-neutral-800">
                  Book a Demo
                </Button>
              </Link>
              <Link href="#platform-overview">
                <Button variant="outline" size="lg" className="min-w-[200px] border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
                  See Platform Overview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-black mb-2">More Recruiter Meetings</h3>
              <p className="text-sm text-neutral-600">Systematic outreach with tracked follow-ups increases meeting conversion</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-black mb-2">More Role Flow</h3>
              <p className="text-sm text-neutral-600">Database access + meeting facilitation opens doors faster</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-black mb-2">Higher Conversion</h3>
              <p className="text-sm text-neutral-600">Student readiness visibility improves shortlist-to-offer rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Replaces - Before/After */}
      <section className="py-16 md:py-20 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">What TCC Replaces</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-neutral-300 rounded-lg p-6 bg-neutral-50">
              <h3 className="font-semibold text-lg text-neutral-500 mb-4 uppercase tracking-wide text-sm">Before TCC</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-neutral-700">
                  <span className="text-neutral-400">-</span>
                  Excel trackers with outdated data
                </li>
                <li className="flex gap-3 text-neutral-700">
                  <span className="text-neutral-400">-</span>
                  WhatsApp groups for coordination
                </li>
                <li className="flex gap-3 text-neutral-700">
                  <span className="text-neutral-400">-</span>
                  Email chaos with no tracking
                </li>
                <li className="flex gap-3 text-neutral-700">
                  <span className="text-neutral-400">-</span>
                  No owner accountability
                </li>
                <li className="flex gap-3 text-neutral-700">
                  <span className="text-neutral-400">-</span>
                  Manual student readiness assessment
                </li>
              </ul>
            </div>
            <div className="border-2 border-black rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-lg text-black mb-4 uppercase tracking-wide text-sm">With TCC</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-black">
                  <Check className="w-5 h-5 text-black flex-shrink-0" />
                  Single CRM with account ownership
                </li>
                <li className="flex gap-3 text-black">
                  <Check className="w-5 h-5 text-black flex-shrink-0" />
                  Full communication timeline per company
                </li>
                <li className="flex gap-3 text-black">
                  <Check className="w-5 h-5 text-black flex-shrink-0" />
                  Pipeline analytics and funnel tracking
                </li>
                <li className="flex gap-3 text-black">
                  <Check className="w-5 h-5 text-black flex-shrink-0" />
                  Team workload and SLA management
                </li>
                <li className="flex gap-3 text-black">
                  <Check className="w-5 h-5 text-black flex-shrink-0" />
                  CDM-powered student readiness scores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules - 4 Core */}
      <section id="platform-overview" className="py-16 md:py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Platform Modules</h2>
          <p className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Four integrated modules that work together to run placements end-to-end.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Module 1 */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black mb-2">Database + Meeting Requests</h3>
                  <p className="text-sm text-neutral-600 mb-3">Apollo-like company database with verified recruiter contacts. Request TCC-facilitated meetings using credits.</p>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Company intelligence cards</li>
                    <li>• Recruiter contact details</li>
                    <li>• Credit-based meeting facilitation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black mb-2">Outreach CRM</h3>
                  <p className="text-sm text-neutral-600 mb-3">Full pipeline management with account ownership, communication tracking, and team workload balancing.</p>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Company accounts with owners</li>
                    <li>• Email, call, meeting timeline</li>
                    <li>• Pipeline stages and analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black mb-2">Placement Management</h3>
                  <p className="text-sm text-neutral-600 mb-3">Complete role-to-offer workflow with drives, applications, shortlists, and placement analytics.</p>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Drive and role management</li>
                    <li>• Application tracking</li>
                    <li>• Offer analytics and reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black mb-2">CDM Readiness OS</h3>
                  <p className="text-sm text-neutral-600 mb-3">Student preparation tracking with mentor feedback, AI interviews, and readiness scores that map to roles.</p>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Journey modules and progress</li>
                    <li>• Mentor feedback integration</li>
                    <li>• AI interview reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-neutral-500 mb-6">BUILT BY PLACEMENT OPERATORS, NOT GENERIC SAAS BUILDERS</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <div className="w-24 h-8 bg-neutral-200 rounded"></div>
            <div className="w-28 h-8 bg-neutral-200 rounded"></div>
            <div className="w-20 h-8 bg-neutral-200 rounded"></div>
            <div className="w-24 h-8 bg-neutral-200 rounded"></div>
            <div className="w-28 h-8 bg-neutral-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Pricing</h2>
          <p className="text-lg text-neutral-600 text-center mb-12">Annual institutional pricing. No per-student fees.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-black mb-1">Starter</h3>
              <div className="text-3xl font-bold text-black mb-1">Rs 1L<span className="text-lg font-normal text-neutral-500">/year</span></div>
              <p className="text-sm text-neutral-600 mb-6">For institutes starting structured outreach</p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> Basic CRM access</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 100 database credits</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 5 meeting requests</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 5 placecom users</li>
              </ul>
              <Button variant="outline" className="w-full border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">Get Started</Button>
            </div>

            {/* Growth - Most Popular */}
            <div className="bg-white border-2 border-black rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">MOST POPULAR</div>
              <h3 className="font-semibold text-lg text-black mb-1">Growth</h3>
              <div className="text-3xl font-bold text-black mb-1">Rs 2.5L<span className="text-lg font-normal text-neutral-500">/year</span></div>
              <p className="text-sm text-neutral-600 mb-6">For institutes seeking better conversion</p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> Full CRM + analytics</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 325 database credits</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 25 meeting requests</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 20 placecom users</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> CDM Readiness module</li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-neutral-800">Get Started</Button>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-black mb-1">Enterprise</h3>
              <div className="text-3xl font-bold text-black mb-1">Rs 5L<span className="text-lg font-normal text-neutral-500">/year</span></div>
              <p className="text-sm text-neutral-600 mb-6">For flagship institutes with full needs</p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> Everything in Growth</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 500 database credits</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> 50 meeting requests</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> Unlimited users</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" /> Priority support + onboarding</li>
              </ul>
              <Button variant="outline" className="w-full border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">Contact Sales</Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600 mb-4">Optional add-ons: Extra leads pack, meeting credits, AI mock interviews (Rs 200), Expert interviews (Rs 2,200)</p>
            <Link href="/pricing">
              <Button variant="link" className="text-black underline">View full pricing details</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to run placements like a revenue operation?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Book a demo to see how TCC can transform your placement outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/login">
              <Button size="lg" className="min-w-[180px] bg-white text-black hover:bg-neutral-200">
                Book a Demo
              </Button>
            </Link>
            <Link href="#platform-overview">
              <Button variant="outline" size="lg" className="min-w-[200px] border-neutral-600 text-white hover:bg-neutral-800 bg-transparent">
                See Platform Screens
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="font-bold text-black text-xs">TCC</span>
              </div>
              <span className="text-sm text-neutral-400">The Career Company</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <Link href="/campus" className="hover:text-white">For Institutes</Link>
              <Link href="/companies" className="hover:text-white">For Companies</Link>
              <Link href="/saarthi" className="hover:text-white">For Individuals</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
