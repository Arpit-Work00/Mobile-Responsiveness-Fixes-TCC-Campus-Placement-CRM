"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { PlacementFlywheel } from "@/components/landing/placement-flywheel"
import { SolutionBlocks } from "@/components/landing/solution-blocks"

// Our Clients - institution logos
const clientLogos = [
  { name: "IIM Bangalore", logo: "/images/logos/iim-bangalore.jpg" },
  { name: "IIM Kozhikode", logo: "/images/logos/iim-kozhikode.jpg" },
  { name: "IIM Udaipur", logo: "/images/logos/iim-udaipur.jpg" },
  { name: "IIM Nagpur", logo: "/images/logos/iim-nagpur.jpg" },
  { name: "IIM Sambalpur", logo: "/images/logos/iim-sambalpur.jpg" },
  { name: "IIM Ranchi", logo: "/images/logos/iim-ranchi.jpg" },
  { name: "Jio Institute", logo: "/images/logos/jio-institute.jpg" },
  { name: "XIM University", logo: "/images/logos/xim-university.jpg" },
  { name: "GIM Goa", logo: "/images/logos/gim-goa.jpg" },
  { name: "NICMAR", logo: "/images/logos/nicmar.jpg" },
  { name: "Deakin Business School", logo: "/images/logos/deakin.jpg" },
]

// Mentors From - company logos
const companyLogos = [
  { name: "Bain & Company", logo: "/images/logos/bain.jpg" },
  { name: "BCG", logo: "/images/logos/bcg.jpg" },
  { name: "McKinsey", logo: "/images/logos/mckinsey.jpg" },
  { name: "Deloitte", logo: "/images/logos/deloitte.jpg" },
  { name: "Havells", logo: "/images/logos/havells.jpg" },
  { name: "Cognizant", logo: "/images/logos/cognizant.jpg" },
  { name: "Dabur", logo: "/images/logos/dabur.jpg" },
  { name: "IBM", logo: "/images/logos/ibm.jpg" },
  { name: "TATA Play", logo: "/images/logos/tata-play.jpg" },
  { name: "Protiviti", logo: "/images/logos/protiviti.jpg" },
  { name: "Blue Yonder", logo: "/images/logos/blue-yonder.jpg" },
  { name: "Clear", logo: "/images/logos/clear.jpg" },
]

const mentorCards = [
  { name: "Gaurav Upadhyay", title: "Sr. Global Product Manager", company: "Bain & Company", school: "IIML", photo: "/images/mentors/gaurav-upadhyay.jpg" },
  { name: "Ashish Pathak", title: "Global Product Director", company: "BCG", school: "SPJIMR", photo: "/images/mentors/ashish-pathak.jpg" },
  { name: "Ajay Kumar", title: "Associate Director - BFSI", company: "Protiviti", school: "IIM Calcutta", photo: "/images/mentors/ajay-kumar.jpg" },
  { name: "Soumya Bose", title: "Associate Director", company: "Deloitte", school: "IIM Bangalore", photo: "/images/mentors/soumya-bose.jpg" },
  { name: "Vinod Mathur", title: "Director", company: "Blue Yonder", school: "IIT Bombay", photo: "/images/mentors/vinod-mathur.jpg" },
  { name: "Vikram Dhawan", title: "Sr. Brand Manager", company: "Dabur", school: "FMS Delhi", photo: "/images/mentors/vikram-dhawan.jpg" },
  { name: "Kanishak Chauhan", title: "Jr Engagement Manager", company: "McKinsey", school: "ISB", photo: "/images/mentors/kanishak-chauhan.jpg" },
  { name: "Jatin Gulbani", title: "Director - HR COE", company: "Clear", school: "TISS", photo: "/images/mentors/jatin-gulbani.jpg" },
  { name: "Sumit Sanghwan", title: "Vice President", company: "Havells", school: "Symbiosis", photo: "/images/mentors/sumit-sanghwan.jpg" },
  { name: "Vijoy Basu", title: "Director", company: "Cognizant", school: "IIM Kozhikode", photo: "/images/mentors/vijoy-basu.jpg" },
  { name: "Arun Singhal", title: "Board Member", company: "Cello World", school: "IIM Bangalore", photo: "/images/mentors/arun-singhal.jpg" },
  { name: "Kashmira Kolte", title: "Manager - HR", company: "TATA Play", school: "IIM Ranchi", photo: "/images/mentors/kashmira-kolte.jpg" },
]

