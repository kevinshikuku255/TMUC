import React, { useState} from "react";
import ReactGA from 'react-ga';
import { useHistory, useLocation } from "react-router-dom";
import "./components.scss";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";
import {LinearProgress} from "@material-ui/core";
import {ArrowBackIosRounded} from '@material-ui/icons';
import { useLoadState } from '../Context/loading';
import { useLoadDispatch } from '../Context/loading';



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
  const loadDispatch = useLoadDispatch();
  const {pathname} = useLocation();
  const [ active, setActive] = useState(false)

   const handleClick = () => {
        history.push("/more")
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"About TMUC",
            })
    }



   const helbClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"HELB",
            })
    }

   const clickHandler = () => {
     setActive(!active)
     loadDispatch({
       type: "LOAD",
       payload: true
     })
     helbClick()
   }

  let back = e => {
      e.stopPropagation();
      history.goBack();
    };


   return(
     <div className="SubHeader">
        {pathname === "/" ? <ArrowBackIosRounded style={{opacity:0.4}}/>
                  : <ArrowBackIosRounded onClick={back}/>}
        <div>
          <p onClick={() => history.push("/")}  className={ (pathname === "/" && !active ) ? "active" : ""}>academics</p>
        </div>
         <div className="sotmucNewsNav">
           <p onClick={() => history.push("/sotmuc/news")}
              className={ pathname === "/sotmuc/news" ? "active" : ""}>sotmuc news</p>
         </div>
        <div>
          <a onClick={() => clickHandler()} href="https://www.helb.co.ke/student-portal/" className={active ? "active" : ""}>helb</a>
        </div>
        <div>
             <p onClick={() => handleClick()} className={ (pathname === "/more" && !active ) ? "active" : ""}>more..</p>
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
