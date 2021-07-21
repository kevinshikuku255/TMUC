import React from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import {LinearProgress} from "@material-ui/core"
import { REACT_GA } from "./config.json"

import Logo from "./Images/tom_logo2.png"
import './App.css';

import Index from "./Pages";
import Sotmuc from "./Components/Sotmoc";
import Profile from "./Components/Profile";
import Elearning from "./Components/Elearning"

import { useLoadState } from './Context/loading';


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  const {loading} = useLoadState();
  console.log(loading)
  return (
    < div className="App">
      <div className="App_header">
         {(loading === true ) && <LinearProgress/>}
         <img src={Logo} alt="Tom mboya"/>
      </div>

      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/sotmuc/:username" component={Profile}/>
        <Route exact path="/sotmuc" component={Sotmuc}/>
       <Route  exact path="e-learning" component={Elearning}/>
      </Switch>
    </div>
  );
}

export default App;
