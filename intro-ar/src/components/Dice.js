//import diceOneImage from 
/* 
const diceImage = () => {
  if (currentRoll === 1) {
    return diceOneImage;
  } else if (currentRoll === 2) {
    return diceTwoImage;
  }
  
}
const DiceRoll = ({rollDice, currentRoll}) => {
  
  return (
    <div className="dice-container">
    <div className="dice" onClick={rollDice}>
    {currentRoll}
    <h2 className="title">Dice Roller</h2>
    </div>
    </div>
    );
  };
  
  export default DiceRoll;
  */

  const DiceRoll = ({ rollDice, currentRoll }) => {
    return (
      <div className="dice-container">
        <div className="dice" onClick={rollDice}>
        <h2 className="title">Dice Roller</h2>
          {currentRoll} 
        </div>
      </div>
    );
  };
  
  export default DiceRoll;