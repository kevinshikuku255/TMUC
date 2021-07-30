import React from 'react';
import "./components.css";
import { Avatar, makeStyles} from "@material-ui/core";
import { useHistory } from 'react-router';
import Nav from "./Nav";

import Asa from "../Images/Asa.jpg";
import Dama from "../Images/Dama.jpg";
import Deric from "../Images/deric.jpg";
import Sec from "../Images/sec.jpg";
import Mercy from "../Images/Mercy.jpg";
import Gitonga from "../Images/gitonga.png"

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  gitonga:{
    width: theme.spacing(13),
    height: theme.spacing(13),
    borderRadius:"0",
  }
}));

function Sotmoc() {
  const history = useHistory();
  const classes = useStyles();
  return (
<div className="SotmucWrapper">
    <Nav/>
    <div className="Sotmuc">
      <h3>Sotmuc 2017 - 2018</h3>
      <div className="Leaders1718">
         <Avatar src={Gitonga}
            onClick={() => history.push("/sotmuc/2016")}
            className={classes.gitonga}/>
      </div>
      <br/><br/>
        <h3>Sotmuc 2019 - 2020</h3> <br/>
        <div className="Leaders1819">
            <div>
              <Avatar
                    alt="Damaries"
                    src={Dama} className={classes.large}
                    onClick={() => history.push("/sotmuc/Dama")}/>
                <b>Damaries</b>
            </div>
            <div>
              <Avatar alt="Asa" src={Asa} className={classes.large} onClick={() => history.push("/sotmuc/Asa")}/>
              <b>Asa</b>
            </div>
        </div>
        <br/>
        <div className="Leaders1819">
            <div>
              <Avatar alt="Asa" src={Deric} className={classes.large} onClick={() => history.push("/sotmuc/Deric")} />
              <b>Deric</b>
            </div>
            <div>
              <Avatar alt="Asa" src={Mercy} className={classes.large} onClick={() => history.push("/sotmuc/Mercy")}/>
              <b>Mercy</b>
            </div>
        </div>
        <br/> <br/> <br/> <br/>

        <h3>Sotmuc 2020 -- </h3>
        <div className="Leaders1819">
            <div>
              <Avatar alt="Asa" src={Sec} className={classes.small} onClick={() => history.push("/sotmuc/Clinton")}/>
              <b>Clinton</b>
            </div>
        </div>
        <button onClick={() => history.goBack()}>Back</button>
    </div>
</div>
  )
}

export default Sotmoc
