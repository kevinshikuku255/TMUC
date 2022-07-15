import React, { Suspense, lazy } from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';
import colorTheme from "./Components/colorTheme";


import './App.scss';

import Index from "./Pages/Home/index";
import Head from "./Components/Head/Index";
import News from "./Pages/News/index";
import Timetable from "./Pages/Timetable/Index";
import Settings from "./Pages/Settings"
import Info from "./Pages/AppInfo"


const Cu   = lazy(() => import('./Pages/Activities/Cu'));
const Sotmuc = lazy(() => import("./Components/Sotmuc"));
const Studentcenter = lazy(() => import("./Pages/Activities"));
const Profile  = lazy(() => import("./Components/Profile"));
const Football  = lazy(() => import('./Pages/Activities/Football'));


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

/** Swipable views */
const Swipble = () => {
  return (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={FalLback}
    sliderMode={false}
    >
    <Route path="/" component={Index}/>
    <Route path="/Timetable" component={Timetable}/>
    <Route exact path="/News" component={News}/>
  </RouterCarousel>
 )
};


function App() {
  const theme = colorTheme();


  return (
    <div style={{backgroundColor: theme.farground}} className="App">
      <Suspense fallback={FalLback}>
            <Head/>
            <Switch>
              <Route  path="/Cu" component={Cu}/>
              <Route  path="/activities/:username" component={Profile}/>
              <Route  path="/Football" component={Football}/>
              <Route  path="/Sotmuc" component={Sotmuc}/>
              <Route  path="/Studentcenter" component={Studentcenter}/>
              <Route  path="/Settings" component={Settings}/>
              <Route  path="/Info" component={Info}/>
              <Route  path='*' component={Swipble} />
            </Switch>
        </Suspense>
    </div>
  );
}
export default App;


const FalLback = () => {
  <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    backgroundColor:"burlywood",
  }}>
    <p>Loading ...</p>
  </div>
}