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
       <h4>about tmuc</h4>
      <div>
        {

               <a className="A" onClick={clickHandler} href="https://tmuc.ac.ke/about-us">about us</a>
       }

      </div>
    </div>
  )
}

export default About;
