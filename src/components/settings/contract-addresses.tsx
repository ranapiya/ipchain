"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, Edit, Save, X } from "lucide-react"
import { useState } from "react"

const contractAddresses = [
  {
    id: "cw721",
    name: "CW721 Collection",
    description: "NFT collection contract for IP assets",
    address: "andr1qwertyuiopasdfghjklzxcvbnm1234567890abcdef",
    editable: true,
    status: "active",
  },
  {
    id: "cw20",
    name: "CW20 Token",
    description: "Fractional ownership tokens",
    address: "andr1asdfghjklqwertyuiopzxcvbnm1234567890abcdef",
    editable: true,
    status: "active",
  },
  {
    id: "splitter",
    name: "Revenue Splitter",
    description: "Automated revenue distribution",
    address: "andr1zxcvbnmasdfghjklqwertyuiop1234567890abcdef",
    editable: true,
    status: "active",
  },
  {
    id: "vesting",
    name: "Vesting Contract",
    description: "Token vesting schedules",
    address: "andr1qazwsxedcrfvtgbyhnujmikolp1234567890abcdef",
    editable: true,
    status: "active",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    description: "Fixed price listings",
    address: "andr1plokijuhygtfrdeswaqzxcvbnm1234567890abcdef",
    editable: false,
    status: "system",
  },
  {
    id: "auction",
    name: "Auction House",
    description: "Auction-based sales",
    address: "andr1mnbvcxzlkjhgfdsapoiuytrewq1234567890abcdef",
    editable: false,
    status: "system",
  },
]

export function ContractAddresses() {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")

  const startEdit = (id: string, currentAddress: string) => {
    setEditingId(id)
    setEditValue(currentAddress)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditValue("")
  }

  const saveEdit = () => {
    // Here you would save the new address
    setEditingId(null)
    setEditValue("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contract Addresses</CardTitle>
       <CardDescription>Manage your project&apos;s smart contract addresses</CardDescription>

      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contractAddresses.map((contract) => (
            <div key={contract.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{contract.name}</h4>
                  <Badge variant={contract.status === "active" ? "secondary" : "outline"} className="text-xs">
                    {contract.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{contract.description}</p>
                <div className="flex items-center gap-2">
                  {editingId === contract.id ? (
                    <div className="flex items-center gap-2">
                      <Input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="font-mono text-xs"
                        placeholder="Enter contract address..."
                      />
                      <Button size="sm" onClick={saveEdit}>
                        <Save className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={cancelEdit}>
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <code className="text-xs bg-muted px-2 py-1 rounded">{contract.address}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(contract.address)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                      {contract.editable && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => startEdit(contract.id, contract.address)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
