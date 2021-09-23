import React from 'react';
import { Avatar, makeStyles} from "@material-ui/core";
import {ThumbUp } from "@material-ui/icons"
import "./news.scss";

import Img from "../../Images/sot.jpeg";

const useStyles = makeStyles((theme) => ({
avator:{
  borderBottom:"2px solid white",
},
 image: {
   borderRadius:"5px",
   width:"98%",
   height: theme.spacing(18),
   margin:"auto",
 }
}));


/** News component */
function Index() {
  const classes = useStyles();
  return (
    <div className="Wrapper">
      <div className="News">
            <div className="NewsHead">
              <div><Avatar className={classes.avator}/></div>
              <div className="PublisherDetails">
                  <p>SOTMUC</p>
                  <p>Student organisation of TMUC</p>
              </div>
            </div>

            <div className="NewsBody">
              <p> This is a new channel where communications and updates will be conveyed. Updates coming soon... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat? Vitae modi dolor harum labore quas. Harum in aperiam molestiae saepe  doloremque corporis, harum dolore vel laudantium sed? Itaque ipsa ipsam sequi.</p>
              <div>
                 <Avatar src={Img} className={classes.image}/>
              </div>
            </div>

            <div className="NewsActions">
               <ThumbUp/>
               <p>22/09/2021</p>
            </div>
        </div>
        <div className="News">
            <div className="NewsHead">
              <div><Avatar className={classes.avator}/></div>
              <div className="PublisherDetails">
                  <p>Name</p>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="NewsBody">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat? Vitae modi dolor harum labore quas. Harum in aperiam molestiae saepe fuga odit amet ipsa autem obcaecati deserunt, earum quae asperiores? Numquam doloribus dolores voluptatibus. Rem minima officiis dolores doloremque corporis, harum dolore vel laudantium sed? Itaque ipsa ipsam sequi.</p>
            </div>

            <div className="NewsActions">
               <ThumbUp/>
               <p>22/09/2021</p>
            </div>
        </div>
        <div className="News">
            <div className="NewsHead">
              <div><Avatar className={classes.avator}/></div>
              <div className="PublisherDetails">
                  <p>Name</p>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="NewsBody">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat? Vitae modi dolor harum labore quas. Harum in aperiam molestiae  officiis dolores doloremque corporis, harum dolore vel laudantium sed? Itaque ipsa ipsam sequi.</p>
            </div>

            <div className="NewsActions">
               <ThumbUp/>
               <p>20/09/2021</p>
            </div>
        </div>
    </div>

  )
}

export default Index
