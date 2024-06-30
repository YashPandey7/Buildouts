import React, { useRef, useState } from 'react';

function XStopWatch() {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [name, setName] = useState("Start");
    const intervalRef = useRef();

    const onclk = () => {
        if(name == "Start"){
            setName("Stop");
            intervalRef.current = setInterval(() => {
                setSec((prevSec) => {
                    if(prevSec < 60){
                        return prevSec + 1;
                    }else{
                        setMin((prevMin) => prevMin + 1);
                        return 0;
                    }
                })
            }, 1000);

        }else{
            setName("Start");
            clearInterval(intervalRef.current);
        }
    }

    const reset = () => {
        clearInterval(intervalRef.current);
        setSec(0);
        setMin(0);
        setName("Start");
    }

    return (
        <>
            <h1>Stopwatch</h1>
            Time: {min}:{sec <= 9 ? `0${sec}` : sec}
            <br/>
            <button type="button" className = "btn btn-primary mt-2" onClick={onclk} >{name}</button>
            <button type="button" className = 'btn btn-primary mt-2 mx-2' onClick={reset}>Reset</button>
        </>
    );
}

export default XStopWatch;