import React, { useState } from 'react';

const Counter = () => {
  // Declare state: counter starts at 0
  const [count, setCount] = useState(0);
//solvedd  
  // Function to increment the counter
  const increment = () => {
    setCount(count + 1); // Zed 1 l-value dyal count
  };
  //solvedd
  //solvedd  
  //solvedd
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
};
export default Counter;
