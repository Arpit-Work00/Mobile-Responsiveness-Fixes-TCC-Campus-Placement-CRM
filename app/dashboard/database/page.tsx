import { Suspense } from "react"
import DatabaseClient from "./database-client"

export default function DatabasePage() {
  return (
    <Suspense fallback={null}>
      <DatabaseClient />
    </Suspense>
  )
}
