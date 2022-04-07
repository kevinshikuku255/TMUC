import React from 'react';
// import Carousel from "../../Components/Caraousel";
import ReactGA from 'react-ga';
import "./pages.scss";

import Portal from "./Portal";
import Elearning from "./E-learning";
import Login from "./StudentLogin";
import Downloads from "./Downloads";
import About from "./About";
import Council from "./Council";
import Library from "./Library";
import History from "./History";
import Academics from "./Academics"
import Photos from "./Photos";
import Direction from "./Direction";
import Helb from "./Helb";
import colorTheme from "../../Components/colorTheme";


/** Home page */
function Index() {
  ReactGA.pageview('/');
  const theme = colorTheme();
/* -------------------------POST------------------------------------------------- */

 const style = {
    color: theme.link,
    fontSize: "smaller",
    padding: 0,
    margin: "1rem 0",
    textAlign: "center"
 }

  return (
  <div style={{color: theme.primary}} className="Main">
      <div className="Home_page">
            {/* <Carousel className="Ad"/> */}
        <p style={style}> Play the puzzle challenge in the Activities tab to earn coins in Ksh.</p>
        <div className="Pages1">
          <Login theme={theme}/>
          <Elearning theme={theme}/>
        </div>
        <br/>
        <div className="Pages1">
          <Portal theme={theme}/>
          <Library theme={theme}/>
          <Photos theme={theme}/>
          <Downloads theme={theme}/>
          <Academics theme={theme}/>
          <About theme={theme}/>
          <Direction theme={theme}/>
          <Council theme={theme}/>
          <History theme={theme}/>
          <Helb theme={theme}/>
      </div>
      </div>
  </div>
  )
}

export default Index;
