import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./components.css";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
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
  return (
    <div className="Head">
        <div className="Logo">
          <Avatar src={Logo} className={classes.small}/>
        </div>
        <div  className="Name">
          <h2>tom mboya</h2>
          <h4>university college</h4>
        </div>
        <div>
        </div>
        <SubHeader/>
    </div>
  )
}

export default Head
