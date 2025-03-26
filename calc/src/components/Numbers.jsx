import React from "react";

function Numbers({ setInput }) {
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  return (
    <div className="col-span-3 grid grid-cols-3 gap-2 row-start-3 row-end-7">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number.toString())}
          className="bg-gray-800 text-white p-4 rounded"
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handleClick("0")}
        className="col-span-2 bg-gray-800 text-white p-4 rounded"
      >
        0
      </button>
      <button
        onClick={() => handleClick(".")}
        className="bg-gray-800 text-white p-4 rounded"
      >
        .
      </button>
    </div>
  );
}

export default Numbers;
