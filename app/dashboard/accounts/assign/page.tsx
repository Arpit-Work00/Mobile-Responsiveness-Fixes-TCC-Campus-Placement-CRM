"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Building2 } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  { id: 1, name: "Rahul Sharma", assigned: 25, load: "high" },
  { id: 2, name: "Priya Patel", assigned: 22, load: "high" },
  { id: 3, name: "Amit Kumar", assigned: 18, load: "medium" },
  { id: 4, name: "Sneha Reddy", assigned: 15, load: "medium" },
]

const companies = [
  { id: 1, name: "McKinsey & Company", sector: "Consulting", currentOwner: "Rahul Sharma", status: "hot" },
  { id: 2, name: "Amazon India", sector: "Technology", currentOwner: "Priya Patel", status: "warm" },
  { id: 3, name: "HDFC Bank", sector: "BFSI", currentOwner: "Unassigned", status: "cold" },
  { id: 4, name: "Deloitte", sector: "Consulting", currentOwner: "Amit Kumar", status: "warm" },
  { id: 5, name: "Flipkart", sector: "E-commerce", currentOwner: "Priya Patel", status: "warm" },
  { id: 6, name: "TCS", sector: "IT Services", currentOwner: "Unassigned", status: "cold" },
  { id: 7, name: "Goldman Sachs", sector: "BFSI", currentOwner: "Sneha Reddy", status: "hot" },
  { id: 8, name: "Bain & Company", sector: "Consulting", currentOwner: "Rahul Sharma", status: "warm" },
]

export default function AssignCompaniesPage() {
  const router = useRouter()
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
  const [assignTo, setAssignTo] = useState("")

  const handleSelectAll = () => {
    if (selectedCompanies.length === companies.length) {
      setSelectedCompanies([])
    } else {
      setSelectedCompanies(companies.map((c) => c.id))
    }
  }

  const handleSelectCompany = (id: number) => {
    if (selectedCompanies.includes(id)) {
      setSelectedCompanies(selectedCompanies.filter((cid) => cid !== id))
    } else {
      setSelectedCompanies([...selectedCompanies, id])
    }
  }

  const handleAssign = () => {
    if (selectedCompanies.length === 0 || !assignTo) {
      alert("Please select companies and a team member")
      return
    }
    // In real app, this would call an API
    alert(`Assigned ${selectedCompanies.length} companies to ${assignTo}`)
    router.push("/dashboard/accounts")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/accounts">
          <Button variant="outline" size="icon" className="bg-white border-black">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-black">Assign Companies to Team</h1>
          <p className="text-sm text-neutral-600">Select companies and assign them to placecom members</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border border-neutral-200">
            <CardHeader className="border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-black">Company List</CardTitle>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleSelectAll}
                  className="border-black text-black hover:bg-neutral-100 bg-transparent"
                >
                  {selectedCompanies.length === companies.length ? "Deselect All" : "Select All"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-neutral-200">
                {companies.map((company) => (
                  <div key={company.id} className="p-4 flex items-center gap-4 hover:bg-neutral-50">
                    <Checkbox
                      checked={selectedCompanies.includes(company.id)}
                      onCheckedChange={() => handleSelectCompany(company.id)}
                      className="border-black data-[state=checked]:bg-black"
                    />
                    <Building2 className="w-5 h-5 text-black flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-black truncate">{company.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-neutral-600">{company.sector}</span>
                        <span className="text-xs text-neutral-400">•</span>
                        <span className="text-xs text-neutral-600">Current: {company.currentOwner}</span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        company.status === "hot"
                          ? "bg-black text-white border-black"
                          : company.status === "warm"
                            ? "bg-neutral-200 text-black border-neutral-300"
                            : "bg-white text-neutral-600 border-neutral-300"
                      }`}
                    >
                      {company.status.toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-2 border-black sticky top-6">
            <CardHeader className="border-b border-neutral-200">
              <CardTitle className="text-base font-bold text-black">Assignment Action</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-black mb-2">Selected Companies</p>
                <div className="text-3xl font-bold text-black">{selectedCompanies.length}</div>
              </div>

              <div>
                <label className="text-sm font-medium text-black block mb-2">Assign To</label>
                <Select value={assignTo} onValueChange={setAssignTo}>
                  <SelectTrigger className="border-neutral-300">
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamMembers.map((member) => (
                      <SelectItem key={member.id} value={member.name}>
                        <div className="flex items-center justify-between w-full">
                          <span>{member.name}</span>
                          <div className="flex items-center gap-2 ml-4">
                            <span className="text-xs text-neutral-500">({member.assigned} accounts)</span>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                member.load === "high"
                                  ? "bg-black text-white border-black"
                                  : "bg-neutral-100 text-black border-neutral-300"
                              }`}
                            >
                              {member.load.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-600 mb-3">
                  This will reassign the selected companies to the chosen team member. They will be notified of the
                  assignment.
                </p>
                <Button
                  onClick={handleAssign}
                  disabled={selectedCompanies.length === 0 || !assignTo}
                  className="w-full bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-300"
                >
                  Assign {selectedCompanies.length > 0 && `(${selectedCompanies.length})`}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-200 mt-4">
            <CardHeader>
              <CardTitle className="text-sm font-bold text-black">Team Load Status</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-black">{member.name}</p>
                      <p className="text-xs text-neutral-600">{member.assigned} accounts</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        member.load === "high"
                          ? "bg-black text-white border-black"
                          : "bg-neutral-100 text-black border-neutral-300"
                      }`}
                    >
                      {member.load.toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
