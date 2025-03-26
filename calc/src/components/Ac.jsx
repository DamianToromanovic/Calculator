import React from "react";

function Ac({ setInput }) {
  const handleClear = () => {
    setInput("");
  };

  return (
    <button
      onClick={handleClear}
      className="bg-gray-500 text-white p-4 rounded col-span-3 row-end-3"
    >
      AC
    </button>
  );
}

export default Ac;
