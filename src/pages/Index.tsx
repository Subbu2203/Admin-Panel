import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { RevenueChart } from "@/components/admin/RevenueChart";
import { TrafficChart } from "@/components/admin/TrafficChart";
import { ActivityChart } from "@/components/admin/ActivityChart";
import { UserManagement } from "@/components/admin/UserManagement";
import { ThemeProvider } from "@/hooks/use-theme";
import { Users, DollarSign, Eye, TrendingUp } from "lucide-react";

function DashboardContent() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex w-full">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 flex items-center border-b px-4 gap-4 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold capitalize">{activeTab === "dashboard" ? "✨ Dashboard" : activeTab === "users" ? "👥 Users" : activeTab === "analytics" ? "📊 Analytics" : "⚙️ Settings"}</h1>
        </header>

        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-auto">
          {activeTab === "dashboard" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard title="Total Users" value={2847} change={12.5} icon={Users} color="bg-primary" delay={0} />
                <StatsCard title="Revenue" value={48250} prefix="$" change={8.2} icon={DollarSign} color="bg-[hsl(var(--success))]" delay={100} />
                <StatsCard title="Page Views" value={14280} change={-3.1} icon={Eye} color="bg-[hsl(var(--info))]" delay={200} />
                <StatsCard title="Growth" value={23} suffix="%" change={4.7} icon={TrendingUp} color="bg-[hsl(var(--warning))]" delay={300} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RevenueChart />
                <TrafficChart />
              </div>
              <ActivityChart />
            </>
          )}

          {activeTab === "users" && <UserManagement />}

          {activeTab === "analytics" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <ActivityChart />
              <TrafficChart />
            </div>
          )}

          {activeTab === "settings" && (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center space-y-2">
                <p className="text-4xl">⚙️</p>
                <p className="text-lg font-medium">Settings coming soon!</p>
                <p className="text-sm">This is a portfolio demo ✨</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <DashboardContent />
      </SidebarProvider>
    </ThemeProvider>
  );
}
