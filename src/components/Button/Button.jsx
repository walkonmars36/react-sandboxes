import React from "react";
import styles from "./Button.module.scss";


// PRESENTATIONAL COMPONENT
const Button = (props) => {
  // NEW PROP CLICKED = FUNCTION TO HAPPEN WHEN CLICKED
  const { text, buttonType, borderButton, clicked } = props;

  // Avaible styles = button, primary, secondary, borderButton
  // button class is default
  const buttonStyle = [styles.button];

  // Conditionally adding classes based on props.
  // primary OR secondary 
  if (buttonType) buttonStyle.push(styles[buttonType]);

  // Adding border button class based on BOOLEAN prop
  if (borderButton) buttonStyle.push(styles.borderButton);

  // ADD CLICKED PROP TO ON CLICK
  return (
    <button onClick={clicked} className={buttonStyle.join(" ")}>
      {/* Will display text prop if given or by default will display submit */}
      {text || "submit"}
    </button>
  );
};

export default Button;
