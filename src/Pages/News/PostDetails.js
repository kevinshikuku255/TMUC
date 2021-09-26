import React, { useEffect} from 'react';
import ReactGA from 'react-ga';
import { Avatar, makeStyles} from "@material-ui/core";
import {  timeAgo } from  "../../Utils/date"
import Skeleton from "./Skeleton"
import "./news.scss";


import { useLazyQuery } from '@apollo/client';
import { GET_POST } from '../../Graphql/posts'


const useStyles = makeStyles((theme) => ({
avator:{
  borderBottom:"2px solid white",
},
 image: {
   borderRadius:"0px",
   width:"inherit",
   height:"auto",
   margin:"auto",
 }
}));



/** Single page post */
function PostDetails({match}) {
  ReactGA.pageview(window.location.pathname);
  const classes = useStyles();

  const [
    getPost,
    { loading, data },
  ] = useLazyQuery(GET_POST,{
        variables: {
            id: match.params.id
        }
        })

  useEffect(() => {
      getPost()
  }, [getPost])



let loader;
  if(loading){
    loader = (
    <div className="Wrapper">
      <Skeleton/>
    </div>
    )
  }


  let newsPost;
  if(data && !loading){
    const { title,image, message, createdAt} = data?.getPost
      newsPost =
      (
      <div className="PostDetailsWrapper">
       <div className="DetailsNews">
              <div className="DetailsNewsBody">
                <h3> {title}</h3>
                <div className="Message">
                  <p> {message}</p>
                  {image && <Avatar src={image} className={classes.image}/>}
                </div>
              </div>

              <div className="DetailsNewsActions">
                <p>{timeAgo(createdAt)}</p>
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
