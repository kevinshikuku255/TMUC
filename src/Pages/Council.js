import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Council() {
   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school council",
              transport:"beacon",
              label:"SCHOOL-COUNCIL",
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
       <h4>school council</h4>

          <a className="C" onClick={clickHandler} href="https://tmuc.ac.ke/management-staff">council</a>
    </div>
  )
}

export default Council;
