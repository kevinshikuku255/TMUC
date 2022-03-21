import React from 'react';
import "./styles.scss";
import { LightMode, DarkMode} from '@mui/icons-material';
import { useThemeContext } from '../../Context';
import colorTheme from "../colorTheme";
import ReactGA from 'react-ga';
// import Carousel from 'react-elastic-carousel';
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  const theme = colorTheme();
  const  [ { Theme } , dispatch ] = useThemeContext();
// Google analytics
const reportDark = () => {
  ReactGA.event({
        category:"Theme",
        action:"changed to dark theme",
        transport:"beacon",
        label:"Dark theme",
      })
}
const reportLight = () => {
ReactGA.event({
      category:"Theme",
      action:"changed to light theme",
      transport:"beacon",
      label:"Light theme",
    })
}

// Dark and light theme click handlers
    const darkHandler = () => {
      localStorage.setItem("theme", "Dark")
      dispatch({
        type: "Dark",
        payload: "Dark"
      })
      reportLight();
    }

    const lightHandler = () => {
      localStorage.setItem("theme", "Light")
      dispatch({
        type: "Light",
        payload: "Light"
      })
      reportDark()
    }

  return (
     <>
     {/* <sup>Ad</sup> */}
      <div
          // itemsToShow={1} 
          className="Carousel"
          // showArrows={false}
          // enableSwipe={true}
          // enableAutoPlay
          // pagination={false}
          >
          {/* <Photos/> */}
          <div className="four" style={{color: theme.primary}}>
            <p style={{color: theme.primary}}>Dark 🌚 and Light 🌞 mode now on this app  </p>
            { Theme === "Dark" &&  <p className="MenuItem" onClick={() => lightHandler()}>Change to Light  <LightMode/></p>}
            { Theme === "Light" && <p className="MenuItem" onClick={() => darkHandler()}>change to Dark  <DarkMode/></p>}
          </div>
        </div>
        </>
  )
}
export default CarouselComponent;