import React from 'react'
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Library() {
   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }

  return (
    <div className="Library">
       <h4>School Library</h4>
       <button className="LB" onClick={clickHandler}>
          <a href="https://tmuc.ac.ke/library-home">Library</a>
       </button>
    </div>
  )
}

export default Library;
