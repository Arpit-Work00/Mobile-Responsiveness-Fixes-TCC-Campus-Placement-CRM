import { Suspense } from "react"
import PlacementOfficerDashboard from "@/components/placement-officer-dashboard"

export default function PlacementOfficerPage() {
  return (
    <Suspense fallback={null}>
      <PlacementOfficerDashboard />
    </Suspense>
  )
}
