import React, { useEffect } from 'react';
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
import Activities from "./Pages/Activities";
import Fab from "./Components/Fab";
import Signup from "./Pages/Auth/SignUp";
import Signin from "./Pages/Auth/SignIn";
import EditPost from "./Pages/Auth/EditPost";


import Desktopview from "./Components/Desktopview";
import Sotmuc from "./Components/Sotmuc";
import Policy from "./Components/Policy";
import Head from "./Components/Head";
import Profile from "./Components/Profile";
import Football from './Pages/Activities/Football';
import Cu from './Pages/Activities/Cu';
import FallbackPage  from './Components/FallbackPage';
import PostDetails from "./Pages/News/PostDetails";
import MakePost from "./Pages/News/MakePost";
import StudentCenter from "./Pages/StudentCenter";



ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

//Swipable views
const Swipble = () =>{
  return (
  <RouterCarousel
    swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
    swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
    fallbackRoute={FallbackPage}
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
      <MobileView>
            <div className="App_header">
              <Fab/>
              <Head/>
            </div>
            <React.Suspense fallback={ <div>{FallbackPage}</div>}>
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
            </React.Suspense>
        </MobileView>
    </div>
  );
}

export default App;
