"use client";
import Image from "next/image";
import styles from "./Status.module.css";
import { Icon } from "@iconify/react";
import Menu from "../components/Menu/Menu";
import RightBoard from "../components/RightBoard/RightBoard";
import DashboardGraphs from "../../public/images/dashboard-graphs.svg";
import { useState } from "react";

export default function Status() {
  const [selected, setSelected] = useState("todos");
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className={styles.statusContainer}>
      <Menu />

      <div className={styles.mainContainer}>
        <div className={styles.dashboardContainer}>
          <Image
            alt="Yellow Graphs"
            src={DashboardGraphs}
            className={styles.imageDashboard}
          />
        </div>

        <div className={styles.filterRow}>
          <div
            className={styles.filterButton}
            onClick={() => setShowFilters((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            <Icon icon="ion:filter" className={styles.filterIcon} />
          </div>
          {showFilters && (
            <>
              <label
                className={`${styles.filterButton} ${
                  selected === "todos" ? styles.selectedFilter : ""
                }`}
              >
                <input
                  type="radio"
                  name="exercise"
                  value="todos"
                  checked={selected === "todos"}
                  onChange={() => setSelected("todos")}
                  style={{ display: "none" }}
                />
                Todos
              </label>
              <label
                className={`${styles.filterButton} ${
                  selected === "agachamento" ? styles.selectedFilter : ""
                }`}
              >
                <input
                  type="radio"
                  name="exercise"
                  value="agachamento"
                  checked={selected === "agachamento"}
                  onChange={() => setSelected("agachamento")}
                  style={{ display: "none" }}
                />
                Agachamento
              </label>
            </>
          )}
        </div>
      </div>

      <RightBoard />
    </div>
  );
}
