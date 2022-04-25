import React from 'react';
// import Carousel from "../../Components/Caraousel";
import ReactGA from 'react-ga';
import "./pages.scss";

import { Portal, Elearning, Login, Downloads, About, Council, Library, History, Academics, Photos, Direction, Helb } from "./Links";
import colorTheme from "../../Components/colorTheme";
import { useThemeContext } from '../../Context';

/** Home page */
function Index() {
  ReactGA.pageview('/');
  const theme = colorTheme();
  const  [ { Home }  ] = useThemeContext();
  const icons = Home === "Icons" ? true : false;
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
            <h6 style={style}>customize academics tab of this app in the settings</h6>
            <div className="Pages1">
              <Login theme={theme}  icon={icons}/>
              <Elearning theme={theme}  icon={icons}/>
            </div>
            <br/>
            <div className="Pages1">
              <Portal theme={theme} icon={icons}/>
              <Library theme={theme} icon={icons}/>
              <Photos theme={theme} icon={icons}/>
              <Downloads theme={theme} icon={icons}/>
              <Academics theme={theme} icon={icons}/>
              <About theme={theme} icon={icons}/>
              <Direction theme={theme} icon={icons}/>
              <Council theme={theme} icon={icons}/>
              <History theme={theme} icon={icons}/>
              <Helb theme={theme} icon={icons}/>
          </div>
      </div>
  </div>
  )
}

export default Index;
