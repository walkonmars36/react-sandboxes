import React, { useState } from "react";

import Card from "../../components/Card";

// CONTAINER HOLDING ALL THE BUSINESS LOGIC

const Progress = () => {
  // COUNTER STATE
  const [progression, setProgression] = useState(0);

  // HOW MUCH TO + OR - THE STATE ABOVE BY
  const [progressBy, setProgressBy] = useState(10);

  // INITIAL INCREMENT AND DECREMENT HANDLERS
  // TAKE STATE AND EITHER + OR - 10 THEN SET IT TO STATE

  // const incrementHandler = () => {
  //   const incremented = progession + 10;
  //   setProgression(incremented);
  // };

  // const decrementHandler = () => {
  //   const decremented = progession - 10;
  //   setProgression(decremented);
  // };

  // NEXT VERSION OF THE HANDLERS USING THE PROGRESS BY TO + OR -
  const incrementHandler = () => {
    const incremented = progression + progressBy;
    setProgression(incremented);
  };

  const decrementHandler = () => {
    const decremented = progression - progressBy;
    setProgression(decremented);
  };

  // A HANDLER THAT TAKES THE VALUE FROM THE EVENT TURNS IT INTO A NUMBER
  // THEN SETS IT TO PROGRESS BY STATE
  // THIS MEANS A USER IS ABLE TO CHOOSE HOW MUCH TO PROGRESS THE COUNTER BY

  const progressByHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setProgressBy(newValue);
  };

  return (
    <>
      <Card
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        progressByHandler={progressByHandler}
        count={progression}
        progressBy={progressBy}
      />
    </>
  );
};

export default Progress;

// OPTIONAL EXTRAS
// Handlers on one line or passed in as anoynmous funcs
// const incrementHandler = () => setProgression((previous) => (previous += progressBy));
// const decrementHandler = () => setProgression((previous) => (previous -= progressBy));

// Put all handlers into an object to pass down as props
// const handlers={ incrementHandler, decrementHandler, progressionHandler }
