import React from "react";
import styles from "./ScoreCard.module.scss";

const ScoreCard = (props) => {
  const { score, position, didWin } = props;
  // CONDITIONALLY ADDING STYLES
  const cardStyles = didWin ? styles.win : styles.lose;
  return (
    <>
      <div className={cardStyles}>
        <h2>{`Player ${position}`}</h2>
        <p>{`Score : ${score}`}</p>
      </div>
    </>
  );
};

export default ScoreCard;
