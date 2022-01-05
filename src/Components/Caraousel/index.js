import React from 'react';
import ScriptTag from 'react-script-tag';
// import { useHistory } from "react-router-dom";
import "./styles.scss";
import Carousel from 'react-elastic-carousel';
// import { Photos } from "./Photos";


/** Carousel component */
function CarouselComponent() {
  // const history = useHistory()

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
            {/* <p>How accurate can you remember your last move? </p>
             <button onClick={() => history.push("/Studentcenter")}>Play</button> */}
             <ScriptTag  data-cfasync="false" type="text/javascript" src="https://www.greatdexchange.com/a/display.php?r=5461487"/>
          </div>
        </Carousel>
        </>
  )
}
export default CarouselComponent;