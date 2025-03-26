import React from "react";

function Display({ input }) {
  return (
    <div className="col-span-4 row-end-2 bg-gray-200 p-2 rounded text-xl text-slate-900 flex items-center justify-end">
      {input}
    </div>
  );
}

export default Display;
