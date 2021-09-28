import React from 'react';
import "./components.scss";
import Carousel from 'react-elastic-carousel'


function CarouselComponent() {
  return (
    <div>
      {<Carousel
          itemsToShow={2} className="Carousel"
          showArrows={false}
          enableSwipe={true}
          enableAutoPlay
          pagination={false}
          >
          <div className="one">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="four">4</div>
          <div className="five">5</div>
          <div className="six">6</div>
        </Carousel>}
    </div>
  )
}

export default CarouselComponent;
