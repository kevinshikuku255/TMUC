import React from 'react';
import {useHistory} from"react-router-dom";
import ReactGA from 'react-ga';
import { useLoadDispatch } from '../../Context/loading';
import { MoreVert} from '@material-ui/icons';
import "./more.scss";
import { Avatar, makeStyles, Badge} from "@material-ui/core";
import { YouTube } from "@material-ui/icons";
import Iconic from "../../Images/iconic.jpg";
import Babafemi from "../../Images/Babfemi.jpg";
import Collo from "../../Images/collo.jpg";
import Kenyanboy from "../../Images/kenyanboy.jpeg";
import Magicdee from "../../Images/magicdee.jpeg";
import Kingslay from "../../Images/kingslay.jpeg";
import Sotmuc from "../../Images/sot.jpeg";
import Portus from "../../Images/portus.jpeg";
import J_se from "../../Images/jose.jpeg";
import Fteam from "../../Images/ball.jpeg";
import Cu from "../../Images/cu.jpeg";
import Boke from "../../Images/Boke.jpg";
import Lameki from "../../Images/Lameki.jpg";

import DetailInfo from "../../Components/Details.json";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize:"1px",
    borderRadius:"0px",
    "&:hover":{
      boxShadow: "0 0 15px blue, 0 0 40px rgb(255, 0, 234), 0 0 4px blueviolet"
    }
  },
 img: {
   borderRadius:"0px",
   borderBottom:"1px solid gray",
   width:"99vw",
   margin:"auto",
   paddingTop:"3%",
   height:"auto",
 }
}));

