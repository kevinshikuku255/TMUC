import React, { useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { useLoadDispatch } from '../Context/loading';
import { useAuth0 } from '@auth0/auth0-react';

/** Menu  */
export default function AccountMenu({menu_on}) {
const {
    isAuthenticated
  } = useAuth0();
 const ref = useRef()
 const loadispatch = useLoadDispatch();
 const history = useHistory();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menu_on && ref.current && !ref.current.contains(e.target)) {
        loadispatch({type:"MENU", payload: false})
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menu_on, loadispatch])

  return (
        <>
        { menu_on &&
        <div className= "MenuWrapper" ref={ref} onClick={() => loadispatch({type:"MENU", payload: false})}>
           <div className="MenuItems">
              <p className="MenuItem" onClick={() => history.push("/Sotmuc")} >SOTMUC</p>
              <p className="MenuItem" onClick={() => history.push("/News")}>NEWS</p>
              <p className="MenuItem" onClick={() => history.push("/Cu")}>C.U.</p>
              <p className="MenuItem" onClick={() => history.push("/Football")}>FOOTBALL CLUB</p>
              {isAuthenticated && <p className="MenuItem" onClick={() => history.push("/CreatePost")}>PIN A POST</p>}
              {!isAuthenticated && <p className="MenuItem" onClick={() => history.push("/Login")}>LOGIN</p>}
           </div>
        </div>
        }
        </>


  );
}