const testimonials = [
  {
    name: "Harshita Yadav",
    institution: "IIM Sambalpur",
    quote: "From the start of my journey, your guidance has played a key role in helping me bridge the gap between classroom learning and real-world experience. The exposure I've gained has added so much value to my understanding of marketing and given me the confidence.",
  },
  {
    name: "Ananya Yadav",
    institution: "Jio Institute",
    quote: "The mentors patiently addressed all my doubts and queries, and took the time to analyse my resume in detail \u2014 offering tailored feedback and preparation strategies specific to my profile, rather than a generalized approach.",
  },
  {
    name: "Devashish Chaudhary",
    institution: "IIM Ranchi",
    quote: "Ashay sir was very polite and very insightful with his feedback. His questions were thought-provoking and he really showed interest in trying to understand my point of view. Had a great experience.",
  },
]

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    institution: "",
    designation: "",
    product: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Double arrays for seamless scroll
  const doubledClients = [...clientLogos, ...clientLogos]
  const doubledCompanies = [...companyLogos, ...companyLogos]
  const doubledMentors = [...mentorCards, ...mentorCards.slice(0, 6)]

  return (
    <div className="min-h-screen bg-background">

      {/* HEADER */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-foreground flex items-center justify-center">
              <span className="font-bold text-background text-xs tracking-tight">TCC</span>
            </div>
            <span className="font-bold text-base md:text-lg text-foreground tracking-tight">The Career Company</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#offerings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Offerings</Link>
            <Link href="#mentors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentors</Link>
            <Link href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact</Link>
            <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Login</Link>
          </nav>
        </div>
      </header>

      {/* ============================================================ */}
      {/* SECTION 1: HERO                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-foreground leading-[1.08] tracking-tight max-w-5xl text-balance">
            Placements are the growth engine of institutions and{" "}
            <span className="underline decoration-foreground decoration-4 underline-offset-8">we help you strengthen that.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6 md:mt-8 max-w-2xl">
            {"Trusted by India\u2019s 20+ Elite B-Schools."}
          </p>
        </div>

        {/* Our Clients - Institution Logos */}
        <div className="mt-16 md:mt-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-5">Our Clients</p>
          </div>
          <div className="border-y border-border py-6 overflow-hidden">
            <div className="flex animate-marquee-slow gap-16 whitespace-nowrap items-center pl-8">
              {doubledClients.map((inst, i) => (
                <div key={i} className="flex items-center gap-3 flex-shrink-0">
                  <img
                    src={inst.logo}
                    alt={`${inst.name} logo`}
                    className="h-12 w-12 object-contain rounded-sm"
                  />
                  <span className="text-sm font-semibold text-foreground/40 tracking-wide whitespace-nowrap">
                    {inst.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentors From - Company Logos */}
        <div className="mt-0">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mt-6 mb-5">Mentors From</p>
          </div>
          <div className="border-b border-border py-6 overflow-hidden">
            <div className="flex animate-marquee-reverse gap-16 whitespace-nowrap items-center pl-8">
              {doubledCompanies.map((c, i) => (
                <div key={i} className="flex items-center gap-3 flex-shrink-0">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="h-10 w-10 object-contain rounded-sm"
                  />
                  <span className="text-sm font-semibold text-foreground/40 tracking-wide whitespace-nowrap">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: FLYWHEEL                                          */}
      {/* Bigger circles, bigger fonts, correct key line about 2-5%    */}
      {/* ============================================================ */}
      <section className="min-h-screen bg-foreground text-background flex flex-col justify-center py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-[1.1] tracking-tight text-center max-w-4xl mx-auto text-balance">
            Placements Drive Admissions. Admissions Drive Brand. Brand Drives Placements.
          </h2>

          <div className="my-16 md:my-24 flex justify-center">
            <PlacementFlywheel />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-bold text-background leading-snug">
              Placements are not a cost center. They are the growth engine of the institution.
            </p>
            <div className="mt-12 md:mt-16 border-2 border-background/30 px-8 py-10 md:px-14 md:py-12">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-background tracking-tight leading-snug text-balance">
                {"Top Institutions spend 2\u20135% of total fees on Placements \u2014 how much do you spend on placements?"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: IMPACT NUMBERS - Fixed wrapping                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { number: "12+", label: "Placement seasons led" },
              { number: "2.5+", label: "Years, zero client attrition" },
              { number: "5,000+", label: "Students impacted" },
              { number: "15,000+", label: "Hours of 1:1 mentoring" },
            ].map((stat, i) => (
              <div key={i} className="py-10 md:py-16 px-4 md:px-8 text-center border-b lg:border-b-0 border-border last:border-b-0 even:border-l border-l-border lg:even:border-l lg:border-r lg:last:border-r-0 lg:first:border-l-0">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter whitespace-nowrap">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-3 md:mt-4 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: OFFERINGS                                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40 border-t border-border" id="offerings">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-6">What We Build</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight max-w-3xl text-balance">
            Three Pillars of Placement Infrastructure.
          </h2>

          <div className="mt-16 md:mt-24 border-2 border-foreground">
            <SolutionBlocks />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: OUR MENTORS                                       */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40 bg-foreground text-background" id="mentors">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <p className="text-xs font-mono text-background/40 uppercase tracking-[0.2em] mb-6">Our Mentors</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-4xl text-balance">
            {"Guided by Leaders from India\u2019s Top Companies."}
          </h2>
        </div>

        <div className="mt-16 md:mt-24 relative overflow-hidden">
          <div className="flex animate-marquee-slow gap-6 md:gap-8 whitespace-nowrap px-6 md:px-8">
            {doubledMentors.map((mentor, i) => (
              <div key={i} className="border border-background/15 p-6 md:p-8 min-w-[220px] md:min-w-[280px] flex-shrink-0">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-5 border-2 border-background/20"
                />
                <div className="text-sm md:text-base font-bold text-background whitespace-normal">{mentor.name}</div>
                <div className="text-xs md:text-sm text-background/50 mt-1 whitespace-normal">{mentor.title}</div>
                <div className="text-xs md:text-sm font-semibold text-background mt-2 whitespace-normal">{mentor.company}</div>
                <div className="text-xs text-background/40 mt-1">{mentor.school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: CASE STUDY - Fixed graph layout                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40" id="impact">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-6">Case Study</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight max-w-4xl text-balance">
            Placement Outcome at a Partner B-School.
          </h2>

          <div className="mt-16 md:mt-24">
            {/* Bar chart - fixed layout */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-8 md:gap-16">
                {/* 2024 Column */}
                <div>
                  <div className="text-center mb-6">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">2024</div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Offers</span>
                        <span className="text-lg md:text-xl font-bold text-foreground">128</span>
                      </div>
                      <div className="h-8 md:h-10 bg-foreground/15 w-full" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Companies</span>
                        <span className="text-lg md:text-xl font-bold text-foreground">135</span>
                      </div>
                      <div className="h-8 md:h-10 bg-foreground/25 w-full" />
                    </div>
                  </div>
                </div>

                {/* 2025 Column */}
                <div>
                  <div className="text-center mb-6">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">2025</div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Offers</span>
                        <span className="text-lg md:text-xl font-bold text-foreground">196</span>
                      </div>
                      <div className="h-8 md:h-10 bg-foreground w-full" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Companies</span>
                        <span className="text-lg md:text-xl font-bold text-foreground">139</span>
                      </div>
                      <div className="h-8 md:h-10 bg-foreground/60 w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="mt-12 md:mt-16 pt-8 border-t-2 border-foreground text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  53% more offers. 3% more companies.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mt-3">
                  Same institution. Same batch size. Better infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: AI INTELLIGENCE                                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <p className="text-xs font-mono text-background/40 uppercase tracking-[0.2em] mb-6">Intelligence Layer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-4xl text-balance">
            Every Season Makes the Next One Smarter.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-16 md:mt-24">
            <div>
              <h3 className="text-xs font-mono text-background/40 uppercase tracking-[0.2em] mb-8">AI Outputs</h3>
              <div className="space-y-6">
                {[
                  "Company Targeting Recommendations",
                  "Student\u2013Role Match Scores",
                  "Risk Alerts for Weak Clusters",
                  "Career Roadmap Suggestions",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <span className="text-sm font-mono text-background/30 mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base md:text-lg text-background font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-background/40 uppercase tracking-[0.2em] mb-8">System Learns From</h3>
              <div className="space-y-5">
                {[
                  "Student readiness behavior",
                  "Recruiter engagement patterns",
                  "Stage-wise conversion ratios",
                  "Sector demand shifts",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-background mt-2.5 flex-shrink-0" />
                    <p className="text-base md:text-lg text-background/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-background/10 text-center">
            <p className="text-xl md:text-2xl font-bold text-background">
              Intelligence for decision-making. Not decoration.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: TESTIMONIALS                                      */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-6">Voices</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-16 md:mb-24 text-balance">
            From the People We Work With.
          </h2>

          <div className="space-y-0 divide-y divide-border">
            {testimonials.map((t, i) => (
              <div key={i} className="py-12 md:py-16">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight max-w-4xl text-balance">
                  {"\u201C"}{t.quote}{"\u201D"}
                </p>
                <div className="mt-6">
                  <span className="text-sm md:text-base font-bold text-foreground">{t.name}</span>
                  <span className="text-sm md:text-base text-muted-foreground ml-3">{t.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9: AUTHORITY                                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-4xl text-balance">
            Built by Placement Operators. Not Software Vendors.
          </h2>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6">
              {[
                "Workflows refined over 12+ placement seasons at premier institutions.",
                "Built from the placement desk outward \u2014 not from a product roadmap.",
                "Used by Deans and Placement Chairs for mission-critical operations.",
                "Continuous improvement driven by real placement data, not feature requests.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-background mt-2.5 flex-shrink-0" />
                  <p className="text-base md:text-lg text-background/80 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex items-end">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-background leading-snug tracking-tight">
                This system was built from the placement desk outward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10: CTA                                              */}
      {/* ============================================================ */}
      <section className="py-24 md:py-40 lg:min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Your placement season is too important for spreadsheets.
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.08] tracking-tight max-w-5xl mx-auto text-balance">
            If Placements Are Your Growth Engine, Build Them Like One.
          </h2>

          <div className="mt-12 md:mt-16">
            <Button
              size="lg"
              className="text-base md:text-lg px-10 md:px-14 py-6 md:py-7 font-bold"
              onClick={() => { setShowModal(true); setSubmitted(false) }}
            >
              Request Institutional Consultation
            </Button>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground mt-6 md:mt-8">
            We work with a limited number of institutions per placement season.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-background text-xs">TCC</span>
              </div>
              <span className="text-sm text-muted-foreground">The Career Company</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <Link href="/auth/login" className="hover:text-foreground transition-colors">Campus Login</Link>
              <Link href="/auth/student-login" className="hover:text-foreground transition-colors">Student Login</Link>
              <span className="text-xs sm:text-sm">institutional@thecareercompany.in</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} The Career Company. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4">
          <div className="bg-background border-2 border-foreground w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-foreground mx-auto flex items-center justify-center mb-6">
                    <span className="text-background font-bold text-xl">&#10003;</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Thank you.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Request Consultation</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-8">We work with a limited number of institutions per year.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Full Name</label>
                      <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border-2 border-foreground bg-background px-4 py-3 text-sm text-foreground focus:outline-none" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Mobile Number</label>
                      <input id="mobile" type="tel" required value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full border-2 border-foreground bg-background px-4 py-3 text-sm text-foreground focus:outline-none" placeholder="+91" />
                    </div>
                    <div>
                      <label htmlFor="institution" className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Institution Name</label>
                      <input id="institution" type="text" required value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="w-full border-2 border-foreground bg-background px-4 py-3 text-sm text-foreground focus:outline-none" placeholder="e.g. IIM Bangalore" />
                    </div>
                    <div>
                      <label htmlFor="designation" className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Designation</label>
                      <input id="designation" type="text" required value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} className="w-full border-2 border-foreground bg-background px-4 py-3 text-sm text-foreground focus:outline-none" placeholder="e.g. Chairperson - Placements" />
                    </div>
                    <div>
                      <label htmlFor="product" className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Product Interested In</label>
                      <select id="product" required value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className="w-full border-2 border-foreground bg-background px-4 py-3 text-sm text-foreground focus:outline-none appearance-none">
                        <option value="" disabled>Select a product</option>
                        <option value="tcc-prep">TCC Prep</option>
                        <option value="tcc-outreach">TCC Outreach Engine</option>
                        <option value="tcc-placement">TCC Placement Management</option>
                        <option value="all">All of the Above</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full py-5 text-sm md:text-base font-bold mt-2">Submit Request</Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
