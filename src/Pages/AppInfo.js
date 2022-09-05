import React from 'react'
import Logo from "../Images/favicon.png";
import install from "../Images/install.png";
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
      <h3>Tom Mboya Student App</h3>
      <p style={style.p}>Version 6.0.2</p>
      <p style={style.p}>
        <Avatar src={Logo} className={classes.small} />
      </p>
      <p style={style.p}>{"\u00A9"} 2017 - 2022</p>
      <p style={style.p}>
        Native mobile app will be available soon for download
      </p>
      <p>Developed by kevin shikuku __ Alumnus</p>
      <i>
        contact:{" "}
        <a href="mailto: kevinsshikuku@gmail.com" style={{ color: theme.link }}>
          {" "}
          kevinsshikuku@gmail.com
        </a>
      </i>
      <p style={style.p}>
        {/* Contribute to the maintanance of the servers through Mpesa No. */}
        <span style={{ color: theme.link }}>0740253367 </span>
      </p>
      <p style={style.p}>
        Share this application to your friends to download and use through the
        link --
        <a style={{ color: theme.link }} href="https://tmuc.netlify.app">
          https://tmuc.netlify.app
        </a>
      </p>
      <i style={style.p}>
        PRO TIP: when they open the link, Tell them to click on add to
        homescreen popup to install to their phone .
      </i>
      <img src={install}  alt="tom mboya"/>
    </div>
  );
}

export default AppInfo
