import React from "react";
import styles from "./Button.module.scss";

const Card = (props) => {
  console.log(props.borderButton);
  const buttonStyle = [styles.button];
  if (props.cardType) buttonStyle.push(styles[props.cardType]);
  if (props.borderButton) buttonStyle.push(styles.borderButton);

  return (
    <button className={buttonStyle.join(" ")}>{props.text || "Submit"}</button>
  );
};

export default Card;
