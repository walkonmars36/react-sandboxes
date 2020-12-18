import React from "react";
import styles from "./Button.module.scss";
const Button = (props) => {
  const {handleClick, text, stateHandler, someState} = props;
  return (
    <>
      <button onClick={() => stateHandler(someState + 1)} >{text}</button>
    </>
  );
};
export default Button;