import React, { useEffect} from 'react';
import { useStore } from "../../store";
import { timeAgo, currentDate } from  "../../Utils/date";
import { useHistory } from "react-router-dom";
import { Avatar, makeStyles} from "@material-ui/core";


import PushPinIcon from '@mui/icons-material/PushPin';
import VerifiedIcon from '@mui/icons-material/Verified';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { useMutation, useLazyQuery } from "@apollo/client"
import { DELETE_POST, GET_POST } from "../../Graphql/posts";
import { GET_AUTH_USER } from "../../Graphql/user";


const useStyles = makeStyles((theme) => ({
avator:{
  borderBottom:"2px solid white",
},
 image: {
   width:"100%",
   borderRadius: "0",
   height: theme.spacing(18),
   margin:".5rem auto",
 }
}));

function Post({ post }) {
  const [{auth}] = useStore();
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname
  const { id, title, message, image, imagePublicId, createdAt, author } = post;


// Fetch single post data
  const [ getPost ] = useLazyQuery(GET_POST,{
        fetchPolicy:"network-only",
        variables: {id}
        })
  useEffect(() => {
      getPost()
  }, [getPost])


  const displayMessage = message?.substring(0,200)



  const clickHandler = () => {
    history.push(`/Post/${id}`)
 }

 //Dlete post mutation
 const [deletePost] = useMutation(DELETE_POST,
      {variables:{id, imagePublicId},
      refetchQueries:[
        {query: GET_AUTH_USER}
      ]
      })

const markUp = (
<div className="News">
              <div className="NewsHead">
                <div className="NewsPin"><PushPinIcon/></div>
              </div>
              <div className="NewsBody" onClick={clickHandler}>
                {author &&
                <div className="NewsAuthor">
                   <p>{author?.name} </p>
                   <VerifiedIcon color="primary" fontSize="small"/>
                </div>}
                <p className="NewsTitle">{title}</p>
                <p className="NewsBody">{ displayMessage} <b>{message?.length > 300 && "... read more"}</b></p>
                <div>
                 {image &&  <Avatar src={image} className={classes.image}/>}
                </div>
              </div>

              <div className="NewsActions">
                <p>{timeAgo(createdAt)}</p>
              </div>
          </div>
)

//Swipe left and right actions
const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info('swipe action triggered')}>
      <div className="RightSwipe">
        {currentDate(createdAt)}
      </div>
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
       onClick={ () => deletePost()}
    >
      <div className="SwipeToDelete">
        <p>Delete</p>
      </div>
    </SwipeAction>
  </TrailingActions>
);
  return (
    <div>
      <SwipeableList>
      <SwipeableListItem
        leadingActions={ auth.user && path === "/Editpost" ? leadingActions() : null}
        trailingActions={ auth.user && path === "/Editpost" ? trailingActions():  leadingActions()}
      >
        {markUp}
      </SwipeableListItem>
    </SwipeableList>
    </div>
  )
}


export default Post;
