import React, { useEffect} from 'react';
import { useStore } from "../../store";
import { timeAgo } from  "../../Utils/date";
import { useHistory } from "react-router-dom";
import { Avatar, makeStyles} from "@material-ui/core";


import PushPinIcon from '@mui/icons-material/PushPin';
import VerifiedIcon from '@mui/icons-material/Verified';
import DeleteIcon from '@mui/icons-material/Delete';

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
 const [deletePost, { data, loading}] = useMutation(DELETE_POST,
      {variables:{id, imagePublicId},
      refetchQueries:[
        {query: GET_AUTH_USER}
      ]
      })

  return (
    <div>
      <div className="News">
              <div className="NewsHead">
                <div className="NewsPin"><PushPinIcon/></div>
              </div>
              <div className="NewsBody" onClick={ (!auth?.user || path !== "/Editpost") && clickHandler}>
                {author &&
                <div className="NewsAuthor">
                   <p>{author?.name} </p>
                   <VerifiedIcon color="primary" fontSize="small"/>
                </div>}
                <p className="NewsTitle">{title}</p>

                { (auth?.user && path === "/Editpost") ?  <p className="NewsBody">{ message} </p> :
                <p className="NewsBody">{ displayMessage} <b>{message?.length > 300 && "... read more"}</b></p> }

                <div>
                 {image &&  <Avatar src={image} className={classes.image}/>}
                </div>
              </div>

              <div className="NewsActions">
                <p>{timeAgo(createdAt)}</p>

                {auth.user && path === "/Editpost" &&
                <p className="DeleteStatus">
                  {loading && "deleting"}
                  {data && "deleted"}
                </p>}

                {auth.user && path === "/Editpost" &&
                <button className="DeleteButton" >
                    { loading || data ? <DeleteIcon color="primary" />
                      : <DeleteIcon  color="secondary" onClick={() => deletePost()}/>}
                </button>}
              </div>
          </div>
    </div>
  )
}


export default Post;
