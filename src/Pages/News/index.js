import React, { useEffect} from 'react';
import ReactGA from 'react-ga';
import "./news.scss";
import Post from "./Post"

import { usePostDispatch, usePostState } from "../../Context/post";
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_POSTS } from '../../Graphql/posts'
import Skeleton from './Skeleton';
import { SignalWifiOff} from "@material-ui/icons";
import  Img from "../../Images/mike.jpg";


const mike = {
author:
     {__typename: 'User', id: '61557bbfe494ad225ca14ffa', name: 'Image Paradice'},
createdAt: "1633177397421",
id: null,
image: Img,
imagePublicId: null,
message: "Garage road oposite transforma: 0742244889",
name: null,
title: "Comrades cyber and Barbershop in Town",
__typename: "Post",
}



/** News component */
function Index() {
  ReactGA.pageview('/News');
  const postDispatch = usePostDispatch();
  const { posts } = usePostState();
  const online = navigator.online;


  //Use lazy query
  const { data:cachedData, loading:cacheLoading, error }  = useQuery(GET_POSTS,{ fetchPolicy:"cache-only" });
  const [ getPosts ] = useLazyQuery(GET_POSTS,{ fetchPolicy:"network-only" });


  useEffect(() => {
      getPosts()
  }, [getPosts, online ])


 const data = cachedData;
 const loading =  cacheLoading

  useEffect(() => {
    if (data) {
      postDispatch({
        type: 'ADD_POSTS',
        payload: data.getPosts
      })
    }
  }, [data, postDispatch])


let loader;
  if( posts.length < 1 || loading){
     loader = (
       <div className="NewsWrapper">
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
       <div className="NewsWrapper">
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
       <div className="NewsWrapper">
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
        <div>
            <Post key={post.id} post ={post}/>
        </div>
     ))
}

  return (
    <div className="NewsWrapper">
      <Post key={mike.id} post ={mike} onClick={null}/>
      {MarkeUp}
      {loader}
    </div>

  )
}

export default Index
