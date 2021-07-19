import React from 'react'
import "./pages.css";
import { useLoadDispatch } from '../Context/loading';

function Login() {

   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Login">
       <h4>Student Portal</h4>
       <button className="L" onClick={clickHandler}>
          <a href="http://student.tmuc.ac.ke/">Login</a>
       </button>
    </div>
  )
}

export default Login;
