import React from 'react';
import {useHistory} from"react-router-dom";
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
import Fteam from "../../Images/ball.jpeg";
import Cu from "../../Images/cu.jpeg";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    fontSize:"1px",
    borderRadius:"10px",
    border:" 1px solid #80808088",
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
     console.log(name)
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
     <div className="Ccategory">
        <h3 className="CTagline">Music</h3> <br/>
        <div className="Cmusic">
            <div className="Cp">
                  <Avatar
                  onClick={() => clickHandler("Kingslay")}
                  alt="Kingslay" src={Kingslay} className={classes.large}/>
                <b>KingSlay</b>
            </div>
            <div className="Cp">
                  <Avatar
                  onClick={() => clickHandler("Magicdee")}
                  alt="Magicdee" src={Magicdee} className={classes.large}/>
              <b>MagicDee</b>
            </div>
            <div className="Cp">
               <Avatar
               onClick={() => clickHandler("Iconic")}
               alt="Iconic" src={Iconic} className={classes.large}/>
              <b>Iconic</b>
            </div>

        </div>
        <br/>
        <div className="Cmusic">
            {/* <div className="Cp">
                  <Avatar
                  onClick={() => clickHandler("Lilian_Boke")}
                  alt="Kingslay" src={Kingslay} className={classes.large}/>
                <b>Lilian Boke</b>
            </div>
            <div className="Cp">
                  <Avatar
                  onClick={() => clickHandler("Gidy")}
                  alt="Magicdee" src={Magicdee} className={classes.large}/>
              <b>Gidy Matum</b>
            </div>
            <div className="Cp">
               <Avatar
               onClick={() => clickHandler("Lameki")}
               alt="Iconic" src={Iconic} className={classes.large}/>
              <b>Lameki</b>
            </div> */}
        </div>
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
            <div className="Cp">
              <Badge badgeContent={"Dancer"} color="secondary">
                   <Avatar
                   onClick={() => clickHandler("J_se911")}
                   alt="J_se" src={J_se} className={classes.large}/>
              </Badge>
                <b>j_se911</b>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Person;
