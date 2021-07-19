import React from 'react';
import {Link} from"react-router-dom";
import "./pages.css";


function StudentCouncil() {

  return (
    <div className="StudentCouncil">
       <h4>Student Council</h4>
       <button>
          <Link to="/sotmuc">SOTMUC </Link>
        </button>
    </div>
  )
}

export default StudentCouncil;
