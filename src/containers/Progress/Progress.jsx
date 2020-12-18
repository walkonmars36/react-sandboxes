import React, { useState } from "react";

import Card from "../../components/Card";

const Progress = () => {
  const [progression, setProgression] = useState(0);
  const [progressBy, setProgressBy] = useState(10);
  
  // const incrementHandler = () => setProgression((previous) => (previous += 10));
  // const decrementHandler = () => setProgression((previous) => (previous -= 10));

  const incrementHandler = () => setProgression((previous) => (previous += progressBy));
  const decrementHandler = () => setProgression((previous) => (previous -= progressBy));

  const progressionHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setProgressBy(newValue);
  };



  return (
    <>
      <Card
        handlers={{ incrementHandler, decrementHandler, progressionHandler }}
        count={progression}
        progress={progressBy}
      />
    </>
  );
};

export default Progress;
