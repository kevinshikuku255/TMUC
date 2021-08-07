import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Council() {
   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"School council",
            })
    }

   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
    handleClick()
   }

  return (
    <div className="Council">
       <h4>School Council</h4>

          <a className="C" onClick={clickHandler} href="https://tmuc.ac.ke/management-staff">council</a>
    </div>
  )
}

export default Council;
