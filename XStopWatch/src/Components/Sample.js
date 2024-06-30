import React, { useRef, useState } from 'react';

function Sample() {
    // const [count, setCount] = useState(0);

    // const onclk = () =>{
    //     setInterval(() => {
    //       setCount(prevCount => prevCount + 1)
    //     }, 1000);
    // }

    const [data, setData] = useState("");
    const inputEle = useRef("");

    const onclk = () => {
      inputEle.current.style.backgroundColor = "#008080";
      inputEle.current.focus();
    }

  return (
    <>
        {/* <div>{count}</div>
        <button type="button" onClick={onclk}>Start</button> */}

        <input type = "text" value = {data} onChange={(e) => setData(e.target.value)} ref={inputEle}/>
        <button onClick={onclk}>Click Me</button>
    </>
  );
}

export default Sample;