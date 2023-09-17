import React from "react";

const BadRobot = ({ input }) => {
  // Create a function to transform the input to "BLABLA....."
  const transformInput = (text) => {
    return text.replace(/./g, "BLA");
  };

  return (
    <div>
      <h3>Bad Robot</h3>
      <p>{transformInput(input)}</p>
    </div>
  );
};

export default BadRobot;
