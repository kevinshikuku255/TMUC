import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Downloads() {

   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"Downloads",
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
    <div className="Downloads">
       <h4>school downloads</h4>
          <a className="D" onClick={clickHandler} href="https://tmuc.ac.ke/downloads">downloads</a>
    </div>
  )
}

export default Downloads;
