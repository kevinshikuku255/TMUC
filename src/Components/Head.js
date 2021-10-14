import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./components.scss";

import { LinearProgress } from "@material-ui/core"
import {ArrowBack, MoreVert} from '@material-ui/icons';
import { useLoadContext } from '../Context';

import Menu from "./Menu";


/** Sub header compoent */
const SubHeader = () => {
  const history = useHistory();
  const {pathname} = useLocation();
/* -------------------------------------------------------------------------- */
   const handleClick = () => { history.push("/Activities") }

   return(
     <div className="SubHeader">
        <div>
          <p onClick={() => history.push("/")}  className={ (pathname === "/" ) ? "active" : "a"}>ACADEMICS</p>
        </div>
        <div>
             <p onClick={() => history.push("/Noticeboard")} className={ (pathname === "/Noticeboard" ) ? "active" : "a"}>NOTICEBOARD</p>
        </div>
        <div>
             <p onClick={() => handleClick()} className={ (pathname === "/Activities" ) ? "active" : "a"}>ACTIVITIES</p>
        </div>
     </div>
   )
}



const  Head = () => {
  const history = useHistory();
  const location = useLocation();
  const [ { menu, loading }, dispatch] = useLoadContext();
  const profileName = location.pathname.split("/").pop();
  let back = e => { e.stopPropagation(); history.goBack(); };

  const openMenu = () => {
    dispatch({
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
    custom_head = "CHRISTIAN UNION"
  }else if(profileName === "Noticeboard"){
    custom_head = "ONLINE NOTICEBOARD"
  }
  else if(profileName === "Activities"){
    custom_head = "UNIVERSITY ACTIVITIES"
  }
  else if(profileName === "CreatePost"){
    custom_head = "PIN A NOTICE"
  }
  else if(profileName === ""){
    custom_head = "UNIVERSITY ACADEMICS"
  }
  else if(profileName === "Editpost"){
    custom_head = "EDIT PINNED NOTICE"
  }
  else{
    custom_head = ""
  }



  return (
    <div className="HeadWrapper">
    {(loading === true ) && <LinearProgress/>}
    <div className="Head">
          <div className="Logo">
            <div className="Avartor" style={{ opacity: location.pathname === "/" && .4}}>
               { <ArrowBack onClick={back}/> }
            </div>
            <div  className="Name">
              <p>TOM MBOYA STUDENT</p>
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
