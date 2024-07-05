import React, { useState } from 'react';

function XCounter() {
    const [count, setCount] = useState(0);


  return (
    <>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
        <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default XCounter;