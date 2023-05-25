import React, {useState} from 'react';

// function InitialCount(){
//   console.log("This runs everytime !");
//   return 0;
// }

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('red');
  
  function decrementCount(){
    setCount((prevCount) => prevCount - 1);
    setTheme('green');
  }

  function incrementCount(){
    setCount((prevCount) => prevCount + 1);
    setTheme('yellow');
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
