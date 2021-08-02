import React from 'react'
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';


/** Direction from google maps */
function Direction() {

   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Direction">
       <h4>Direction</h4>
       <button className="P" onClick={clickHandler}>
         <a href="https://www.google.com/maps/dir//Tom+Mboya+University+College,+C19,+Homabay,+Kenya,+Homabay/@-0.584245,34.387713,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x19d4d455c5c14c23:0x49c2401d906f4a6!2m2!1d34.387713!2d-0.584245!3e0">Direction</a>
      </button>
    </div>
  )
}

export default Direction;
