import React from 'react';
import ReactGA from 'react-ga';
import { Avatar, makeStyles} from "@material-ui/core";
import { SignalWifiOff} from "@material-ui/icons"
import {  timeAgo } from  "../../Utils/date";
import Skeleton from "./Skeleton";
import VerifiedIcon from '@mui/icons-material/Verified';
import "./news.scss";


import { useQuery } from '@apollo/client';
import { GET_POST } from '../../Graphql/posts'


const useStyles = makeStyles((theme) => ({
avator:{
  borderBottom:"2px solid white",
},
 image: {
   borderRadius:"0px",
   width:"100%",
   height:"auto",
   margin:" .5rem auto",
 }
}));


/** Single page post */
function PostDetails({match}) {
  ReactGA.pageview(window.location.pathname);
  const classes = useStyles();

//cache data
  const { data: cacheData, loading: cacheLoading} = useQuery(GET_POST, {
        fetchPolicy:"cache-only",
        variables: {
            id: match.params.id
        }
        })


 const data =  cacheData;
 const loading =  cacheLoading;

let loader;
  if(loading){
    loader = (
    <div className="Wrapper">
      <Skeleton/>
    </div>
    )
  }

if(!loading && !data){
loader = (
    <div className="Wrapper">
      <Skeleton/>
    </div>
    )
}

if( !data){
  loader = (
       <div className="Wrapper">
          <Skeleton warning={<SignalWifiOff/>}/>
     </div>)
}

  let newsPost;
  if(data && !loading){
    const { title,image, message, createdAt, author} = data?.getPost
      newsPost =
      (
      <div className="PostDetailsWrapper">
       <div className="DetailsNews">
              <div className="DetailsNewsBody">
                {author &&
                <div className="NewsAuthor">
                   <p>{author?.name} </p>
                   <VerifiedIcon color="primary" fontSize="small"/>
                </div>}

                <h3> {title}</h3>
                <p>{timeAgo(createdAt)}</p> <br/>
                <div className="Message">
                  <div className="MessageText"><p> {message}</p></div>
                  {image && <Avatar src={image} className={classes.image}/>}
                </div>
              </div>
        </div>
        </div>
       )
  }



  return (
  <>
      {newsPost}
      {loader}
    </>
  )
}

export default PostDetails;
