"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Plus,
  Coins,
  TrendingUp,
  Lock,
  Store,
  Gavel,
  Brain,
  CreditCard,
  Activity,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Plus, label: "New IP", href: "/new-ip" },
  { icon: Coins, label: "Fractionalize", href: "/fractionalize" },
  { icon: TrendingUp, label: "Revenue Split", href: "/revenue-split" },
  { icon: Lock, label: "Vesting", href: "/vesting" },
  { icon: Store, label: "Marketplace", href: "/marketplace" },
  { icon: Gavel, label: "Auctions", href: "/auctions" },
  { icon: Brain, label: "AI Tracking", href: "/ai-tracking" },
  { icon: CreditCard, label: "Payouts", href: "/payouts" },
  { icon: Activity, label: "Activity", href: "/activity" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex-1 overflow-auto py-6">
        <nav className="grid gap-1 px-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-11",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Primary CTA */}
      <div className="p-4 border-t">
        <Link href="/new-ip">
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Start New IP Flow
          </Button>
        </Link>
      </div>
    </div>
  )
}
