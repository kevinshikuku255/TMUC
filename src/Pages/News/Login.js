import React from 'react';
import { useHistory } from 'react-router-dom';
import "./news.scss";


/** Login Component */
function Login() {
  const history = useHistory()
  return (
    <div className="LoginWrapper">
      <h3>WELCOME TO LOGIN PAGE</h3>
      <div>
        <p> By loging in you will be able to pin items on the students online notice board. <br/><br/>
        With priority to Edit and Delete your notice posts</p>
      </div>
      <button onClick={() => history.push("/Signin")}>continue to  login </button>
    </div>
  )
}

export default Login
