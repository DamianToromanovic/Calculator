const subtract = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce(
    (difference, current) => Number(difference) - Number(current)
  );
};

export default subtract;
