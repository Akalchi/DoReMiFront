import React from "react";

const Key = ({ id, isActive, onClick }) => {
  const keyType = id.includes("b") ? "black-key" : "white-key";
  const classes = `${keyType} ${isActive ? "active" : ""} ${id}`;

  return (
    <button className={classes} id={id} onClick={onClick}></button>
  );
};

export default Key;