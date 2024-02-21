"use client";
import styles from "@/styles/Dashboard/Cards.module.scss";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export function IncomeStats({ incomes, summary }) {
  const data = {
    labels: incomes.map((inc) =>
      new Date(inc.createdAt).toLocaleDateString("en-US", { weekday: "short" })
    ),
    datasets: [
      {
        label: "Income",
        data: incomes.map((inc) => inc.total),
        borderColor: "#e68c3a",
        pointBackgroundColor: "#e68c3a",
      },
      {
        label: "Average",
        data: incomes.map((inc) => summary.average),
        pointRadius: 0,
        borderColor: "#213e60",
        pointBackgroundColor: "#213e60",
      },
      {
        label: "Median",
        data: incomes.map((inc) => summary.median),
        pointRadius: 0,
        borderColor: "#2abe71",
        pointBackgroundColor: "#2abe71",
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        filter: (item) => item.datasetIndex == 0,
        backgroundColor: "#fff",
        titleColor: "#213e60",
        titleFont: {
          size: 12,
          weight: "bold",
          family: "Antonio",
        },
        bodyColor: "#e68c3a",
        bodyFont: {
          size: 12,
          weight: "lighter",
          family: "Antonio",
        },
        usePointStyle: true,
      },
      legend: {
        position: "bottom",
        fullSize: false,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 12,
            weight: "lighter",
            family: "Antonio",
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          reverse: false,
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div className={`${styles.stats}`}>
      <p>
        Income <br /> <span>Last 7 day</span>
      </p>
      <Line className={styles.chart} data={data} options={options} />
    </div>
  );
}
