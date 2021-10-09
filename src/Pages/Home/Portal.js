import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Portal() {

   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school website",
              transport:"beacon",
              label:"SCHOOL-WEBSITE",
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
    <div className="Portal">
       <h4>school website</h4>
         <a className="P" onClick={clickHandler} href="https://tmuc.ac.ke/">website</a>
    </div>
  )
}

export default Portal;
