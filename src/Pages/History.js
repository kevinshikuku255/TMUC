import React from 'react'
import ReactGA from 'react-ga';
import "./pages.scss"
import { useLoadDispatch } from '../Context/loading';

function History() {
   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school history",
              transport:"beacon",
              label:"SCHOOL-HISTORY",
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
    <div className="History">
       <h4>school history</h4>
          <a className="H" onClick={clickHandler} href="https://tmuc.ac.ke/our-history">history</a>
    </div>
  )
}

export default History;
