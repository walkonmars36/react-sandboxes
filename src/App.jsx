import React from "react";
import styles from "./App.module.scss";

// COMPONENTS
import Progress from "./containers/Progress";
import Button from "./components/Button";

const App = () => {
  // LOG FUNCTION SHOWING THIS IS IN THE APP
  const logHandler = () => console.log("This is the app!");
  // ALERT FUNCTION EMPHASIZING THIS IS HAPPENING IN THE APP
  const alertHandler = () => alert("This is the app!");
  // PLAYING WITH THE EVENT OBJECT
  const colorHandler = (event) => {event.target.style.color = "white"};

  return (
    <>
      <main className={styles.App}>
        <h1>Functions as Props</h1>
        {/* ADD 3 BUTTONS HERE */}
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
