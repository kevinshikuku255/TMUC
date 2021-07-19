import React from 'react';
import { useLoadDispatch } from '../Context/loading';

import "./pages.css"



function About() {
   const loadDispatch = useLoadDispatch();


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
   }


  return (
    <div className="About">
       <h4>About TMUC</h4>
      <div>
        {
           <button className="A" onClick={clickHandler}>
               <a href="https://tmuc.ac.ke/about-us">About us</a>
           </button>
       }

      </div>
    </div>
  )
}

export default About;
