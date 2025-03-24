import Numbers from "./components/Numbers";
import { useState } from "react";
import "./App.css";
import Operators from "./components/Operators";

function App() {
  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-3 gap-4">
        <Numbers />
        <Operators />
      </div>
    </main>
  );
}

export default App;
