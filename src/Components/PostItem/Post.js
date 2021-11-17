import React,{useState} from 'react';
import PostImageUpload from "./PostImageUpload";

import { useMutation } from "@apollo/client"
import { CREATE_POST } from "../../Graphql/posts";
import SendIcon from '@mui/icons-material/Send';
import { TextareaAutosize} from '@material-ui/core';
import { Close} from '@material-ui/icons';
import { useAuthContext } from "../../Context";
import useSound from 'use-sound';
import Bubble from "../../Images/bubble.wav";

import  "./createPost.scss";



/**
 * create news post
 */
export const  CreatePost = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');
  const [warning, setWarning] = useState('');
  const [ {user } ] = useAuthContext();
  const [play] = useSound(Bubble);
  const authorId = user ? user?.id : null
   const handleReset = () => {
    setTitle('');
    setImage('');
    setErrors('');
    setMessage('');
  };


/** handles post image upload ! */
 const handlePostImageUpload = e => {
        const file = e.target.files[0];
        if (!file) return;
      previewFile(file)
  };

  const previewFile = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setImage(reader.result);
        }
  }


const values = { title, message,  image, authorId }

 const [createPost, { loading , data}] = useMutation(CREATE_POST,{
    variables: values,
    onCompleted:()=>{
       play()
       setWarning(<p style={{fontFamily:"sans-serif", color:"blueviolet"}}>Pinned successfully!</p>);
    },
    onError(err){
      setErrors(err.message)
    }
});


// const hadleNameChange = e => setName(e.target.value);
const hadleTitleChange = e => setTitle(e.target.value);
const handleMessageChange = e => setMessage(e.target.value)


const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
    handleReset();
};


//Image preview
const postImagePrevew =
   (<div className="image_preview">
      {image && (
      <>
          <div>
            <img  src={image} width="100%" alt="preview" />
          </div>
          {image && <p onClick={ () => setImage("") } className="close" > <Close/> </p>}
      </>
      )}
   </div>)


//Display messages
const warningMessage = (
  <div className="display_item_alert" >
    { data && warning}
    {loading && <p style={{fontFamily:"sans-serif"}}>pinning your Note just a minute ...</p>}
  </div>
)

//Error handling
if(errors){
  console.log(errors)
}

/** Display item form */
const form = (
 <form onSubmit={handleSubmit}>
   <div className="create_post_wrapper">
   {postImagePrevew}
   {warningMessage}
   <br/>
   <div className="post_description">
          <div className="TitleInput">
              <TextareaAutosize
                placeholder="headline*"
                name="title"
                minRows={1}
                onChange={hadleTitleChange}
                value={values.title}
                className="title"
              />
          </div>
          <div className="MessageInput">
          <div className="Photo">
                    <PostImageUpload  label="Photo" color="primary"  handleChange={handlePostImageUpload}/>
                 </div>
              <TextareaAutosize
                  placeholder="message*"
                  minRows={1}
                  autoFocus
                  name='description'
                  onChange={handleMessageChange}
                  value={values.message}
                  className="Message"
                  />
                 <div className="Photo">
                    <SendIcon  label="Photo" color="primary"  onClick={ title || message ? handleSubmit : null } />
                 </div>
          </div>
       </div>
   </div>
 </form>
)



  return(
<div className="preview" >
   {form}
</div>
  )


};
