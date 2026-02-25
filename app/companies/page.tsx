import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight } from "lucide-react"

export default function CompaniesLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            TCC
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-neutral-600 hover:text-black">
              For Campuses
            </Link>
            <Link href="/companies/auth/login" className="text-sm text-neutral-600 hover:text-black">
              Login
            </Link>
            <Button asChild size="sm" className="bg-black text-white hover:bg-neutral-800">
              <Link href="/companies/auth/login">Post a Role</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance">
            Hire from multiple campuses through one interface.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 text-pretty">
            Post a role once. Reach the right campuses. Close faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-black text-white hover:bg-neutral-800 px-8">
              <Link href="/companies/auth/login">Post a Campus Role (Free)</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neutral-300 hover:bg-neutral-50 bg-transparent"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Campus hiring is more complicated than it should be.
          </h2>
          <div className="mt-8 space-y-4 text-neutral-600">
            <p>Most campus hiring today looks like this:</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                <span>Multiple campuses, multiple coordinators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                <span>Too many applications, low signal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                <span>Weeks spent coordinating interviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                <span>No visibility into where candidates drop off</span>
              </li>
            </ul>
            <p className="mt-6 pt-4 border-t border-neutral-100 text-black font-medium">
              Hiring early-career talent shouldn't feel this chaotic.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">TCC simplifies campus hiring.</h2>
          <p className="mt-6 text-lg text-neutral-600">TCC is a single interface to hire from campuses.</p>
          <div className="mt-8 space-y-4">
            <p className="text-neutral-700">You:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-black mt-0.5 shrink-0" />
                <span>Post one role</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-black mt-0.5 shrink-0" />
                <span>Choose eligible campuses</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-black mt-0.5 shrink-0" />
                <span>Receive structured applications</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-black mt-0.5 shrink-0" />
                <span>Manage the entire process in one place</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 pt-6 border-t border-neutral-200 space-y-2 text-sm text-neutral-500">
            <p>No brokers.</p>
            <p>No CV dumps.</p>
            <p>No long-term commitments.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-12 space-y-10">
            {[
              {
                step: "1",
                title: "Create or claim your company profile",
                desc: "Your profile may already exist. Claim it and complete it.",
              },
              {
                step: "2",
                title: "Post a campus role",
                desc: "Define role details, eligibility, and campuses.",
              },
              {
                step: "3",
                title: "Receive applications",
                desc: "Applications come from structured campus and student profiles.",
              },
              {
                step: "4",
                title: "Shortlist, interview, and close",
                desc: "Track everything from a single dashboard.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="mt-1 text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 md:py-24 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why companies use TCC</h2>
          <ul className="mt-8 space-y-4">
            {[
              "Fewer but more relevant applications",
              "Faster shortlisting",
              "Clear visibility across campuses",
              "One process instead of multiple parallel conversations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-black mt-0.5 shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 pt-6 border-t border-neutral-200 text-neutral-600">
            Most companies don't need more candidates.
            <br />
            <span className="text-black font-medium">They need better filtering.</span>
          </p>
        </div>
      </section>

      {/* Analogy */}
      <section className="py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">A simpler way to think about TCC</h2>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            Campus hiring has traditionally run on personal contacts and fragmented outreach.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            TCC brings structure and transparency to this process — similar to how platforms in other industries
            organised access, comparison, and decision-making over time.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-4 text-neutral-600">
            Core access is free.
            <br />
            Pay only when you need speed or scale.
          </p>

          <div className="mt-10 border border-neutral-200 rounded-lg bg-white overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-4 text-sm">Company profile & role posting</td>
                  <td className="px-4 py-4 text-sm text-right font-medium">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm">Campus applications</td>
                  <td className="px-4 py-4 text-sm text-right font-medium">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm">Screening tools</td>
                  <td className="px-4 py-4 text-sm text-right font-medium">₹25,000 per role</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm">Dedicated campus hiring manager</td>
                  <td className="px-4 py-4 text-sm text-right font-medium">₹40,000 per role</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm">White-glove urgent hiring</td>
                  <td className="px-4 py-4 text-sm text-right font-medium">6–7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-1 text-sm text-neutral-500">
            <p>No subscriptions.</p>
            <p>No lock-ins.</p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who TCC is for</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider text-neutral-500 mb-4">This is for you if</h3>
              <ul className="space-y-3">
                {["You hire from campuses", "You want faster closures", "You care about signal over volume"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-black mt-0.5 shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider text-neutral-500 mb-4">
                This is not for you if
              </h3>
              <ul className="space-y-3">
                {[
                  "You want CV dumps",
                  "You want agencies to run hiring for you",
                  "You don't want process transparency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                    <span className="text-neutral-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 border-t border-neutral-200 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Post your first campus role — free.</h2>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-100 px-8">
              <Link href="/companies/auth/login">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© 2025 TCC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-black">
              For Campuses
            </Link>
            <Link href="/companies" className="hover:text-black">
              For Companies
            </Link>
            <Link href="#" className="hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
