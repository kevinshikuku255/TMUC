import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';


/** Direction from google maps */
function Direction() {
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school direction",
              transport:"beacon",
              label:"DIRECTION",
            })
    }
   const [,dispatch] = useLoadContext();


   const clickHandler = () => {
     dispatch({
       type: "LOAD",
       payload: true
     })
    handleClick()
   }

  return (
    <div className="Direction">
       <h4>direction</h4>
         <a className="P" onClick={clickHandler} href="https://www.google.com/maps/dir//Tom+Mboya+University+College,+C19,+Homabay,+Kenya,+Homabay/@-0.584245,34.387713,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x19d4d455c5c14c23:0x49c2401d906f4a6!2m2!1d34.387713!2d-0.584245!3e0">direction</a>
    </div>
  )
}

export default Direction;
