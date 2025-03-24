const Operators = () => {
  return operatorTemplate();
};

const allOperator = [
  {
    func: add(),
    value: "+",
  },
  { func: sub(), value: "-" },
  {
    func: multiply(),
    value: "x",
  },
  {
    func: divide(),
    value: "/",
  },
];

const operatorTemplate = () => {
  return (
    <>
      {allOperator.map((operator) => {
        return (
          <button onClick={operator.func} type="button">
            {operator.value}
          </button>
        );
      })}
    </>
  );
};

export default Operators;
