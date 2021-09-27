import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AttachFile} from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  attachment: {
    fontSize:"xx-large",
    padding:0,
    margin:0,
  }
}));



/**
 * Component for uploading post image
 */
const PostImageUpload = ({ handleChange }) => {
    const classes = useStyles();

  return(
 <>
  <input
      accept="image/x-png,image/jpeg"
      name="image"
      className={classes.input}
      onChange={handleChange}
      id="icon-button-file"
      type="file"
         />
  <label htmlFor="icon-button-file">
      <AttachFile className={classes.attachment} />
  </label>
  </>
  )

};

export default PostImageUpload;

