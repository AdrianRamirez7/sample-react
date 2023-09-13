import React from "react";

const RollLog = ({ rollLog, clearRollLog }) => {
   
   
    return (
      <div className="roll-log">
      <button onClick={clearRollLog}>Clear Roll Log</button>
      <ul>
        {rollLog.map((roll, index) => (
          <li key={index}>{roll}</li>
        ))}
      </ul>
    </div>
    )
}

export default RollLog;