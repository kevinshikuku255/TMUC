import React from 'react';
import "./components.scss";
import colorTheme from "../Components/colorTheme";

/** nav component */
function Nav({head}) {
  const theme = colorTheme();
  return (
    <div className="Nav_Wrapper" style={{backgroundColor: theme.farground, color:theme.primary}}>
        {head}
    </div>
  )
}

export default Nav
