import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";

import './components.scss';


const useStyles = makeStyles((theme) => ({
  large: {
    width: "100%",
    height:"auto",
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
       <p>{name}</p>

    </div>
  )
}




