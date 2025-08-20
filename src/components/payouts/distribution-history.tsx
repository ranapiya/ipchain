"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Copy } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const distributions = [
  {
    id: "1",
    txHash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890",
    blockTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    amount: "$2,450.75",
    recipients: 1247,
    status: "completed",
    gasUsed: "0.45 AAN",
  },
  {
    id: "2",
    txHash: "0x2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890ab",
    blockTime: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000), // 9 days ago
    amount: "$1,890.25",
    recipients: 1203,
    status: "completed",
    gasUsed: "0.42 AAN",
  },
  {
    id: "3",
    txHash: "0x3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcd",
    blockTime: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000), // 16 days ago
    amount: "$3,120.50",
    recipients: 1156,
    status: "completed",
    gasUsed: "0.38 AAN",
  },
  {
    id: "4",
    txHash: "0x4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    blockTime: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000), // 23 days ago
    amount: "$2,780.90",
    recipients: 1089,
    status: "completed",
    gasUsed: "0.41 AAN",
  },
]

export function DistributionHistory() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 8)}...${hash.slice(-8)}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribution History</CardTitle>
        <CardDescription>Recent revenue distributions to token holders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {distributions.map((distribution) => (
            <div
              key={distribution.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm">{truncateHash(distribution.txHash)}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => copyToClipboard(distribution.txHash)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{formatDistanceToNow(distribution.blockTime, { addSuffix: true })}</span>
                  <span>•</span>
                  <span>{distribution.recipients} recipients</span>
                  <span>•</span>
                  <span>Gas: {distribution.gasUsed}</span>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="font-medium text-lg">{distribution.amount}</div>
                <Badge variant="secondary" className="text-xs">
                  {distribution.status}
                </Badge>
              </div>
            </div>
          ))}

          {distributions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No distributions yet</p>
              <p className="text-sm">Revenue distributions will appear here once you start distributing payments</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
