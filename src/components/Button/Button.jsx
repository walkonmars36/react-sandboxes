import React from "react";
import styles from "./Button.module.scss";

// BASIC BUTTON STYLES IN SCSS
// button,primary,secondary,borderButton
const Button = () => {
  return <button className={styles.button}>Submit</button>;
};

export default Button;
