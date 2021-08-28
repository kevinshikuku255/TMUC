
import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Helb() {
   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"HELB",
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
    <div className="Helb">
       <h4>helb</h4>
          <a className=" HB" onClick={clickHandler} href="https://www.helb.co.ke/student-portal/">helb</a>
    </div>
  )
}

export default Helb;
