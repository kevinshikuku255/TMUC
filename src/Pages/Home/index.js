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

        <div class="waviy">
          <span style={{ "--i": 1 }}>W</span>
          <span style={{ "--i": 2 }}>E</span>
          <span style={{ "--i": 3 }}>L</span>
          <span style={{ "--i": 4 }}>C</span>
          <span style={{ "--i": 5 }}>O</span>
          <span style={{ "--i": 6 }}>M</span>
          <span style={{ "--i": 7 }}>E</span>
          <span style={{ "--i": 1 }}>__</span>
          <span style={{ "--i": 1 }}>F</span>
          <span style={{ "--i": 2 }}>R</span>
          <span style={{ "--i": 3 }}>E</span>
          <span style={{ "--i": 4 }}>S</span>
          <span style={{ "--i": 5 }}>H</span>
          <span style={{ "--i": 6 }}>E</span>
          <span style={{ "--i": 7 }}>R</span>
          <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>__</span>
          <span style={{ "--i": 3 }}>2</span>
          <span style={{ "--i": 4 }}>2</span>
          <span style={{ "--i": 5 }}>/</span>
          <span style={{ "--i": 6 }}>2</span>
          <span style={{ "--i": 7 }}>3</span>
        </div>

        <br />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4273430518311882"
          crossorigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{display:"block"}}
          data-ad-client="ca-pub-4273430518311882"
          data-ad-slot="5742271212"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

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
