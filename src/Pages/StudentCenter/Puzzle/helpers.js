import { TILE_COUNT, GRID_SIZE } from "./constants";


/** Is solvable */
export function isSolvable (tiles ) {
    let product = 1;
    for (let i = 1, l = TILE_COUNT - 1 ; i <= l; i++) {
      for (let j = i + 1, m = l + 1; j <= m; j++) {
        product *= (tiles[i - 1] - tiles[j - 1]) / (i - j)
      }
    }
    return Math.round(product) === 1
  }


  /** Is solved */
  export function isSolved(tiles) {
      for(let i = 0, l = tiles.length; i < l; i++) {
          if(tiles[i] !== i){
              return false
          }
      }
      return true;
  }

  
  //Get the Linear index from a row/col pair.
export function getIndex(row, col){
    return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

// GET ROW/COL PAIR FROM A LINEAR INDEX
/** matrix position */
export const getMatrixPosition = (index) => {
 return{
     row: Math.floor(index / GRID_SIZE),
     col: index % GRID_SIZE,
 }
}

/** visula position */
export const getVisualPosition = (row, col, width, height) => {
    return{
        x: col * width,
        y: row * height
    };
}


/** shufle */
export const shuffle = (tiles) => {
    const shufledTile = [
         ...tiles
            .filter((t) => t !== tiles.length - 1)
              .sort(() => Math.random() - 0.5),
        tiles.length -1
    ];
    return isSolvable(shufledTile) && !isSolved(shufledTile) 
      ? shufledTile
      : shuffle(shufledTile);
}



/** can swap */
export const canSwap = (src, dest, GRID_SIZE) => {
    const { row: srcRow, col: srcCol } = getMatrixPosition(src, GRID_SIZE);
    const { row: destRow, col: destCol } = getMatrixPosition(dest, GRID_SIZE);
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

/** Swap */
export function swap(tiles, src, dest) {
    const tilesResult = [ ...tiles ];
    [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src] ]
    return tilesResult
}


