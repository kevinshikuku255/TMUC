import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";


function Blank() {
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"Blank",
            })
    }


  return (
    <div className="Helb" onClick={handleClick}>

    </div>
  )
}

export default Blank;
