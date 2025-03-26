import Numbers from "./components/Numbers";
import { useState } from "react";
import "./App.css";
import Operators from "./components/Operators";
import Display from "./components/Display";
import Request from "./components/Request";
import Ac from "./components/Ac";

function App() {
  const [input, setInput] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-6 rounded-lg grid grid-cols-4 grid-rows-6 gap-2 w-72">
        <Display input={input} />
        <Ac setInput={setInput} />

        <Numbers setInput={setInput} />
        <Operators setInput={setInput}></Operators>
        <Request setInput={setInput} input={input} />
      </div>
    </main>
  );
}

export default App;
