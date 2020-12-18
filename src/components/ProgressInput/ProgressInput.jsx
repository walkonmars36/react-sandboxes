import React from "react";
import styles from "./ProgressInput.module.scss";

const ProgressInput = ({ count, changed }) => {
  return (
    <>
      <input className={styles.input} type="number" value={count} onChange={(event) => changed(event)} />
    </>
  );
};

export default ProgressInput;
