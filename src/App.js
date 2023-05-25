import React, {useState} from 'react';

// function InitialCount(){
//   console.log("This runs everytime !");
//   return 0;
// }

function App() {
  // const [count, setCount] = useState(() => InitialCount());
  const [state, setState] = useState({count: 0, theme: 'red'});
  const count = state.count;
  const theme = state.theme;

  function decrementCount(){
    setState((prevCount) => {
       return { count: prevCount.count - 1};
    });
  }

  function incrementCount(){
    setState(prevCount => {
      return { count: prevCount.count + 1};
    });
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
