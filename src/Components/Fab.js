import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import MessageTwoToneIcon from '@material-ui/icons/MessageTwoTone';
import './components.scss';


function Fab() {
  const history = useHistory();
  const {pathname} = useLocation();
  return (
    <> {
      pathname !== "/CreatePost" &&
      <div className="Fab" onClick={() => history.push("/CreatePost")}>
          <button><MessageTwoToneIcon/></button>
      </div>
    }
    </>
  )
}

export default Fab
