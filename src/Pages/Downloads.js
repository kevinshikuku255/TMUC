import React from 'react'
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Downloads() {

   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Downloads">
       <h4>School Downloads</h4>
       <button className="D" onClick={clickHandler}>
          <a href="https://tmuc.ac.ke/downloads">Downloads</a>
        </button>
    </div>
  )
}

export default Downloads;
