import React from 'react';
import {Link} from"react-router-dom";
import ReactGA from 'react-ga';
import { useLoadDispatch } from '../../Context/loading';
import "./more.scss";
import { Avatar, makeStyles, Badge} from "@material-ui/core";
import Iconic from "../../Images/iconic.jpg";
import Babafemi from "../../Images/Babfemi.jpg";
import Collo from "../../Images/collo.jpg";
import Kenyanboy from "../../Images/kenyanboy.jpeg";
import Magicdee from "../../Images/magicdee.jpeg";
import Kingslay from "../../Images/kingslay.jpeg";
import Sotmuc from "../../Images/sot.jpeg";
import Portus from "../../Images/portus.jpeg";
import J_se from "../../Images/jose.jpeg";
import Wasike from "../../Images/wasikeAv.jpg";
import Fteam from "../../Images/ball.jpeg";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    fontSize:"1px",
    border:" 1px solid gray",
    "&:hover":{
      boxShadow: "0 0 15px blue, 0 0 40px rgb(255, 0, 234), 0 0 4px blueviolet"
    }
  },
 team: {
   borderRadius:"0px",
   width:"97%",
   margin:"auto",
   paddingBottom:"3%",
   height:"auto"
 }
}));

function Person() {

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
     handleClick(name)
   }

  const classes = useStyles();

  return (
<div className="CWrapper">

        <hr/>
        <div  className="Ccategory">
           <h3 className="CTagline">LEADERSHIP</h3> <br/>
           <div className="Cleadership">
             <div className="Cp">
                <Link onClick={() => clickHandler("Sotmuc")} to="/sotmuc">
                     <Avatar alt="Sotmuc" src={Sotmuc} className={classes.large} />
                </Link>
                <Link onClick={clickHandler} className="Csotmuc" to="/sotmuc">SOTMUC </Link>
             </div>

              <div className="Cp">
                <Link onClick={clickHandler} className="Csotmuc" to="/c/Wasike">
                    <Avatar alt="Wasike" src={Wasike} className={classes.large} />
                </Link>
                <b>Dean Wsike</b>
             </div>
           </div>
        </div>
        <hr/>
        <div className="Ccategory">
        <h2 className="CCTagline">ENTERTAINMENT</h2>
        <h3 className="CTagline">MUSIC</h3> <br/>
        <div className="Cmusic">
            <div className="Cp">
              <Link onClick={() => clickHandler("Kingslay")} to="/c/Kingslay">
                  <Avatar alt="Kingslay" src={Kingslay} className={classes.large}/>
              </Link>
                <b>KingSlay</b>
            </div>
            <div className="Cp">
              <Badge badgeContent={"Gospel"} color="secondary">
                 <Link onClick={() => clickHandler("Magicdee")} to="/c/Magicdee">
                  <Avatar alt="Magicdee" src={Magicdee} className={classes.large}/>
                 </Link>
              </Badge>
              <b>MagicDee</b>
            </div>
            <div className="Cp">
             <Link onClick={() => clickHandler("Iconic")} to="/c/Iconic">
               <Avatar alt="Iconic" src={Iconic} className={classes.large}/>
             </Link>
              <b>Iconic</b>
            </div>
        </div>
        </div>
        <hr/>
        <div className="Ccategory">
          <h3 className="CTagline">COMEDY</h3> <br/>
          <div className="Ccomedy">
              <div className="Cp">
                 <Link onClick={() => clickHandler("Portus")} to="/c/Portus">
                <Avatar alt="Portus" src={Portus} className={classes.large} />
                </Link>
                  <b>Portus</b>
              </div>
              <div className="Cp">
                <Link onClick={() => clickHandler("Kenyanboy")} to="/c/Kenyanboy">
                  <Avatar alt="kenyanboy" src={Kenyanboy} className={classes.large}/>
                </Link>
                <b>KenyanBoy254</b>
              </div>
          </div>
        </div>

        <hr/>
      <div className="Ccategory">
        <div className="Cmusic">
            <div className="Cp">
              <Badge badgeContent={"MC"} color="secondary">
                <Link onClick={() => clickHandler("Mc Collo")} to="/c/Collo">
                 <Avatar alt="Collo" src={Collo} className={classes.large}/>
                </Link>
              </Badge>
                <b>MC Collo</b>
            </div>
            <div className="Cp">
            <Badge badgeContent={"Politics"} color="secondary">
               <Link onClick={() => clickHandler("Babafemi")} to="/c/Babafemi">
                 <Avatar alt="Babafemi" src={Babafemi} className={classes.large}/>
               </Link>
            </Badge>
              <b>Baba femi</b>
            </div>
            <div className="Cp">
              <Badge badgeContent={"Dancer"} color="secondary">
                <Link onClick={() => clickHandler("J_se911")} to="/c/J_se911">
                   <Avatar alt="J_se" src={J_se} className={classes.large}/>
                 </Link>
              </Badge>
                <b>j_se911</b>
            </div>
        </div>
        </div>
        <hr/>
<div className="Ccategory">
        <div >
            <div>
                <Link onClick={() => clickHandler("Mc Collo")} to="/c/Fteam">
                 <Avatar alt="Collo" src={Fteam} className={classes.team}/>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Person;
