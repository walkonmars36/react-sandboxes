import React from "react";
import styles from "./ProgressBar.module.scss";

// PRESENTATIONAL COMPONENT
// Takes width prop, turns it into a percentage
// Using inline styles we are able to make the bar grow and shrink based on that percentage
const ProgressBar = ({ width }) => {
  // To percentage
  const widthPercent = `${width}%`;
  // To object to pass in
  const inlineStyles = { width: widthPercent };
  return (
    <>
      <div className={styles.bar}>
        <div style={inlineStyles}></div>
      </div>
    </>
  );
};

export default ProgressBar;
