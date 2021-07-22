import React from 'react';
import { useHistory } from 'react-router';
import "./components.css";

/** Sotmuc nav component */
function Nav() {
  const history = useHistory();
  return (
    <div className="Nav_Wrapper">
        <p onClick={() => history.push("./sotmuc/news")} >sotmuc news</p>
    </div>
  )
}

export default Nav
