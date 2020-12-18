import React from "react";
import styles from "./ProgressDisplay.module.scss";

const ProgressDisplay = ({count}) => {
  return (
    <div className={styles.display}>{count || 0 }</div>
  );
};

export default ProgressDisplay;
