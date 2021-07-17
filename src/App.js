import React from 'react';
import ReactGA from 'react-ga';
import Index from "./Pages";
import { REACT_GA } from "./config.json"

import Logo from "./Images/tom_logo2.png"
import './App.css';


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    < div className="App">
      <div className="App_header">
         <img src={Logo} alt="Tom mboya"/>
      </div>
      <Index/>
    </div>
  );
}

export default App;
