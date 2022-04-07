import React from "react";
import ReactGA from "react-ga";
import { useHistory, useLocation } from "react-router-dom";
import "../components.scss";
import colorTheme from "../colorTheme";



/** Sub header compoent Containing the three header Navigation tabs*/
export const SubHeader = () => {
  const theme = colorTheme();
  const history = useHistory();
  const {pathname} = useLocation();

  const academics = () => {
      ReactGA.event({
            category:"Tab",
            action:"Navigated to Academics tab",
            transport:"beacon",
            label:"ACADEMICS-TAB"
          })
    history.push("/")
  }

  const timetable = () => {
      ReactGA.event({
            category:"Tab",
            action:"Navigated to Timetable tab",
            transport:"beacon",
            label:"TIMETABLE-TAB"
          })
    history.push("/Timetable")
  }

  const noticeboard = () => {
      ReactGA.event({
            category:"Button",
            action:"Navigated to student center",
            transport:"beacon",
            label:"NOTICE-BOARD-TAB"
          })
    history.push("/Studentcenter")
  }

/* -------------------------------------------------------------------------- */
   const activeStyle = {
    borderBottom: `3px solid ${theme.link}`,
    color: theme.link
   }
   return(
     <div className="SubHeader" style={{color:theme.primary}}>
        <div style = {  pathname === "/" ? activeStyle : null} >
          <p onClick={() => academics() }>ACADEMICS</p>
        </div>
        <div style = { pathname === "/Timetable"  ? activeStyle : null}>
             <p onClick={() => timetable() } >SCHEDULE</p>
        </div>
        <div style ={ pathname === "/Studentcenter"  ? activeStyle : null}>
             <p onClick={() => noticeboard()}>ACTIVITIES</p>
        </div>
     </div>
   )
}
