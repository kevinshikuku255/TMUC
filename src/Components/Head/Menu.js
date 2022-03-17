import React, { useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { useLoadContext, useThemeContext } from '../../Context';
import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../../Images/favicon.png";
import colorTheme from "../colorTheme";
import { LightMode, DarkMode} from '@mui/icons-material';


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
    const darkHandler = () => {
      localStorage.setItem("theme", "Dark")
      dispatch({
        type: "Dark",
        payload: "Dark"
      })
    }
    const lightHandler = () => {
      localStorage.setItem("theme", "Light")
      dispatch({
        type: "Light",
        payload: "Light"
      })
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
                <Avatar src={Logo} className={classes.small}/>
              </p>
              <p className="MenuItem" onClick={() => history.push("/")} >ACADEMICS</p>
              <p className="MenuItem" onClick={() => history.push("/Noticeboard")}>NEWS</p>
              <p className="MenuItem" onClick={() => history.push("/Studentcenter")} style={{color:"red"}} >STUDENT-CENTER</p>
              <p className="MenuItem" onClick={() => history.push("/Activities")} >ACTIVITIES</p>
              <p className="MenuItem" onClick={() => history.push("/Sotmuc")} >SOTMUC</p>
              <p className="MenuItem" onClick={() => history.push("/Policy")}>  USAGE POLICY</p>
              <p className="MenuItem" onClick={() => history.push("/CreatePost")}> PIN A POST</p>
              <p className="MenuItem" onClick={() => history.push("/Signup")}> SIGN-UP</p>
              { Theme === "Dark" &&  <p className="MenuItem" onClick={lightHandler}>Light <LightMode/></p>}
              { Theme === "Light" && <p className="MenuItem" onClick={darkHandler}>Dark <DarkMode/></p>}
              <p className="MenuItem" onClick={onShare}> SHARE THIS APP</p>

           </div>
        </div>
        }
        </>
  );
}
