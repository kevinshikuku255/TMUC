import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";
import Fteam from "../../Images/ball.jpeg";
import Fteampic2 from "../../Images/ball2.jpeg";
import Fteampic3 from "../../Images/ball3.jpeg";
import Fteampic4 from "../../Images/ball4.jpeg";
import Fteampic5 from "../../Images/ball5.jpeg";


const useStyles = makeStyles((theme) => ({
 team: {
   borderRadius:"0px",
   width:"97%",
   margin:"auto",
   paddingBottom:"3%",
   height:"auto",
 },
  teamgrid:{
  paddingTop:"20vh",
 }
}));

function Football() {
  const classes = useStyles()
  return (
    <div className="FtWrapper">
      <div className={classes.teamgrid}>
        <Avatar src={Fteam} className={classes.team}/>
        <Avatar src={Fteampic2} className={classes.team}/>
        <Avatar src={Fteampic3} className={classes.team}/>
        <Avatar src={Fteampic4} className={classes.team}/>
        <Avatar src={Fteampic5} className={classes.team}/>
      </div>
    </div>
  )
}

export default Football
