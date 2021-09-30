import React, { useEffect} from 'react';
import ReactGA from 'react-ga';
import "../News/news.scss";
import Post from "../News/Post"
import Skeleton from "../News/Skeleton";

import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_AUTH_USER } from '../../Graphql/user'


/** Edit post */
function Index() {
  ReactGA.pageview('/Edit');

  //Use lazy query
  const { data:cachedData , loading:cacheLoading}  = useQuery(GET_AUTH_USER,{ fetchPolicy:"cache-only" });
  const [ getPosts,{ loading:queryLoading, data:queryData, error } ] = useLazyQuery(GET_AUTH_USER,{ fetchPolicy:"network-only" });


  useEffect(() => {
      getPosts()
  }, [getPosts])

 const data = queryData || cachedData;
 const loading = queryLoading || cacheLoading

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

if(error && !data){
  loader = (
       <div className="Wrapper">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
     </div>)
}




let MarkeUp;
if(data){
   MarkeUp =  data?.getAuthUser?.posts.map( post => (
        <Post key={post.id} post ={post}/>
     ))
}


if(data?.getAuthUser?.posts?.length < 1){
  MarkeUp = (
    <div className="Nopins">
      <h4>YOU HAVE NO PINNED NOTICE</h4>
    </div>
  )
}

  return (
    <div className="Wrapper">
      {MarkeUp}
      {loader}
    </div>

  )
}

export default Index
