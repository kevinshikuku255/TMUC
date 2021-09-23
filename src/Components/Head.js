import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./components.scss";

import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";
import {LinearProgress} from "@material-ui/core";
import {ArrowBack, MoreVert} from '@material-ui/icons';
import { useLoadState,useLoadDispatch } from '../Context/loading';

import Menu from "./Menu";



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

/* -------------------------------------------------------------------------- */
   const handleClick = () => { history.push("/Activities") }

   let back = e => { e.stopPropagation(); history.goBack(); };

   return(
     <div className="SubHeader">
        {pathname === "/" ? <ArrowBack className="inactive_back_arrow"/>
                  : <ArrowBack onClick={back}/>}
        <div>
          <p onClick={() => history.push("/")}  className={ (pathname === "/" ) ? "active" : "a"}>ACADEMICS</p>
        </div>
        <div>
             <p onClick={() => handleClick()} className={ (pathname === "/Activities" ) ? "active" : "a"}>ACTIVITIES</p>
        </div>
        <div>
             <p onClick={() => history.push("/News")} className={ (pathname === "/News" ) ? "active" : "a"}>NEWS</p>
        </div>
     </div>
   )
}



function Head() {
  const classes = useStyles();
  const {loading} = useLoadState();
  const location = useLocation();
  const loadispatch = useLoadDispatch();
  const {menu} = useLoadState();
  const profileName = location.pathname.split("/").pop();

  const openMenu = () => {
    loadispatch({
      type: "MENU",
      payload: true
    })
  }

  let custom_head
  if(profileName === "Football"){
    custom_head = "UNIVERSITY FOOTBALL TEAM"
  } else if(profileName === "Sotmuc"){
    custom_head = "UNIVERSITY STUDENT COUNCIL"
  }else if(profileName === "Cu"){
    custom_head = "UNIVERSITY CU"
  }else if(profileName === "News"){
    custom_head = "ONLINE NOTICEBOARD"
  }
  else if(profileName === "Activities"){
    custom_head = "UNIVERSITY ACTIVITIES"
  }
  else{
    custom_head = "UNIVERSITY COLLEGE"
  }


  return (
    <div className="HeadWrapper">
    {(loading === true ) && <LinearProgress/>}
    <div className="Head">
          <div className="Logo">
            <div className="Avartor"> <Avatar src={Logo} className={classes.small}/> </div>
            <div  className="Name">
              <p>TOM MBOYA</p>
              <h5>
                {custom_head}
              </h5>
            </div>
          </div>
          <div className="Menu">
             <MoreVert onClick={openMenu}/>
             <Menu menu_on={menu}/>
          </div>
    </div>
    <SubHeader/>
    </div>
  )
};

export default Head
