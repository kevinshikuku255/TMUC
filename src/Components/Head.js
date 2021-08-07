import React from "react";
import ReactGA from 'react-ga';
import { useHistory, useLocation } from "react-router-dom";
import "./components.scss";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";
import {LinearProgress} from "@material-ui/core";
import {ArrowBackIosRounded} from '@material-ui/icons';
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

   const handleClick = () => {
        history.push("/more")
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"About TMUC",
            })
    }


   return(
     <div className="SubHeader">
        {pathname === "/" ? <ArrowBackIosRounded style={{opacity:0.4}}/>
                  : <ArrowBackIosRounded onClick={() => history.goBack()}/>}
        <div>
          <p onClick={() => history.push("/")} className={ pathname === "/" ? "active" : ""}>academics</p>
        </div>
         <div className="sotmucNewsNav">
           <p onClick={() => history.push("/sotmuc/news")}
              className={ pathname === "/sotmuc/news" ? "active" : ""}>sotmuc news</p>
         </div>
        <div>
          <p onClick={() => handleClick()} className={ pathname === "/more" ? "active" : ""}>more</p>
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
