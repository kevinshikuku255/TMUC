import React from 'react';
import { useHistory } from "react-router-dom";
import "./styles.scss";
import Carousel from 'react-elastic-carousel';
import colorTheme from "../colorTheme";
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  const history = useHistory();
  const theme = colorTheme();

  return (
     <>
     {/* <sup>Ad</sup> */}
      <Carousel
          itemsToShow={1} className="Carousel"
          showArrows={false}
          enableSwipe={true}
          enableAutoPlay
          pagination={false}
          >
          {/* <Photos/> */}
          <div className="four" style={{color: theme.primary}}>
            <p style={{color: theme.primary}}>Dark 🌚 and light 🌞 mode now on this app  </p>
            <h6>check on the menu !!</h6>
             {/* <button onClick={() => history.push("/Timetable")}>Create</button> */}
          </div>
        </Carousel>
        </>
  )
}
export default CarouselComponent;