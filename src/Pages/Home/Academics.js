import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Academics() {
   const [ ,dispatch] = useLoadContext();

   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"Clicked on academics",
              transport:"beacon",
              label:"ACADEMICS"
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
    <div className="Academics">
       <h4>academics</h4>
        {
         <a className="C" onClick={clickHandler} href="https://tmuc.ac.ke/undergraduateprogrammes">academics</a>
        }
    </div>
  )
}

export default Academics;