function Person() {
const history = useHistory();
const handleClick = (name) => {
    ReactGA.event({
          category:"Student Celeb",
          action:"clicked",
          transport:"beacon",
          label:{name},
        })}
   const dispatch = useLoadDispatch();

   const clickHandler = (name) => {
     dispatch({
       type: "OFFLOAD",
       payload: false
     })
     history.push(`activities/${name}`)
     handleClick(name)
   }

   const groupHandler = (name) => {
     dispatch({
       type: "OFFLOAD",
       payload: false
     })
     history.push(`/${name}`)
     handleClick(name)
   }

  const classes = useStyles();

  return (
<div className="CWrapper">

        <div  className="Ccategory">
           <div className="Cleadership">
             <div className="Cp">
                     <Avatar
                     onClick={() => groupHandler("Sotmuc")}
                     alt="Sotmuc" src={Sotmuc} className={classes.img} />
             </div>
           </div>
           <div className="Cleadership">
             <div className="Cp">
                     <Avatar
                     onClick={() => groupHandler("Cu")}
                     alt="Cu" src={Cu} className={classes.img} />
             </div>
           </div>
           <div className="Cleadership">
             <div>
                    <Avatar
                    onClick={() => groupHandler("Football")}
                    alt="Football" src={Fteam} className={classes.img}/>
            </div>
           </div>
        </div>

{/* /* -------------------------------------------------------------------------- */}
     <div className="Ccategory">
        <h3 className="CTagline">Music</h3> <br/>

        <>
        <div className="Celebrity" onClick={() => clickHandler("Kingslay")}>
            <div className="CelebrityDetails">
                <Avatar alt="Kingslay" src={Kingslay} className={classes.large}/>
              <div className="CelebrityName">
                  <p> <b>Genre</b> {DetailInfo?.Kingslay?.Genre}</p>
                  <p> <b>Youtube:</b> {DetailInfo?.Kingslay?.Youtubechannel}</p>
                  <a href={DetailInfo?.Kingslay?.Youtube}> <YouTube className="Youtube"/> </a>
              </div>
            </div>
            <div className="CelebrityAction">
              <MoreVert/>
            </div>
        </div>
        <div className="Celebrity" onClick={() => clickHandler("Magicdee")}>
            <div className="CelebrityDetails">
                <Avatar alt="Magicdee" src={Magicdee} className={classes.large}/>
              <div className="CelebrityName">
                  <p> <b>Genre</b> {DetailInfo?.Magicdee?.Genre}</p>
                  <p> <b>Youtube:</b> {DetailInfo?.Magicdee?.Youtubechannel}</p>
                  <a href={DetailInfo?.Magicdee?.Youtube}> <YouTube className="Youtube"/> </a>
              </div>
            </div>
            <div className="CelebrityAction">
              <MoreVert/>
            </div>
        </div>
        <div className="Celebrity" onClick={() => clickHandler("Iconic")}>
            <div className="CelebrityDetails">
                <Avatar alt="Iconic" src={Iconic} className={classes.large}/>
              <div className="CelebrityName">
                  <p> <b>Genre</b> {DetailInfo?.Iconic?.Genre}</p>
                  <p> <b>Youtube:</b> {DetailInfo?.Iconic?.Youtubechannel}</p>
                  <a href={DetailInfo?.Iconic?.Youtube}> <YouTube className="Youtube"/> </a>
              </div>
            </div>
            <div className="CelebrityAction">
              <MoreVert/>
            </div>
        </div>
        <div className="Celebrity" onClick={() => clickHandler("Lilian_Boke")}>
            <div className="CelebrityDetails">
                <Avatar alt="Lilian_Boke" src={Boke} className={classes.large}/>
              <div className="CelebrityName">
                  <p> <b>Genre</b> {DetailInfo?.Lilian_Boke?.Genre}</p>
                  <p> <b>Youtube:</b> {DetailInfo?.Lilian_Boke?.Youtubechannel}</p>
                  <a href={DetailInfo?.Lilian_Boke?.Youtube}> <YouTube className="Youtube"/> </a>
              </div>
            </div>
            <div className="CelebrityAction">
              <MoreVert/>
            </div>
        </div>
        <div className="Celebrity" onClick={() => clickHandler("Lameki")}>
            <div className="CelebrityDetails">
                <Avatar alt="Iconic" src={Lameki} className={classes.large}/>
              <div className="CelebrityName">
                  <p> <b>Genre</b> {DetailInfo?.Lameki?.Genre}</p>
                  <p> <b>Youtube:</b> {DetailInfo?.Lameki?.Youtubechannel}</p>
                  <a href={DetailInfo?.Lameki?.Youtube}> <YouTube className="Youtube"/> </a>
              </div>
            </div>
            <div className="CelebrityAction">
              <MoreVert/>
            </div>
        </div>
        <div className="Celebrity" onClick={() => clickHandler("J_se911")}>
            <div className="CelebrityDetails">
                <Avatar alt="J_se911" src={J_se} className={classes.large}/>
              <div className="CelebrityName">
                  <p> <b>Genre:</b> Dancer </p>
                  <p> <b>Youtube:</b> {DetailInfo?.J_se?.Youtubechannel}</p>
                  <a href={DetailInfo?.J_se?.Youtube}> <YouTube className="Youtube"/> </a>
              </div>
            </div>
            <div className="CelebrityAction">
              <MoreVert/>
            </div>
        </div>
        </>
     </div>









        <div className="Ccategory">
          <h3 className="CTagline">Comedy</h3> <br/>
          <div className="Ccomedy">
              <div className="Cp">
                <Avatar
                onClick={() => clickHandler("Portus")}
                alt="Portus" src={Portus} className={classes.large} />
                  <b>Portus</b>
              </div>
              <div className="Cp">
                  <Avatar
                  onClick={() => clickHandler("Kenyanboy")}
                  alt="kenyanboy" src={Kenyanboy} className={classes.large}/>
                <b>KenyanBoy254</b>
              </div>
          </div>
        </div>

        <hr/>
      <div className="Ccategory">
        <div className="Cmusic">
            <div className="Cp">
              <Badge badgeContent={"MC"} color="secondary">
                 <Avatar
                 onClick={() => clickHandler("Mc_Collo")}
                 alt="Collo" src={Collo} className={classes.large}/>
              </Badge>
                <b>MC Collo</b>
            </div>
            <div className="Cp">
            <Badge badgeContent={"Politics"} color="secondary">
                 <Avatar
                 onClick={() => clickHandler("Babafemi")}
                 alt="Babafemi" src={Babafemi} className={classes.large}/>
            </Badge>
              <b>Baba femi</b>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Person;
