import React, { useEffect, useRef } from "react";

import colorTheme from "../colorTheme";
import Logo from "../../Images/favicon.png";
import { useHistory } from "react-router-dom";
import { useLoadContext } from "../../Context";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: 0,
  },
}));

/** Menu  */
export default function AccountMenu({ menu_on }) {
  const ref = useRef();
  const theme = colorTheme();
  const history = useHistory();
  const classes = useStyles();
  const [, loadispatch] = useLoadContext();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (menu_on && ref.current && !ref.current.contains(e.target)) {
        loadispatch({ type: "MENU", payload: false });
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menu_on, loadispatch]);

  // Sharing the app link
  async function onShare() {
    const label = "T.M.U.C";
    const url = "https://tmuc.netlify.app";
    const text = "TMUC APP";
    try {
      await navigator.share({
        label,
        url,
        text,
      });
    } catch (err) {
      // the user cancels the action of sharing
      console.log("share canceled");
    }
  }

  return (
    <>
      {menu_on && (
        <div
          className="MenuWrapper"
          style={{ color: theme.primary }}
          ref={ref}
          onClick={() => loadispatch({ type: "MENU", payload: false })}
        >
          <div
            className="MenuItems"
            style={{ backgroundColor: theme.background, color: theme.primary }}
          >
            <p className="Logo">
              <a href="//ashoupsu.com/4/4950173">
                <Avatar src={Logo} className={classes.small} />
              </a>
            </p>
            <p className="MenuItem" onClick={() => history.push("/")}>
              ACADEMICS
            </p>
            <p className="MenuItem" onClick={() => history.push("/News")}>
              NEWS
            </p>
            <p
              className="MenuItem"
              onClick={() => history.push("/Studentcenter")}
            >
              STUDENT CENTER
            </p>
            <p className="MenuItem" onClick={() => history.push("/Sotmuc")}>
              SOTMUC
            </p>
            <p className="MenuItem" onClick={() => history.push("/CreatePost")}>
              PIN A POST
            </p>
            <p className="MenuItem" onClick={() => history.push("/Signup")}>
              SIGN-UP
            </p>

            <p className="MenuItem" onClick={onShare}>
              SHARE THIS APP
            </p>
            <p className="MenuItem" onClick={() => history.push("/Settings")}>
              SETTINGS
            </p>
            <p
              className="MenuItem"
              style={{ color: theme.link }}
              onClick={() => history.push("/Info")}
            >
              APP INFO
            </p>
          </div>
        </div>
      )}
    </>
  );
}
