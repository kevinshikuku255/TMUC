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
    minHeight: "calc(100vh - 6rem)",
    marginTop: "4rem",
    paddingTop: '2rem',
    width:"100vw",
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
