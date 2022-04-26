import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {login} from "../../redux/apiCalls"
function Login() {

  const [username,setuserName]=useState("")
  const [password,setPassword]=useState("")
  const dispatch = useDispatch()
  const handleClick=(e)=>{
    e.preventDefault()
    // console.log(name,pass)
    login(dispatch,{username, password})
  }
  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="">username</label>
        <input type="text" onChange={(e)=>{setuserName(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">username</label>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Login;
