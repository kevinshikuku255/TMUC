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
import FallbackPage  from './Components/FallbackPage';
import Fab from "./Components/Fab";
import Head from "./Components/Head";
import Activities from "./Pages/Activities";

// const Activities = lazy(() => import("./Pages/Activities"))
// const Head = lazy(() => import("./Components/Head"));
const Policy = lazy(() => import("./Components/Policy"));
const Cu   = lazy(() => import('./Pages/Activities/Cu'));
const Profile  = lazy(() => import("./Components/Profile"));
const MakePost   = lazy(() => import('./Components/FallbackPage'));
const Desktopview = lazy(() => import("./Components/Desktopview"));
const Football  = lazy(() => import('./Pages/Activities/Football'));
const PostDetails   = lazy(() => import("./Pages/News/PostDetails"));
const StudentCenter   = lazy(() => import("./Pages/StudentCenter"));


const Sotmuc = lazy(() => import("./Components/Sotmuc"));
const Signup = lazy(() => import("./Pages/Auth/SignUp"));
const Signin = lazy(() => import("./Pages/Auth/SignIn"));
const EditPost = lazy(() => import("./Pages/Auth/EditPost"));


ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

//Swipable views
const Swipble = () =>{
  return (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={<FallbackPage/>}
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
      <Suspense fallback={<FallbackPage/>}>
      <MobileView>
            <div className="App_header">
              <Fab/>
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
              <Route  path="/Signup" component={Signup}/>
              <Route  path="/Signin" component={Signin}/>
              <Route  path="/Editpost" component={EditPost}/>
              <Route path="/StudentCenter" component={StudentCenter} />
              <Route  path='*' component={Swipble} />
            </Switch>
        </MobileView>
        </Suspense>
    </div>
  );
}

export default App;
