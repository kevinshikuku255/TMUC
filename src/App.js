import React from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';

import './App.css';

import Index from "./Pages";
import News from "./Pages/News/index";
import Login from "./Pages/News/Login";
import Activities from "./Pages/More";


import Sotmuc from "./Components/Sotmoc";
import Head from "./Components/Head";
import Profile from "./Components/Profile";
import Football from './Pages/More/Football';
import Cu from './Pages/More/Cu';
import FallbackPage  from './Components/FallbackPage';
import PostDetails from "./Pages/News/PostDetails";
import MakePost from "./Pages/News/MakePost";




ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);



const Carousel = () => (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={FallbackPage}
  >
    <Route exact path="/" component={Index}/>
    <Route path="/Activities" component={Activities}/>
    <Route path="/News" component={News}/>
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
          <Route  path="/Cu" component={Cu}/>
          <Route  path="/Login" component={Login}/>
          <Route  path="/activities/:username" component={Profile}/>
          <Route  path="/Post/:id" component={PostDetails}/>
          <Route  path="/Football" component={Football}/>
          <Route  path="/Sotmuc" component={Sotmuc}/>
          <Route path="/CreatePost" component={MakePost}/>
          <Route  path='*' component={Carousel} />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
