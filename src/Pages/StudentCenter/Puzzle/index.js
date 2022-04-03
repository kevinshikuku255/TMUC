import React from "react";
import './puzzle.scss';

/** Puzzle game */
const Puzzle = () => {

  return(
      <div  className="puzzle">
          <h1>Puzzle game</h1>
          <div className='new_game_button'> <p> New game</p>  <p> switch to flip game </p></div>
      </div>
  )
}

export default Puzzle;