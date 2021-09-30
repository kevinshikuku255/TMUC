import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import AddCommentIcon from '@mui/icons-material/AddComment';
import './components.scss';


function Fab() {
  const history = useHistory();
  const {pathname} = useLocation();
  return (
    <> {
      pathname !== "/CreatePost" &&
      <div className="Fab" onClick={() => history.push("/CreatePost")}>
          <button><AddCommentIcon style={{fontSize:"x-large"}}/></button>
      </div>
    }
    </>
  )
}


export default Fab
