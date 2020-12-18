import React from "react";
import styles from "./Card.module.scss";

import ProgressDisplay from "../ProgressDisplay";
import ProgressBar from "../ProgressBar";
import ProgressInput from "../ProgressInput";

import Button from "../Button";

const Card = ({ handlers, count, cardType, progress }) => {
  const cardStyles = [styles.card];
  if (cardType) {
    cardStyles.push(styles[cardType]);
  }

  return (
    <article className={cardStyles.join(" ")}>
      <ProgressDisplay count={count} />
      <ProgressBar width={count} />
      <div className={styles.buttonController}>
        <Button text="-" clicked={handlers.decrementHandler} borderButton="true" buttonType="secondary" />
        <ProgressInput count={progress} changed={handlers.progressionHandler} />
        <Button text="+" clicked={handlers.incrementHandler} borderButton={true} />
      </div>
    </article>
  );
};

export default Card;

// const cardStyles = [styles.card];
//   console.log(props)
//   if (props.data.cardType === "primary") {
//     cardStyles.push(styles.primary);
//   }
//   if (props.data.cardType === "secondary") {
//     cardStyles.push(styles.secondary);
//   }

//   return (
//     <article className={cardStyles.join(" ")}>
//       <div>
//         <img src={props.data.imageUrl} alt="Bill Murray" />
//       </div>
//       <h2>{props.data.name}</h2>
//       <p>{props.data.description}</p>
//       <Button borderButton={true} cardType={props.data.cardType} />
//     </article>
//   );
// };
