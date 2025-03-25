import React from "react";

function Operators({ setInput }) {
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      {["+", "-", "*", "/"].map((operator) => (
        <button
          key={operator}
          onClick={() => handleClick(operator)}
          className="bg-red-500 text-white p-4 rounded"
        >
          {operator}
        </button>
      ))}
    </div>
  );
}

export default Operators;
