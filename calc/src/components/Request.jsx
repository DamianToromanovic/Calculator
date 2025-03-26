import React from "react";

const Request = ({ input, setInput }) => {
  // Tokenize the input string into numbers and operators
  const tokenize = (input) => {
    const tokens = [];
    let number = "";

    for (let char of input) {
      if (/\d/.test(char) || char === ".") {
        number += char; // Collect digits and decimal points
      } else if (/[+-×÷]/.test(char)) {
        if (number) {
          tokens.push(number); // Push the completed number
          number = "";
        }
        tokens.push(char); // Push the operator
      }
    }
    if (number) {
      tokens.push(number); // Push the last number
    }
    return tokens;
  };

  // Perform calculations based on operator precedence
  const calculate = (tokens) => {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "×": (a, b) => a * b,
      "÷": (a, b) => a / b,
    };

    // Handle multiplication and division first
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "×" || tokens[i] === "÷") {
        const result = operators[tokens[i]](
          Number(tokens[i - 1]),
          Number(tokens[i + 1])
        );
        tokens.splice(i - 1, 3, result.toString()); // Replace the operation with the result
        i--; // Adjust index
      }
    }

    // Handle addition and subtraction
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "+" || tokens[i] === "-") {
        const result = operators[tokens[i]](
          Number(tokens[i - 1]),
          Number(tokens[i + 1])
        );
        tokens.splice(i - 1, 3, result.toString()); // Replace the operation with the result
        i--; // Adjust index
      }
    }

    return tokens[0]; // The final token is the result
  };

  // Handle the calculation process
  const handleResult = () => {
    try {
      const tokens = tokenize(input); // Tokenize the input
      const result = calculate(tokens); // Calculate the result
      setInput(result.toString()); // Update the input with the result
    } catch (error) {
      console.error("Calculation error:", error);
      setInput("Error"); // Display "Error" on failure
    }
  };

  return (
    <button
      className="bg-green-700 text-white p-4 rounded row-start-6 col-start-4"
      onClick={handleResult}
      type="button"
    >
      =
    </button>
  );
};

export default Request;
