import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';



const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  attachment: {
    fontSize:"x-large",
    color: "#595959",
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
      <AddPhotoAlternateIcon className={classes.attachment} />
  </label>
  </>
  )

};

export default PostImageUpload;

