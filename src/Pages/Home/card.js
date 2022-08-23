import React from "react";
import ReactGA from "react-ga";
import { useLoadContext } from "../../Context";
import "./pages.scss";

const handleClick = (lable) => {
  ReactGA.event({
    category: "Button",
    action: `clicked on ${lable}`,
    transport: "beacon",
    label: lable,
  });
};

/** Photos from google maps */
export default function Card({ data, icons, theme }) {
  const { name, Icon, href, class_name, p_class } = data;
  const [, dispatch] = useLoadContext();
  let user_data = JSON.parse(localStorage.getItem("user"));

    const clickHandler = (name) => {

    if (user_data !== null) {
      dispatch({
        type: "LOAD",
        payload: true,
      });
    }
    if (user_data === null) {
      dispatch({
        type: "POPED",
        payload: true,
      });
    }
    handleClick(name);
  };

  return (
    <div
      style={{ backgroundColor: !icons && theme.background }}
      className={class_name}
    >
      <a onClick={clickHandler} href={user_data ? href : null}>
        {icons && <Icon fontSize="large" />}
        <h4>{name}</h4>
        {!icons && <p className={p_class}>{name}</p>}
      </a>
    </div>
  );
}
