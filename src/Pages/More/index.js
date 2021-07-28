import React from 'react';
import "./more.css";

import { WhatsApp } from "@material-ui/icons"

import Tom from "../../Images/Tom.jpeg"

function index() {
  return (
    <div className="Container">
       <div className="Card-Container">
         <img src={Tom}  alt="tom"/>
         <br/><br/>
          <div className="Card">
            <figure className="front">
               <p> Do you want more on this App ??🤷‍♀️</p>
               <p>Click on this text to find out</p>
            </figure>

            <figure className="back">
                <p>WhatsApp the Developer your suggestions</p>
                <br/> <br/>
                <a href="https://api.whatsapp.com/send?phone=+254740253367"><WhatsApp className="wsp"/> </a>
                <p>Mean while keep stairing at the Picture!!<br/>😎 😂😂</p>
            </figure>
       </div>
     </div>
   </div>
  )
}

export default index;
