import React from 'react'
import "./pages.css";
import { useLoadDispatch } from '../Context/loading';

function Portal() {

   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Portal">
       <h4>School Website</h4>
       <button className="P" onClick={clickHandler}>
         <a href="https://tmuc.ac.ke/">Website</a>
      </button>
    </div>
  )
}

export default Portal;
