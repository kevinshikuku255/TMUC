import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Login({theme}) {

   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on student portal",
              transport:"beacon",
              label:"STUDENT-PORTAL",
            })
    }


   const clickHandler = () => {
     dispatch({
       type: "LOAD",
       payload: true
     })
     handleClick()
   }


  return (
    <div style={{backgroundColor:theme.background}} className="Login">
       <h4>student portal</h4>
          <a className="L" onClick={clickHandler} href="http://student.tmuc.ac.ke/">login</a>
    </div>
  )
}

export default Login;
