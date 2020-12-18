import React from "react";
import styles from "./App.module.scss";

import Progress from "./containers/Progress";
import Button from "./components/Button";

const App = () => {
  const logHandler = () => console.log("This is the app!");
  const alertHandler = () => alert("This is the app!");
  const colorHandler = (event) => (event.target.style.color = "white");
  return (
    <>
      <main className={styles.App}>
        <h1>Functions as Props</h1>
        <Button text="log" clicked={logHandler} />
        <Button buttonType="primary" text="alert" clicked={alertHandler} />
        <Button buttonType="secondary" text="color" clicked={colorHandler} />
        <section className={styles.progress}>
          <Progress />
        </section>
      </main>
    </>
  );
};

export default App;
