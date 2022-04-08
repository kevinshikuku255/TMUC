import React from "react";
import "./puzzle.scss";
import { Motion, spring} from 'react-motion'
; import { getMatrixPosition, getVisualPosition } from "./helpers";
import { TILE_COUNT, GRID_SIZE }  from "./constants";
import colorTheme from "../../../Components/colorTheme";


function Tile(props) {
    const { tile, index, width, height, handleClick, solved } = props;
    const theme = colorTheme();

    const { row, col } = getMatrixPosition(index);
    const visualPos = getVisualPosition(row, col, width, height);
    const tileStyle = {
        width: `calc(100% / ${GRID_SIZE})px`,
        height: `calc(100% / ${GRID_SIZE})px`,
        translateX: visualPos.x,
        translateY: visualPos.y,
    };

    const motionStyle = {
        translateX: spring(visualPos.x),
        translateY: spring(visualPos.y)
    }
     
   return(
       <Motion style={motionStyle}>
        {({translateX, translateY}) => (

            <li 
            className="tile"
            onClick={() => handleClick(index)}
            style={{
                width: tileStyle.width,
                height: tileStyle.height,
                transform: `translate3d(${translateX})px, ${translateY}px`,
                opacity: tile === TILE_COUNT - 1 ? 0 : 1,
                border: `1px solid ${theme.link}`,            
        }}
        >
         <button disabled={solved} style={
                { color: theme.primary, 
                  width: "100%",
                  height: "100%",
                  textShadow: `2px 2px 10px ${theme.link}`}}>
            {tile + 1}
         </button>
       </li>
       )}
     </Motion>
   ) 
}

export default Tile;