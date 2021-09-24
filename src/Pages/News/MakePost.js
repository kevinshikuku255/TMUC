import React from 'react';
import { CreatePost } from "../../Components/PostItem/Post";
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import "./news.scss";

function MakePost() {
  const {
    isAuthenticated
  } = useAuth0();
  return (
    <>
    { isAuthenticated ? <div className="Wrapper">
      <div className="PostInstructions">
          <p>Type the Title and Message of your News post and attach an image if any </p>
        </div>
        <CreatePost/>
      </div> :
      <Login/>
    }
    </>
  )
}

export default MakePost;
