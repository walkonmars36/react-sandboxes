import React from "react";
import styles from "./App.module.scss";

// Our Data file
import data from "./data/data";

import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <main className={styles.App}>
        <h1>Props</h1>
        {/* ADDING TEXT PROP TO BUTTON */}
        <Button text="Disco" />

        {/* ADDING TYPE PROP TO BUTTON */}
        <Button type="primary" />

        {/* ADDING TEXT AND TYPE PROP SHOW THEM DESTRUCTURING  */}
        <Button type="secondary" text="Secondary" />

        {/* SHOW THEM HOW TO PASS IN OBJECT LET THEM TRY AND HOOK IT UP FOR THE CHALLENGE*/}
        <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} /> 

      </main>
    </>
  );
};

export default App;
