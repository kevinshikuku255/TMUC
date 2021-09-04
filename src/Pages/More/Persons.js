import React from 'react';
import {Link} from"react-router-dom";
import ReactGA from 'react-ga';
import { useLoadDispatch } from '../../Context/loading';
import "./more.scss";
import { Avatar, makeStyles, Badge} from "@material-ui/core";
import { useHistory } from 'react-router';
import Iconic from "../../Images/iconic.jpg";
import Babafemi from "../../Images/Babfemi.jpg";
import Collo from "../../Images/collo.jpg";
import Kenyanboy from "../../Images/kenyanboy.jpeg";
import Magicdee from "../../Images/magicdee.jpeg";
import Kingslay from "../../Images/kingslay.jpeg";
import Sotmuc from "../../Images/sot.jpeg";
import Portus from "../../Images/portus.jpeg";
import J_se from "../../Images/jose.jpeg";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    fontSize:"1px",
    border:" 1px solid gray",
    "&:hover":{
      boxShadow: "0 0 15px blue, 0 0 40px rgb(255, 0, 234), 0 0 4px blueviolet"
    }
  }
}));

function Person() {
  const history = useHistory();

const handleClick = () => {
    ReactGA.event({
          category:"View",
          action:"clicked",
          transport:"beacon",
          label:"Sotmuc",
        })}
   const dispatch = useLoadDispatch();

   const clickHandler = () => {
     dispatch({
       type: "OFFLOAD",
       payload: false
     })
     handleClick()
   }

  const classes = useStyles();

  return (
<div className="CWrapper">

        <hr/>
        <div  className="Ccategory">
           <h3 className="CTagline">LEADERSHIP</h3> <br/>
           <div className="Cleadership">
             <div className="Cp">
                <Link onClick={clickHandler} to="/sotmuc">
                     <Avatar alt="Sotmuc" src={Sotmuc} className={classes.large} />
                </Link>
                <Link onClick={clickHandler} className="Csotmuc" to="/sotmuc">SOTMUC </Link>
             </div>

              {/* <div className="Cp">
                <Avatar alt="Wasike" src={"Wasike"} className={classes.large} />
                <b>Dean Wsike</b>
             </div> */}
           </div>
        </div>
        <hr/>
        <div className="Ccategory">
        <h2 className="CCTagline">ENTERTAINMENT</h2>
        <h3 className="CTagline">MUSIC</h3> <br/>
        <div className="Cmusic">
            <div className="Cp">
              <Avatar alt="Kingslay" src={Kingslay} className={classes.large} onClick={() => history.push("/c/Kingslay")}/>
                <b>KingSlay</b>
            </div>
            <div className="Cp">
              <Badge badgeContent={"Gospel"} color="secondary">
                 <Avatar alt="Magicdee" src={Magicdee} className={classes.large} onClick={() => history.push("/c/Magicdee")} />
              </Badge>
              <b>MagicDee</b>
            </div>
            <div className="Cp">
             <Avatar alt="Iconic" src={Iconic} className={classes.large} onClick={() => history.push("/c/Iconic")}/>
              <b>Iconic</b>
            </div>
        </div>
        </div>
        <hr/>
        <div className="Ccategory">
          <h3 className="CTagline">COMEDY</h3> <br/>
          <div className="Ccomedy">
              <div className="Cp">
                <Avatar alt="Portus" src={Portus} className={classes.large} onClick={() => history.push("/c/Portus")}/>
                  <b>Portus</b>
              </div>
              <div className="Cp">
                <Avatar alt="kenyanboy" src={Kenyanboy} className={classes.large} onClick={() => history.push("/c/Kenyanboy")}/>
                <b>KenyanBoy254</b>
              </div>
          </div>
        </div>

        <hr/>
      <div className="Ccategory">
        <div className="Cmusic">
            <div className="Cp">
              <Badge badgeContent={"MC"} color="secondary">
                 <Avatar alt="Collo" src={Collo} className={classes.large} onClick={() => history.push("/c/Collo")}/>
              </Badge>
                <b>MC Collo</b>
            </div>
            <div className="Cp">
            <Badge badgeContent={"Politics"} color="secondary">
               <Avatar alt="Babafemi" src={Babafemi} className={classes.large} onClick={() => history.push("/c/Babafemi")}/>
            </Badge>
              <b>Baba femi</b>
            </div>
            <div className="Cp">
              <Badge badgeContent={"Dancer"} color="secondary">
                 <Avatar alt="J_se" src={J_se} className={classes.large} onClick={() => history.push("/c/J_se911")}/>
              </Badge>
                <b>j_se911</b>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Person;
