import React from 'react';
import ReactGA from 'react-ga';
import colorTheme from "../Components/colorTheme";
import { Avatar, makeStyles} from "@material-ui/core";
import { YouTube, Instagram, WhatsApp, Twitter, Facebook, FormatTextdirectionLToR } from "@material-ui/icons";


import './components.scss';


const useStyles = makeStyles(() => ({
  large: {
    width: "100%",
    height:"auto",
    margin:"auto",
    backgroundColor:"pink",
    borderRadius:"0px",
  },
}));

/** Dama */
export const Details = ({DetailInfo, avartar}) => {
   let pagevieew = window.location.pathname;
   ReactGA.pageview(`${pagevieew.split("/").pop()}`);
   const theme = colorTheme();

   const classes = useStyles();
  return (
    <div className="Details" style={{backgroundColor: theme.farground, color:theme.primary}}>

      <div className="CoverImage">
          <Avatar alt={DetailInfo?.name} src={avartar} className={classes.large}/>
          <p>
            {DetailInfo.name}
            {DetailInfo?.Youtube && <a href={DetailInfo?.Youtube}><YouTube className="Youtube"/></a>}
          </p>
      </div>

      <div className="Genre">
        {DetailInfo?.position && <p>{DetailInfo?.position}</p>}
        {DetailInfo?.Genre && <p>{DetailInfo?.Genre}</p>}
        {DetailInfo?.Category && <p>{DetailInfo?.Category}</p>}
        <ul>
           {DetailInfo?.Instagram && <li> <a href={DetailInfo?.Instagram}><Instagram style={{color:"blueViolet"}}/></a></li>}
           {DetailInfo?.Youtube && <li> <a href={DetailInfo?.Youtube}><YouTube style={{color:"red"}}/></a></li>}
           {DetailInfo?.Phone && <li>  <a href={`https://wa.me/${DetailInfo?.Phone}`}><WhatsApp style={{color:"cyan"}}/></a></li>}
           {DetailInfo?.Facebook && <li>  <a href={DetailInfo?.Facebook}><Facebook style={{color:"blue"}}/></a></li>}
           {DetailInfo?.Tiktok && <li>  <a href={DetailInfo?.Tiktok}><FormatTextdirectionLToR style={{color:"#ff00f7"}}/></a></li>}
           {DetailInfo?.Twitter && <li>  <a href={DetailInfo?.Twitter}><Twitter style={{color:"skyblue"}}/></a></li>}
        </ul>
      </div>

      <div className="Accountdetails">
         <ul>
           { DetailInfo?.Youtubechannel && <li><b>Yotube Channel:</b>  {DetailInfo?.Youtubechannel}</li>}
           { DetailInfo?.Ig && <li><b>Instagram:</b> {DetailInfo?.Ig}</li>}
           { DetailInfo?.Fb && <li><b>Facebook:</b> {DetailInfo?.Fb}</li>}
           { DetailInfo?.Tktok && <li><b>Tiktok:</b> {DetailInfo?.Tktok}</li>}
           { DetailInfo?.Email && <li><b>Email:</b> {DetailInfo?.Email}</li>}
         </ul>
      </div>

    </div>
  )
}

