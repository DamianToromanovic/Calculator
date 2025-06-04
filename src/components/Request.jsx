import React from "react";

const Request = ({ input, setInput }) => {
  const tokenize = (input) => {
    const tokens = [];
    let number = "";

    for (let char of input) {
      if (/\d/.test(char) || char === ".") {
        // check ob char eine Zahl is "d" steht für Zahl während "D" für alles ausser zahlen steht
        number += char;
      } else if (/[+-×÷]/.test(char)) {
        if (number) {
          tokens.push(number);
          number = "";
        }
        tokens.push(char);
      }
    }
    if (number) {
      tokens.push(number);
    }
    return tokens;
  };

  const calculate = (tokens) => {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "×": (a, b) => a * b,
      "÷": (a, b) => a / b,
    };

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "×" || tokens[i] === "÷") {
        const result = operators[tokens[i]](
          Number(tokens[i - 1]),
          Number(tokens[i + 1])
        );
        tokens.splice(i - 1, 3, result.toString()); // Replace the operation with the result
        i--; // Hier wird abgezogen weil nach dem replacement der 3 index mit dem ergebnis is der index einen index weiter
      }
    }

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "+" || tokens[i] === "-") {
        const result = operators[tokens[i]](
          Number(tokens[i - 1]),
          Number(tokens[i + 1])
        );
        tokens.splice(i - 1, 3, result.toString());
        i--;
      }
    }

    return tokens[0];
  };

  const handleResult = () => {
    try {
      const tokens = tokenize(input);
      const result = calculate(tokens);
      setInput(result.toString());
    } catch (error) {
      console.error("Calculation error:", error);
      setInput("Error");
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
