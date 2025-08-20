import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { UnsplitRevenueCard } from "@/components/payouts/unsplit-revenue-card"
import { DistributionHistory } from "@/components/payouts/distribution-history"
import { RevenueAnalytics } from "@/components/payouts/revenue-analytics"

export default function PayoutsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Payouts & Revenue</h1>
              <p className="text-lg text-muted-foreground">Manage revenue distributions and track payment history</p>
            </div>

            <UnsplitRevenueCard />

            <RevenueAnalytics />

            <DistributionHistory />
          </div>
        </main>
      </div>
    </div>
  )
}
