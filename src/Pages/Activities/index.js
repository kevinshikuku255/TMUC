import React from 'react';
import ReactGA from 'react-ga';
import { useLocation } from "react-router-dom";
import Activities from "./Activities";
import "./more.scss";


/** Activites */
function Index() {

ReactGA.pageview('/Activites');
const {pathname} = useLocation();
  let active;
  if(pathname === "/Activities"){
    active = true
  }else{
    active = false
  }

  return (
    <div className={ active ? "Active_Container" : "Container"}>
      <Activities/>
    </div>
  )
}

export default Index;
