import React, { Suspense, useEffect, lazy } from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';
import { useSubscription, useLazyQuery } from '@apollo/client';
import {  NEW_POST, GET_POSTS, POST_SUBSCRIPTION } from './Graphql/posts';
import { Notify } from "./Notification";
import colorTheme from "./Components/colorTheme";


import './App.scss';

import Index from "./Pages/Home/index";
import Head from "./Components/Head/Index";
import News from "./Pages/News/index";
import Timetable from "./Pages/Timetable/Index";
import StudentCenter from "./Pages/StudentCenter";
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
    <Route exact path="/Studentcenter" component={StudentCenter}/>
  </RouterCarousel>
 )
};


function App() {
  const theme = colorTheme();
   const { data } = useSubscription(NEW_POST);
   const [ getPosts ] = useLazyQuery(GET_POSTS,{ fetchPolicy:"network-only" });
    useEffect(() => {
        getPosts()
    }, [ getPosts, data ])

const { data: notificationData , loading} = useSubscription(POST_SUBSCRIPTION);
const { message, title, image} = !loading &&  notificationData?.newPost;
Notify({message, title, image})


  return (
    <div style={{backgroundColor: theme.farground}} className="App">
      <Suspense fallback={FalLback}>
            <Head/>
            <Switch>
              <Route  path="/Cu" component={Cu}/>
              <Route  path="/activities/:username" component={Profile}/>
              <Route  path="/Football" component={Football}/>
              <Route  path="/News" component={News}/>
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