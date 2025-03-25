import React, { useState } from "react";

const Request = () => {
  const [result, setResult] = useState(null);

  const handleResult = () => {
    let expression = "";
    for (let i = 0; i < values.length; i++) {
      expression += values[i];
      if (i < operators.length) {
        expression += operators[i];
      }
    }
    try {
      setResult((prevResult) => [...prevResult, setResult(eval(expression))]);
    } catch (error) {
      console.error("Invalid expression");
    }
  };

  return (
    <div>
      {values.map((value, index) => (
        <span key={index}>
          {value}
          {index < operators.length && <span>{operators[index]}</span>}
        </span>
      ))}
    </div>
  );
};

export default Request;
