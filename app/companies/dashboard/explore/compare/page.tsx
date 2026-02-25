"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, X } from "lucide-react"

const campusData: Record<
  number,
  {
    name: string
    batchSize: number
    avgExp: string
    sectors: string[]
    skillMix: string[]
    pastRecruiters: string[]
    timeline: string
  }
> = {
  1: {
    name: "IIM Ahmedabad",
    batchSize: 400,
    avgExp: "2.5 years",
    sectors: ["Consulting", "BFSI", "Tech"],
    skillMix: ["Strategy", "Finance", "Analytics"],
    pastRecruiters: ["McKinsey", "BCG", "Goldman"],
    timeline: "Nov - Feb",
  },
  2: {
    name: "IIM Bangalore",
    batchSize: 450,
    avgExp: "2.8 years",
    sectors: ["Consulting", "Tech", "Product"],
    skillMix: ["Product", "Tech", "Strategy"],
    pastRecruiters: ["Amazon", "Google", "Bain"],
    timeline: "Oct - Jan",
  },
  3: {
    name: "IIM Calcutta",
    batchSize: 480,
    avgExp: "2.3 years",
    sectors: ["BFSI", "Consulting", "FMCG"],
    skillMix: ["Finance", "Marketing", "Operations"],
    pastRecruiters: ["JP Morgan", "Deloitte", "HUL"],
    timeline: "Nov - Feb",
  },
  4: {
    name: "ISB Hyderabad",
    batchSize: 900,
    avgExp: "4.5 years",
    sectors: ["Tech", "Product", "Consulting"],
    skillMix: ["Leadership", "Product", "Strategy"],
    pastRecruiters: ["Microsoft", "Flipkart", "McKinsey"],
    timeline: "Sep - Dec",
  },
  5: {
    name: "XLRI Jamshedpur",
    batchSize: 360,
    avgExp: "2.1 years",
    sectors: ["HR", "Marketing", "FMCG"],
    skillMix: ["HR", "Sales", "Marketing"],
    pastRecruiters: ["Tata", "Aditya Birla", "ITC"],
    timeline: "Nov - Jan",
  },
  6: {
    name: "FMS Delhi",
    batchSize: 220,
    avgExp: "2.0 years",
    sectors: ["BFSI", "Consulting", "Tech"],
    skillMix: ["Finance", "Consulting", "Tech"],
    pastRecruiters: ["Citi", "EY", "Infosys"],
    timeline: "Nov - Feb",
  },
}

export default function CompareCampusesPage() {
  // Default comparison of 3 campuses
  const compareIds = [1, 2, 4]
  const campuses = compareIds.map((id) => campusData[id]).filter(Boolean)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="outline" size="sm" className="bg-transparent">
          <Link href="/companies/dashboard/explore">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold text-black">Compare Campuses</h1>
          <p className="text-neutral-600 text-sm">Side-by-side comparison for decision-making</p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-50">
              <th className="text-left p-4 font-medium text-neutral-500 text-sm w-48">Attribute</th>
              {campuses.map((c) => (
                <th key={c.name} className="text-left p-4 font-semibold text-black">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            <tr>
              <td className="p-4 text-sm text-neutral-600">Batch Size</td>
              {campuses.map((c) => (
                <td key={c.name} className="p-4 text-sm text-black font-medium">
                  {c.batchSize}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm text-neutral-600">Average Experience</td>
              {campuses.map((c) => (
                <td key={c.name} className="p-4 text-sm text-black font-medium">
                  {c.avgExp}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm text-neutral-600">Key Sectors</td>
              {campuses.map((c) => (
                <td key={c.name} className="p-4 text-sm text-black">
                  {c.sectors.join(", ")}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm text-neutral-600">Skill Mix</td>
              {campuses.map((c) => (
                <td key={c.name} className="p-4 text-sm text-black">
                  {c.skillMix.join(", ")}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm text-neutral-600">Past Recruiters</td>
              {campuses.map((c) => (
                <td key={c.name} className="p-4 text-sm text-black">
                  {c.pastRecruiters.join(", ")}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm text-neutral-600">Placement Timeline</td>
              {campuses.map((c) => (
                <td key={c.name} className="p-4 text-sm text-black font-medium">
                  {c.timeline}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 text-sm text-neutral-600">Sector Alignment</td>
              {campuses.map((c, i) => (
                <td key={c.name} className="p-4">
                  {i === 0 || i === 2 ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <Check className="w-4 h-4" /> Strong
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-neutral-500 text-sm">
                      <X className="w-4 h-4" /> Moderate
                    </span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action */}
      <div className="mt-6 flex justify-end">
        <Button asChild className="bg-black text-white hover:bg-neutral-800">
          <Link href="/companies/dashboard/roles">Post Role to Selected Campuses</Link>
        </Button>
      </div>
    </div>
  )
}
