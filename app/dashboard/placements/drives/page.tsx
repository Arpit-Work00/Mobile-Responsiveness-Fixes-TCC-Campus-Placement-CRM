"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus, ChevronRight, Users, Building2, Briefcase, CheckCircle2 } from "lucide-react"

export default function PlacementDrivesPage() {
  const router = useRouter()

  const drives = [
    {
      id: "finals-2025",
      name: "Final Placements 2024-25",
      status: "Active",
      studentsCount: 380,
      companiesCount: 120,
      rolesCount: 45,
      offersCount: 28,
      startDate: "15 Sep 2024",
      endDate: "15 Dec 2024",
    },
    {
      id: "summers-2025",
      name: "Summer Internships 2025",
      status: "Upcoming",
      studentsCount: 420,
      companiesCount: 0,
      rolesCount: 0,
      offersCount: 0,
      startDate: "1 Feb 2025",
      endDate: "30 Apr 2025",
    },
    {
      id: "finals-2024",
      name: "Final Placements 2023-24",
      status: "Completed",
      studentsCount: 360,
      companiesCount: 145,
      rolesCount: 82,
      offersCount: 345,
      startDate: "15 Sep 2023",
      endDate: "15 Dec 2023",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Placement Drives</h1>
          <p className="text-sm text-neutral-600 mt-1">Manage placement cycles and track progress</p>
        </div>
        <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
          <Plus className="w-4 h-4 mr-1" />
          Create Drive
        </Button>
      </div>

      {/* Drives Grid */}
      <div className="grid gap-4">
        {drives.map((drive) => (
          <div
            key={drive.id}
            onClick={() => router.push(`/dashboard/placements/drives/${drive.id}`)}
            className="border border-neutral-200 rounded-lg p-6 bg-white hover:border-neutral-300 cursor-pointer transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-black">{drive.name}</h2>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    drive.status === 'Active' ? 'bg-black text-white' :
                    drive.status === 'Upcoming' ? 'bg-neutral-200 text-black' :
                    'bg-neutral-100 text-neutral-600'
                  }`}>
                    {drive.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mt-1">
                  {drive.startDate} - {drive.endDate}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-neutral-400" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xl font-bold text-black">{drive.studentsCount}</div>
                  <div className="text-xs text-neutral-600">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xl font-bold text-black">{drive.companiesCount}</div>
                  <div className="text-xs text-neutral-600">Companies</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xl font-bold text-black">{drive.rolesCount}</div>
                  <div className="text-xs text-neutral-600">Roles</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xl font-bold text-black">{drive.offersCount}</div>
                  <div className="text-xs text-neutral-600">Offers</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
