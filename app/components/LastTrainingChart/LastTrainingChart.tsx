"use client";
import styles from "./LastTrainingChart.module.css";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Corretos", value: 75 },
  { name: "Incorretos", value: 25 },
];

const COLORS = ["#1B0066", "#E3D93F"];

export default function LastTrainingCharts() {
  return (
    <div className={styles.graphContainer}>
      <div className={styles.title}>Ultimo Treino</div>
      <div className={styles.subtitle}>Agachamento</div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={100}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: "#1c1c1c", fontSize: 14 }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.centerText}>
          <span>75%</span>
        </div>
      </div>
    </div>
  );
}
