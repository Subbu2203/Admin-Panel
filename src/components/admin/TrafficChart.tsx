import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { trafficData } from "@/lib/mock-data";

const chartConfig = {
  Direct: { label: "Direct", color: "hsl(var(--chart-1))" },
  Organic: { label: "Organic", color: "hsl(var(--chart-2))" },
  Social: { label: "Social", color: "hsl(var(--chart-3))" },
  Referral: { label: "Referral", color: "hsl(var(--chart-4))" },
};

export function TrafficChart() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">🌐 Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={trafficData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              nameKey="name"
              animationDuration={1200}
              animationBegin={200}
              strokeWidth={2}
              stroke="hsl(var(--background))"
            >
              {trafficData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {trafficData.map((d) => (
            <div key={d.name} className="flex items-center gap-2 text-sm">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-muted-foreground">{d.name}</span>
              <span className="font-semibold">{d.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
