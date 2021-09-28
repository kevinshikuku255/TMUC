import React, { useEffect} from 'react';
import ReactGA from 'react-ga';
import "./news.scss";
import Post from "./Post"

import { usePostDispatch, usePostState } from "../../Context/post";
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_POSTS } from '../../Graphql/posts'
import Skeleton from './Skeleton';
import { SignalWifiOff} from "@material-ui/icons"


/** News component */
function Index() {
  ReactGA.pageview('/News');
  const postDispatch = usePostDispatch();
  const { posts } = usePostState()

  //Use lazy query
  const { data:cachedData, loading: cacheLoading }  = useQuery(GET_POSTS,{ fetchPolicy:"cache-only" });
  const [ getPosts,{ loading: queryLoading, data:queryData, error } ] = useLazyQuery(GET_POSTS,{ fetchPolicy:"network-only" });


  useEffect(() => {
      getPosts()
  }, [getPosts])

 const data = queryData || cachedData;
 const loading = queryLoading || cacheLoading;

  useEffect(() => {
    if (data) {
      postDispatch({
        type: 'ADD_POSTS',
        payload: data.getPosts
      })
    }
  }, [data, postDispatch])


let loader;
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


if(error && !data){
  loader = (
       <div className="Wrapper">
          <Skeleton warning={<SignalWifiOff/>}/>
          <Skeleton warning={<SignalWifiOff/>}/>
          <Skeleton warning={<SignalWifiOff/>}/>
          <Skeleton warning={<SignalWifiOff/>}/>
          <Skeleton warning={<SignalWifiOff/>}/>
     </div>)
}


let MarkeUp;
if(posts){
   MarkeUp = ( posts && posts.length > 0) &&  posts.map( post => (
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
