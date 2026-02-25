"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Users, Briefcase, TrendingUp, Target, Check, ArrowRight } from "lucide-react"

const campuses = [
  {
    id: 1,
    name: "IIM Ahmedabad",
    location: "Ahmedabad, Gujarat",
    programs: ["MBA", "PGPX"],
    batchSize: 400,
    avgExp: "2.5 years",
    placementRate: "98%",
    sectors: ["Consulting", "BFSI", "Tech"],
    pastRecruiters: ["McKinsey", "BCG", "Goldman Sachs", "Bain", "JPM"],
    fitScore: 94,
    conversionRate: "High",
    similarRolesSuccess: 12,
  },
  {
    id: 2,
    name: "IIM Bangalore",
    location: "Bangalore, Karnataka",
    programs: ["MBA", "EPGP"],
    batchSize: 450,
    avgExp: "2.8 years",
    placementRate: "97%",
    sectors: ["Consulting", "Tech", "Product"],
    pastRecruiters: ["Amazon", "Google", "Bain", "Microsoft", "Flipkart"],
    fitScore: 91,
    conversionRate: "High",
    similarRolesSuccess: 9,
  },
  {
    id: 3,
    name: "IIM Calcutta",
    location: "Kolkata, West Bengal",
    programs: ["MBA", "PGPEX"],
    batchSize: 480,
    avgExp: "2.3 years",
    placementRate: "96%",
    sectors: ["BFSI", "Consulting", "FMCG"],
    pastRecruiters: ["JP Morgan", "Deloitte", "HUL", "Citi", "McKinsey"],
    fitScore: 88,
    conversionRate: "Medium",
    similarRolesSuccess: 7,
  },
  {
    id: 4,
    name: "ISB Hyderabad",
    location: "Hyderabad, Telangana",
    programs: ["PGP", "PGPMAX"],
    batchSize: 900,
    avgExp: "4.5 years",
    placementRate: "95%",
    sectors: ["Tech", "Product", "Consulting"],
    pastRecruiters: ["Microsoft", "Flipkart", "McKinsey", "Google", "BCG"],
    fitScore: 92,
    conversionRate: "High",
    similarRolesSuccess: 14,
  },
  {
    id: 5,
    name: "XLRI Jamshedpur",
    location: "Jamshedpur, Jharkhand",
    programs: ["BM", "HRM"],
    batchSize: 360,
    avgExp: "2.1 years",
    placementRate: "94%",
    sectors: ["HR", "Marketing", "FMCG"],
    pastRecruiters: ["Tata", "Aditya Birla", "ITC", "Mahindra", "Godrej"],
    fitScore: 78,
    conversionRate: "Medium",
    similarRolesSuccess: 5,
  },
  {
    id: 6,
    name: "FMS Delhi",
    location: "New Delhi",
    programs: ["MBA"],
    batchSize: 220,
    avgExp: "2.0 years",
    placementRate: "93%",
    sectors: ["BFSI", "Consulting", "Tech"],
    pastRecruiters: ["Citi", "EY", "Infosys", "Deloitte", "ICICI"],
    fitScore: 82,
    conversionRate: "Medium",
    similarRolesSuccess: 6,
  },
]

