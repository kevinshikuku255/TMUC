import React from 'react';
import "./pages.css";

import Portal from "./Portal";
import Elearning from "./E-learning";
import Login from "./StudentLogin";
import Downloads from "./Downloads";
import About from "./About";
import Council from "./Council";
import Library from "./Library";
import History from "./History";
import Academics from "./Academics"
import StudentCouncil from "./StudentCouncil";
import Photos from "./Photos";
import Direction from "./Direction";

function Index() {
  return (
  <div className="Main">
      <div className="Welcome">
            <i>Welcome to <br/> Tom Mboya Univeristy College</i>
            <p> As an Institution, we value the contribution of everyone. It is humans that makes an Institution. Therefore, whether you are a Student, Parent, Staff, The Public or an Administrator, your contribution to the well being of the Institution is highly appreciated.</p>
      </div>
      <div className="Pages">
          <Login/>
          <Elearning/>
          <Portal/>
          <StudentCouncil/>
          <Photos/>
          <Library/>
          <Downloads/>
          <Academics/>
          <About/>
          <Direction/>
          <Council/>
          <History/>
      </div>
  </div>
  )
}

export default Index;
