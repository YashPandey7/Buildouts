import React, { useState } from 'react';

function Sample() {
    const [count, setCount] = useState(0);

    const onclk = () =>{
        setInterval(() => {
          setCount(prevCount => prevCount + 1)
        }, 1000);
    }


  return (
    <>
        <div>{count}</div>
        <button type="button" onClick={onclk}>Start</button>
    </>
  );
}

export default Sample;