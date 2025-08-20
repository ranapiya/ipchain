import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ActivityTimeline } from "@/components/activity/activity-timeline"

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Activity</h1>
              <p className="text-lg text-muted-foreground">
                Track all transactions and events across your IP portfolio
              </p>
            </div>

            <ActivityTimeline />
          </div>
        </main>
      </div>
    </div>
  )
}
