"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import showCountryInfo from "@/data/info";

const data = showCountryInfo();

const chartConfig = {
  co2PerPerson: {
    label: "Country",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export default function Co2PerPersonChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[260px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="country"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="co2PerPerson" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
