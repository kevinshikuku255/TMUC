import React, { useState } from "react";
import Tile from "./Tile";
import "./puzzle.scss";
import colorTheme from "../../../Components/colorTheme";
import { canSwap , swap, shuffle, isSolved} from "./helpers";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";


function Board() {

     // Create an array of string
     var stringArray = localStorage.getItem("tiles") && localStorage.getItem("tiles").split(",");
     const theme = colorTheme();
  
     let savedTiles = [];
     if(stringArray){
         for (var i = 0; i < 16; i++)
          savedTiles.push(parseInt(stringArray[i]));
        }
         
    const [ tiles, setTiles] = useState( savedTiles.length === 0 ? shuffle([...Array(TILE_COUNT).keys()]) : savedTiles);
    const [ swapped, setSwaped ] = useState(false);

    // if is solved
    const completed = isSolved(tiles);
    if(completed) {
       // check if local strorage value is null
       let earnedCoins = localStorage.getItem("coins");
       if(earnedCoins === null){
           localStorage.setItem("coins", 0 )
       }
      
       let _earnedCoins = parseFloat(localStorage.getItem("coins"))

        if(swapped) {
            localStorage.setItem("coins", Math.floor(Math.random() * 8 + 1) + _earnedCoins ); 
        }
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
             
             // points
            let earnedPoints = localStorage.getItem("points");
            if(earnedPoints === null){
                localStorage.setItem("points", 0)
              }
              let _earnedPoints = parseInt(localStorage.getItem("points"))

              localStorage.setItem("points", Math.floor(Math.random() * 0.9 + 0.2) + _earnedPoints )

              // earn coin token
              let points = parseInt(localStorage.getItem('points'));
              let coinToken = points - _earnedPoints;

              let existingCoins = localStorage.getItem("coins");

              if(existingCoins === null){
                localStorage.setItem("coins", 0)
               }
               
               let _existingCoins = parseFloat(localStorage.getItem("coins"));

              let newCoins = parseFloat(Math.random() * ( (coinToken) / 8))

              localStorage.setItem("coins", (_existingCoins + newCoins))
              setSwaped(true)
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
        border: `2px solid ${theme.link}`
    };
 
    let earnerdMoney;
    let __ = localStorage.getItem("coins") === null ? 0 : (Math.floor(localStorage.getItem("coins")))
    if( __ > 1000){
        let k = __ / 1000
        earnerdMoney = `${k.toString().substring(0,4)}k`
    }else{
        earnerdMoney = __
    }


  return(
      <>
      <h2>Puzzle game challenge </h2> 
      <h4 className="score">
           <span>Points: {localStorage.getItem("points") || 1 }</span> 
           <span>Coins💰: Ksh. { earnerdMoney || 0 }</span> 
     </h4> <br/>
      <div className='new_game_button'> 
         <p onClick={ () => handleShuffleClick() }> New game </p> 
      </div>
      <ul style={style} className="board">
          {tiles.map((tile, index) => (
              <Tile
                 solved= {completed}
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