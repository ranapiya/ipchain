import React from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { IPAssetsTable } from "@/components/dashboard/ip-assets-table"
import { PositionsTable } from "@/components/dashboard/positions-table"
import { InstantiateMsg ,ExecuteMsg} from "@/lib/andrjs/ados/cw721/Cw721ContractTs.types";
import { instantiateContract,executeContract } from "@/lib/andrjs/functions";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Manage your intellectual property assets and track performance
              </p>
            </div>

            <StatsCards />

            <div className="grid gap-8 lg:grid-cols-2">
              <IPAssetsTable />
              <PositionsTable />
              
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

