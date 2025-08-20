"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { useState } from "react"

export function Step2Fractional() {
  const [allocation, setAllocation] = useState({
    creator: 60,
    treasury: 20,
    sale: 20,
  })

  const pieData = [
    { name: "Creator", value: allocation.creator, color: "#89CFF0" },
    { name: "Treasury", value: allocation.treasury, color: "#10b981" },
    { name: "Sale", value: allocation.sale, color: "#f59e0b" },
  ]

  const totalAllocation = allocation.creator + allocation.treasury + allocation.sale

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Link IP NFT</CardTitle>
            <CardDescription>Select the NFT to fractionalize</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>IP NFT</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select minted NFT" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="001">Midnight Echo (#001)</SelectItem>
                  <SelectItem value="002">Digital Dreams (#002)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Token Configuration</CardTitle>
            <CardDescription>Configure your CW20 fractional tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="token-name">Token Name</Label>
                <Input id="token-name" placeholder="Midnight Echo Tokens" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="symbol">Symbol</Label>
                <Input id="symbol" placeholder="ECHO" />
                <p className="text-xs text-muted-foreground">Auto-suggested from title</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="total-supply">Total Supply</Label>
                <Input id="total-supply" type="number" placeholder="1000000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="decimals">Decimals</Label>
                <Input id="decimals" type="number" value="6" readOnly />
                <p className="text-xs text-muted-foreground">Recommended: 6</p>
              </div>
            </div>

            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <h4 className="font-medium text-accent mb-2">Ownership Structure</h4>
              <p className="text-sm text-muted-foreground">
                Your ownership percentage = Your CW20 token share of total supply
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribution Plan</CardTitle>
            <CardDescription>How will tokens be distributed?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Distribution Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="airdrop">Airdrop</SelectItem>
                  <SelectItem value="vesting">Vesting Schedule</SelectItem>
                  <SelectItem value="direct-sale">Direct Sale</SelectItem>
                  <SelectItem value="mixed">Mixed Approach</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Initial Allocation</CardTitle>
            <CardDescription>Define how tokens will be initially allocated</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="creator-percent">Creator %</Label>
                <Input
                  id="creator-percent"
                  type="number"
                  min="0"
                  max="100"
                  value={allocation.creator}
                  onChange={(e) => setAllocation({ ...allocation, creator: Number(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="treasury-percent">Treasury %</Label>
                <Input
                  id="treasury-percent"
                  type="number"
                  min="0"
                  max="100"
                  value={allocation.treasury}
                  onChange={(e) => setAllocation({ ...allocation, treasury: Number(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sale-percent">Sale %</Label>
                <Input
                  id="sale-percent"
                  type="number"
                  min="0"
                  max="100"
                  value={allocation.sale}
                  onChange={(e) => setAllocation({ ...allocation, sale: Number(e.target.value) })}
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total:</span>
                <Badge variant={totalAllocation === 100 ? "secondary" : "destructive"}>{totalAllocation}%</Badge>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Validation</CardTitle>
            <CardDescription>Review your token configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Token Name:</span>
                <span className="font-medium">Midnight Echo Tokens</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Symbol:</span>
                <span className="font-medium">ECHO</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Supply:</span>
                <span className="font-medium">1,000,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Allocation Valid:</span>
                <Badge variant={totalAllocation === 100 ? "secondary" : "destructive"}>
                  {totalAllocation === 100 ? "✓ Valid" : "✗ Invalid"}
                </Badge>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90" disabled={totalAllocation !== 100}>
              Deploy CW20 Token
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
