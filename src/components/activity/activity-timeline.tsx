"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Copy } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const activities = [
  {
    id: "1",
    type: "mint",
    title: "NFT Minted",
    description: "Midnight Echo (#001) successfully minted",
    txHash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: "completed",
    amount: null,
    icon: "🎵",
  },
  {
    id: "2",
    type: "cw20_deploy",
    title: "CW20 Token Deployed",
    description: "ECHO tokens created with 1,000,000 total supply",
    txHash: "0x2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890ab",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    status: "completed",
    amount: null,
    icon: "💎",
  },
  {
    id: "3",
    type: "splitter_deploy",
    title: "Revenue Splitter Deployed",
    description: "Pro-rata splitter configured for ECHO holders",
    txHash: "0x3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcd",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    status: "completed",
    amount: null,
    icon: "💰",
  },
  {
    id: "4",
    type: "distribution",
    title: "Revenue Distributed",
    description: "Monthly revenue distributed to 1,247 token holders",
    txHash: "0x4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    status: "completed",
    amount: "$2,450.75",
    icon: "📊",
  },
  {
    id: "5",
    type: "listing",
    title: "Asset Listed",
    description: "Midnight Echo listed on marketplace for 250 AAN",
    txHash: "0x5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    status: "completed",
    amount: "250 AAN",
    icon: "🏪",
  },
  {
    id: "6",
    type: "sale",
    title: "Asset Sold",
    description: "Digital Dreams license sold to andr1...xyz",
    txHash: "0x6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    status: "completed",
    amount: "1,500 AAN",
    icon: "💸",
  },
  {
    id: "7",
    type: "bid",
    title: "Bid Placed",
    description: "New bid on Quantum Algorithm auction",
    txHash: "0x7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef123456",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    status: "completed",
    amount: "2,200 AAN",
    icon: "🔨",
  },
  {
    id: "8",
    type: "vesting",
    title: "Vesting Event",
    description: "25% of DREAM tokens unlocked for team",
    txHash: "0x890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567",
    timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    status: "completed",
    amount: "250,000 DREAM",
    icon: "🔓",
  },
]

export function ActivityTimeline() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 8)}...${hash.slice(-8)}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-accent"
      case "pending":
        return "bg-secondary"
      case "failed":
        return "bg-destructive"
      default:
        return "bg-muted"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
        <CardDescription>All transactions and events across your IP assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-4 pb-4 border-b last:border-b-0">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                  {activity.icon}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <div className="text-right space-y-1">
                    {activity.amount && <p className="font-medium text-sm">{activity.amount}</p>}
                    <Badge className={`text-xs ${getStatusColor(activity.status)}`}>{activity.status}</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{truncateHash(activity.txHash)}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0"
                      onClick={() => copyToClipboard(activity.txHash)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                  <span>{formatDistanceToNow(activity.timestamp, { addSuffix: true })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
