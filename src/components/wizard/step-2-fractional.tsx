"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"
import { executeContract } from "@/lib/andrjs/functions"
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient"
import { useAndromedaStore } from "@/zustand/andromeda"

export function Step2Fractional() {
  const client = useAndromedaClient()
  const { accounts } = useAndromedaStore()
  const user = accounts[0]

  // Sale form state
  const [exchangeRate, setExchangeRate] = useState("")
  const [duration, setDuration] = useState("")
  const [purchaseAmount, setPurchaseAmount] = useState("")
  const [recipient, setRecipient] = useState("")

  // Fake UI state
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [action, setAction] = useState<"sell" | "purchase" | null>(null)

  // ---- CONTRACT ADDRESSES ----
  const saleAdoAddress = "andr1cysxwmp05ccl2xxw5u9w0yvpu2faf06zsk5sj0j4vwned5x3pxcqnxdp2v"
  const cw20TokenAddress = "andr1nrg8ww3mw03wrv9vww9dw0rsr909esnq7pjul7z2z3zd728xd40q0r4tzy"

  // ---- Start Sale ----
  const startSale = async () => {
    setAction("sell")
    setStatus("loading")
    try {
      const msg = {
        send: {
          contract: saleAdoAddress,
          amount: purchaseAmount,
          msg: btoa(
            JSON.stringify({
              start_sale: {
                asset: { native: "uandr" },
                exchange_rate: exchangeRate,
                start_time: null,
                duration: duration ? Number(duration) : null,
              },
            })
          ),
        },
      }

      const res = await executeContract(client!, cw20TokenAddress, msg)
      console.log("Sale started:", res)

      setTimeout(() => setStatus("success"), 2000) // fake UI delay
    } catch (err) {
      console.error("Start Sale Error:", err)
      setTimeout(() => setStatus("error"), 1500)
    }
  }

  // ---- Purchase Tokens ----
  const purchaseTokens = async () => {
    setAction("purchase")
    setStatus("loading")
    try {
      const msg = {
        send: {
          contract: saleAdoAddress,
          amount: purchaseAmount,
          msg: btoa(
            JSON.stringify({
              purchase: {
                recipient: recipient || user.address,
              },
            })
          ),
        },
      }

      const res = await executeContract(client!, cw20TokenAddress, msg)
      console.log("Purchase success:", res)

      setTimeout(() => setStatus("success"), 2000)
    } catch (err) {
      console.error("Purchase Error:", err)
      setTimeout(() => setStatus("error"), 1500)
    }
  }

  // ---- Fake UI Feedback ----
  const renderStatus = () => {
    if (status === "loading")
      return (
        <div className="flex flex-col items-center space-y-2">
          <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
          <p className="text-gray-600">
            Processing {action === "sell" ? "sale..." : "purchase..."}
          </p>
        </div>
      )

    if (status === "success")
      return (
        <div className="flex flex-col items-center space-y-2 text-green-600">
          <CheckCircle2 className="h-6 w-6" />
          <p>{action === "sell" ? "Sale started!" : "Purchase completed!"}</p>
          <Button size="sm" onClick={() => setStatus("idle")}>Close</Button>
        </div>
      )

    if (status === "error")
      return (
        <div className="flex flex-col items-center space-y-2 text-red-600">
          <XCircle className="h-6 w-6" />
          <p>Something went wrong.</p>
          <Button size="sm" onClick={() => setStatus("idle")}>Close</Button>
        </div>
      )

    return null
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Start Sale */}
      <Card>
        <CardHeader>
          <CardTitle>Start Token Sale</CardTitle>
          <CardDescription>Fractionalize your NFT by selling CW20 tokens</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {status === "idle" && (
            <>
              <div>
                <Label>Exchange Rate (uandr per token)</Label>
                <Input
                  type="number"
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(e.target.value)}
                />
              </div>
              <div>
                <Label>Duration (ms)</Label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <Button onClick={startSale} className="bg-black text-white w-full">
                Start Sale
              </Button>
            </>
          )}
          {action === "sell" && renderStatus()}
        </CardContent>
      </Card>

      {/* Purchase Tokens */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase CW20 Tokens</CardTitle>
          <CardDescription>Invest in fractional shares of the NFT</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {status === "idle" && (
            <>
              <div>
                <Label>Amount to Spend</Label>
                <Input
                  type="number"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(e.target.value)}
                />
              </div>
              <div>
                <Label>Recipient Address</Label>
                <Input
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>
              <Button onClick={purchaseTokens} className="bg-black text-white w-full">
                Purchase
              </Button>
            </>
          )}
          {action === "purchase" && renderStatus()}
        </CardContent>
      </Card>
    </div>
  )
}
