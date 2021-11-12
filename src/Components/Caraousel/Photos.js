import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";
import "./styles.scss";

import Royal1 from "../../Images//Roya1.jpeg";
import Royal2 from "../../Images//Royal2.jpeg";
import Royal3 from "../../Images//Royal3.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius:"5px",
    width: theme.spacing(10),
    height: theme.spacing(10),
  }
}));

export function Photos() {
  const classes = useStyles();
  return (
    <div className="ad_photos">
        <div>
           <Avatar src={Royal1} className={classes.img}/>
        </div>
        <div>
          <Avatar src={Royal2} className={classes.img}/>
        </div>
        <div>
          <Avatar src={Royal3} className={classes.img}/>
        </div>
    </div>
  )
}