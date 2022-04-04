import React from "react";
import './puzzle.scss';
import Board from "./Board";

/** Puzzle game */
const Puzzle = () => {

  return(
      <div  className="puzzle">
          <Board/>
      </div>
  )
}

export default Puzzle;