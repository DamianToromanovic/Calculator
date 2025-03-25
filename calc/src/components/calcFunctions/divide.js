const divide = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((quotient, current) => {
    if (current === 0) {
      return "Not defiened";
    }
    return Number(quotient) / Number(current);
  });
};

export default divide;
