import React from "react";
import styles from "./Card.module.scss";

// COMPONENTS
import ProgressDisplay from "../ProgressDisplay";
import ProgressBar from "../ProgressBar";
import ProgressInput from "../ProgressInput";
import Button from "../Button";

// PRESENTATIONAL COMPONENT
const Card = (props) => {
  // ALL OF THE PROPS BY THE END
  const { incrementHandler, decrementHandler, progressByHandler, count, progressBy } = props;
 
  return (
    <article className={styles.card}>
      <ProgressDisplay count={count} />
      <ProgressBar width={count} />
      <div className={styles.buttonController}>
        <Button text="-" clicked={decrementHandler} borderButton="true" buttonType="secondary" />
        <ProgressInput progressBy={progressBy} changed={progressByHandler} />
        <Button text="+" clicked={incrementHandler} borderButton={true} />
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
