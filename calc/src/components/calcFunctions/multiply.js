const multiply = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((product, current) => Number(product) * Number(current));
};

export default multiply;
