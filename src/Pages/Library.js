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
       <h4>school library</h4>
          <a className="LB" onClick={clickHandler} href="https://tmuc.ac.ke/library-home">library</a>
    </div>
  )
}

export default Library;
