import React from 'react';
import "./more.css";


import Tom from "../../Images/Tom.jpeg"

function index() {
  return (
    <div className="Container">
       <div className="Card-Container">
         <img src={Tom}  alt="tom"/>
     </div>
   </div>
  )
}

export default index;
