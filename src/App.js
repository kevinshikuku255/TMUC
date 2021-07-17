import React from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';

import { REACT_GA } from "./config.json"

import Logo from "./Images/tom_logo2.png"
import './App.css';

import Index from "./Pages";
import Sotmuc from "./Components.js/Sotmoc"

ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    < div className="App">
      <div className="App_header">
         <img src={Logo} alt="Tom mboya"/>
      </div>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/sotmuc" component={Sotmuc}/>
      </Switch>
    </div>
  );
}

export default App;
