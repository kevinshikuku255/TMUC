import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Link} from '@material-ui/icons';
import './components.scss';


function Fab() {
  const history = useHistory();
  const {pathname} = useLocation();
  return (
    <> {
      pathname !== "/CreatePost" &&
      <div className="Fab" onClick={() => history.push("/CreatePost")}>
          <button><Link style={{fontSize:"x-large"}}/></button>
      </div>
    }
    </>
  )
}

export default Fab
