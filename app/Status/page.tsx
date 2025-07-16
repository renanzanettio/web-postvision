"use client";
import Image from "next/image";
import styles from "./Status.module.css";
import { Icon } from "@iconify/react";
import Menu from "../components/Menu/Menu";
import RightBoard from "../components/RightBoard/RightBoard";
import DashboardGraphs from "../../public/images/dashboard-graphs.svg";
import { useState } from "react";
import FilterRow from "../components/FilterRow/FilterRow";
import WeeklyPerformanceChart from "../components/WeeklyPerformanceChart/WeeklyPerformanceChart";
import LastTrainingChart from "../components/LastTrainingChart/LastTrainingChart";


export default function Status() {
    const [selected, setSelected] = useState("Todos");

  return (
    <div className={styles.statusContainer}>
      <Menu />

      <div className={styles.mainContainer}>
        <div className={styles.dashboardContainer}>
          <Image alt="Yellow Graphs" src={DashboardGraphs} className={styles.imageDashboard}/>
        </div>

        <FilterRow selected={selected} setSelected={setSelected} />

        <div className={styles.titleExercices}>{selected}</div>
        
        <div className={styles.graphsWrap}>

          <WeeklyPerformanceChart />

          <LastTrainingChart />


          <div className={styles.graphContainer}>
            <div className={styles.title}>Comparativo Mensal</div>
            <div className={styles.subtitle}>Agachamento</div>
            <div className={styles.chart}>
              
            </div>
          </div>

        </div>

      </div>

      <RightBoard />
    </div>
  );
}
