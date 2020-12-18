import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, buttonType, borderButton, clicked }) => {
  const buttonStyle = [styles.button];
  if (buttonType) buttonStyle.push(styles[buttonType]);
  if (borderButton) buttonStyle.push(styles.borderButton);

  const logHandler = () => console.log("This is the Button!");
  
  const clickHandler = () => alert("This is the Button!");

  const mouseOverHandler = (event) => {
    event.target.style.color = "white";
  };
  
  return (
    <button onClick={clicked} className={buttonStyle.join(" ")}>
      {text || "submit"}
    </button>
  );
};

export default Button;
