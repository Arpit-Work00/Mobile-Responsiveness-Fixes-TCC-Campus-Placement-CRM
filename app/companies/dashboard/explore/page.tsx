import { Suspense } from "react"
import ExploreCampusesClient from "./explore-client"

export default function ExploreCampusesPage() {
  return (
    <Suspense fallback={null}>
      <ExploreCampusesClient />
    </Suspense>
  )
}
