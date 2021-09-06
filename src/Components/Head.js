import React, { useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./components.scss";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";
import {LinearProgress} from "@material-ui/core";
import {ArrowBackIosRounded} from '@material-ui/icons';
import { useLoadState,useLoadDispatch } from '../Context/loading';

import Dialog from '@material-ui/core/Dialog';
import AlertDialog from "./Dialog";




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
  const [ active, setActive] = useState(false)
  const loadispatch = useLoadDispatch();
  const {open} = useLoadState();

/* -------------------------------------------------------------------------- */
   const handleClick = () => {
        setActive(true)
        history.push("/more")
    }

  let back = e => {
      e.stopPropagation();
      history.goBack();
    };

  const open_dialog = () => {
    setActive(true)
    loadispatch({
      type: "OPEN",
      payload: true
    })
  };

   return(
     <div className="SubHeader">
        {pathname === "/" ? <ArrowBackIosRounded style={{opacity:0.4}}/>
                  : <ArrowBackIosRounded onClick={back}/>}
        <div>
          <p onClick={() => history.push("/")}  className={ (pathname === "/" && (!active || !open) ) ? "active" : ""}>academics</p>
        </div>
         <div className="sotmucNewsNav">
           <p onClick={() => history.push("/sotmuc/news")}
              className={ pathname === "/sotmuc/news" ? "active" : ""}>sotmuc news</p>
         </div>
        <div>
          <p onClick={open_dialog}  className={(active && open) ? "active" : ""}>helb</p>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
             <AlertDialog/>
         </Dialog>
        </div>
        <div>
             <p onClick={() => handleClick()} className={ (pathname === "/more" && (active && !open) ) ? "active" : ""}>more</p>
        </div>
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
