import React from 'react';
import "./styles.scss";
import Carousel from 'react-elastic-carousel';
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
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
            <h2>UPDATES !!</h2>
            <p>You can now, create your weekly class and personal timetable on the timetable tab
             to stay organised </p>
          </div>
        </Carousel>
        </>
  )
}
export default CarouselComponent;
