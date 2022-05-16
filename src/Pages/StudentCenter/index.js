import React from 'react';
import colorTheme from "../../Components/colorTheme";
import Flips from "./Flips";
import Puzzle from "./Puzzle";

/** Student center */
function  StudentCenter() {
const theme = colorTheme();
const style = {
    main : {
        color: theme.primary, 
        backgroundColor: theme.farground,
        minHeight: "calc(100vh - 6rem)",
        marginTop: "4rem",
        paddingTop: '2rem',
        width:"100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    div: {
      minHeight: "calc(100vh - 6rem)",
      paddingTop: "2rem"
    }
}
  return (
      <div className='studentCenter' style={style.main}>
         <div style={style.div}>
           <Puzzle/>
         </div>
         <hr style={{width: "100vw"}}/>
         <div style={style.div}>
           <Flips/>
         </div>
      </div>
  )
}

export default StudentCenter
