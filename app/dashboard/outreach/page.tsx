import { Suspense } from "react"
import OutreachClient from "./outreach-client"

export default function OutreachPage() {
  return (
    <Suspense fallback={null}>
      <OutreachClient />
    </Suspense>
  )
}
