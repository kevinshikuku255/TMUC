import React from 'react'
import "./pages.scss"
import { useLoadDispatch } from '../Context/loading';

function History() {
   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="History">
       <h4>School History</h4>
       <button className="H" onClick={clickHandler}>
          <a href="https://tmuc.ac.ke/our-history">History</a>
       </button>
    </div>
  )
}

export default History;
