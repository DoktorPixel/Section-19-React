import React from "react";

const SquareFunc = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default SquareFunc;
