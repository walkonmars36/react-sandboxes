import React, { useState, createContext } from "react";

const users = {
  users: ["matt", "charlie"],
};
export const UserContext = createContext(users);

const UserProvider = (props) => {
  const [users, setUsers] = useState(["matt", "charlie"]);
  // const users = ["matt", "charlie"];

  // const sayHello = () => console.log("Hello");

  const addToState = () => {
    const newUsers = [...users, "nologist" + users.length];
    setUsers(newUsers);
  };

  const userContext = {
    users,
    addToState,
    // sayHello,
  };

  return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
