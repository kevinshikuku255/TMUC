import React from 'react';
import colorTheme from "../../Components/colorTheme";
// import Flips from "./Flips";
import Puzzle from "./Puzzle";

/** Student center */
function  StudentCenter() {
const theme = colorTheme();
const style = {
    color: theme.primary, 
    backgroundColor: theme.background,
    minHeight: "87.3vh",
    marginTop: "5.2rem",
    width:"100vw",
    borderTop:"1px solid wheat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
}
  return (
      <div className='studentCenter' style={style}>

         {/* <Flips/> */}
         <Puzzle/>
      </div>
  )
}

export default StudentCenter
