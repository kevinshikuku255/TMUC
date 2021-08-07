import React from 'react';
import ReactGA from 'react-ga';
import { useLoadDispatch } from '../Context/loading';

import "./pages.scss"



function About() {
   const loadDispatch = useLoadDispatch();

   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"About TMUC",
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
    <div className="About">
       <h4>About TMUC</h4>
      <div>
        {
           <button className="A" >
               <a onClick={clickHandler} href="https://tmuc.ac.ke/about-us">About us</a>
           </button>
       }

      </div>
    </div>
  )
}

export default About;
