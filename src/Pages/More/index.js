import React from 'react';
import { useLocation } from "react-router-dom";
import Persons from "./Persons";
import "./more.scss";


function Index() {
const {pathname} = useLocation();
  let active;
  if(pathname === "/more"){
    active = true
  }else{
    active = false
  }

  return (
    <div className={ active ? "Active_Container" : "Container"}>
      <Persons/>
    </div>
  )
}

export default Index;
