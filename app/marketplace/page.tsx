import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { MarketplaceFilters } from "@/components/marketplace/filters"
import { ListingGrid } from "@/components/marketplace/listing-grid"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid, List } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Marketplace</h1>
                <p className="text-lg text-muted-foreground">Discover and invest in intellectual property assets</p>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Grid className="h-4 w-4 mr-1" />
                  Grid
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4 mr-1" />
                  List
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fixed">Fixed Price</TabsTrigger>
                <TabsTrigger value="auctions">Auctions</TabsTrigger>
                <TabsTrigger value="ending">Ending Soon</TabsTrigger>
              </TabsList>

              <div className="flex gap-8 mt-6">
                <MarketplaceFilters />

                <div className="flex-1">
                  <TabsContent value="all" className="mt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Showing 6 of 247 results</p>
                      </div>
                      <ListingGrid />
                    </div>
                  </TabsContent>

                  <TabsContent value="fixed" className="mt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Showing fixed price listings</p>
                      </div>
                      <ListingGrid />
                    </div>
                  </TabsContent>

                  <TabsContent value="auctions" className="mt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Showing active auctions</p>
                      </div>
                      <ListingGrid />
                    </div>
                  </TabsContent>

                  <TabsContent value="ending" className="mt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Showing auctions ending soon</p>
                      </div>
                      <ListingGrid />
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
