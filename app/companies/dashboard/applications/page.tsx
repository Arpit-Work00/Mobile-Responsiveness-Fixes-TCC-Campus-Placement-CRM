import { Suspense } from "react"
import ApplicationsClient from "./applications-client"

export default function ApplicationsPage() {
  return (
    <Suspense fallback={null}>
      <ApplicationsClient />
    </Suspense>
  )
}
