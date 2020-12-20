import React from "react";

const Items = ({ items /* array */ }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default Items;
