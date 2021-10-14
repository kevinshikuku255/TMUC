import React, { useEffect} from 'react';
import { useAuthContext} from "../../Context";
import { timeAgo, weekDay } from  "../../Utils/date";
import { useHistory } from "react-router-dom";
import { Avatar, makeStyles} from "@material-ui/core";

import PushPinIcon from '@mui/icons-material/PushPin';
import VerifiedIcon from '@mui/icons-material/Verified';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ForumIcon from '@mui/icons-material/Forum';


import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { useMutation, useLazyQuery } from "@apollo/client";
import { DELETE_POST, GET_POST , RECORD_VIEW} from "../../Graphql/posts";
import { GET_AUTH_USER } from "../../Graphql/user";


const useStyles = makeStyles((theme) => ({
avator:{
  borderBottom:"2px solid white",
},
 image: {
   width:"100%",
   borderRadius: "0",
   height: theme.spacing(20),
   margin:".5rem auto",
 },
  Ad: {
   width:"100%",
   borderRadius: "0px",
   height: theme.spacing(10),
   margin:".1rem auto",
 }
}));

function Post({ post }) {
  const [{user}] = useAuthContext();
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname;
  const { id, title, message, image, imagePublicId, createdAt, views, replies, author } = post;

// Record a view
const [ view ] = useMutation(RECORD_VIEW, { variables:{postId: id} })


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
    view();
    history.push(`/Post/${id}`)
 }

 //Dlete post mutation
 const [deletePost] = useMutation(DELETE_POST,
      {variables:{id, imagePublicId, authUserId: user?.id },
        refetchQueries:[
            {query: GET_AUTH_USER}
      ]
      })



// Sharing the pinned post
// async function Share() {
//   const label= JSON.stringify(title, null, 2)
//   const url = "https://tmuc.netlify.app/Noticeboard";
//   const text = JSON.stringify(message, null, 2);
//   try {
//       await navigator
//       .share({
//         label,
//         url,
//         text
//       })

//     } catch (err) {

// // the user cancels the action of sharing
//        console.log("share canceled");
//     }
// }



const markUp = (
<div className={id ? "News" : "Ad"}>
              <div className="NewsHead">
                <div className="NewsPin">{id ? <PushPinIcon/> : "Ad"}</div>
              </div>
              <div className="NewsBody">
                {author &&
                <div className="NewsAuthor">
                   <p>{author?.name} </p>
                   <VerifiedIcon color="primary" fontSize="small"/>
                </div>}
                <p className="NewsTitle">{title}</p>
                <p className="NewsBody">{ displayMessage}
                    <b style={{color:"blueviolet"}}  onClick={id ? clickHandler : null} >{". . . read more"}</b>
                </p>
                <div>
                 {image &&  <Avatar src={image} className={id ? classes.image : classes.Ad}/>}
                </div>
              </div>

              {id && <div className="NewsActions">
                <div className="PostActions">
                  <VisibilityTwoToneIcon/>
                  <p> {views?.length} views</p>
                </div>
                 <div className="PostActions" onClick={id ? clickHandler : null}>
                     <ForumIcon/> {replies?.length} feedback
                 </div>
                <p>{timeAgo(createdAt)}</p>
              </div>}
          </div>
)

//Swipe left and right actions
const leadingActions = () => (
  <LeadingActions>
    <SwipeAction>
      <div className="RightSwipe">
        {weekDay(createdAt)}
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
        trailingActions={ user && path === "/Editpost" ? trailingActions():  leadingActions()}
      >
        {markUp}
      </SwipeableListItem>
    </SwipeableList>
    </div>
  )
}


export default Post;
