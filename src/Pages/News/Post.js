import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {  timeAgo } from  "../../Utils/date"
import { ColorizeTwoTone} from '@material-ui/icons';


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
  const { id, title, message, name,  image, createdAt } = post;
  return (
    <div>
      <div className="News">
              <div className="NewsHead">
                <div className="NewsPin"><ColorizeTwoTone/></div>
              </div>
              <div className="NewsBody" onClick={() => history.push(`/Post/${id}`)}>
                {name && <h4 className="NewsAuthor">From: {name} </h4>}
                <p className="NewsTitle">{title}</p>
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
