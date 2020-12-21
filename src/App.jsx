import React from "react";
import styles from "./App.module.scss";

// Our Data file
import data from "./data/data";

// Components
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <main className={styles.App}>
        <h1>Props</h1>
        <Button />
      </main>
    </>
  );
};

export default App;
