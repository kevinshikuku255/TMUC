import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";

import './components.css';


const useStyles = makeStyles((theme) => ({
  large: {
    width: "100%",
    height: theme.spacing(50),
    borderRadius:"0",
  },
}));

/** Dama */
export const Details = ({name, avartar}) => {
   const classes = useStyles();

  return (
    <div className="Details">
      
      <div className="CoverImage">
          <Avatar alt={name} src={avartar} className={classes.large}/>
      </div>
       <h1>{name}</h1>

    </div>
  )
}




