import React, {useState} from 'react';

function InitialCount(){
  console.log("This runs everytime !");
  return 0;
}

function App() {
  const [count, setCount] = useState(InitialCount());

  function decrementCount(){
    setCount((prevCount) => prevCount-1);
  }

  function incrementCount(){
    setCount(prevCount => prevCount+1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