export default function ExploreCampusesClient() {
  const [search, setSearch] = useState("")
  const [selectedSector, setSelectedSector] = useState<string | null>(null)
  const [compareList, setCompareList] = useState<number[]>([])
  const [sortBy, setSortBy] = useState<"fit" | "batch" | "placement">("fit")

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 4 ? [...prev, id] : prev,
    )
  }

  let filteredCampuses = campuses.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase())
    const matchesSector = !selectedSector || c.sectors.includes(selectedSector)
    return matchesSearch && matchesSector
  })

  // Sort
  filteredCampuses = filteredCampuses.sort((a, b) => {
    if (sortBy === "fit") return b.fitScore - a.fitScore
    if (sortBy === "batch") return b.batchSize - a.batchSize
    return Number.parseInt(b.placementRate) - Number.parseInt(a.placementRate)
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-1">Explore & Compare Campuses</h1>
          <p className="text-sm text-neutral-600">
            Find where your role will convert fastest. Data-driven campus selection.
          </p>
        </div>
        {compareList.length > 0 && (
          <Button asChild className="bg-black text-white hover:bg-neutral-800">
            <Link href={`/companies/dashboard/explore/compare?ids=${compareList.join(",")}`}>
              Compare {compareList.length} Campuses <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        )}
      </div>

      <div className="border border-neutral-200 rounded-lg p-4 mb-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              placeholder="Search by campus name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wide">Sort by:</span>
            {[
              { value: "fit", label: "Best Fit" },
              { value: "batch", label: "Batch Size" },
              { value: "placement", label: "Placement Rate" },
            ].map((sort) => (
              <button
                key={sort.value}
                onClick={() => setSortBy(sort.value as typeof sortBy)}
                className={`px-3 py-1.5 text-xs rounded border ${
                  sortBy === sort.value
                    ? "bg-black text-white border-black"
                    : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                }`}
              >
                {sort.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500 uppercase tracking-wide">Sector:</span>
          {["All", "Consulting", "Tech", "BFSI", "Product", "FMCG"].map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector === "All" ? null : sector)}
              className={`px-3 py-1.5 text-xs rounded border ${
                (sector === "All" && !selectedSector) || selectedSector === sector
                  ? "bg-black text-white border-black"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredCampuses.map((campus) => (
          <div
            key={campus.id}
            className="border border-neutral-200 rounded-lg p-5 hover:border-neutral-400 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-black">{campus.name}</h3>
                  <div
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      campus.fitScore >= 90
                        ? "bg-green-100 text-green-700"
                        : campus.fitScore >= 80
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {campus.fitScore}% Fit
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <TrendingUp className="w-3 h-3" />
                    {campus.conversionRate} Conversion
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {campus.location}
                  </div>
                  <div className="flex gap-1.5">
                    {campus.programs.map((prog) => (
                      <span key={prog} className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-xs rounded">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleCompare(campus.id)}
                className={`px-3 py-1.5 text-xs rounded border flex items-center gap-1 ${
                  compareList.includes(campus.id)
                    ? "bg-black border-black text-white"
                    : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                }`}
              >
                {compareList.includes(campus.id) ? <Check className="w-3 h-3" /> : null}
                {compareList.includes(campus.id) ? "Added" : "Compare"}
              </button>
            </div>

            <div className="grid grid-cols-6 gap-4 mb-4 text-sm">
              <div>
                <div className="flex items-center gap-1 text-neutral-500 mb-1">
                  <Users className="w-3 h-3" />
                  <span className="text-xs">Batch Size</span>
                </div>
                <p className="font-semibold text-black">{campus.batchSize}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-neutral-500 mb-1">
                  <Briefcase className="w-3 h-3" />
                  <span className="text-xs">Avg Exp</span>
                </div>
                <p className="font-semibold text-black">{campus.avgExp}</p>
              </div>
              <div>
                <div className="text-neutral-500 mb-1 text-xs">Placement Rate</div>
                <p className="font-semibold text-black">{campus.placementRate}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-neutral-500 mb-1">
                  <Target className="w-3 h-3" />
                  <span className="text-xs">Sector Fit</span>
                </div>
                <p className="font-semibold text-black text-xs">{campus.sectors.slice(0, 2).join(", ")}</p>
              </div>
              <div className="col-span-2">
                <div className="text-neutral-500 mb-1 text-xs">Similar Roles Succeeded</div>
                <p className="font-semibold text-black">{campus.similarRolesSuccess} roles closed successfully</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <div className="text-xs text-neutral-500">
                <span className="font-medium text-neutral-700">Past Recruiters:</span>{" "}
                {campus.pastRecruiters.slice(0, 3).join(", ")}
                {campus.pastRecruiters.length > 3 && ` +${campus.pastRecruiters.length - 3} more`}
              </div>
              <Link
                href={`/companies/dashboard/explore/${campus.id}`}
                className="flex items-center gap-1 text-sm font-medium text-black hover:gap-2 transition-all"
              >
                View Full Profile <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border border-blue-200 bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-900 mb-2">Hiring Intelligence</h3>
        <p className="text-xs text-blue-700 mb-3">
          Based on your company profile and similar role closures, we recommend starting with IIM Ahmedabad, IIM
          Bangalore, and ISB Hyderabad for highest conversion probability.
        </p>
        <div className="flex gap-2">
          <Button size="sm" className="bg-blue-900 text-white hover:bg-blue-800 h-8 text-xs" asChild>
            <Link href="/companies/dashboard/roles">Post Role to Top 3</Link>
          </Button>
          <Button size="sm" variant="outline" className="bg-white h-8 text-xs">
            See Full Recommendation
          </Button>
        </div>
      </div>
    </div>
  )
}
