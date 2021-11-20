import React from 'react';
import "./styles.scss";
import Carousel from 'react-elastic-carousel';
import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  return (
     <>
     <sup>Ad</sup>
      <Carousel
          itemsToShow={1} className="Carousel"
          showArrows={false}
          enableSwipe={true}
          enableAutoPlay
          pagination={false}
          >
          <Photos/>
          <div className="four">
            <h5>ROYAL DENTAL CLINIC HOMABAY</h5>
            <p>Salama Area next to Oasis Plaza</p>
            <i>call: 0703178781 or <a href="https://royaldental.ke/">https://royaldental.ke</a></i>
          </div>
        </Carousel>
        </>
  )
}
export default CarouselComponent;
