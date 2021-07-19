import React from 'react'
import "./pages.css";
import { useLoadDispatch } from '../Context/loading';

function Academics() {
   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Academics">
       <h4>Academics</h4>
        {<button className="C" onClick={clickHandler}>
         <a href="https://tmuc.ac.ke/undergraduateprogrammes">Academics</a>
        </button>}
    </div>
  )
}

export default Academics;
