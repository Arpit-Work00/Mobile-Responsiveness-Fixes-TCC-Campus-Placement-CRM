import { Suspense } from "react"
import AccountsClient from "./accounts-client"

export default function AccountsPage() {
  return (
    <Suspense fallback={null}>
      <AccountsClient />
    </Suspense>
  )
}
