import React from 'react';
import "./components.scss";
import {Link} from"react-router-dom";
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
              <Link onClick={() => clickHandler("Clinton")} to="/c/Clinton">
                <Avatar alt="Asa" src={Sec} className={classes.small}/>
              </Link>
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
              <Avatar alt="Asa" src={"Sec"} className={classes.small}/>
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
              <Link onClick={() => clickHandler("Dama")} to="/c/Dama">
                 <Avatar alt="Damaries" src={Dama} className={classes.large}/>
              </Link>
                <b>Damaries</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
              <Link onClick={() => clickHandler("Deric")} to="/c/Deric">
                 <Avatar alt="Deric" src={Deric} className={classes.large}/>
              </Link>
                <b>Deric</b>
            </div>
            <div>
              <Link onClick={() => clickHandler("Asa")} to="/c/Asa">
                 <Avatar alt="Asa" src={Asa} className={classes.large}/>
              </Link>
              <b>Asa</b>
            </div>
            <div>
              <Link onClick={() => clickHandler("Mercy")} to="/c/Mercy">
                <Avatar alt="Mercy" src={Mercy} className={classes.large}/>
              </Link>
              <b>Mercy</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
              <Link onClick={() => clickHandler("Kevin")} to="/c/Kevin">
                <Avatar alt="kevin" src={Kevin} className={classes.large}/>
              </Link>
              <b>Kevin</b>
            </div>
            <div>
                <Avatar alt="Asa" src={"Asa"} className={classes.large}/>
              <b>""</b>
            </div>
            <div>
              <Avatar alt="Asa" src={"Asa"} className={classes.large}/>
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
