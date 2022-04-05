import React, { useState } from "react";
import './puzzle.scss';
import Board from "./Board";

/** Puzzle game */
const Puzzle = () => {
const [ open, setOpen ] = useState(false);
  return(
      <div  className="puzzle">
          <Board/>
          {!open ? 
           <p style={{color: "blueviolet"}} onClick={() => setOpen(!open)}>HINTS</p> : <p style={{color: "blueviolet"}} onClick={() => setOpen(!open)}>CLOSE HINTS</p>}
          { open && 
          <div style={{width: "80vw"}} > 
            <p>Arange the tiles to complete the puzzle.</p>
            <p>Number one tile should be at the top left corner and empty tile as the last after tile 15 to complete.</p>
            <p>You earn coins as you arrange the tiles in order, the clever moves taken earnes you more coins and poinst.</p>
            <p>On completion of the puzzle you earn more additional coins which can be up to Ksh. 50 coins according to how clever your moves were during the challenge.</p>
            <p>Acumilate enough coins to redeem 💰</p> 
          </div>}
      </div>
  )
}

export default Puzzle;