import React from 'react';
import "./studentcenter.scss";
import cover from "./img/cover.png"

/** Single card */
function Singlecard({card, handleChoice, flipped, disabled}) {
  const handleClick = () => {
        if(!disabled){
          handleChoice(card)
        }
  }
  
  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.url} alt="front"/>
            <img
              className="back"
              src={cover}
              alt="back"
              onClick={handleClick}
              />
        </div>
    </div>
  )
}

export default Singlecard;