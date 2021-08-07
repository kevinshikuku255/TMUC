import React from 'react';
import {Link} from"react-router-dom";
import ReactGA from 'react-ga';

import { useLoadDispatch } from '../Context/loading';
import "./pages.scss";


function StudentCouncil() {

const handleClick = () => {
    ReactGA.event({
          category:"View",
          action:"clicked",
          transport:"beacon",
          label:"Sotmuc",
        })
}

   const dispatch = useLoadDispatch();


   const clickHandler = () => {
     dispatch({
       type: "OFFLOAD",
       payload: false
     })
     handleClick()
   }

  return (
    <div className="StudentCouncil">
       <h4>Student Council</h4>
          <Link onClick={clickHandler} to="/sotmuc">sotmuc </Link>
    </div>
  )
}

export default StudentCouncil;
