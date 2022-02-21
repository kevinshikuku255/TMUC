import React from 'react';
import { useHistory } from "react-router-dom";
import "./styles.scss";
import Carousel from 'react-elastic-carousel';
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  const history = useHistory();

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
          <div className="four">
            <p>Time management is equivalent to academic success  </p>
            <h6>create your academic time schedule now!</h6>
             <button onClick={() => history.push("/Timetable")}>Create</button>
          </div>
        </Carousel>
        </>
  )
}
export default CarouselComponent;