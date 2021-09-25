import React, { useEffect} from 'react';
import "./pages.scss";

import { useLazyQuery } from '@apollo/client';
import { GET_POSTS} from '../Graphql/posts';
import { usePostDispatch } from '../Context/post';

import Portal from "./Portal";
import Elearning from "./E-learning";
import Login from "./StudentLogin";
import Downloads from "./Downloads";
import About from "./About";
import Council from "./Council";
import Library from "./Library";
import History from "./History";
import Academics from "./Academics"
import Photos from "./Photos";
import Direction from "./Direction";
import Helb from "./Helb";

function Index() {
/* -------------------------POST------------------------------------------------- */
const postDispatch = usePostDispatch();
const [ getPosts,{ loading, data }] = useLazyQuery(GET_POSTS,{fetchPolicy:"no-cache"})

  useEffect(() => {
      getPosts()
  }, [getPosts])


  if(!loading && data){
    postDispatch({
        type: 'ADD_POST',
        payload: data.getPosts
      })
  }

  return (
  <div className="Main">
      <div className="Home_page">

        <div className="Pages">
          <Login/>
          <Elearning/>
          <Portal/>
          <Library/>
          <Photos/>
          <Downloads/>
          <Academics/>
          <About/>
          <Direction/>
          <Council/>
          <History/>
          <Helb/>
      </div>
      </div>
  </div>
  )
}

export default Index;
