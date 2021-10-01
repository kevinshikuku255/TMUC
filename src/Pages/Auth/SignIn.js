import React, { useState} from 'react';
import { Avatar, CircularProgress } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { SIGN_IN } from "../../Graphql/user";
import { useMutation } from '@apollo/client';
import { SET_AUTH_USER } from "../../store/auth";
import { useStore } from "../../store";

import "./Auth.scss";
import Logo from "../../Images/favicon.png";





function SignIn() {
const [ values, setValues] = useState({password:"", name:"" })
const [ errors, setErrors] = useState({})
const [ error, setError] = useState('');
const [ show, setShow] = useState(false)
const history = useHistory();
const [, dispatch] = useStore();


const changeHundler = (e) => {
  let value =  e.target.value;
  setValues({...values, [e.target.name]: value})
}


const [ signin ,{loading}] = useMutation(SIGN_IN, {
  variables: values,
  onError:(e)=>{
    let error = e.message.split(" ")[0]
    setErrors({[error]: e.message})
    setError(e.message)
  },
  onCompleted:(data) => {
    let token = data.signin.token
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    localStorage.setItem("jwt", token);
    dispatchAction(decodedToken);
    history.push("/")
  }
})



  const dispatchAction = (token) => {
    dispatch({
      type: SET_AUTH_USER,
      payload: token,
    });
  };


const submitHundler = (e) => {
  e.preventDefault();
  signin()
}


if(loading){
  return(
    <div className="Loading">
      <CircularProgress/>
      <p>Loging in in, just a minute</p>
    </div>
  )
}

  return (
    <div className="SignUp">
      <div className="Header">
         <Avatar src={Logo}/>
         <p>TMUC</p>
         <p className="ErrorMessage">{error}</p>
      </div>
     <form className="Form" onSubmit={submitHundler}>
           <div>
             <input
                placeholder="name"
                name= "name"
                type="text"
                onChange={changeHundler}
                value={values.name}
                className={errors.name ? "Error": ""}
              />
           </div>

            <div>
              <input
                placeholder="password"
                name= "password"
                type={show ? "text" : "password"}
                onChange={changeHundler}
                value={values.password}
                className={errors.password || errors.passwords ? "Error": ""}
              />
              {!show && <p className="passwordVisibility" onClick={()=> setShow(!show)}>show</p>}
              {show && <p className="passwordVisibility" onClick={()=> setShow(!show)}>hide</p>}
            </div>

           <div className="SubmitButton">
             <button type="submit">  SIGN IN </button>
           </div>
        </form>
      <p style={{color:"blue"}} onClick={()=> history.push("./Signup")}>create account instead</p>
    </div>
  )
}

export default SignIn
