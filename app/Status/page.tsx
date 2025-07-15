"use client";
import Image from "next/image";
import styles from "./Status.module.css";
import { Icon } from "@iconify/react";
import Menu from "../components/Menu/Menu";
import RightBoard from "../components/RightBoard/RightBoard";
import DashboardGraphs from "../../public/images/dashboard-graphs.svg";
import { useState } from "react";
import FilterRow from "../components/FilterRow/FilterRow";


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

          <div className={styles.graphContainer}>
            <div className={styles.title}>Desempenho Semanal</div>
            <div className={styles.subtitle}>Agachamento</div>
            <div className={styles.graph}>
              
            </div>
          </div>
          <div className={styles.graphContainer}>
            <div className={styles.title}>Ultimo Treino</div>
            <div className={styles.subtitle}>Agachamento</div>
            <div className={styles.graph}>
              
            </div>
          </div>
          <div className={styles.graphContainer}>
            <div className={styles.title}>Comparativo Mensal</div>
            <div className={styles.subtitle}>Agachamento</div>
            <div className={styles.graph}>
              
            </div>
          </div>

        </div>

      </div>

      <RightBoard />
    </div>
  );
}
