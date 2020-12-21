import React from "react";
import styles from "./Button.module.scss";

const Card = (props) => {
  // Log to see text
  console.log(props);

  // DESTRUCTURING FOR LATER
  // left hand side variables you are unpacking
  // right hand side is the source
  // const {type, text, borderButton} = props

  // Using props to set button text
  const buttonText = props.text || "Submit";

  // Avaible styles = button, primary, secondary, borderButton
  // Array of styles button class is default
  const buttonStyles = [styles.button];

  // Conditionally adding classes based on props
  // Either the primary, secondary class
  if (props.type === "primary") {
    buttonStyles.push(styles.primary);
  }
  if (props.type === "secondary") {
    buttonStyles.push(styles.secondary);
  }

  // Adding border button class based on BOOLEAN prop
  if (props.borderButton) {
    buttonStyles.push(styles.borderButton);
  }

  return <button className={buttonStyles.join(" ")}>{buttonText}</button>;
};

export default Card;
