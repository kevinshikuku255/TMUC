import "./components.css";
import { Avatar, makeStyles } from "@material-ui/core";
import Logo from "../Images/favicon.png";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  }
}));




function Head() {
  const classes = useStyles();
  return (
    <div className="Head">
      <div className="Logo">
        <Avatar src={Logo} className={classes.small}/>
      </div>
      <div  className="Name">
        <h2>tom mboya</h2>
        <hr/>
        <h4>university college</h4>
      </div>
    </div>
  )
}

export default Head
