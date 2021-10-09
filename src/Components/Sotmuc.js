import React from 'react';
import "./components.scss";
import ReactGA from 'react-ga';
import { useHistory} from"react-router-dom";
import { useLoadContext } from '../Context';
import { Avatar, makeStyles} from "@material-ui/core";
import Nav from "./Nav";

import Asa from "../Images/Asa.jpg";
import Sec from "../Images/sec.jpg";
import Dama from "../Images/Dama.jpg";
import Kevin from "../Images/kevo.jpg";
import Mercy from "../Images/Mercy.jpg";
import Kendi from "../Images/Kendi.jpg";
import Deric from "../Images/deric.jpg";
import Other from "../Images/Other.jpeg";
import Evans from "../Images/Evans.jpeg";
import Gitonga from "../Images/gitonga.png";

const useStyles = makeStyles((theme) => ({
  img: {
    width: theme.spacing(9.2),
    height: theme.spacing(10),
    borderRadius:"1px",
    backgroundColor:"wheat",
  },
  gitonga:{
     width:"97%",
     height:"auto",
     margin:"auto",
     paddingBottom:"1rem",
     borderRadius:"3px",
  }
}));



function Sotmoc() {
  const classes = useStyles();
  const history = useHistory();
  ReactGA.pageview(window.location.pathname);

  const [ ,dispatch ] = useLoadContext();

  const clickHandler = (name) => {
     dispatch({
       type: "OFFLOAD",
       payload: false
     })
     history.push(`/activities/${name}`)
   }


let head = (
         <>
          <p>Student Organisation </p>
          <p>of Tom Mboya University College </p>
          <p>(SOTMUC)</p>
         </>
        )



  return (
<div className="SotmucGrid">
    <Nav head={head}/>
    <div className="SotmucGridWrapper">
         <hr/>
         <p>2020 - todate</p>
         <div className="SotmucGridContainer">
              <div className="sotmucMember" style={{opacity:0}}> 1 </div>
              <div className="sotmucMember">
                 <Avatar  className={classes.img}/>
              </div>
              <div className="sotmucMember" style={{opacity:0}}> 3 </div>
              <div className="sotmucMember">
                 <Avatar
                  onClick={() => clickHandler("Clinton")}
                  alt="Asa" src={Sec} className={classes.img}/>
              </div>
              <div className="sotmucMember"> <Avatar  className={classes.img}/> </div>
              <div className="sotmucMember"> <Avatar  className={classes.img}/> </div>
              <div className="sotmucMember"> <Avatar  className={classes.img}/> </div>
              <div className="sotmucMember"> <Avatar alt="Kendi" src={Kendi} className={classes.img}/> </div>
              <div className="sotmucMember"> <Avatar  className={classes.img}/> </div>
         </div>
         <hr/>
         <p>2019 - 2020</p>
         <div className="SotmucGridContainer">
              <div className="sotmucMember" style={{opacity:0}}> 1 </div>
              <div className="sotmucMember">
                 <Avatar
                    onClick={() => clickHandler("Dama")}
                    alt="Damaries" src={Dama} className={classes.img}/>
              </div>
              <div className="sotmucMember" style={{opacity:0}}> 3 </div>
              <div className="sotmucMember">
                 <Avatar
                    onClick={() => clickHandler("Deric")}
                    alt="Deric" src={Deric} className={classes.img}/>
              </div>
              <div className="sotmucMember">
                  <Avatar
                      onClick={() => clickHandler("Asa")}
                      alt="Asa" src={Asa} className={classes.img}/>
              </div>
              <div className="sotmucMember">
                  <Avatar
                      onClick={() => clickHandler("Mercy")}
                      alt="Mercy" src={Mercy} className={classes.img}/>
              </div>
              <div className="sotmucMember">
                  <Avatar
                      onClick={() => clickHandler("Kevin")}
                      alt="kevin" src={Kevin} className={classes.img}/>
              </div>
              <div className="sotmucMember">
                  <Avatar
                      onClick={() => clickHandler("Evans")}
                      alt="Evans" src={Evans} className={classes.img}/>
              </div>
              <div className="sotmucMember">
                    <Avatar
                    onClick={() => clickHandler("Other")}
                    alt="Other" src={Other} className={classes.img}/>
              </div>
         </div>
         <hr/>
    </div>
    <div>
      <h3>2017 - 2018</h3>
        <div >
          <Avatar src={Gitonga} className={classes.gitonga}/>
        </div>
    </div>
</div>
  )
}

export default Sotmoc
