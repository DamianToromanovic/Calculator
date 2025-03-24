const Numbers = () => {
  return numberTemplate();
};

const allNumb = [
  {
    name: "one",
    value: "1",
  },
  {
    name: "two",
    value: "2",
  },
  {
    name: "three",
    value: "3",
  },
  {
    name: "four",
    value: "4",
  },
  {
    name: "five",
    value: "5",
  },
  {
    name: "six",
    value: "6",
  },
  {
    name: "seven",
    value: "7",
  },
  {
    name: "eight",
    value: "8",
  },
  {
    name: "nine",
    value: "9",
  },
  {
    name: "zero",
    value: "0",
  },
];

const numberTemplate = () => {
  return (
    <>
      {allNumb.map((numb) => (
        <button
          key={numb.value}
          name={numb.name}
          value={numb.value}
          type="button"
          className="bg-amber-600 text-black w-10 h-10 text-lg text-center p-2 rounded-full"
        >
          {numb.value}
        </button>
      ))}
    </>
  );
};

export default Numbers;
