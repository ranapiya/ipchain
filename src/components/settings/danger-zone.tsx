"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RotateCcw } from "lucide-react"
import { useState } from "react"

export function DangerZone() {
  const [isResetting, setIsResetting] = useState(false)

  const resetDemoData = async () => {
    setIsResetting(true)
    // Simulate reset process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsResetting(false)
    // Here you would actually reset the demo data
  }

  return (
    <Card className="border-destructive/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="h-5 w-5" />
          Danger Zone
        </CardTitle>
        <CardDescription>Irreversible actions that affect your project data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
          <h4 className="font-medium text-destructive mb-2">Reset Demo Data</h4>
          <p className="text-sm text-muted-foreground mb-3">
            This will reset all demo data including IP assets, transactions, and settings. This action cannot be undone.
          </p>
          <Button
            variant="destructive"
            onClick={resetDemoData}
            disabled={isResetting}
            className="bg-destructive hover:bg-destructive/90"
          >
            <RotateCcw className={`mr-2 h-4 w-4 ${isResetting ? "animate-spin" : ""}`} />
            {isResetting ? "Resetting..." : "Reset Demo Data"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
