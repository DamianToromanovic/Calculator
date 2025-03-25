import React from "react";

const Request = ({ input, setInput }) => {
  const handleResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      console.error("invalid expression");
    }
  };

  return (
    <button
      className="bg-black"
      onClick={() => handleResult(input)}
      type="button"
    >
      =
    </button>
  );
};

export default Request;
