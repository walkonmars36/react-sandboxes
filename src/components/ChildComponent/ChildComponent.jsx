import React, { useContext } from "react";

import { UserContext } from "../../context/UserContext.jsx";

const ChildComponent = () => {
  const userContext = useContext(UserContext);
  console.log(userContext.users);
  // userContext.sayHello();
  return (
    <>
      <p>I am a Child Component with access to the data via context😁</p>
      <button onClick={userContext.addToState}>Add to context state</button>
      {userContext.users.map((el) => (
        <p>{el}</p>
      ))}
    </>
  );
};

export default ChildComponent;
