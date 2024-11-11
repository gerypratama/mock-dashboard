import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart";
import { mainBarChart } from "~/const/chart";

export default function HomeBarChart() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <Card className="col-span-5">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Monthly Visitor</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full">
          <BarChart accessibilityLayer data={mainBarChart}>
            <XAxis
              dataKey={"month"}
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={3} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}