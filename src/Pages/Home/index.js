import React from 'react';
// import Carousel from "../../Components/Carousel";
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



/** Home page */
function Index() {
  ReactGA.pageview('/');
/* -------------------------POST------------------------------------------------- */

  return (
  <div className="Main">
      <div className="Home_page">
            {/* <Carousel/> */}
        <div className="Pages">
          <Login/>
          <Elearning/>
          <Portal/>
          <Library/>
          <Photos/>
          <Downloads/>
          <Academics/>
          <About/>
          <Direction/>
          <Council/>
          <History/>
          <Helb/>
      </div>
      </div>
  </div>
  )
}

export default Index;
