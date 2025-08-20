import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp } from "lucide-react"

const positions = [
  {
    symbol: "ECHO",
    name: "Midnight Echo Tokens",
    balance: "15,000",
    percentage: "1.5%",
    claimable: "$245.50",
    lastClaim: "2 days ago",
  },
  {
    symbol: "DREAM",
    name: "Digital Dreams Tokens",
    balance: "8,500",
    percentage: "0.85%",
    claimable: "$0.00",
    lastClaim: "Never",
  },
  {
    symbol: "SUNSET",
    name: "Sunset Boulevard Tokens",
    balance: "22,100",
    percentage: "2.21%",
    claimable: "$89.20",
    lastClaim: "1 week ago",
  },
]

export function PositionsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Positions</CardTitle>
        <CardDescription>Your CW20 token holdings and claimable rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {positions.map((position) => (
            <div
              key={position.symbol}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{position.symbol}</h4>
                    <Badge variant="outline" className="text-xs">
                      {position.percentage}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{position.name}</p>
                  <p className="text-xs text-muted-foreground">Balance: {position.balance}</p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="font-medium text-sm">
                  {position.claimable === "$0.00" ? (
                    <span className="text-muted-foreground">No rewards</span>
                  ) : (
                    <span className="text-accent">{position.claimable}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">Last: {position.lastClaim}</p>
                {position.claimable !== "$0.00" && (
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Claim
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
