import React, { useState } from "react";
import Tile from "./Tile";
import "./puzzle.scss";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap , swap, shuffle, isSolved} from "./helpers";

function Board() {

     // Create an array of string
     var stringArray = localStorage.getItem("tiles") && localStorage.getItem("tiles").split(",")
  
     let savedTiles = [];
     if(stringArray){
         for (var i = 0; i < 16; i++)
         savedTiles.push(parseInt(stringArray[i]));
        }
        

    const [ tiles, setTiles] = useState( savedTiles.length === 0 ? shuffle([...Array(TILE_COUNT).keys()]) : savedTiles);
    // const [ isSolved, setSolved ] = useState(false);


    // if is solved
    const completed = isSolved(tiles);
    if(completed){
       let earnedCoins = localStorage.getItem("coins");
       if(earnedCoins === null){
           localStorage.setItem("coins", 0)
       }
      
       let _earnedCoins = parseInt(localStorage.getItem("coins"))

        localStorage.setItem("coins", Math.floor(Math.random() * 16 + 1) + _earnedCoins )
    }
    

    // shuffle ...
    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles);
        setTiles(shuffledTiles);
        localStorage.setItem("tiles", shuffledTiles)
    }


        

    //swap ...
    const swapTiles = (tileIndex) => {
        if(canSwap(tileIndex, tiles.indexOf(tiles.length - 1), GRID_SIZE)){
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
            setTiles(swappedTiles);
            localStorage.setItem("tiles", swappedTiles)

            let earnedPoints = localStorage.getItem("points");
            if(earnedPoints === null){
                localStorage.setItem("points", 0)
              }
              let _earnedPoints = parseInt(localStorage.getItem("points"))

              localStorage.setItem("points", Math.floor(Math.random() * 0.9 + 0.2) + _earnedPoints )
        }
    }

    const handleClick = (index) => {
      swapTiles(index)
    }

    const handleShuffleClick = () => {
        shuffleTiles()
    }

 
    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);

    const style = {
        width : BOARD_SIZE,
        height: BOARD_SIZE,
    };
  return(
      <>
      <h1>Puzzle challenge </h1> 
      <h4>level 1💎 ___ Points: {localStorage.getItem("points") || 1} ___ Coins💰: Ksh.{localStorage.getItem("coins") || 0} </h4> <br/>
      <div className='new_game_button'> 
         <p onClick={ () => handleShuffleClick() }> New game </p> 
         {/* <p onClick={ () => handleStartClick()}>start</p>   */}
         {/* <p> switch to flip game </p> */}
      </div>
      <ul style={style} className="board">
          {tiles.map((tile, index) => (
              <Tile
                 key={tile}
                 index={index}
                 tile={tile}
                 width={pieceWidth}
                 height={pieceHeight}
                 handleClick = {handleClick}
              />
          ))}
      </ul>
      </>
  )
}

export default Board;