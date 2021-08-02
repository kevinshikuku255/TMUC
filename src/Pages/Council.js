import React from 'react'
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Council() {
   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Council">
       <h4>School Council</h4>
       <button className="C" onClick={clickHandler}>
          <a href="https://tmuc.ac.ke/management-staff">Council</a>
        </button>
    </div>
  )
}

export default Council;
