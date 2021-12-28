import React, { useState} from 'react';
import { GAMER_SIGN_IN } from "../../Graphql/user";
import { useMutation } from '@apollo/client';
import "./studentcenter.scss";


/** Signup */
function Signup({close}) {
  const [ name, setName] = useState("")
  const [ error, setError] = useState(null)

  const handleChange = (e) => {
     setName(e.target.value)
  }

    const [ signin ] = useMutation(GAMER_SIGN_IN, {
          variables: {name: name},
          onError:(e)=>{
            console.log("did not sign")
          },
          onCompleted:(data) => {
            localStorage.setItem("Gamer", JSON.stringify(data.gamerSignin))
          }
        })

    const handleSignUp = () => {
          if(name.length <= 1){
            setError("set your gamer name");
            setName("")
            return
          }
          if(name.length > 12){
            setError("Gamer name too long")
            setName("");
            return
          }
          signin();
          close();
    }

  return (
    <div className='signup_wrapper'>
       <h2>Set your gamer name!</h2>
       <input type='text' value={name.replace(/\s+/g, "")} onChange={handleChange}/> <br/>
       { (error && !name) ? <p style={{color:"red"}}>{error}</p> : <p className="signup_button" onClick={handleSignUp}>GO</p>}

    </div>
  )
}

export default Signup;
