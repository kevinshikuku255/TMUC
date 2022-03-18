import React from 'react';
import "./styles.scss";
// import Carousel from 'react-elastic-carousel';
import colorTheme from "../colorTheme";
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  const theme = colorTheme();

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
            <p style={{color: theme.primary}}>Dark 🌚 and light 🌞 mode now on this app  </p>
            <h6>check on the menu !!</h6>
          </div>
        </div>
        </>
  )
}
export default CarouselComponent;