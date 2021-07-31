import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./components.css";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";
import {LinearProgress} from "@material-ui/core";
import { useLoadState } from '../Context/loading';



const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: 0,
  }
}));


/** Sub header compoent */
export const SubHeader = () => {
  const history = useHistory();
  const {pathname} = useLocation();
   return(
     <div className="SubHeader">
        <p onClick={() => history.push("/")} className={ pathname === "/" ? "active" : ""} >academics</p>

        <p onClick={() => history.push("/more")} className={ pathname === "/more" ? "active" : ""}  >more</p>
     </div>
   )
}






function Head() {
  const classes = useStyles();
  const {loading} = useLoadState();
  return (
    <div className="HeadWrapper">
    {(loading === true ) && <LinearProgress/>}
    <div className="Head">
          <div className="Logo"> <Avatar src={Logo} className={classes.small}/> </div>
          <div  className="Name"> <p>tom mboya</p> <h5>university college</h5> </div>
    </div>
    <SubHeader/>
    </div>
  )
};

export default Head
