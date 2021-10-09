import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Helb() {
   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on helb",
              transport:"beacon",
              label:"HELB",
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
    <div className="Helb">
       <h4>helb</h4>
          <a className=" HB" onClick={clickHandler} href="https://www.helb.co.ke/student-portal/">helb</a>
    </div>
  )
}

export default Helb;
