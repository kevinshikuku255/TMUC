import React, { useState} from 'react';
import { Avatar } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { SIGN_UP } from "../../Graphql/user";
import { useMutation } from '@apollo/client';
import { useAuthContext, LOG_IN} from "../../Context";
import jwtDecode from "jwt-decode";


import "../Auth/Auth.scss";


import Logo from "../../Images/favicon.png"

function SignUp() {
const [ values, setValues] = useState({password:"", name:"" , confirmPassword:""})
const [ errors, setErrors] = useState({})
const [ error, setError] = useState('');
const [ show, setShow] = useState(false)
const history = useHistory();
const [, dispatch] = useAuthContext();


const changeHundler = (e) => {
  let value =  e.target.value;
  setValues({...values, [e.target.name]: value})
}


const [ signup ,{loading}] = useMutation(SIGN_UP, {
  variables: values,
  onError:(e)=>{
    let error = e.message.split(" ")[0]
    setErrors({[error]: e.message})
    setError(e.message)
  },
  onCompleted:(data) => {
    console.log(data)
    let token = data.signup.token
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    localStorage.setItem("jwt", token);
    dispatchAction(decodedToken);
    history.push("/")
  }
})


  const dispatchAction = (token) => {
    dispatch({
      type: LOG_IN,
      payload: token,
    });
  };


const submitHundler = (e) => {
  e.preventDefault();
  signup()
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

            <div>
              <input
                placeholder="confirm password"
                name= "confirmPassword"
                type={show ? "text" : "password"}
                onChange={changeHundler}
                values={values.confirmPassword}
                className={errors.confirm || errors.passwords ? "Error": ""}
              />
              {!show && <p className="passwordVisibility" onClick={()=> setShow(!show)}>show</p>}
              {show && <p className="passwordVisibility" onClick={()=> setShow(!show)}>hide</p>}
            </div>

           <div className="SubmitButton">
             <button type="submit" disabled={loading}> { loading ? "SIGNING UP ...": "SIGN UP"} </button>
           </div>
        </form>
        <br/><br/>
      <p style={{color:"blue"}} onClick={() => history.push("./Signin")}>Login instead</p>
    </div>
  )
}

export default SignUp
