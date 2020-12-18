import React from "react";
import styles from "./App.module.scss";

import data from "./data/data";

import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <main className={styles.App}>
        <h1>Props</h1>
        {/* ADDING PROPS */}
        <Button text="Disco" />

        {/* NOTHING DEFINED */}
        <Button cardType="primary" text="Primary" />

        {/* CONDITONAL  */}
        <Button text="Secondary" cardType="secondary" />

        <Card {...data[0]} />
        <Card {...data[1]} />
        <Card {...data[2]} />

        {/* <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} /> */}
        {/* <Card />
        <Card /> */}
      </main>
    </>
  );
};

export default App;
