import React from 'react';
import "./studentcenter.scss";

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
            <img className="front" src={card.src} alt="front"/>
            <img
              className="back"
              src='/img/cover.png'
              alt="back"
              onClick={handleClick}
              />
        </div>
    </div>
  )
}

export default Singlecard;