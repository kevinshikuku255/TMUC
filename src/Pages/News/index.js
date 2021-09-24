import React, { useEffect} from 'react';
import "./news.scss";
import Post from "./Post"

import { useLazyQuery } from '@apollo/client';
import { GET_POSTS } from '../../Graphql/posts'
import Skeleton from './Skeleton';


/** News component */
function Index() {

  const [
    getPosts,
    { loading, data },
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
  if(data.getPosts.length < 1){
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
let MarkeUp;
if(data){
   MarkeUp = (data.getPosts.length > 0) &&  data?.getPosts.map( post => (
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
