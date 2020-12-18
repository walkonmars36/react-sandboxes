import React from "react";
import styles from "./Card.module.scss";

import Button from "../Button/Button";

const Card = ({ name, imageUrl, description, cardType }) => {
  // console.log(props)
  // left hand side variables you are unpacking
  // right hand side is the source
  // const { name, imageUrl, description, cardType } = props.data;
  // const { name, imageUrl, description, cardType } = data;

  const cardStyles = [styles.card];
  if (cardType === "primary") {
    cardStyles.push(styles.primary);
  }
  if (cardType === "secondary") {
    cardStyles.push(styles.secondary);
  }

  return (
    <article className={cardStyles.join(" ")}>
      <div>
        <img src={imageUrl} alt="Bill Murray" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button borderButton={true} cardType={cardType} />
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
