import React, {useState} from "react";

import Card from "../../components/Card";

// CONTAINER HOLDING ALL THE BUSINESS LOGIC

const Progress = () => {
  const [progression, setProgression] = useState(0);
  const [progressBy, setProgressBy] = useState(10);

  const incrementHandler = () => {
    const incremented = progression + progressBy;
    setProgression(incremented);
  };

  const decrementHandler = () => {
    const decremented = progression - progressBy;
    setProgression(decremented);
  };

  const progressByHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setProgressBy(newValue);
  };

  return (
    <>
      <Card decrementHandler={decrementHandler} incrementHandler={incrementHandler} count={progression} progressBy={progressBy} progressByHandler={progressByHandler} />
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
