import React, { useState } from 'react';

function XDisplayName() {
    const [names, setName] = useState({
        fname : '',
        lname : ''
    });
    const [fullname, setFullName] = useState('');

    const inputEvent = (e) => {
        const {name, value} = e.target;
        setName((b) => {
            return {
                ...b,
                [name] : value
            }
        });
    }

    const submit = (e) => {
        e.preventDefault();
        setFullName(names.fname + " " + names.lname );
    }

  return (
    <>
        <h1>Full Name Display</h1>
        <form onSubmit={submit}>
            First Name: 
            <input type = "text" value={names.fname} name = "fname" onChange={inputEvent} required/>
            <br/>

            Last Name:
            <input type = "text" value={names.lname} name = "lname" onChange={inputEvent} required/>
            <br/>

            <button type='submit'>Submit</button>
        </form>
        
        {/* {fullname && <p>Full Name: {fullname}</p>} */}
        {fullname ? <p>Full Name: {fullname}</p> : ""}
    </>
  )
}

export default XDisplayName;