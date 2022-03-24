import React, { useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useLoadContext, useThemeContext } from '../../Context';
import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../../Images/favicon.png";
import colorTheme from "../colorTheme";
import Switch from '@mui/material/Switch';


const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: 0,
  }
}));

/** Menu  */
export default function AccountMenu({menu_on}) {
 const ref = useRef();
 const theme = colorTheme();
 const history = useHistory();
 const classes = useStyles();
 const  [ , loadispatch ] = useLoadContext();
 const  [ { Theme } , dispatch ] = useThemeContext();

 const [checked, setChecked] = React.useState(true);

 const handleChange = (event) => {
   const checked = event.target.checked;
   if(checked){
     darkHandler();
   }else{
     lightHandler();
   }
   setChecked(event.target.checked);
 };


 useEffect(() => {
    const checkIfClickedOutside = e => {
// If the menu is open and the clicked target is not within the menu, then close the menu
      if (menu_on && ref.current && !ref.current.contains(e.target)) {
        loadispatch({type:"MENU", payload: false})
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
// Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menu_on, loadispatch])


// Google analytics
  const reportDark = () => {
    ReactGA.event({
          category:"Theme",
          action:"changed to dark theme",
          transport:"beacon",
          label:"Dark theme",
        })
}
const reportLight = () => {
  ReactGA.event({
        category:"Theme",
        action:"changed to light theme",
        transport:"beacon",
        label:"Light theme",
      })
}

// Sharing the app link
    async function onShare() {
      const label= "T.M.U.C"
      const url = "https://tmuc.netlify.app";
      const text = "TMUC APP";
      try {
          await navigator
          .share({
            label,
            url,
            text
          })

        } catch (err) {

            // the user cancels the action of sharing
          console.log("share canceled");
        }
    }
  // Dark and light theme click handlers
    const darkHandler = () => {
      localStorage.setItem("theme", "Dark")
      dispatch({
        type: "Dark",
        payload: "Dark"
      })
      reportLight();
    }

    const lightHandler = () => {
      localStorage.setItem("theme", "Light")
      dispatch({
        type: "Light",
        payload: "Light"
      })
      reportDark()
    }
    
    

  return (
        <>
        { menu_on &&
        <div 
            className= "MenuWrapper" 
            style={{color:theme.primary}}
            ref={ref} 
            onClick={() => loadispatch({type:"MENU", payload: false})}>

           <div className="MenuItems" style={{backgroundColor: theme.background, color:theme.primary}} >
              <p className="Logo">
                <a href='//ashoupsu.com/4/4950173'><Avatar src={Logo} className={classes.small}/></a>
              </p>
              <p className="MenuItem" onClick={() => history.push("/")} >ACADEMICS</p>
              <p className="MenuItem" onClick={() => history.push("/Noticeboard")}>NEWS</p>
              <p className="MenuItem" onClick={() => history.push("/Studentcenter")} style={{color:"red"}} >STUDENT-CENTER</p>
              <p className="MenuItem" onClick={() => history.push("/Activities")} >ACTIVITIES</p>
              <p className="MenuItem" onClick={() => history.push("/Sotmuc")} >SOTMUC</p>
              <p className="MenuItem" onClick={() => history.push("/Policy")}>  USAGE POLICY</p>
              <p className="MenuItem" onClick={() => history.push("/CreatePost")}> PIN A POST</p>
              <p className="MenuItem" onClick={() => history.push("/Signup")}> SIGN-UP</p>

              <Switch
                checked={checked}
                style={{color: theme.primary}}
                label={Theme}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              {Theme}
              <p className="MenuItem" onClick={onShare}> SHARE THIS APP</p>

           </div>
        </div>
        }
        </>
  );
}
