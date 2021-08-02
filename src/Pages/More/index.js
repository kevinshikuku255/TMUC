import React from 'react';
import "./more.scss";


import Tom from "../../Images/Tom.jpeg"

function index() {
  return (
    <div className="Container">
       <div className="Card-Container">
         <img src={Tom}  alt="tom" width="100rem"/>
     </div>
   </div>
  )
}

export default index;
