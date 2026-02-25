import { Suspense } from "react"
import OpportunitiesClient from "./opportunities-client"

export default function OpportunitiesPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <OpportunitiesClient />
    </Suspense>
  )
}
