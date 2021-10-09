import React from 'react';
import ReactGA from 'react-ga';
import "./pages.scss";


/** News components */
function News() {
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"SOTMUC News",
            })
    }

  return (
   <>

    <div className="Sotmuc_news">
    <h2  onClick={() => handleClick()}>SOTMUC NEWS</h2> <br/>
    <h3 style={{color:"red"}} >Feature update for TMUC App...</h3>
    </div>
   </>
  )
}

export default News;
