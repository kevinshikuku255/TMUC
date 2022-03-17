import React from 'react'
import ReactGA from 'react-ga';
import "./pages.scss"
import { useLoadContext } from '../../Context';

function History({theme}) {
   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school history",
              transport:"beacon",
              label:"SCHOOL-HISTORY",
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
    <div style={{backgroundColor:theme.background}} className="History">
       <h4>school history</h4>
          <a className="H" onClick={clickHandler} href="https://tmuc.ac.ke/our-history">history</a>
    </div>
  )
}

export default History;
