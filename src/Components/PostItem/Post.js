import React,{useState} from 'react';
import  "./createPost.scss";
import PostImageUpload from "./PostImageUpload";

import {useMutation} from "@apollo/client"
import {CREATE_POST, GET_POSTS} from "../../Graphql/posts";
import {CircularProgress, TextareaAutosize} from '@material-ui/core';
import {Close} from '@material-ui/icons';



/**
 * create news post
 */
export const  CreatePost = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState('');
  const [warning, setWarning] = useState('');


   const handleReset = () => {
    setTitle('');
    setImage('');
    setErrors('')
    setMessage('')
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

const values = { title, message, name,  image }

 const [createPost, { loading }] = useMutation(CREATE_POST,{
    variables: values,
    onError(err){
      setErrors(err.message)
    },
    update(cache,{data}){
      //add new data to existing data
      const newPost = data?.createPost;
      const existingPosts = cache.readQuery({
        query:GET_POSTS,
        variables:{
          skip:0,
          limit:50,
        }
      });
      cache.writeQuery({
        query:GET_POSTS,
        variables:{
          skip:0,
          limit:50,
        },
        data:{
          getPosts:{
              posts:[...existingPosts?.getPosts.posts, newPost]
          }
        }
      })
    }
});

const hadleNameChange = e => setName(e.target.value);
const hadleTitleChange = e => setTitle(e.target.value);
const handleMessageChange = e => setMessage(e.target.value)


const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
    handleReset();
    setWarning("pinned successfully!");
};


/** Loading spinnner */
  let loader;
  if(loading){
    return loader = (
      <div className="display_item_loader">
        <CircularProgress/>
        <p>Pinning your Post ...</p>
      </div>
    )
  }

const postImagePrevew =
   (<div className="image_preview">
      {image && (
      <>
          <div>
            <img  src={image} width="100%" alt="preview" />
          </div>
      </>
      )}
   </div>)


/** Display item form */
const form = (
 <form onSubmit={handleSubmit}>

   <div className="create_post_wrapper">
   {postImagePrevew}
   {image && <p onClick={ () => setImage("") } className="close" > <Close/> </p>}
   <br/>
   <div className="post_description">
          <div className="input">
              <input type="text" placeholder="Your name/title *Optional*" value={name} onChange={hadleNameChange}/>
          </div>
          <div className="input">
              <TextareaAutosize
                placeholder="Heading"
                name="title"
                minRows={1}
                onChange={hadleTitleChange}
                value={values.title}
                className="title"
              />
          </div>

            <div className="input">
              <TextareaAutosize
                  placeholder="Message"
                  minRows={2}
                  name='description'
                  onChange={handleMessageChange}
                  value={values.message}
                  className="description"
                  />
          </div>
          <br/>
          <div className="photo_input">
              <PostImageUpload  label="Photo"  handleChange={handlePostImageUpload}/>
          </div>
       </div>
   </div>

         <div className="displayBtn">
             <button onClick={ handleSubmit } disabled={!title || !message}>
                 POST
             </button>
         </div>
 </form>
)

if(errors){
  console.log(errors)
}

const warningMessage = (
  <div className="display_item_alert" >
    {warning}
  </div>
)

  return(
<div className="preview" >
   {loading ? loader : form}
   {warning &&  warningMessage}
</div>
  )
};
