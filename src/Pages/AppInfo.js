import React from 'react'
import Logo from "../Images/favicon.png";
import { Avatar, makeStyles } from "@material-ui/core";
import colorTheme from "../Components/colorTheme";

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      borderRadius: 0,
    }
  }));

  /** App info */
function AppInfo() {
    const classes = useStyles();
    const theme = colorTheme();
    const style = {
        div: {
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            color: theme.primary
        },
        p:{
            margin: "1rem"
        }
    }

  return (
    <div style={style.div}>
        <h3>Tom Mboya University</h3>
         <p style={style.p}>Version 5.6.2</p>
         <p style={style.p}><Avatar src={Logo}  className={classes.small}/></p>
         <p style={style.p}>{'\u00A9'} 2017 - 2022</p>
         <p>Developed by kevin shikuku __ Alumnus</p>
         <i>contact: <a href='mailto: kevinsshikuku@gmail.com' style={{color: theme.link}}> kevinsshikuku@gmail.com</a></i>
    </div> 
  )
}

export default AppInfo