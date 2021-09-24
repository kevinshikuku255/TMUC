import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {  timeAgo } from  "../../Utils/date"
import { AttachFileTwoTone} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
avator:{
  borderBottom:"2px solid white",
},
 image: {
   borderRadius:"5px",
   width:"98%",
   height: theme.spacing(18),
   margin:"auto",
 }
}));

function Post({post}) {
  const classes = useStyles();
  const history = useHistory();
  const { id, title,message,  authorPic, image,  authorName, email, createdAt } = post;
  return (
    <div>
      <div className="News">
              <div className="NewsHead">
                <div className="NewsAvatar">
                    <div><Avatar src={authorPic} className={classes.avator}/></div>
                    <div className="PublisherDetails">
                        <p>{authorName}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div className="NewsPin"><AttachFileTwoTone/></div>
              </div>

              <div className="NewsBody" onClick={() => history.push(`/Post/${id}`)}>
                <h2> {title}</h2>
                <p>{ `${message?.substring(0,200)}`} <b>{message?.length > 200 && "... read more"}</b></p>
                <div>
                 { image && <Avatar src={image} className={classes.image}/>}
                </div>
              </div>

              <div className="NewsActions">
                <p>{timeAgo(createdAt)}</p>
              </div>
          </div>
    </div>
  )
}

export default Post;
