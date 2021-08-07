import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Portal() {

   const dispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"School portal",
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
       <h4>School Website</h4>
       <button className="P">
         <a onClick={clickHandler} href="https://tmuc.ac.ke/">Website</a>
      </button>
    </div>
  )
}

export default Portal;
