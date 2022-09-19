import React, { useEffect, useState } from "react";
import "./styles.scss";
// import Loading from "../../Components/loading";
import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../../Graphql/posts";
import { currentDate } from "../../Utils/date";
import Avatar from "@mui/material/Avatar";
import Icon from "../../Images/favicon.png";
import Fresher from "../../Images/Fresher.jpg";
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
    let cc = {
      __typename: "Detail",
      headline:
        "WELCOME FRESHERS 2022/2023  Feel part of our great institution Tom Mboya University named after a Kenyan HERO. Read more about the history of our Legendary icon",
      image: Fresher,
      link: "https://tmuc.netlify.app/News/0",
      message: "You have embarked on a journey to persue your career.",
      timeStamp: "1661904000",
    };

    news.splice(0, 0, cc);
    setNews(news);
  }, [data?.getDetails]);

  return (
    <div className={"news_feed"}>
      <main>
        {/* {(loading || error) && news && <Loading />} */}

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

  let _image = image.split(".")[2] === "keundefined" ? Icon : image;
  const history = useHistory();

  return (
    <div>
      <div>
        {ad && <sup>Ad</sup>}
        <div className="action">
          <Avatar alt={link} src={Icon} />
          <div>
            <p>TMUS</p>
            <p style={{ fontSize: "xx-small" }}>@onlinenewsfeed</p>
          </div>
        </div>
        {image && (
          <img
            src={_image}
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
