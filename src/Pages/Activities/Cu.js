import React from 'react';
import ReactGA from 'react-ga';
import Nav from "../../Components/Nav";
import "./more.scss";

import { Avatar, makeStyles} from "@material-ui/core";
import Cuquote from "../../Images/cuquote.jpg";
import Cuquote2 from "../../Images/cuquotes2.jpg";


const useStyles = makeStyles((theme) => ({
 team: {
   borderRadius:"3px",
   width:"99vw",
   margin:"auto",
   paddingBottom:"3%",
   height:"auto",
 },
  teamgrid:{
  paddingTop:"1rem",
 }
}));

let head = (
  <>
   <p>Tom Mboya University College </p><p>  Christian Union</p> <p>(TMUCCU)</p>
  </>
)

/**Cu component */
function Cu() {
  ReactGA.pageview('/Cu');
  const classes = useStyles()
  return (
    <div className="Cuwarapper">
        <Nav head={head}/>
      <div className={classes.teamgrid}>
        <Avatar src={Cuquote} className={classes.team}/>
        <Avatar src={Cuquote2} className={classes.team}/>
      </div>
    </div>
  )
}

export default Cu
