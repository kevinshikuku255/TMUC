import React from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';

import './App.css';

import Index from "./Pages";
import Sotmuc from "./Components/Sotmoc";
import Elearning from "./Components/Elearning";
import Head from "./Components/Head";
import Profile from "./Components/Profile";
import Football from './Pages/More/Football';
import Cu from './Pages/More/Cu';
import Activities from "./Pages/More";
import FallbackPage  from './Components/FallbackPage';


const News  = React.lazy( () => import("./Pages/News"));


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);



const Carousel = () => (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={FallbackPage}
  >
    <Route exact path="/" component={Index}/>
    <Route exact path="/Activities" component={Activities}/>
  </RouterCarousel>
);




function App() {


  return (
    < div className="App">
      <div className="App_header">
         <Head/>
      </div>
      <React.Suspense fallback={ <div>{FallbackPage}</div>}>
        <Switch>
          <Route exact path="/Cu" component={Cu}/>
          <Route exact path="/sotmuc/news" component={News}/>
          <Route exact path="/activities/:username" component={Profile}/>
          <Route exact path="/Football" component={Football}/>
          <Route exact path="/Sotmuc" component={Sotmuc}/>
          <Route exact path="e-learning" component={Elearning}/>
          <Route path='*' component={Carousel} />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
