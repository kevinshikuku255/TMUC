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
            {/* <img className="front" src={card.url} alt="front"/> */}
            <div className='front'>{card.emoji}</div>
            <div className='back' onClick={handleClick}>back</div>
        </div>
    </div>
  )
}

export default Singlecard;