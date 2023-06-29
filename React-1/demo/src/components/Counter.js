import React from "react";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count == 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>The count value is {count} </h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
