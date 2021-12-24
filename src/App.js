import React, { Suspense, useEffect, lazy } from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';
import { useSubscription, useLazyQuery } from '@apollo/client';
import {  NEW_POST, GET_POSTS } from './Graphql/posts';


import './App.scss';

import Index from "./Pages/Home/index";
import News from "./Pages/News/index";
import Head from "./Components/Head/Index";
import Timetable from "./Pages/Timetable/Index";
import PostDetails from "./Pages/News/PostDetails";
import { SignUp,  SignIn } from "./Pages/Auth";


const Policy = lazy(() => import("./Components/Policy"));
const Cu   = lazy(() => import('./Pages/Activities/Cu'));
const Sotmuc = lazy(() => import("./Components/Sotmuc"));
const Activities = lazy(() => import("./Pages/Activities"));
const Profile  = lazy(() => import("./Components/Profile"));
const MakePost   = lazy(() => import("./Pages/News/MakePost"));
const Football  = lazy(() => import('./Pages/Activities/Football'));


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

//Swipable views
const Swipble = () => {
  return (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={FalLback}
    sliderMode={false}
    >
    <Route exact path="/" component={Index}/>
    <Route path="/Timetable" component={Timetable}/>
    <Route path="/Noticeboard" component={News}/>
  </RouterCarousel>
 )
};

function App() {
   const { data } = useSubscription(NEW_POST);
   const [ getPosts ] = useLazyQuery(GET_POSTS,{ fetchPolicy:"network-only" });
    useEffect(() => {
        getPosts()
    }, [ getPosts, data ])


Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'Here is a notification body!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: '"../public/favicon.png"'},
          {action: 'close', title: 'Close notification',
            icon: '"../public/logo144.png"'},
        ]
      };
      console.log(reg)
      reg.showNotification('Hello world!', options);
    });
  }
}


displayNotification()



  return (
    <div className="App">
      <Suspense fallback={FalLback}>
            <Head/>
            <Switch>
              <Route  path="/Cu" component={Cu}/>
              <Route  path="/activities/:username" component={Profile}/>
              <Route  path="/Post/:id" component={PostDetails}/>
              <Route  path="/Football" component={Football}/>
              <Route  path="/Sotmuc" component={Sotmuc}/>
              <Route  path="/CreatePost" component={MakePost}/>
              <Route  path="/Activities" component={Activities}/>
              <Route  path="/Policy" component={Policy}/>
              <Route  path="/Signup" component={SignUp}/>
              <Route  path="/Signin" component={SignIn}/>
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