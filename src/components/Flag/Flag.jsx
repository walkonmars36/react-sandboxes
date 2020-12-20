import React from "react";

const Flag = ({ flagged }) => (flagged ? <p className={"flagged"}>Flagged</p> : <p className={"unflagged"}>Flagged</p>);

export default Flag;
