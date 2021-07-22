import React from 'react';
import {Link} from"react-router-dom";
import ReactGA from 'react-ga';

import { useLoadDispatch } from '../Context/loading';
import "./pages.css";


function StudentCouncil() {

const handleClick = () => {
    ReactGA.event({
          category:"View",
          action:"clicked",
          transport:"beacon",
          label:"Sotmuc",
        })
}

   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "OFFLOAD",
       payload: false
     })
     handleClick()
   }

  return (
    <div className="StudentCouncil">
       <h4>Student Council</h4>
       <button onClick={clickHandler}>
          <Link to="/sotmuc">SOTMUC </Link>
        </button>
    </div>
  )
}

export default StudentCouncil;
