import Numbers from "./components/Numbers";
import { useState } from "react";
import "./App.css";
import Operators from "./components/Operators";

function App() {
  return (
    <main>
      <Numbers />
      <Operators />
    </main>
  );
}

export default App;
