import React,{useState} from 'react';

import { useMutation } from "@apollo/client"
import SendIcon from '@mui/icons-material/Send';
import { TextareaAutosize} from '@material-ui/core';
import useSound from 'use-sound';
import Bubble from "../../Images/bubble.wav";

import { CREATE_REPLY } from "../../Graphql/reply";
import { GET_POST } from '../../Graphql/posts'




/**
 * create news post
 */
 const CreateReply = ({postId}) => {
   const [play] = useSound(Bubble);
   const [ reply, setReply] = useState("")

 const [createReply, { loading }] = useMutation(CREATE_REPLY,{
    variables: {body: reply, postId},
    onCompleted:()=>{
       play();
       setReply("");
    },
    onError(err){
      console.log(err)
    },
    refetchQueries:[
            {query: GET_POST , variables:{id: postId}}
      ]
});



const handleSubmit = (e) => {
    e.preventDefault();
     createReply();
};

const handleChange = (e) => {
  setReply(e.target.value)
}


/** Display item form */
const form = (
 <form onSubmit={handleSubmit}>
          <div className="ReplayTextInput">
              <TextareaAutosize
                  placeholder="message"
                  minRows={1}
                  onChange={handleChange}
                  value={reply}
                  className="Message"
                  />
              <div className="SendButton">
                    {loading ? " ..." : <SendIcon  label="reply" color="primary"  onClick={ reply ? handleSubmit : null } />}
              </div>
          </div>
 </form>
)



  return( <div > {form} </div> )

};

export default CreateReply;