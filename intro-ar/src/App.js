import React, { useState } from "react";
import "./App.css";
import GoodRobot from "./components/GoodRobot";
import BadRobot from "./components/BadRobot";
import CustomRobot from "./components/CustomRobot";// Import your additional robot component

function App() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    setInput(inputText);
  };

  return (
    <div className="App">
      <h2>Robo Active Listening</h2>
      <p>Type Something:</p>
      <input type="text" value={input} onChange={handleChange} placeholder="Enter text"/>

      <GoodRobot input={input} />
      <BadRobot input={input} />
      
      <CustomRobot input={input} />
    </div>
  );
}

export default App;
