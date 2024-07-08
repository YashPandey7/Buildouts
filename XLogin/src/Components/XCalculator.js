import React, { useState } from 'react';
import "./XCalculator.css";

function XCalculator() {
    const [val, setVal] = useState("");
    const [result, setResult] = useState("");

    const onclk = (e) => {
        const value = e.target.value;
        if(value === "C"){
          reset();
        }else if(value === "="){
          calculate();
        }else{
          setVal(prev => prev + value);
        }
    }

    const reset = () => {
      setVal("");
      setResult("");
    }

    const calculate = () => {
      if(val === ""){
        setResult("Error");
      }
      else{
        const ans = eval(val);
        setResult(ans);
      }
    }

  return (
    <>
        <h1>React Calculator</h1>
        <input type = "text" value={val} onChange={(e) => setVal(e.target.value)}/><br/><br/>
        <div>{result}</div><br/>
        {/* {result ? <div>{result}</div> : ""} */}

        <button type='button' onClick={onclk} value={7}>7</button>
        <button type='button' onClick={onclk} value={8}>8</button>
        <button type='button' onClick={onclk} value={9}>9</button>
        <button type='button' onClick={onclk} value={"+"}>+</button>
        <br/>
        <button type='button' onClick={onclk} value={4}>4</button>
        <button type='button' onClick={onclk} value={5}>5</button>
        <button type='button' onClick={onclk} value={6}>6</button>
        <button type='button' onClick={onclk} value={"-"}>-</button>
        <br/>
        <button type='button' onClick={onclk} value={1}>1</button>
        <button type='button' onClick={onclk} value={2}>2</button>
        <button type='button' onClick={onclk} value={3}>3</button>
        <button type='button' onClick={onclk} value={"*"}>*</button>
        <br/>
        <button type='button' onClick={onclk} value={"C"}>C</button>
        <button type='button' onClick={onclk} value={0}>0</button>
        <button type='button' onClick={onclk} value={"="}>=</button>
        <button type='button' onClick={onclk} value={"/"}>/</button>
    </>
  )
}

export default XCalculator;