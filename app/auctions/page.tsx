import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ListingGrid } from "@/components/marketplace/listing-grid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, Users, Gavel } from "lucide-react"

export default function AuctionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Auctions</h1>
              <p className="text-lg text-muted-foreground">Bid on exclusive intellectual property rights</p>
            </div>

            {/* Auction Stats */}
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Auctions</CardTitle>
                  <Gavel className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">+3 from yesterday</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ending Soon</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">Within 24 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Bidders</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,456</div>
                  <p className="text-xs text-muted-foreground">Across all auctions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Bid Increase</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15%</div>
                  <p className="text-xs text-muted-foreground">From starting price</p>
                </CardContent>
              </Card>
            </div>

            {/* Featured Auction */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Gavel className="h-5 w-5 text-primary" />
                      Featured Auction
                    </CardTitle>
                    <CardDescription>High-value IP asset ending soon</CardDescription>
                  </div>
                  <Badge className="bg-destructive">Ending in 2h 15m</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Quantum Algorithm Patent</h3>
                    <p className="text-sm text-muted-foreground">Revolutionary quantum computing algorithm</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Software</Badge>
                      <Badge className="bg-accent">AI: High</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Bid</p>
                      <p className="text-2xl font-bold text-primary">2,200 AAN</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Bids: 47</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-center">
                    <img src="/placeholder.svg?height=120&width=200" alt="Quantum Algorithm" className="rounded-lg" />
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* All Auctions */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">All Auctions</h2>
              <ListingGrid />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
