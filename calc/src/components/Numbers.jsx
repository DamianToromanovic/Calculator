import React from "react";

function Numbers({ setInput }) {
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number.toString())}
          className="bg-blue-500 text-white p-4 rounded"
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Numbers;
