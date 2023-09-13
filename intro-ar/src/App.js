import React, { useState } from "react"
import Dice from "./components/Dice";
import RollLog from "./components/RollLog"
import "./App.css"

/*
const App = () => {
  
  const [currentRoll, setCurrentRoll] = useState(0);
  const [rollLog, setRollLog] = useState([0]);


    const rollDice = () => {
      const rollResult = Math.floor(Math.random() * 6);
      setCurrentRoll(rollResult);
      setRollLog([...rollLog, rollResult]);
    };
    
    const clearRollLog = () => {
      setRollLog([0]);
    };
    
    return (
      <div className="app">
      
      <Dice rollDice={rollDice} currentRoll={currentRoll} />
      <RollLog rollLog={rollLog} clearRollLog={clearRollLog} />
      </div>
      );
    };
    
    
  export default App
  
  */


  const App = () => {
    const [currentRoll, setCurrentRoll] = useState(0);
    const [rollLog, setRollLog] = useState([0]);
  
    const rollDice = () => {
      const rollResult = Math.floor(Math.random() * 6);
      setCurrentRoll(rollResult);
      setRollLog((prevRollLog) => {
        const newRollLog = prevRollLog.slice(); // Create a copy of the rollLog array
        newRollLog.push(rollResult);
        return newRollLog;
      });
    };
  
    const clearRollLog = () => {
      setRollLog([0]);
    };
  
    return (
      <div className="app">
        <Dice rollDice={rollDice} currentRoll={currentRoll} />
        <RollLog rollLog={rollLog} clearRollLog={clearRollLog} />
      </div>
    );
  };
  
  export default App;


















/*  const[diceNum, setDiceNumber] = useState(0);
  const diceArray = [1, 2, 3, 4, 5, 6];

  //the function name is your onClick attribute because thats what holds the generator
  const diceGenerator = () => {
      let randomDice = Math.floor(Math.random() * diceArray.length);//use .length to grab all elements in array
      //This is how use return statements with state in react js // the set state will act as a return while your
      //array and variable holding the array output.
      setDiceNumber(diceArray[randomDice])
  }
  
  //set log roll to zero whurh a funtion that inputs the set method to 0
  const clearRoll = () => {
      setDiceNumber(0)
  }

  //Take note! In React, for any code from the state to work
  //you must call the first variable name where the onClick being held: example down velow
  //{diceNum}

  return (
          <div className="app">
              <h2>Dice Roller</h2>
              <DiceRoll diceGenerator={diceGenerator} diceNum={diceNum} />
              <Rolls diceGenerator={diceGenerator} clearRoll={clearRoll} />
            </div>
      
  )

}
*/