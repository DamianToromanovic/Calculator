import Numbers from "./components/Numbers";
import { useState } from "react";
import "./App.css";
import Operators from "./components/Operators";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState("");

  return (
    <main className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-3 gap-4">
        <Display input={input} />
        <Numbers setInput={setInput} />
        <Operators setInput={setInput} />
      </div>
    </main>
  );
}

export default App;
