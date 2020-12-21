import React from "react";
import styles from "./Card.module.scss";

import Button from "../Button/Button";

const Card = (props) => {
  // console.log(props)

  // left hand side variables you are unpacking
  // right hand side is the source
  const { name, imageUrl, description, type } = props.data;

  const cardStyles = [styles.card];
  if (type === "primary") {
    cardStyles.push(styles.primary);
  }
  if (type === "secondary") {
    cardStyles.push(styles.secondary);
  }

  return (
    <article className={cardStyles.join(" ")}>
      <div>
        <img src={imageUrl} alt="Bill Murray" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button borderButton={true} type={type} />
    </article>
  );
};

export default Card;

