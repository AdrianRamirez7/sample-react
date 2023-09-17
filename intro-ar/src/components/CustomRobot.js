import React from "react";

const CustomRobot = ({ input }) => {
  // Implement your custom logic here
  // Modify the input as per your choice. For instance, use different built in string methods on these inputs.
  const modifiedInput = input.toUpperCase();



  return (
    <div>
      <h3>Custom Robot</h3>
      {modifiedInput}
      <p>{input}</p>
    </div>
  );
};

export default CustomRobot;
