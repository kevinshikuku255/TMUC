import React from 'react';
import "./pages.css";
import { useLoadDispatch } from '../Context/loading';

function Elearning() {

   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Elearning">
       <h4>E-learning</h4>
       <button className="E" onClick={clickHandler} >
          <a href="https://elearning.tmuc.ac.ke/">E-learning</a>
        </button>
    </div>
  )
}

export default Elearning;
