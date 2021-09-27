import React from 'react';
import ReactGA from 'react-ga';
import { makeStyles} from "@material-ui/core";
import Image from 'material-ui-image'
import Nav from "../../Components/Nav";
import Fteam from "../../Images/ball.jpeg";
import Fteampic2 from "../../Images/ball2.jpeg";
import Fteampic3 from "../../Images/ball3.jpeg";
import Fteampic4 from "../../Images/ball4.jpeg";
import Fteampic5 from "../../Images/ball5.jpeg";

const useStyles = makeStyles((theme) => ({
  teamgrid:{
  // paddingTop:"1rem",
 }
}));

let head = (
  <>
   <p>Tom Mboya University College </p><p>  Football Club <sub>since 2017</sub></p>
  </>
)

function Football() {
  ReactGA.pageview('/Football');
  const classes = useStyles()
  return (
    <div className="Ftwarapper">
      <Nav head={head}/>
      <div className={classes.teamgrid}>
        <Image src={Fteam}  animationDuration="3000" aspectRatio="(1/.6)"/>
        <Image src={Fteampic2} animationDuration="3000" aspectRatio="(1/.6)"/>
        <Image src={Fteampic3} animationDuration="3000" aspectRatio="(1/.6)"/>
        <Image src={Fteampic4} animationDuration="3000" aspectRatio="(1/1.3)"/>
        <Image src={Fteampic5} animationDuration="3000" aspectRatio="(1/.6)"/>
      </div>
    </div>
  )
}

export default Football
