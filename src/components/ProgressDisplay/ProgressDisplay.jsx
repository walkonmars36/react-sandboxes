import React from "react";
import styles from "./ProgressDisplay.module.scss";

// PRESENTATIONAL COMPONENT 
// Takes count prop and display's it
// If count is falsey or undefined it will by default show 0 (count || 0)
const ProgressDisplay = ({count}) => {
  return (
    <div className={styles.display}>{count || 0 }</div>
  );
};

export default ProgressDisplay;
