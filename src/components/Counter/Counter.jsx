import React, { useState } from "react";
import styles from "./Counter.module.scss";
import Button from "../Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <Button handleClick={() => setCount(count + 1)} stateHandler={setCount} someState={count} text={"Increment"} />
      {/* <Button handleClick={() => setCount(count - 1)} text={"Decrement"} />
      <Button handleClick={() => console.log("Hello")} text={"Say Hello"} /> */}
    </>
  );
};
export default Counter;