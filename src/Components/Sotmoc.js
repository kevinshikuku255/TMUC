import React from 'react';
import "./components.scss";
import { useHistory} from"react-router-dom";
import ReactGA from 'react-ga';
import { useLoadDispatch } from '../Context/loading';
import { Avatar, makeStyles} from "@material-ui/core";
import Nav from "./Nav";

import Asa from "../Images/Asa.jpg";
import Dama from "../Images/Dama.jpg";
import Deric from "../Images/deric.jpg";
import Sec from "../Images/sec.jpg";
import Mercy from "../Images/Mercy.jpg";
import Gitonga from "../Images/gitonga.png";
import Kevin from "../Images/kevo.jpg";
import Other from "../Images/Other.jpeg";
import Evans from "../Images/Evans.jpeg";
import Kendi from "../Images/Kendi.jpg";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor:"wheat",
    "&:hover":{
      boxShadow: "0 0 15px red, 0 0 40px rgb(255, 0, 234), 0 0 4px blueviolet"
    }
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    "&:hover":{
      boxShadow: "0 0 15px blue, 0 0 40px rgb(255, 0, 234), 0 0 4px blueviolet"
    }
  },
  gitonga:{
     width:"97%",
     height:"auto",
     margin:"auto",
     borderRadius:"3px",
  }
}));



function Sotmoc() {
  const classes = useStyles();
  const history = useHistory();

const handleClick = (name) => {
    ReactGA.event({
          category:"SOTMUC",
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
     history.push(`/activities/${name}`)
     handleClick(name)
   }


let head = (
         <>
          <p>Student Organisation </p>
          <p>of Tom Mboya University College </p>
          <p>(SOTMUC)</p>
         </>
        )



  return (
<div className="SotmucWrapper">
    <Nav head={head}/>
    <div className="Sotmuc">
        <br/> <br/>
        <h3>2020 -- TO DATE</h3>
        <div className="Leaders1819">
            <div>
              <Avatar alt="Asa" src={"CM"} className={classes.small}/>
              <b>C.M.</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
                <Avatar
                onClick={() => clickHandler("Clinton")}
                alt="Asa" src={Sec} className={classes.small}/>
              <b>Clinton</b>
            </div>
            <div>
              <Avatar alt="Asa" src={"Sec"} className={classes.small}/>
              <b>V.C.</b>
            </div>
            <div>
              <Avatar alt="Asa" src={"Sec"} className={classes.small}/>
              <b>T.R</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
              <Avatar alt="Asa" src={"Sec"} className={classes.small}/>
              <b>A.R.</b>
            </div>
            <div>
              <Avatar alt="Kendi" src={Kendi} className={classes.small}/>
              <b>P.W.D.</b>
            </div>
            <div>
              <Avatar alt="Asa" src={"Sec"} className={classes.small}/>
              <b>Sports</b>
            </div>
        </div>

      <hr/>

        <h3>2019 - 2020</h3> <br/>
        <div className="Leaders1819">
            <div>
                 <Avatar
                 onClick={() => clickHandler("Dama")}
                 alt="Damaries" src={Dama} className={classes.large}/>
                <b>Damaries</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
                 <Avatar
                 onClick={() => clickHandler("Deric")}
                 alt="Deric" src={Deric} className={classes.large}/>
                <b>Deric</b>
            </div>
            <div>
                 <Avatar
                 onClick={() => clickHandler("Asa")}
                 alt="Asa" src={Asa} className={classes.large}/>
              <b>Asa</b>
            </div>
            <div>
                <Avatar
                onClick={() => clickHandler("Mercy")}
                alt="Mercy" src={Mercy} className={classes.large}/>
              <b>Mercy</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
                <Avatar
                onClick={() => clickHandler("Kevin")}
                alt="kevin" src={Kevin} className={classes.large}/>
              <b>Kevin</b>
            </div>
            <div>

                <Avatar
                onClick={() => clickHandler("Evans")}
                alt="Evans" src={Evans} className={classes.large}/>
              <b>Evans</b>
            </div>
            <div>
              <Avatar
              onClick={() => clickHandler("Other")}
              alt="Other" src={Other} className={classes.large}/>
              <b>""</b>
            </div>
        </div>

        <hr/>

        <h3>2017 - 2018</h3> <br/>
        <div className="Leaders1718">
          <Avatar src={Gitonga} className={classes.gitonga}/>
        </div>

{/* /* -------------------------------------------------------------------------- */}
    </div>
</div>
  )
}

export default Sotmoc
