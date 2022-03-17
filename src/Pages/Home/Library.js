import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Library({theme}) {
   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school library",
              transport:"beacon",
              label:"LIBRARY",
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
    <div style={{backgroundColor:theme.background}} className="Library">
       <h4>school library</h4>
          <a className="LB" onClick={clickHandler} href="https://tmuc.ac.ke/library-home">library</a>
    </div>
  )
}

export default Library;
