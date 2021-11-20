import React from 'react';
import { Warning } from "@material-ui/icons";
import { Avatar, makeStyles} from "@material-ui/core";
import './components.scss';

import Home from "../Images/home.png";
import Activities from "../Images/activites.png";
import News from "../Images/news.png";



const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height:"auto",
    margin: theme.spacing(5),
    fontSize:"1px",
    borderRadius:"0px",
  }
}));

function Desktopview() {
  const classes = useStyles()
  return (
    <div className="Desktop">
       <Warning/>
       <div><h3> Application currently recomended on mobile devices only!</h3></div>
       <div className="Images">
          <Avatar src={Home} className={classes.large}/>
          <Avatar src={Activities} className={classes.large}/>
          <Avatar src={News} className={classes.large}/>
       </div>
    </div>
  )
}

export default Desktopview
