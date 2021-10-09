import React from 'react';
import ReactGA from 'react-ga';
import { useLoadContext } from '../../Context';

import "./pages.scss"


function About() {
   const [,dispatch] = useLoadContext();

   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"Cliked on About us",
              transport:"beacon",
              label:"ABOUT US"
            })
    }

   const clickHandler = () => {
     dispatch({
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
