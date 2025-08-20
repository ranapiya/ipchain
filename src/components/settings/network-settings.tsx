"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Droplets } from "lucide-react"
import { useState } from "react"

export function NetworkSettings() {
  const [selectedNetwork, setSelectedNetwork] = useState("testnet")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Network Configuration</CardTitle>
          <CardDescription>Select your preferred Andromeda network</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Network</label>
            <Select value={selectedNetwork} onValueChange={setSelectedNetwork}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="testnet">Testnet</SelectItem>
                <SelectItem value="mainnet">Mainnet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Current Network</p>
              <p className="text-sm text-muted-foreground">Andromeda {selectedNetwork}</p>
            </div>
            <Badge variant={selectedNetwork === "testnet" ? "secondary" : "default"}>
              {selectedNetwork === "testnet" ? "Test" : "Live"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Developer Tools</CardTitle>
          <CardDescription>Useful links and resources for development</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <Button variant="outline" className="justify-start bg-transparent">
              <Droplets className="mr-2 h-4 w-4" />
              Test Faucet
              <ExternalLink className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <ExternalLink className="mr-2 h-4 w-4" />
              Block Explorer
              <ExternalLink className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <ExternalLink className="mr-2 h-4 w-4" />
              Andromeda Docs
              <ExternalLink className="ml-auto h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
