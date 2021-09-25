import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./news.scss";


/** Login Component */
function Login() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className="LoginWrapper">
      <h3>WELCOME TO LOGIN PAGE</h3>
      <div>
        <p> By loging in you will be able to pin items on the students online notice board. <br/>
        Remember to keep every comment positve for you will be accountable to any damage or misinformation.</p>
      </div>
      <button onClick={() => loginWithRedirect()}>Continue to  login </button>
    </div>
  )
}

export default Login
