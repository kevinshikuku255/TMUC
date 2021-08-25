import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Academics() {
   const loadDispatch = useLoadDispatch();

   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"Academics",
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
    <div className="Academics">
       <h4>academics</h4>
        {
         <a className="C" onClick={clickHandler} href="https://tmuc.ac.ke/undergraduateprogrammes">academics</a>
        }
    </div>
  )
}

export default Academics;
