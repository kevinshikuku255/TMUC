import React, { useEffect} from 'react';
import "./news.scss";
import Post from "./Post"

import { useLazyQuery } from '@apollo/client';
import { GET_POSTS } from '../../Graphql/posts'
import Skeleton from './Skeleton';
import { SignalWifiOff} from "@material-ui/icons"


/** News component */
function Index() {

  const [
    getPosts,
    { loading, data, error },
  ] = useLazyQuery(GET_POSTS,{fetchPolicy:"no-cache"})

  useEffect(() => {
      getPosts()
  }, [getPosts])

  let loader
  if(loading){
     loader = (
       <div className="Wrapper">
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
     </div>
     )
  }
  if(data && data.getPosts.length < 1){
     loader = (
       <div className="Wrapper">
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
     </div>
     )
  }


if(error){
  console.log(error)
  loader = (
       <div className="Wrapper">
          <div className="NoInternet">
             <SignalWifiOff/>
             <p>check your internet connection</p>
          </div>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
     </div>)
}

let MarkeUp;
if(data){
   MarkeUp = ( data && data.getPosts.length > 0) &&  data?.getPosts.map( post => (
        <Post key={post.id} post ={post}/>
     ))
}

  return (
    <div className="Wrapper">
      {MarkeUp}
      {loader}
    </div>

  )
}

export default Index
