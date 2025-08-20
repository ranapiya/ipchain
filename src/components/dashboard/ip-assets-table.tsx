import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, ExternalLink, Settings } from "lucide-react"

const ipAssets = [
  {
    id: "001",
    title: "Midnight Echo",
    type: "Song",
    status: "Live Split",
    secondaryStatus: "Fractionalized",
    tokenId: "#001",
    holders: 247,
    revenue: "$2,450",
    needsSetup: false,
  },
  {
    id: "002",
    title: "Digital Dreams",
    type: "Patent",
    status: "Minted",
    secondaryStatus: null,
    tokenId: "#002",
    holders: 0,
    revenue: "$0",
    needsSetup: true,
  },
  {
    id: "003",
    title: "Sunset Boulevard",
    type: "Film",
    status: "Listed",
    secondaryStatus: "Fractionalized",
    tokenId: "#003",
    holders: 89,
    revenue: "$1,200",
    needsSetup: false,
  },
]

export function IPAssetsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My IP Assets</CardTitle>
        <CardDescription>Track the status and performance of your intellectual property</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ipAssets.map((asset) => (
            <div
              key={asset.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{asset.title}</h4>
                  <span className="text-sm text-muted-foreground">({asset.type})</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Token ID: {asset.tokenId}</span>
                  <span>•</span>
                  <span>{asset.holders} holders</span>
                  <span>•</span>
                  <span>{asset.revenue} revenue</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {asset.needsSetup && (
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    <Settings className="mr-1 h-3 w-3" />
                    Continue Setup
                  </Button>
                )}
                <div className="flex gap-1">
                  {asset.secondaryStatus && (
                    <Badge variant="secondary" className="text-xs">
                      {asset.secondaryStatus}
                    </Badge>
                  )}
                  <Badge
                    className={`text-xs ${
                      asset.status === "Live Split"
                        ? "bg-accent"
                        : asset.status === "Listed"
                          ? "bg-secondary"
                          : "bg-muted"
                    }`}
                  >
                    {asset.status}
                  </Badge>
                </div>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}

          {/* Empty state CTA */}
          <div className="text-center py-8 border-2 border-dashed border-muted rounded-lg">
            <div className="space-y-3">
              <p className="text-muted-foreground">Ready to tokenize your next IP asset?</p>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Start New IP Flow
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
