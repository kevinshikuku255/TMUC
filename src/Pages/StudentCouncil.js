import React from 'react';
import {Link} from"react-router-dom";
import ReactGA from 'react-ga';
import "./pages.css";


function StudentCouncil() {

const handleClick = () => {
    ReactGA.event({
          category:"View",
          action:"clicled",
          transport:"beacon",
          label:"Sotmuc",
        })
}

  return (
    <div className="StudentCouncil">
       <h4>Student Council</h4>
       <button onClick={handleClick}>
          <Link to="/sotmuc">SOTMUC </Link>
        </button>
    </div>
  )
}

export default StudentCouncil;
