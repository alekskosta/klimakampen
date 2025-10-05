"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { showCountryInfo } from "@/data/info";
import styles from "./Co2PerPersonChart.module.css";

const data = showCountryInfo();

// Chart komponent fra shadcn

const chartConfig = {
  co2PerPerson: {
    label: "Country",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export default function Co2PerPersonChart() {
  return (
    <ChartContainer config={chartConfig} className={styles.container}>
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
