import React from 'react';
import {Link} from"react-router-dom";
import ReactGA from 'react-ga';

import { useLoadContext } from '../../Context';
import "./pages.scss";


function StudentCouncil({theme}) {

const handleClick = () => {
    ReactGA.event({
          category:"View",
          action:"clicked",
          transport:"beacon",
          label:"Sotmuc",
        })
}

   const [,dispatch ]= useLoadContext ();


   const clickHandler = () => {
     dispatch({
       type: "OFFLOAD",
       payload: false
     })
     handleClick()
   }

  return (
    <div style={{backgroundColor:theme.background}} className="StudentCouncil">
       <h4>student council</h4>
          <Link onClick={clickHandler} to="/sotmuc">sotmuc </Link>
    </div>
  )
}

export default StudentCouncil;
