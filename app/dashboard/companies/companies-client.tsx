"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus, ChevronRight } from "lucide-react"

export default function CompaniesClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const filterParam = searchParams?.get("filter") || "all"

  const companies = [
    {
      id: "accenture",
      name: "Accenture",
      owner: "Rahul Kumar",
      lastActivity: "23 Aug 2024",
      nextAction: "Follow-up email",
      nextActionDue: "28 Aug",
      status: "Cold",
      rolesReceived: 0,
      meetingsDone: 2,
      sector: "Consulting",
    },
    {
      id: "amazon",
      name: "Amazon",
      owner: "Neha Sharma",
      lastActivity: "Today 10:30 AM",
      nextAction: "Guest session",
      nextActionDue: "Today 2:00 PM",
      status: "Hot",
      rolesReceived: 3,
      meetingsDone: 5,
      sector: "Tech",
    },
    {
      id: "deloitte",
      name: "Deloitte",
      owner: "Priya Singh",
      lastActivity: "Yesterday",
      nextAction: "PPT submission",
      nextActionDue: "Tomorrow",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "Consulting",
    },
    {
      id: "flipkart",
      name: "Flipkart",
      owner: "Neha Sharma",
      lastActivity: "2 days ago",
      nextAction: "Interview feedback",
      nextActionDue: "Overdue",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 4,
      sector: "E-commerce",
    },
    {
      id: "google",
      name: "Google",
      owner: "Priya Singh",
      lastActivity: "5 days ago",
      nextAction: "Send PPT",
      nextActionDue: "Overdue",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "Tech",
    },
    {
      id: "microsoft",
      name: "Microsoft",
      owner: "Amit Patel",
      lastActivity: "1 week ago",
      nextAction: "Confirm session",
      nextActionDue: "Overdue",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "Tech",
    },
    {
      id: "mckinsey",
      name: "McKinsey & Company",
      owner: "Rahul Kumar",
      lastActivity: "Today 9:00 AM",
      nextAction: "Pre-placement talk",
      nextActionDue: "Next week",
      status: "Hot",
      rolesReceived: 4,
      meetingsDone: 7,
      sector: "Consulting",
    },
    {
      id: "bcg",
      name: "Boston Consulting Group",
      owner: "Rahul Kumar",
      lastActivity: "3 days ago",
      nextAction: "Role discussion",
      nextActionDue: "5 Sep",
      status: "Warm",
      rolesReceived: 3,
      meetingsDone: 4,
      sector: "Consulting",
    },
    {
      id: "bain",
      name: "Bain & Company",
      owner: "Priya Singh",
      lastActivity: "1 week ago",
      nextAction: "Follow-up call",
      nextActionDue: "2 Sep",
      status: "Cold",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "Consulting",
    },
    {
      id: "goldman",
      name: "Goldman Sachs",
      owner: "Amit Patel",
      lastActivity: "4 days ago",
      nextAction: "Send batch profile",
      nextActionDue: "30 Aug",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "Finance",
    },
    {
      id: "jpmorgan",
      name: "JP Morgan",
      owner: "Amit Patel",
      lastActivity: "Yesterday",
      nextAction: "Campus visit",
      nextActionDue: "Next Monday",
      status: "Hot",
      rolesReceived: 3,
      meetingsDone: 4,
      sector: "Finance",
    },
    {
      id: "morgan-stanley",
      name: "Morgan Stanley",
      owner: "Neha Sharma",
      lastActivity: "2 weeks ago",
      nextAction: "Re-engage",
      nextActionDue: "Overdue",
      status: "Cold",
      rolesReceived: 0,
      meetingsDone: 1,
      sector: "Finance",
    },
    {
      id: "uber",
      name: "Uber",
      owner: "Rahul Kumar",
      lastActivity: "3 days ago",
      nextAction: "Interview schedule",
      nextActionDue: "Tomorrow",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "Tech",
    },
    {
      id: "swiggy",
      name: "Swiggy",
      owner: "Neha Sharma",
      lastActivity: "1 week ago",
      nextAction: "Role confirmation",
      nextActionDue: "31 Aug",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 3,
      sector: "E-commerce",
    },
    {
      id: "zomato",
      name: "Zomato",
      owner: "Priya Singh",
      lastActivity: "5 days ago",
      nextAction: "PPT review",
      nextActionDue: "1 Sep",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "E-commerce",
    },
    {
      id: "ola",
      name: "Ola",
      owner: "Amit Patel",
      lastActivity: "10 days ago",
      nextAction: "Follow-up",
      nextActionDue: "Overdue",
      status: "Cold",
      rolesReceived: 0,
      meetingsDone: 1,
      sector: "Tech",
    },
    {
      id: "paytm",
      name: "Paytm",
      owner: "Rahul Kumar",
      lastActivity: "1 week ago",
      nextAction: "Batch profile",
      nextActionDue: "3 Sep",
      status: "Cold",
      rolesReceived: 0,
      meetingsDone: 1,
      sector: "Fintech",
    },
    {
      id: "cred",
      name: "CRED",
      owner: "Neha Sharma",
      lastActivity: "Yesterday",
      nextAction: "Role discussion",
      nextActionDue: "Tomorrow",
      status: "Hot",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "Fintech",
    },
    {
      id: "razorpay",
      name: "Razorpay",
      owner: "Priya Singh",
      lastActivity: "3 days ago",
      nextAction: "Guest session",
      nextActionDue: "Next week",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "Fintech",
    },
    {
      id: "unilever",
      name: "Unilever",
      owner: "Amit Patel",
      lastActivity: "1 week ago",
      nextAction: "Campus visit",
      nextActionDue: "10 Sep",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "FMCG",
    },
    {
      id: "pg",
      name: "Procter & Gamble",
      owner: "Rahul Kumar",
      lastActivity: "4 days ago",
      nextAction: "Interview setup",
      nextActionDue: "2 Sep",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 4,
      sector: "FMCG",
    },
    {
      id: "hul",
      name: "Hindustan Unilever",
      owner: "Neha Sharma",
      lastActivity: "Today 11:00 AM",
      nextAction: "Role finalization",
      nextActionDue: "Tomorrow",
      status: "Hot",
      rolesReceived: 3,
      meetingsDone: 5,
      sector: "FMCG",
    },
    {
      id: "itc",
      name: "ITC Limited",
      owner: "Priya Singh",
      lastActivity: "2 days ago",
      nextAction: "PPT submission",
      nextActionDue: "30 Aug",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "FMCG",
    },
    {
      id: "tata-steel",
      name: "Tata Steel",
      owner: "Amit Patel",
      lastActivity: "1 week ago",
      nextAction: "Follow-up",
      nextActionDue: "5 Sep",
      status: "Cold",
      rolesReceived: 0,
      meetingsDone: 1,
      sector: "Manufacturing",
    },
    {
      id: "mahindra",
      name: "Mahindra & Mahindra",
      owner: "Rahul Kumar",
      lastActivity: "5 days ago",
      nextAction: "Role discussion",
      nextActionDue: "1 Sep",
      status: "Warm",
      rolesReceived: 1,
      meetingsDone: 2,
      sector: "Manufacturing",
    },
    {
      id: "l-and-t",
      name: "Larsen & Toubro",
      owner: "Neha Sharma",
      lastActivity: "3 days ago",
      nextAction: "Campus visit",
      nextActionDue: "Next week",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "Manufacturing",
    },
    {
      id: "reliance",
      name: "Reliance Industries",
      owner: "Priya Singh",
      lastActivity: "Yesterday",
      nextAction: "Interview schedule",
      nextActionDue: "Tomorrow",
      status: "Hot",
      rolesReceived: 3,
      meetingsDone: 4,
      sector: "Conglomerate",
    },
    {
      id: "adani",
      name: "Adani Group",
      owner: "Amit Patel",
      lastActivity: "1 week ago",
      nextAction: "Follow-up",
      nextActionDue: "2 Sep",
      status: "Cold",
      rolesReceived: 0,
      meetingsDone: 1,
      sector: "Conglomerate",
    },
    {
      id: "infosys",
      name: "Infosys",
      owner: "Rahul Kumar",
      lastActivity: "Today",
      nextAction: "Application review",
      nextActionDue: "Today",
      status: "Hot",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "IT Services",
    },
    {
      id: "tcs",
      name: "Tata Consultancy Services",
      owner: "Neha Sharma",
      lastActivity: "2 days ago",
      nextAction: "Guest session",
      nextActionDue: "Next week",
      status: "Warm",
      rolesReceived: 2,
      meetingsDone: 3,
      sector: "IT Services",
    },
  ]

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase())
    if (!matchesSearch) return false

    switch (filterParam) {
      case "hot":
        return company.status === "Hot"
      case "warm":
        return company.status === "Warm"
      case "cold":
        return company.status === "Cold"
      case "active":
        return company.status === "Hot" || company.status === "Warm"
      case "roles":
        return company.rolesReceived > 0
      case "meetings":
        return company.meetingsDone > 0
      default:
        return true
    }
  })

  const handleCompanyClick = (companyId: string) => {
    router.push(`/dashboard/companies/${companyId}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot":
        return "bg-black text-white"
      case "Warm":
        return "bg-neutral-500 text-white"
      case "Cold":
        return "bg-neutral-300 text-black"
      default:
        return "bg-neutral-200 text-black"
    }
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Companies (Accounts)</h1>
          <p className="text-sm text-neutral-600 mt-1">
            {filteredCompanies.length} companies {filterParam !== "all" && `(filtered: ${filterParam})`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent"
          >
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
            <Plus className="w-4 h-4 mr-1" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-neutral-300"
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent"
        >
          <Filter className="w-4 h-4 mr-1" />
          Filters
        </Button>
      </div>

      {/* Companies Table */}
      <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">
                  Company Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">
                  Assigned Owner
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">
                  Last Activity
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase tracking-wide">
                  Next Action Due
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase tracking-wide">
                  Status
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase tracking-wide">
                  Roles Received
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase tracking-wide">
                  Meetings Done
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-black uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredCompanies.map((company) => (
                <tr
                  key={company.id}
                  onClick={() => handleCompanyClick(company.id)}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-medium text-black">{company.name}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{company.owner}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{company.lastActivity}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">
                    {company.nextActionDue}
                    {company.nextActionDue === "Overdue" && (
                      <span className="ml-1 text-xs bg-black text-white px-1.5 py-0.5 rounded">!</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(company.status)}`}
                    >
                      {company.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-medium text-black">{company.rolesReceived}</td>
                  <td className="px-4 py-3 text-center text-sm font-medium text-black">{company.meetingsDone}</td>
                  <td className="px-4 py-3 text-right">
                    <ChevronRight className="w-4 h-4 text-neutral-400 inline-block" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
