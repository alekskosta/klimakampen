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
    label: "CO₂ pr. person (tonn)",
    color: "#b94515",
  },
} satisfies ChartConfig;

export default function Co2PerPersonChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className={`${styles.container} ${styles.axisWhite}`}
      id="emissions"
    >
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="country"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 1)}
          tick={{ fill: "#fff" }}
        />
        <ChartTooltip
          content={<ChartTooltipContent className={styles.tooltipWhite} />}
          cursor={{ fill: "#082b3f" }}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="co2PerPerson"
          fill="var(--color-co2PerPerson)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
