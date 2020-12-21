import React from "react";
import styles from "./Card.module.scss";

import Button from "../Button/Button";

// BASIC CARD STYLES IN SCSS
// card,primary,secondary
const Card = (props) => {
  // Challenge
  // Can you Populate this card with the props passed into it?
  // Can you Condtionally render this card's styles based on a certain prop?
  // Can you pass props into the button component so it matches the card and has border styles?
  return (
    <article className={styles.card}>
      <div>
        <img src={"We need a image url"} alt="Alternative text here" />
      </div>
      <h2>{"A name would be good"}</h2>
      <p>{"description please"}</p>
      <Button />
    </article>
  );
};

export default Card;
