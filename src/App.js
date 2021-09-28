import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {Route, Switch} from 'react-router-dom';
import { REACT_GA } from "./config.json";
import RouterCarousel from 'react-router-carousel';
import { BrowserView, MobileView} from 'react-device-detect';
import { useSubscription } from '@apollo/client';
import {  NEW_POST} from './Graphql/posts';
import { usePostDispatch } from './Context/post';

import './App.scss';

import Index from "./Pages";
import News from "./Pages/News/index";
import Login from "./Pages/News/Login";
import Activities from "./Pages/Activities";
import Fab from "./Components/Fab";


import Desktopview from "./Components/Desktopview";
import Sotmuc from "./Components/Sotmoc";
import Policy from "./Components/Policy";
import Head from "./Components/Head";
import Profile from "./Components/Profile";
import Football from './Pages/Activities/Football';
import Cu from './Pages/Activities/Cu';
import FallbackPage  from './Components/FallbackPage';
import PostDetails from "./Pages/News/PostDetails";
import MakePost from "./Pages/News/MakePost";




ReactGA.initialize(REACT_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

//Swipable views
const Swipble = () => (
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

   const postDispatch = usePostDispatch();
   const { data } = useSubscription(NEW_POST)

    console.log(data)

    //Putting loaded data on global state
    useEffect(() => {
          if(data){
          postDispatch({
              type: 'ADD_POST',
              payload: data.newPost
            })
        }
    },[data, postDispatch])




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
                <Route  path="/Login" component={Login}/>
                <Route  path="/activities/:username" component={Profile}/>
                <Route  path="/Post/:id" component={PostDetails}/>
                <Route  path="/Football" component={Football}/>
                <Route  path="/Sotmuc" component={Sotmuc}/>
                <Route  path="/CreatePost" component={MakePost}/>
                <Route  path="/Policy" component={Policy}/>
                <Route  path='*' component={Swipble} />
              </Switch>
            </React.Suspense>
        </MobileView>
    </div>
  );
}

export default App;
