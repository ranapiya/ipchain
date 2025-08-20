"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Building } from "lucide-react"
import { useState } from "react"

export function RoleSettings() {
  const [currentRole, setCurrentRole] = useState<"creator" | "investor">("creator")

  const switchRole = (role: "creator" | "investor") => {
    setCurrentRole(role)
    // Here you would update the UI to show/hide relevant menu items
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Role Settings</CardTitle>
        <CardDescription>Switch between creator and investor views</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div>
            <p className="font-medium">Current Role</p>
            <p className="text-sm text-muted-foreground">
              {currentRole === "creator" ? "Content Creator" : "IP Investor"}
            </p>
          </div>
          <Badge variant="secondary">{currentRole}</Badge>
        </div>

        <div className="grid gap-3">
          <Button
            variant={currentRole === "creator" ? "default" : "outline"}
            className="justify-start"
            onClick={() => switchRole("creator")}
          >
            <User className="mr-2 h-4 w-4" />
            Creator Mode
            {currentRole === "creator" && <Badge className="ml-auto">Active</Badge>}
          </Button>
          <Button
            variant={currentRole === "investor" ? "default" : "outline"}
            className="justify-start"
            onClick={() => switchRole("investor")}
          >
            <Building className="mr-2 h-4 w-4" />
            Investor Mode
            {currentRole === "investor" && <Badge className="ml-auto">Active</Badge>}
          </Button>
        </div>

        <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
          <h4 className="font-medium text-primary mb-1">Role Differences</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Creator: Access to IP wizard, revenue management, analytics</li>
            <li>• Investor: Focus on marketplace, portfolio tracking, bidding</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
