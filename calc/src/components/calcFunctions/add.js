const add = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, current) => Number(sum) + Number(current));
};

export default add;
