import React  from 'react';
import './styles.scss';
import { currentDate } from "../../Utils/date";
import { useLocation} from 'react-router-dom';


/** Post component */
const Post = () => {
    
    const location = useLocation();
     const data = JSON.parse(localStorage.getItem('news'));

    let index = parseInt(location.pathname.slice(-1))
     const { headline, message, image,  timeStamp } = data[index];

    return(
      <div className='news-details'>
        <div>
          {image && 
              <img
                src={image}
                alt={headline}
                className={"image"}
                width={400}
                // height={300}
                />
            }
        </div>
        <p className='headline'>{headline} </p>
        <p className='date'> { `${currentDate(timeStamp)}` }</p>
        <br/>
        <p>{message}</p>
      </div>
    )
  }

export default Post;