import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ width }) => {
  const widthPercent = `${width}%`;
  return (
    <>
      <div className={styles.bar}>
        <div style={{ width: widthPercent}}></div>
      </div>
    </>
  );
};

export default ProgressBar;
