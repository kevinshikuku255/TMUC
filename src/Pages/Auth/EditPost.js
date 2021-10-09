import React, { useEffect} from 'react';
import ReactGA from 'react-ga';
import "../News/news.scss";
import Post from "../News/Post"
import Skeleton from "../News/Skeleton";

import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_AUTH_USER } from '../../Graphql/user';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';


/** Edit post */
function Index() {
  ReactGA.pageview('/Edit');
  const online = navigator.onLine

  //Use lazy query
  const { data:cachedData , loading:cacheLoading, error}  = useQuery(GET_AUTH_USER,{ fetchPolicy:"cache-only" });
  const [ getPosts, { data:queryData, loading:queryLaodng} ] = useLazyQuery(GET_AUTH_USER,{ fetchPolicy:"network-only" });

  useEffect(() => {
      getPosts()
  }, [getPosts, online])

 const data =  cachedData || queryData;
 const loading =  cacheLoading || queryLaodng

let loader;
  if(loading || cachedData?.getAuthUser?.posts.length < 1 ){
     loader = (
       <div>
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
       <div>
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
        <div>
          <Post key={post.id} post ={post}/>
        </div>
     ))
}


if(data?.getAuthUser?.posts?.length <= 0){
  MarkeUp = (
    <div className="Nopins">
      <h4>YOU HAVE NO PINNED NOTICE</h4>
    </div>
  )
}

  return (
    <div className="EditPostWrapper">
      {data?.getAuthUser?.posts?.length > 0 &&
      <div className="SwipeToDleleteMessage">
         <p>Swipe left to delete</p>
         <p><DeleteSweepOutlinedIcon/></p>
      </div>}
      {MarkeUp}
      {loader}
    </div>

  )
}

export default Index
