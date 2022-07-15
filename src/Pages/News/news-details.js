import React, { useEffect }  from 'react';
import './styles.scss';
import { currentDate } from "../../Utils/date";
import { useLocation } from 'react-router-dom';


/** Post component */
const Post = () => {
    
    const location = useLocation();
     const data = JSON.parse(localStorage.getItem('news'));

     let path = location.pathname
     let index = parseInt(path.substring(path.indexOf('s') + 1).replace('/', ''))



     const { headline, message, image,  timeStamp, images } = data[index];

    let imgs = images !== '' && images.split(',') 
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return(
      <div className='news-details'>
        <div>
          {!imgs && 
              <img
                src={image}
                alt={headline}
                className={"image"}
                />
            }
        </div>
        <p className='date'> { `${currentDate(timeStamp)}` }</p>
        <p className='headline'>{headline} </p>
        <br/>
        <p className='message'>{message}</p>
        {imgs && 
              imgs.map((image, i) => (
                <div key={i}><Image image ={`https://tmuc.ac.ke${image}`} /></div>
              ))
            }
      </div>
    )
  }

export default Post;


const Image = ({image}) => {
  return (
    <img
        src={image}
        alt='tmuc'
        className={"image"}
        // width={400}
      />
  )
}