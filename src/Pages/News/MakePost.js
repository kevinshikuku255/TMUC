import React from 'react';
import ReactGA from 'react-ga';
import { CreatePost } from "../../Components/PostItem/Post";
import { useHistory } from 'react-router';
import "./news.scss";


function MakePost() {
  ReactGA.pageview('/CreatePost');
  const history = useHistory();
  return (
    <>
    {<div className="Wrapper">
       <div className="PostInstructions">
          <p>Type the Title and Message of your News post and attach an image if any. </p>
          <h4 onClick={() => history.push("/Policy")}>Read usage policy</h4>
        </div>
        <CreatePost/>
      </div>
    }
    </>
  )
}

export default MakePost;
