import React from 'react';
import ReactGA from 'react-ga';
import { CreatePost } from "../../Components/PostItem/Post";
import "./news.scss";


function MakePost() {
  ReactGA.pageview('/CreatePost');
  return (
    <>
    {<div id="CreatePostWrapper">
        <CreatePost/>
      </div>
    }
    </>
  )
}

export default MakePost;
