import React, { useState } from 'react';

function XLogin() { 
  const [data, setData] = useState({
    name : "",
    password : ""
  });

  const [islogin, setisLogin] = useState(false);
  const [check, setCheck] = useState(false);

  const inputChange = (e) => {
    // console.log(e.target.value);
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if(data.name == "user" && data.password == "password"){
      setCheck(true);
    }
    setisLogin(true);
  }
    
  return (
    <>
        <h1>Login Page</h1>
        {islogin ? 
            check ? 
              (<p>Welcome, {data.name}!</p>)
              :(<p>Invalid username or password</p>)
            : 
            (<form onSubmit={formSubmit}>
                <label htmlFor="name">Username:</label>
                <input type='text' id = "name" name = "name" value={data.name} onChange={inputChange} required/>
                <br/>
                
                <label htmlFor="password">Password:</label>
                <input type='password' id ="password" name = "password" value={data.password} onChange={inputChange} required/>
                <br/>

                <button type='submit'>Submit</button>
            </form>)
        }
    </>
  )
}

export default XLogin;