export function SolutionBlocks() {
  const pillars = [
    {
      number: "01",
      title: "TCC Prep",
      subtitle: "Placement Preparation Infrastructure",
      bullets: [
        "Structured 9-step role-based preparation journey",
        "Student readiness analytics and gap identification",
        "Mentor-led domain interventions",
        "Improvement tracking across every cohort",
      ],
      outcome: "Improved shortlist ratios. Better role alignment.",
    },
    {
      number: "02",
      title: "TCC Outreach Engine",
      subtitle: "Corporate Intelligence & CRM",
      bullets: [
        "Pre-loaded recruiter database with relationship mapping",
        "Account ownership and outreach funnel visibility",
        "Email sequence automation and call logging",
        "Sector-wise pipeline tracking and dormant reconnects",
      ],
      outcome: "Predictable recruiter engagement. Structured corporate growth.",
    },
    {
      number: "03",
      title: "TCC Placement Management",
      subtitle: "End-to-End Workflow",
      bullets: [
        "JD circulation and application tracking",
        "Shortlist management with multi-round support",
        "Offer tracking, analytics, and compliance",
        "Real-time dashboards for placement leadership",
      ],
      outcome: "Operational clarity. Data-driven placement execution.",
    },
  ]

  return (
    <div className="grid md:grid-cols-3">
      {pillars.map((pillar, i) => (
        <div
          key={i}
          className={`p-10 md:p-12 flex flex-col ${
            i === 1
              ? "bg-foreground text-background"
              : "bg-background text-foreground"
          } ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0 border-foreground" : ""}`}
        >
          <div className="mb-10">
            <span className={`text-xs font-mono tracking-widest ${
              i === 1 ? "text-background/40" : "text-muted-foreground"
            }`}>
              {pillar.number}
            </span>
            <h3 className={`text-2xl font-bold tracking-tight mt-3 ${
              i === 1 ? "text-background" : "text-foreground"
            }`}>
              {pillar.title}
            </h3>
            <p className={`text-sm mt-2 ${
              i === 1 ? "text-background/60" : "text-muted-foreground"
            }`}>
              {pillar.subtitle}
            </p>
          </div>

          <ul className="space-y-4 flex-1">
            {pillar.bullets.map((bullet, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className={`w-1 h-1 rounded-full mt-2.5 flex-shrink-0 ${
                  i === 1 ? "bg-background" : "bg-foreground"
                }`} />
                <span className={`text-sm leading-relaxed ${
                  i === 1 ? "text-background/80" : "text-foreground/80"
                }`}>
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <div className={`mt-10 pt-8 ${
            i === 1 ? "border-t border-background/20" : "border-t border-border"
          }`}>
            <p className={`text-base font-bold leading-snug ${
              i === 1 ? "text-background" : "text-foreground"
            }`}>
              {pillar.outcome}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
