import React, { useEffect, useState}   from 'react';
import './styles.scss';
import Loading from "../../Components/loading";
import { useQuery } from "@apollo/client"
import { GET_DETAILS  } from "../../Graphql/posts";
import { currentDate } from "../../Utils/date";
import Avatar from '@mui/material/Avatar';
import Icon from "../../Images/favicon.png"


/** News page */
export default function Home() {
const [ news, setNews] = useState(JSON.parse(localStorage.getItem('news')))
const skeleton = Array.from(Array(10).keys())

  const { loading, error, data} = useQuery(GET_DETAILS,{
    onCompleted: ({getDetails}) => {
      localStorage.setItem('news', JSON.stringify(getDetails))
    },
    // pollInterval: 500,
    notifyOnNetworkStatusChange: true,

  });


  useEffect(() => {
    let news = JSON.parse(localStorage.getItem('news')) || data?.getDetails
    setNews(news)
  },[data?.getDetails])


  return (
    <div  className={"news_feed"} >


      <main>
        { news && 
         news.map((news, i) => (
           <div key={i} className={"news_item"}>
              <Post data={news}/>
           </div>
         ))
        }
        {  (loading || error) &&
           skeleton.map((i) => (
            <div key={i} style={{margin:'20px'}}>
               <Loading />
            </div>
           ))
          }
      </main>
    </div>   
  )
}




/** Post component */
const Post = ({data}) => {
  const {link,  headline, image,  ad, timeStamp } = data;

  return(
    <div>
      <div>
        {ad && <sup>Ad</sup>}
        <div className='action'>
          <Avatar alt="Remy Sharp" src={Icon} />
          <div>
            <p>TMUC</p>
            <p style={{fontSize:"xx-small"}}>@onlinenewsfeed</p>
          </div>
        </div>
        {image && 
            <img
              src={image}
              alt={headline}
              className={"image"}
              width={400}
              height={300}
              />
          }
      </div>
      <p className='headline'>{headline} </p>
      <p className='date'> { `${currentDate(timeStamp)}` }</p>
      <br/>
      <a className='meta' href={ link } style={{color:"blueviolet"}} >Read more ...</a>
    </div>
  )
}