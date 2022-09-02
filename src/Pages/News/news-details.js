import React, { useEffect } from "react";
import "./styles.scss";
import { currentDate } from "../../Utils/date";
import { useLocation } from "react-router-dom";

/** Post component */
const Post = () => {
  const location = useLocation();
  const data = JSON.parse(localStorage.getItem("news"));

    let cc = {
      __typename: "Detail",
      headline: "You have embarked on a journey to persue your career...",
      image: "http://blogs.iiit.ac.in/wp-content/uploads/2018/08/fresher.png",
      images: "",
      link: "https://artsandculture.google.com/story/zAURDy0QHvRyJg",
      message:
        "Feel part of our great institution Tom Mboya University named after a Kenyan HERO. Read more about the history of our Legendary icon",
      timeStamp: "1659484800",
    };

    data.splice(0, 0, cc);

  let path = location.pathname;
  let index = parseInt(path.substring(path.indexOf("s") + 1).replace("/", ""));

  const { headline, message, image, timeStamp, images, link } = data[index];

  let imgs = images !== "" && images.split(",");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-details">
      <div>
        {!imgs && <img src={image} alt={headline} className={"image"} />}
      </div>
      <p className="date"> {`${currentDate(timeStamp)}`}</p>
      <p className="headline">{headline} </p>
      <br />
      <p className="message">{message}</p>
      <a href={link} style={{color:"blue"}}>Read more ...</a>
      {imgs &&
        imgs.map((image, i) => (
          <div key={i}>
            <Image image={`https://tmuc.ac.ke${image}`} />
          </div>
        ))}
    </div>
  );
};

export default Post;

const Image = ({ image }) => {
  return (
    <img
      src={image}
      alt="tmu"
      className={"image"}
      // width={400}
    />
  );
};
