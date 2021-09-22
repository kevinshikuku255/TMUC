import React, { useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./components.scss";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";
import {LinearProgress} from "@material-ui/core";
import {ArrowBack} from '@material-ui/icons';
import { useLoadState,useLoadDispatch } from '../Context/loading';

import Dialog from '@material-ui/core/Dialog';
import AlertDialog from "./Dialog";




const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
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
        history.push("/Activities")
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
        {pathname === "/" ? <ArrowBack className="inactive_back_arrow"/>
                  : <ArrowBack onClick={back}/>}
        <div>
          <p onClick={() => history.push("/")}  className={ (pathname === "/" && (!active || !open) ) ? "active" : "a"}>ACADEMICS</p>
        </div>
         <div className="sotmucNewsNav">
           <p onClick={() => history.push("/sotmuc/news")}
              className={ pathname === "/sotmuc/news" ? "active" : ""}>sotmuc news</p>
         </div>
        <div>
             <p onClick={() => handleClick()} className={ (pathname !== "/" && (!open) ) ? "active" : "a"}>ACTIVITIES</p>
        </div>
        <div>
          <p onClick={open_dialog}  className={(active && open) ? "active" : "a"}>HELB</p>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
             <AlertDialog/>
         </Dialog>
        </div>
     </div>
   )
}



function Head() {
  const classes = useStyles();
  const {loading} = useLoadState();
  const location = useLocation();
  const profileName = location.pathname.split("/").pop();

  let custom_head
  if(profileName === "Football"){
    custom_head = "UNIVERSITY FOOTBALL TEAM"
  } else if(profileName === "Sotmuc"){
    custom_head = "UNIVERSITY STUDENT COUNCIL"
  }else if(profileName === "Cu"){
    custom_head = "UNIVERSITY CU"
  }
  else{
    custom_head = "UNIVERSITY COLLEGE"
  }


  return (
    <div className="HeadWrapper">
    {(loading === true ) && <LinearProgress/>}
    <div className="Head">
          <div className="Logo"> <Avatar src={Logo} className={classes.small}/> </div>
          <div  className="Name">
             <p>TOM MBOYA</p>
            <h5>
              {custom_head}
            </h5>
          </div>
    </div>
    <SubHeader/>
    </div>
  )
};

export default Head
