import React from "react";
import styles from "./ProgressInput.module.scss";

// PRESENTATIONAL COMPONENT
// Takes progressBy and binds it to the value of the input
// This makes it reflect the new value when it changes
// Changed is a function as a prop that passes the event into it when the value of the input changes
const ProgressInput = (props) => {
  return (
    <>
      <input className={styles.input} type="number" />
    </>
  );
};

// Optional extra
// Event is given so you do not need to use it as a annoymous function
// <input className={styles.input} type="number" value={count} onChange={changed} />
export default ProgressInput;
