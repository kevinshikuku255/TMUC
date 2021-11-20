import React, { Suspense, useEffect, lazy } from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';
import { BrowserView, MobileView} from 'react-device-detect';
import { useSubscription, useLazyQuery } from '@apollo/client';
import {  NEW_POST, GET_POSTS} from './Graphql/posts';

import './App.scss';

import Index from "./Pages/Home/index";
import News from "./Pages/News/index";
import Head from "./Components/Head";
import Activities from "./Pages/Activities";

const Policy = lazy(() => import("./Components/Policy"));
const Cu   = lazy(() => import('./Pages/Activities/Cu'));
const Profile  = lazy(() => import("./Components/Profile"));
const MakePost   = lazy(() => import("./Pages/News/MakePost"));
const Desktopview = lazy(() => import("./Components/Desktopview"));
const Football  = lazy(() => import('./Pages/Activities/Football'));
const PostDetails   = lazy(() => import("./Pages/News/PostDetails"));
const Sotmuc = lazy(() => import("./Components/Sotmuc"));


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

//Swipable views
const Swipble = () =>{
  return (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={FalLback}
    sliderMode={false}
    >
    <Route exact path="/" component={Index}/>
    <Route path="/Noticeboard" component={News}/>
    <Route path="/Activities" component={Activities}/>
  </RouterCarousel>
 )
};


function App() {
   const { data } = useSubscription(NEW_POST);
   const [ getPosts ] = useLazyQuery(GET_POSTS,{ fetchPolicy:"network-only" });
    useEffect(() => {
        getPosts()
    }, [ getPosts, data ])



  return (
    < div className="App">
      <BrowserView>
           <Desktopview/>
      </BrowserView>
      <Suspense fallback={FalLback}>
      <MobileView>
            <div className="App_header">
              <Head/>
            </div>
            <Switch>
              <Route  path="/Cu" component={Cu}/>
              <Route  path="/activities/:username" component={Profile}/>
              <Route  path="/Post/:id" component={PostDetails}/>
              <Route  path="/Football" component={Football}/>
              <Route  path="/Sotmuc" component={Sotmuc}/>
              <Route  path="/CreatePost" component={MakePost}/>
              <Route  path="/Policy" component={Policy}/>
              <Route  path='*' component={Swipble} />
            </Switch>
        </MobileView>
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