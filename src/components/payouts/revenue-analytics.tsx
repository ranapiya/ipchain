"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 1200, distributions: 1100 },
  { month: "Feb", revenue: 1890, distributions: 1800 },
  { month: "Mar", revenue: 2450, distributions: 2300 },
  { month: "Apr", revenue: 3120, distributions: 2900 },
  { month: "May", revenue: 2780, distributions: 2600 },
  { month: "Jun", revenue: 3240, distributions: 0 }, // Current month, not distributed yet
]

const holderGrowth = [
  { month: "Jan", holders: 856 },
  { month: "Feb", holders: 923 },
  { month: "Mar", holders: 1089 },
  { month: "Apr", holders: 1156 },
  { month: "May", revenue: 1203 },
  { month: "Jun", holders: 1247 },
]

export function RevenueAnalytics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Revenue vs Distributions</CardTitle>
          <CardDescription>Monthly revenue collection and distribution amounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, ""]} />
                <Bar dataKey="revenue" fill="#89CFF0" name="Revenue" />
                <Bar dataKey="distributions" fill="#10b981" name="Distributed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Token Holder Growth</CardTitle>
          <CardDescription>Number of token holders over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={holderGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} holders`, ""]} />
                <Line type="monotone" dataKey="holders" stroke="#89CFF0" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
