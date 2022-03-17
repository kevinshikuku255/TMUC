import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';

function Elearning({theme}) {

   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on e-learning",
              transport:"beacon",
              label:"E-LEARNING",
            })
      }


   const clickHandler = () => {
     dispatch({
       type: "LOAD",
       payload: true
     })
     handleClick()
   }

  return (
    <div style={{backgroundColor:theme.background}} className="Elearning">
       <h4>e-learning</h4>
          <a className="E" onClick={clickHandler} href="https://elearning.tmuc.ac.ke/">e-learning</a>
    </div>
  )
}

export default Elearning;
