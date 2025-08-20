import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Clock, Lock, Shield } from "lucide-react"

const statsData = [
  {
    title: "Total IP Assets",
    value: "12",
    change: "+2 from last month",
    icon: TrendingUp,
  },
  {
    title: "Holders",
    value: "1,247",
    change: "+180 from last month",
    icon: Users,
  },
  {
    title: "30-day Revenue",
    value: "$12,450",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Unsplit Balance",
    value: "$3,240",
    change: "Ready for distribution",
    icon: Clock,
  },
  {
    title: "Upcoming Vesting",
    value: "$8,900",
    change: "Unlocks in 7 days",
    icon: Lock,
  },
  {
    title: "Compliance Checks",
    value: "98%",
    change: "All systems operational",
    icon: Shield,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
