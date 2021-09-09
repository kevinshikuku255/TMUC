import React from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { CircularProgress} from "@material-ui/core";
import { REACT_GA } from "./config.json";

import './App.css';

import Index from "./Pages";
import Sotmuc from "./Components/Sotmoc";
import Elearning from "./Components/Elearning";
import Head from "./Components/Head";
import Profile from "./Components/Profile";
import Football from './Pages/More/Football';



const News  = React.lazy( () => import("./Pages/News"));
const More = React.lazy(() => import("./Pages/More"));


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {


 const fall_back = (
    <div className="fallback">
       <CircularProgress/>
    </div>
 )

  return (
    < div className="App">
      <div className="App_header">
         <Head/>
      </div>
      <React.Suspense fallback={ <div>{fall_back}</div>}>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/more" component={More}/>
          <Route exact path="/sotmuc/news" component={News}/>
          <Route exact path="/c/:username" component={Profile}/>
          <Route exact path="/Football" component={Football}/>
          <Route exact path="/sotmuc" component={Sotmuc}/>
          <Route exact path="e-learning" component={Elearning}/>

        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
