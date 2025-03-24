import React, { useState } from "react";

const Request = () => {
  const [firstValue, setFirstValue] = useState("");
  const [add, setFunc] = useState((firstValue, func, secondValue) => {
    return func(firstValue, secondValue);
  });
};
