import React from 'react';
import "./styles.scss";
import { useThemeContext } from '../../Context';
import colorTheme from "../colorTheme";
import ReactGA from 'react-ga';
import Switch from '@mui/material/Switch';

// import Carousel from 'react-elastic-carousel';
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  const theme = colorTheme();
  const [checked, setChecked] = React.useState(true);
  const  [ { Theme } , dispatch ] = useThemeContext();


  const handleChange = (event) => {
    const checked = event.target.checked;
    if(checked){
      darkHandler();
    }else{
      lightHandler();
    }
    setChecked(event.target.checked);
  };

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
            <Switch
                checked={checked}
                style={{color: Theme === "Dark" ? "white" : "black"}}
                label={Theme}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
          </div>
        </div>
        </>
  )
}
export default CarouselComponent;