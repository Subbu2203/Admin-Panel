import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { activityData } from "@/lib/mock-data";

const chartConfig = {
  visits: { label: "Visits", color: "hsl(var(--chart-1))" },
  signups: { label: "Signups", color: "hsl(var(--chart-3))" },
};

export function ActivityChart() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">📊 Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={activityData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="day" className="text-xs" />
            <YAxis className="text-xs" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visits" fill="hsl(var(--chart-1))" radius={[6, 6, 0, 0]} animationDuration={1200} />
            <Bar dataKey="signups" fill="hsl(var(--chart-3))" radius={[6, 6, 0, 0]} animationDuration={1200} animationBegin={400} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
