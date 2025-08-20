import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, Clock, TrendingUp } from "lucide-react"

export function UnsplitRevenueCard() {
  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Unsplit Revenue
            </CardTitle>
            <CardDescription>Revenue ready for distribution to token holders</CardDescription>
          </div>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            Ready
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-background rounded-lg">
            <div className="text-2xl font-bold text-foreground">$3,240.50</div>
            <p className="text-sm text-muted-foreground">Total Available</p>
          </div>
          <div className="text-center p-4 bg-background rounded-lg">
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-sm text-muted-foreground">Token Holders</p>
          </div>
          <div className="text-center p-4 bg-background rounded-lg">
            <div className="text-2xl font-bold text-foreground">$2.60</div>
            <p className="text-sm text-muted-foreground">Avg per Holder</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Distribution Mode:</span>
            <Badge variant="outline">Pro-rata to CW20 holders</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Last Distribution:</span>
            <span className="font-medium">7 days ago</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Frequency:</span>
            <span className="font-medium">Monthly</span>
          </div>
        </div>

        <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <div className="flex items-start gap-2">
            <Users className="h-4 w-4 text-accent mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-accent mb-1">Pro-rata Distribution</p>
              <p className="text-muted-foreground">
                Revenue will be distributed proportionally based on CW20 token holdings at the time of distribution.
                Calculation is performed on-chain using current token balances.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            <TrendingUp className="mr-2 h-4 w-4" />
            Distribute Now
          </Button>
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Schedule
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
