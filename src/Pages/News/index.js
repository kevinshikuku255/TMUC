import React, { useEffect, useState } from "react";
import "./styles.scss";
import Loading from "../../Components/loading";
import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../../Graphql/posts";
import { currentDate } from "../../Utils/date";
import Avatar from "@mui/material/Avatar";
import Icon from "../../Images/favicon.png";
import { useHistory } from "react-router-dom";

/** News page */
export default function Home() {
  const skeleton = Array.from(Array(10).keys());
  const [news, setNews] = useState(JSON.parse(localStorage.getItem("news")));

  const { loading, error, data } = useQuery(GET_DETAILS, {
    onCompleted: ({ getDetails }) => {
      localStorage.setItem("news", JSON.stringify(getDetails));
    },
    // pollInterval: 500,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    let news = JSON.parse(localStorage.getItem("news")) || data?.getDetails;
    setNews(news);
  }, [data?.getDetails]);

  return (
    <div className={"news_feed"}>
      <main>
        {(loading || error) && news && <Loading />}

        {news &&
          news.map((news, i) => (
            <div key={i} className={"news_item"}>
              <Post data={news} index={i} />
            </div>
          ))}
        {(loading || error) &&
          !news &&
          skeleton.map((i) => <div key={i} style={{ margin: "20px" }}></div>)}
      </main>
    </div>
  );
}

/** Post component */
const Post = ({ data, index }) => {
  const { link, headline, image, ad, timeStamp } = data;
  const history = useHistory();

  return (
    <div>
      <div>
        {ad && <sup>Ad</sup>}
        <div className="action">
          <Avatar alt={link} src={Icon} />
          <div>
            <p>TMUN</p>
            <p style={{ fontSize: "xx-small" }}>@online_news_feed</p>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt={headline}
            className={"image"}
            width={400}
            height={300}
            onClick={() => history.push(`/News/${index}`)}
          />
        )}
      </div>
      <p className="headline">{headline} </p>
      <p className="date"> {`${currentDate(timeStamp)}`}</p>
      <br />
      <a className="meta" href={link} style={{ color: "blueviolet" }}>
        Read more ...
      </a>
    </div>
  );
};
