import React   from 'react';
import { useQuery } from "react-query";
import './styles.scss';
import Loading from "../../Components/loading";


/** News page */
export default function Home() {
  const { isLoading, error, data:payload } = useQuery('news', () =>
    fetch('https://tmu-news-scrapper.herokuapp.com/').then( res =>
      res.json()
    )
  )




let skeleton = Array.from(Array(10).keys())


  return (
    <div  className={"news_feed"} >


      <main>

        { (isLoading || payload?.info.length === 0 || error) && 
           skeleton.map((i) => (
            <div key={i} style={{margin:'20px'}}>
               <Loading />
            </div>
           ))
          }

        { payload?.info.length > 0 &&  payload?.info.map((el, i) => (
            <div key={i} className={"news_item"}>
              <Post data={el}/>
            </div>
          ))}
      </main>
    </div>   
  )
}




/** Post component */
const Post = ({data}) => {
  const {link, ad_link, title, img,  ad } = data;

  return(
    <div>
      <div>
        {ad && <sup>Ad</sup>}
        {img && 
            <img
              src={`https://tmuc.ac.ke/${img}?w=${50}&q=${200}`}
              alt={title}
              className={"image"}
              width={400}
              height={250}
              />
          }
      </div>
      <p>{title} </p>
      <br/>
      <a href={ ad_link || `https://tmuc.ac.ke/${link}`} style={{color:"blueviolet"}} >Read more ...</a>
    </div>
  )
}