
import { useState } from 'react';

function countInitial() {
  return 4;
}

function App() {
  //const [count, setCount] = useState(() => { return 4 });
  const [count, setCount] = useState(() => countInitial());

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }
  
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
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

