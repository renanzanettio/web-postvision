import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderTitle}>PostVision</div>
      
      <div className={styles.spinner}></div>
    </div>
  );
}
