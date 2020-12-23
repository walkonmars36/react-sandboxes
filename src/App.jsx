import React from "react";
import styles from "./App.module.scss";

// COMPONENTS
import Progress from "./containers/Progress";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <main className={styles.App}>
        <h1>Functions as Props</h1>
        {/* ADD 3 BUTTONS HERE */}
        <Button />
        <Button buttonType="primary" />
        <Button buttonType="secondary" />
        <section className={styles.progress}>
          <Progress />
        </section>
      </main>
    </>
  );
};

export default App;
