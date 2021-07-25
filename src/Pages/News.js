import React, { useState } from 'react';
import ReactGA from 'react-ga';
import "./pages.css";


/** News components */
function News() {
const [thank, setThank] = useState("")

const handleClick = () => {
  setThank("Conratulation !!! let us Build TMUC Together... 🔥🔥 🔥 🔥 🔥 🔥")
  ReactGA.event({
      category:"Acknowledged",
      action:"YES",
      transport:"beacon",
      label:"NEWS",
    })
}

  return (
   <>

    <div className="Sotmuc_news">
    <h2>SOTMUC NEWS</h2> <br/>
    <h3 style={{color:"red"}} >Feature update for TMUC App...</h3>
    <div className="news">
      <p>This section will be displaying official news from SOTMUC Members.</p> <br/>
      <p>It will be designed to give <b>live</b> news updates as they happen. An alternative channel to Notice Board and WhatsApp groups but way much efficient.</p> <br/>

      <h4>Let us build TMUC together.</h4>
       <br/>

      <h4>Click YES to show you have read this.</h4>
      <div className="analyticBtn">
        <button  onClick={handleClick}>YES</button>
      </div>
     <br/>
      <h4 style={{color:"blue"}} >{`${thank}`}</h4>

    </div>
    </div>
   </>
  )
}

export default News;
