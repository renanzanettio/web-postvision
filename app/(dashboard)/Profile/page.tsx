"use client";
import styles from "./Profile.module.css";
import Menu from "../../components/Menu/Menu";
import RightBoard from "../../components/RightBoard/RightBoard";
import DashboardGraphs from "@/public/images/dashboard-graphs.svg";
import { useState } from "react";
import FilterRow from "../../components/FilterRow/FilterRow";
import WeeklyPerformanceChart from "../../components/WeeklyPerformanceChart/WeeklyPerformanceChart";
import LastTrainingChart from "../../components/LastTrainingChart/LastTrainingChart";
import MonthlyComparisionChart from "../../components/MonthlyComparisionChart/MonthlyComparisionChart";
import Image from "next/image";

export default function Profile() {
  const [selected, setSelected] = useState("Todos");

  return (
    <div className={styles.profileContainer}>

        <div className={styles.mainContainer}>
          <div className={styles.dashboardContainer}>
            <Image
              alt="Yellow Graphs"
              src={DashboardGraphs}
              className={styles.imageDashboard}
            />
          </div>

          <FilterRow selected={selected} setSelected={setSelected} />

          <div className={styles.titleExercices}>{selected}</div>

          <div className={styles.graphsWrap}>
            <WeeklyPerformanceChart />

            <LastTrainingChart />

            <MonthlyComparisionChart />
          </div>
        </div>

        <RightBoard />

    </div>
  );
}
