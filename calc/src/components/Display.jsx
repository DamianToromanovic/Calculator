import React from "react";

function Display({ input }) {
  return (
    <div className="col-span-3 bg-gray-200 p-4 rounded text-right text-2xl">
      {input}
    </div>
  );
}

export default Display;
