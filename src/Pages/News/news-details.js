import React, { useEffect } from "react";
import "./styles.scss";
import { currentDate } from "../../Utils/date";
import { useLocation } from "react-router-dom";
import Icon from "../../Images/favicon.png";
import Fresher from "../../Images/Fresher.jpg";
import Club from "../../Images/club.jfif";
import Ball from "../../Images/ball.jpeg";
/** Post component */
const Post = () => {
  const location = useLocation();
  const data = JSON.parse(localStorage.getItem("news"));
  let mess = (
    <span>
      <b>
        Starting life at university must sound very exciting for you right now.
      </b>
      <br />
      <br />
      <b>SETTING IN AND MEETING NEW PEOPLE:</b> <br />
      The Freshers’ Week (and the month after) is all about settling in and
      finding your own place. <br /> The truth is, this can be overwhelming,
      especially for those who have never lived away from home. You will meet so
      many people that you will soon learn to automatically chuck out questions
      like: “What’s your name?”, “Where are you from?”, “What course are you
      doing?” and “How are you enjoying Freshers?” <br /> You will never see
      many of these faces again during the next three years, but equally, some
      friendships made during this time can last a lifetime. Soon you will get
      the grip of university life and will not want to go back again." <br />
      <br />
      <img alt="freshers" src={Club} width="98%" style={{ margin: "auto" }} />
      <br />
      <br />
      <b>STUDY TIME:</b> <br />
      Attending lectures will be exciting at the beginning, but amidst your
      hectic life as a fresher, you will find yourself missing a few very soon.
      Doing work didn’t even cross my mind until tutorials started to kick in.
      Another thing to watch out for is your city’s students’ nights. The
      students’ nights at Bristol were annoyingly on Mondays, which mean I
      tended not to be very productive during busy Tuesdays. Some of you may
      think that studying during the first year doesn’t really matter as you
      only need to pass, but let me reassure you that the foundation you build
      during the first year will massively help subsequent years. Furthermore,
      getting good results in the first year is essential for internship
      applications in the second year. So while you are having fun, don’t forget
      about your long-term prospect and the main reason you came to university.
      <br />
      <br />
      <b>GETTING INVOLVED:</b> <br />
      The new start is also the biggest opportunity for you to discover
      yourself, find new hobbies and get involved in different societies. It is
      also good if you want to diversify your friends circle (at the end of the
      day, you will be fed up with talking about your modules). <br /> The
      advice here is again to be cautious. Most societies will charge you a
      membership fee (even those that don’t will end up spamming you with their
      weekly emails). Join societies you are truly interested in and think you
      will be able to commit to for the whole four years.
      <br />
      <br />
      <img alt="freshers" src={Ball} width="98%" style={{ margin: "auto" }} />
      All in all, being a fresher is an amazing experience. Make sure you make
      the most out of it.
      <br />
      <br />
    </span>
  );


    let cc = {
      __typename: "Detail",
      headline: "You have embarked on a journey to persue your career...",
      image: Fresher,
      images: "",
      link: "https://artsandculture.google.com/story/zAURDy0QHvRyJg",
      message: mess,
      timeStamp: "1659484800",
    };

  console.log(cc)
    // data.splice(0, 0, cc);

  let path = location.pathname;
  let index = parseInt(path.substring(path.indexOf("s") + 1).replace("/", ""));

  const { headline, message, image, timeStamp, images, link } = data[index];

  let _image = image.split(".")[2] === "keundefined" ? Icon : image;

  let imgs = images !== "" && images.split(",");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-details">
      <div>
        {!imgs && <img src={_image} alt={headline} className={"image"} />}
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
