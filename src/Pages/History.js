import React from 'react'
import ReactGA from 'react-ga';
import "./pages.scss"
import { useLoadDispatch } from '../Context/loading';

function History() {
   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"School Histroy",
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
       <h4>School History</h4>
          <a className="H" onClick={clickHandler} href="https://tmuc.ac.ke/our-history">history</a>
    </div>
  )
}

export default History;
