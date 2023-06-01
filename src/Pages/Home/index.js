import React from "react";
// import Carousel from "../../Components/Caraousel";
import ReactGA from "react-ga";
import "./pages.scss";

import colorTheme from "../../Components/colorTheme";
import { useThemeContext } from "../../Context";

import { data } from "./data";
import Card from "./card";

/** Home page */
function Index() {
  ReactGA.pageview("/");
  const theme = colorTheme();
  const [{ Home }] = useThemeContext();
  const icons = Home === "Icons" ? true : false;

  return (
    <div style={{ color: theme.primary }} className="Main">
      <div className="Home_page">
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
