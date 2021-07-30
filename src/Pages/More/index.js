import React from 'react';
import "./more.css";


import Tom from "../../Images/Tom.jpeg"

function index() {
  return (
    <div className="Container">
       <div className="Card-Container">
         <img src={Tom}  alt="tom"/>
<<<<<<< HEAD
=======
         <br/><br/>
          <div className="Card">
            <figure className="front">
               <p> Do you want more on this App ?</p>
               <p>Click on this text to find out</p>
            </figure>

            <figure className="back">
                <p>WhatsApp the Developer your suggestions</p>
                <br/> <br/>
                <a href="https://api.whatsapp.com/send?phone=+254740253367"><WhatsApp className="wsp"/> </a>
                <p>Mean while keep staring at the Picture!!<br/>😂😂</p>
            </figure>
       </div>
>>>>>>> d56dfcce9d26901a496e3e5c5f6f35447af37550
     </div>
   </div>
  )
}

export default index;
