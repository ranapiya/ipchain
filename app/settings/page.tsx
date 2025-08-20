import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ContractAddresses } from "@/components/settings/contract-addresses"
import { NetworkSettings } from "@/components/settings/network-settings"
import { RoleSettings } from "@/components/settings/role-settings"
import { DangerZone } from "@/components/settings/danger-zone"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-lg text-muted-foreground">Configure your IPChain project and preferences</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <ContractAddresses />
                <RoleSettings />
              </div>
              <div className="space-y-8">
                <NetworkSettings />
                <DangerZone />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
