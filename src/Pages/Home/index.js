import React from "react";
// import Carousel from "../../Components/Caraousel";
import ReactGA from "react-ga";
import "./pages.scss";

import colorTheme from "../../Components/colorTheme";
import { useThemeContext, useLoadContext } from "../../Context";
import Popup from "../Popup";

import { data } from "./data";
import Card from "./card";

/** Home page */
function Index() {
  ReactGA.pageview("/");
  const theme = colorTheme();
  const [{ Home }] = useThemeContext();
  const [{ poped }] = useLoadContext();
  const icons = Home === "Icons" ? true : false;
  let user_data = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ color: theme.primary }} className="Main">
      <div className="Home_page">
        {!user_data && poped && <Popup />}
        <br/>
        <div className="Pages1">
          {data.map((card_data, i) => (
            <Card
              key={i}
              data={card_data}
              icons={icons}
              theme={theme}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
