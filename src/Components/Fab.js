import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import AddLinkIcon from '@mui/icons-material/AddLink';
import './components.scss';


function Fab() {
  const history = useHistory();
  const {pathname} = useLocation();
  return (
    <> {
      pathname !== "/CreatePost" &&
      <div className="Fab" onClick={() => history.push("/CreatePost")}>
          <button><AddLinkIcon style={{fontSize:"x-large"}}/></button>
      </div>
    }
    </>
  )
}


export default Fab
