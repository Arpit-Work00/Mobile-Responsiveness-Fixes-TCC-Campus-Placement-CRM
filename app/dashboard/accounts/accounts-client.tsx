"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Building2, Search, Filter, MapPin, TrendingUp, Users, Clock } from "lucide-react"

const companies = [
  {
    id: 1,
    name: "McKinsey & Company",
    sector: "Consulting",
    size: "10000+",
    status: "hot",
    owner: "Rahul Sharma",
    lastContact: "2 days ago",
    meetings: 3,
    roles: 2,
    outreach: 5,
    location: "Mumbai",
    tier: "Tier 1",
    lastActivity: "Meeting scheduled for March 15",
  },
  {
    id: 2,
    name: "Amazon India",
    sector: "Technology",
    size: "5000+",
    status: "warm",
    owner: "Priya Patel",
    lastContact: "5 days ago",
    meetings: 1,
    roles: 1,
    outreach: 3,
    location: "Bangalore",
    tier: "Tier 1",
    lastActivity: "Batch profile shared",
  },
  {
    id: 3,
    name: "HDFC Bank",
    sector: "BFSI",
    size: "8000+",
    status: "cold",
    owner: "Unassigned",
    lastContact: "15 days ago",
    meetings: 0,
    roles: 0,
    outreach: 2,
    location: "Mumbai",
    tier: "Tier 1",
    lastActivity: "No response to last outreach",
  },
  {
    id: 4,
    name: "Deloitte",
    sector: "Consulting",
    size: "7000+",
    status: "warm",
    owner: "Amit Kumar",
    lastContact: "7 days ago",
    meetings: 2,
    roles: 1,
    outreach: 4,
    location: "Gurgaon",
    tier: "Tier 1",
    lastActivity: "Guest session confirmed",
  },
]

export default function AccountsClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || company.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Company Accounts</h1>
          <p className="text-sm text-neutral-600">Manage company relationships and assignments</p>
        </div>
        <Link href="/dashboard/accounts/assign">
          <Button className="bg-black text-white hover:bg-neutral-800">
            <Users className="w-4 h-4 mr-2" />
            Assign Companies
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white border-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={statusFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("all")}
            className={statusFilter === "all" ? "bg-black text-white" : ""}
          >
            All
          </Button>
          <Button
            variant={statusFilter === "hot" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("hot")}
            className={statusFilter === "hot" ? "bg-black text-white" : ""}
          >
            Hot
          </Button>
          <Button
            variant={statusFilter === "warm" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("warm")}
            className={statusFilter === "warm" ? "bg-black text-white" : ""}
          >
            Warm
          </Button>
          <Button
            variant={statusFilter === "cold" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("cold")}
            className={statusFilter === "cold" ? "bg-black text-white" : ""}
          >
            Cold
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="border border-gray-300 hover:border-black transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Link href={`/dashboard/accounts/${company.id}`}>
                          <h3 className="text-base font-bold text-black hover:underline">{company.name}</h3>
                        </Link>
                        <Badge
                          variant="outline"
                          className={`${
                            company.status === "hot"
                              ? "bg-red-50 text-red-700 border-red-300"
                              : company.status === "warm"
                                ? "bg-yellow-50 text-yellow-700 border-yellow-300"
                                : "bg-gray-50 text-gray-700 border-gray-300"
                          }`}
                        >
                          {company.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Filter className="w-3 h-3" />
                          {company.sector}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {company.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {company.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {company.tier}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {company.lastActivity}
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-black">{company.meetings}</span>
                          <span className="text-gray-600">Meetings</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-black">{company.roles}</span>
                          <span className="text-gray-600">Roles</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-black">{company.outreach}</span>
                          <span className="text-gray-600">Outreach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Account Owner</p>
                    <p
                      className={`text-sm font-semibold ${company.owner === "Unassigned" ? "text-red-600" : "text-black"}`}
                    >
                      {company.owner}
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Last Contact</p>
                    <p className="text-sm font-medium text-black">{company.lastContact}</p>
                  </div>
                  <Link href={`/dashboard/accounts/${company.id}`}>
                    <Button size="sm" variant="outline" className="w-full bg-white">
                      View Account
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
