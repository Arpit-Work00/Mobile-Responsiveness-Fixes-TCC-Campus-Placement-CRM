import { Suspense } from "react"
import CompaniesClient from "./companies-client"

export default function CompaniesPage() {
  return (
    <Suspense fallback={null}>
      <CompaniesClient />
    </Suspense>
  )
}
