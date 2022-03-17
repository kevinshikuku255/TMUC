import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Downloads({theme}) {

   const [,dispatch ]=  useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school downloads",
              transport:"beacon",
              label:"DOWNLOADS",
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
    <div style={{backgroundColor:theme.background}} className="Downloads">
       <h4>school downloads</h4>
          <a className="D" onClick={clickHandler} href="https://tmuc.ac.ke/downloads">downloads</a>
    </div>
  )
}

export default Downloads;
