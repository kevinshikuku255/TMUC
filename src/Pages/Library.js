import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Library() {
   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"Library",
            })
    }

   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
    handleClick()
   }

  return (
    <div className="Library">
       <h4>School Library</h4>
       <button className="LB">
          <a onClick={clickHandler} href="https://tmuc.ac.ke/library-home">Library</a>
       </button>
    </div>
  )
}

export default Library;
