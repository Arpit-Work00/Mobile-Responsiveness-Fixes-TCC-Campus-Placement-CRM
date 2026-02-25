import { Suspense } from "react"
import LeadsDatabase from "@/components/leads-database"

export default function LeadsPage() {
  return (
    <Suspense fallback={null}>
      <LeadsDatabase />
    </Suspense>
  )
}
